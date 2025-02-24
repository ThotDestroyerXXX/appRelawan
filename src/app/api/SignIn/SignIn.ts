"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "~/lib/auth-client";

export const useSignIn = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    await authClient.signIn.email(
      {
        email: email,
        password: password,
      },
      {
        onRequest: () => {
          setIsPending(true);
        },
        onSuccess: () => {
          setIsPending(false);
          router.push("/");
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
