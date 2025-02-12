"use client";

import Navbar from "~/app/Components/navbar";
import SignForm from "~/app/Components/signForm";
import Image from "next/image";
import chad from "~/app/Assets/chad.jpg";
import { useSignIn } from "../../api/SignIn/SignIn";

const SignIn = () => {
  const { handleSubmit, isPending, errors } = useSignIn();
  return (
      <div className="flex flex-col items-center justify-center overflow-hidden">
          <Navbar type={true} />
          <div className="flex flex-col items-center gap-4 pt-5 bg-cream w-full h-[calc(100vh-4rem)] overflow-hidden">
        <Image
          src={chad}
          alt="chad"
          className="h-11 w-11 rounded-full object-cover"
        />
        <h2 className="text-3xl font-bold">Sign In</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-3 rounded-lg border-[1px] border-black p-14 shadow-lg bg-sageGreen"
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
