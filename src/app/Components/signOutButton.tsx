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
    <button onClick={handleSignOut} disabled={isPending}>
      Sign Out
    </button>
  );
};

export default SignOutButton;
