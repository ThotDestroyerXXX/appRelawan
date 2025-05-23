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
          router.push("/");
          router.refresh();
          setIsPending(false);
        },
        onError: (e) => {
          setIsPending(false);
          setErrors(e.error.message);
        },
      },
    );
  };

  const handleSignInGoogle = async () => {
    await authClient.signIn.social({
      /**
       * The social provider id
       * @example "github", "google", "apple"
       */
      provider: "google",
      fetchOptions: {
        onRequest: () => {
          setIsPending(true);
        },
        onSuccess: () => {
          setIsPending(false);
        },
        onError: (e) => {
          setIsPending(false);
          setErrors(e.error.message);
        },
      },
      /**
       * a url to redirect after the user authenticates with the provider
       * @default "/"
       */
      callbackURL: "/",
      /**
       * a url to redirect if an error occurs during the sign in process
       */
      errorCallbackURL: "/error",
      /**
       * a url to redirect if the user is newly registered
       */
      newUserCallbackURL: "/",
      /**
       * disable the automatic redirect to the provider.
       * @default false
       */
    });
  };
  return { handleSubmit, handleSignInGoogle, isPending, errors };
};
