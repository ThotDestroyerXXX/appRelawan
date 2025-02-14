"use client";
import SignForm from "~/app/Components/signForm";
import Image from "next/image";
import chad from "~/app/Assets/chad.jpg";
import { useSignUp } from "../../api/SignUp/SignUp";

const SignUp = () => {
  const { handleSubmit, isPending, errors } = useSignUp();
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4 pt-5">
        <Image
          src={chad}
          alt="chad"
          className="h-11 w-11 rounded-full object-cover"
        />
        <h2 className="text-3xl font-bold">Sign Up for Free</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-3 rounded-lg border-[1px] border-black p-14 shadow-lg"
        >
          <SignForm
            label={["Username", "Email", "Password"]}
            type={["text", "text", "password"]}
            placeholder={[
              "Enter your username",
              "Enter your email",
              "Enter your password",
            ]}
            disabled={isPending}
            error={errors}
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
