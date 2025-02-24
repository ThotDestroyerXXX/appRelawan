"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "~/lib/auth-client";

export const useSignUp = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const username = form.get("username") as string;
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    await authClient.signUp.email(
      {
        email: email,
        password: password,
        name: username,
      },
      {
        onRequest: () => {
          setIsPending(true);
        },
        onSuccess: () => {
          setIsPending(false);
          router.push("/");
          router.refresh();
        },
        onError: (e) => {
          setIsPending(false);
          setErrors(e.error.message);
        },
      },
    );
  };
  return { handleSubmit, isPending, errors };
};
