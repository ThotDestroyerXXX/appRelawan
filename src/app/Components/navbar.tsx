"use client";

import Image from "next/image";
import chad from "../Assets/chad.jpg";
import Link from "next/link";
import { type Session } from "~/lib/auth";
import SignOutButton from "./signOutButton";
import { usePathname } from "next/navigation";
import AlertModal from "./signUpType";
import { useState } from "react";

const Navbar = ({ session }: { session: Session | null }) => {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex h-16 w-full items-center justify-between border-b-2 border-black bg-sageGreen pb-2 pl-10 pr-10 pt-2 text-black">
      <div className="flex items-center gap-3">
        <Image
          src={chad}
          alt="chad"
          className="h-11 w-11 rounded-full object-cover"
        />
      </div>
      <div className="flex gap-6">
        <Link href="/">
          <button className="rounded-md pb-2 pl-4 pr-4 pt-2">Home</button>
        </Link>
        {!session && (
          <>
            <Link href="/Pages/signIn">
              <button className="rounded-md pb-2 pl-4 pr-4 pt-2">
                Sign In
              </button>
            </Link>
            <Link href="/Pages/signUp">
              <button className="rounded-md pb-2 pl-4 pr-4 pt-2">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
      <div className="flex items-center gap-4">
        {session ? (
          <>
            <span className="text-lg font-semibold">
              hai, {session.user?.name || "User"}
            </span>
            <SignOutButton />
          </>
        ) : (
          <Link href={pathname == "/Pages/signUp" ? "/Pages/signIn" : ""}>
            <button
              className="rounded-md bg-green-600 pb-2 pl-4 pr-4 pt-2 text-white"
              data-modal-target={`${pathname != "/Pages/signUp" ? "popup-modal" : ""}`}
              data-modal-toggle={`${pathname != "/Pages/signUp" ? "popup-modal" : ""}`}
              type="button"
              onClick={() => {
                if (pathname != "/Pages/signUp") {
                  setModalOpen(true);
                } else {
                  setModalOpen(false);
                }
              }}
            >
              {pathname == "/Pages/signIn" ? "Sign Up" : "Sign In"}
            </button>
          </Link>
        )}
      </div>
      <AlertModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};
export default Navbar;
