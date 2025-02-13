"use client";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useSignUp = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<string | null>(null);

  const { mutate, isPending } = api.user.signUp.useMutation({
    onSuccess() {
      router.push("/Pages/signIn");
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
    const username = form.get("username") as string;
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    mutate({
      username,
      email,
      password,
    });
  };
  return { handleSubmit, isPending, errors };
};
