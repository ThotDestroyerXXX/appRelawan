"use client";

import Navbar from "~/app/Components/navbar";
import SignForm from "~/app/Components/signForm";
import Image from "next/image";
import chad from "~/app/Assets/chad.jpg";
import { useSignUp } from "../../api/SignUp/SignUp";

const SignUp = () => {
<<<<<<< HEAD
  const { handleSubmit, isPending, errors } = useSignUp();
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
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
=======
    const { handleSubmit, isPending, errors } = useSignUp();
    return (
        <div className="flex flex-col items-center justify-center overflow-hidden">
            <Navbar type={false} />
            <div className="flex flex-col items-center gap-4 pt-5 bg-cream w-full h-[calc(100vh-4rem)] overflow-hidden">
                <Image
                    src={chad}
                    alt="chad"
                    className="h-11 w-11 rounded-full object-cover"
                />
                <h2 className="text-3xl font-bold">Sign Up for Free</h2>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center gap-3 rounded-lg border-[1px] border-black p-14 shadow-lg bg-sageGreen"
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
>>>>>>> ecc4a4a4a55f25bfe6baaffb606a7a4ccd206f32
};

export default SignUp;
