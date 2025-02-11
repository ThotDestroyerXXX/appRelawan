"use client";

import Navbar from "~/app/Components/navbar";
import SignForm from "~/app/Components/signForm";
import Image from "next/image";
import chad from "~/app/Assets/chad.jpg";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "~/trpc/react";

const SignIn = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<string | null>(null);

  const { mutate, isPending } = api.user.signIn.useMutation({
    onSuccess() {
      router.push("/");
    },
    onError(error) {
      if (error.message) {
        setErrors(error.message);
      }

      const fieldErrors = error.data?.zodError?.fieldErrors;
      if (fieldErrors && Object.keys(fieldErrors).length > 0) {
        const firstKey = Object.keys(fieldErrors)[0]!;
        setErrors(fieldErrors[firstKey]?.[0] ?? null);
      }
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    mutate({
      email,
      password,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <div className="flex flex-col items-center gap-4 pt-5">
        <Image
          src={chad}
          alt="chad"
          className="h-11 w-11 rounded-full object-cover"
        />
        <h2 className="text-3xl font-bold">Sign In</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-3 rounded-lg border-[1px] border-black p-14 shadow-lg"
        >
          <SignForm
            label={["Email", "Password"]}
            type={["text", "password"]}
            placeholder={["Enter your email", "Enter your password"]}
            disabled={isPending}
            error={errors}
          />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
