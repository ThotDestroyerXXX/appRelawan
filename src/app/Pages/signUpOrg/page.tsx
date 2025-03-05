"use client";
import Image from "next/image";
import { useSignUp } from "~/app/api/SignUp/SignUp";
import chad from "~/app/Assets/chad.jpg";
import SignForm from "~/app/Components/signForm";

const SignUpOrg = () => {
  const { handleSubmit, isPending, errors } = useSignUp();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center gap-4 bg-cream pb-5 pt-5">
        <Image
          src={chad}
          alt="chad"
          className="h-11 w-11 rounded-full object-cover"
        />
        <h2 className="text-3xl font-bold">Sign Up for Free</h2>
        <form
          onSubmit={() => handleSubmit}
          className="flex flex-col items-center gap-3 rounded-lg border-[1px] border-black bg-sageGreen p-10 shadow-lg"
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
          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700 focus:outline-green-500 disabled:opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpOrg;
