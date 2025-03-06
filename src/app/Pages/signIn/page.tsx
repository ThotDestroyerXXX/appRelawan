"use client";

import SignForm from "~/app/Components/signForm";
import Image from "next/image";
import chad from "~/app/Assets/chad.jpg";
import { useSignIn } from "../../api/SignIn/SignIn";
import { useState } from "react";
import AlertModal from "~/app/Components/signUpType";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const { handleSubmit, handleSignInGoogle, isPending, errors } = useSignIn();
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <div className="flex h-[calc(100vh-4rem)] w-full flex-col items-center gap-4 overflow-hidden bg-cream pt-5">
        <Image
          src={chad}
          alt="chad"
          className="h-11 w-11 rounded-full object-cover"
        />
        <h2 className="text-3xl font-bold">Sign In</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-3 rounded-lg border-[1px] border-black bg-sageGreen p-10 shadow-lg"
        >
          <SignForm
            label={["Email", "Password"]}
            type={["text", "password"]}
            placeholder={["Enter your email", "Enter your password"]}
            disabled={isPending}
            error={errors}
          />
          <div className="w-screen max-w-sm">
            <div className="flex flex-row items-center gap-2">
              <input
                type="checkbox"
                id="rememberMe"
                className="h-4 w-4"
                disabled={isPending}
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-700">
                remember me
              </label>
            </div>
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700 focus:outline-green-500 disabled:opacity-50"
          >
            Submit
          </button>
        </form>
        <button
          onClick={handleSignInGoogle}
          className="flex h-10 w-36 items-center justify-center gap-2 rounded-md bg-white text-center disabled:opacity-50"
          disabled={isPending}
        >
          <FcGoogle className="h-6 w-6" />
          google
        </button>
        <span>
          Belum ada akun?{" "}
          <button
            className="text-blue-500"
            data-modal-target="popup-modal"
            data-modal-toggle="popup-modal"
            type="button"
            onClick={() => setModalOpen(true)}
          >
            Sign up
          </button>
        </span>
        <AlertModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </div>
  );
};

export default SignIn;
