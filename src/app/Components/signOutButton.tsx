"use client";
import { useRouter } from "next/navigation";
import { authClient } from "~/lib/auth-client";
import { useState } from "react";

const SignOutButton = () => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      setIsPending(true);
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/Pages/Auth/signIn");
            router.refresh();
          },
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsPending(false);
    }
  };
  return (
    <button
      className="rounded-md bg-green-600 pb-2 pl-4 pr-4 pt-2 text-white"
      onClick={handleSignOut}
      disabled={isPending}
    >
      sign Out
    </button>
  );
};

export default SignOutButton;
