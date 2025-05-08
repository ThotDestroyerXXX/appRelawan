"use client";
import { useRouter } from "next/navigation";
import { authClient } from "~/lib/auth-client";
import { useState } from "react";
import Loading from "./loading";
import { Button } from "./button";

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
    <>
      {isPending && <Loading />}
      <Button
        onClick={() => handleSignOut()}
        disabled={isPending}
        className="rounded-md border-2 border-[#F8EDE3] bg-transparent pb-1 pl-3 pr-3 pt-1 text-white hover:bg-[#F8EDE3] hover:text-black"
      >
        Sign Out
      </Button>
    </>
  );
};

export default SignOutButton;
