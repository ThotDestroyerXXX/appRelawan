"use client";

import Navbar from "~/app/Components/navbar";
import SignForm from "~/app/Components/signForm";
import Image from "next/image";
import chad from "~/app/Assets/chad.jpg";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUp = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<string | null>(null);

  const { mutate, isPending } = api.user.signUp.useMutation({
    onSuccess() {
      router.push("/signIn");
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
    const username = form.get("Username") as string;
    const email = form.get("Email") as string;
    const password = form.get("Password") as string;

    mutate({
      username,
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
        <h2 className="text-3xl font-bold">Sign Up for Free</h2>
        <SignForm
          label={["Username", "Email", "Password"]}
          type={["text", "text", "password"]}
          placeholder={[
            "Enter your username",
            "Enter your email",
            "Enter your password",
          ]}
          disabled={isPending}
          onSubmit={() => handleSubmit}
          error={errors}
        />
      </div>
    </div>
  );
};

export default SignUp;
