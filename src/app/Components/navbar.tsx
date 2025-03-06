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
    <div className="z-10 flex h-14 w-full items-center justify-between border-b-2 border-black bg-[#798777] pb-2 pl-10 pr-10 pt-2 text-white">
      <div className="z-10 flex items-center gap-3">
        <Image
          src={chad}
          alt="chad"
          className="h-11 w-11 rounded-full object-cover"
        />
      </div>
      <div className="z-10 flex gap-6">
        <Link href="/">
          <button className="rounded-md pb-2 pl-4 pr-4 pt-2 text-xl font-bold">
            ImpactHub
          </button>
        </Link>
      </div>
      <div className="z-10 flex items-center gap-4">
        {session ? (
          <>
            <span className="text-lg font-semibold">
              hai, {session.user?.name || "User"}
            </span>
            <SignOutButton />
          </>
        ) : (
          <Link href={pathname != "/Pages/signIn" ? "/Pages/signIn" : ""}>
            <button
              className="rounded-md border-2 border-[#F8EDE3] pb-1 pl-3 pr-3 pt-1 text-white hover:bg-[#F8EDE3] hover:text-black"
              data-modal-target={`${pathname == "/Pages/signIn" ? "popup-modal" : ""}`}
              data-modal-toggle={`${pathname == "/Pages/signIn" ? "popup-modal" : ""}`}
              type="button"
              onClick={() => {
                if (pathname == "/Pages/signIn") {
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
