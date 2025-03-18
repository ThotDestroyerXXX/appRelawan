"use client";

import Image from "next/image";
import chad from "../Assets/chad.jpg";
import Link from "next/link";
import { type Session } from "~/lib/auth";
import SignOutButton from "./signOutButton";
import { usePathname } from "next/navigation";
import AlertModal from "./signUpType";
import { useState } from "react";
import { SidebarTrigger, SidebarProvider } from "./sidebar";
import { AppSidebar } from "./appSidebar";

const Navbar = ({ session }: { session: Session | null }) => {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <SidebarProvider>
      <AppSidebar session={session} />
      <div className="z-10 flex h-14 w-full items-center justify-between bg-[#798777] pb-2 pl-5 pr-5 pt-2 text-white shadow-lg">
        <div className="z-10 flex items-center gap-5">
          <SidebarTrigger />
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
            <SignOutButton />
          ) : (
            <Link
              href={
                pathname != "/Pages/Auth/signIn" ? "/Pages/Auth/signIn" : ""
              }
            >
              <button
                className="rounded-md border-2 border-[#F8EDE3] pb-1 pl-3 pr-3 pt-1 text-white hover:bg-[#F8EDE3] hover:text-black"
                data-modal-target={`${pathname == "/Pages/Auth/signIn" ? "popup-modal" : ""}`}
                data-modal-toggle={`${pathname == "/Pages/Auth/signIn" ? "popup-modal" : ""}`}
                type="button"
                onClick={() => {
                  if (pathname == "/Pages/Auth/signIn") {
                    setModalOpen(true);
                  } else {
                    setModalOpen(false);
                  }
                }}
              >
                {pathname == "/Pages/Auth/signIn" ? "Sign Up" : "Sign In"}
              </button>
            </Link>
          )}
        </div>
        <AlertModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </SidebarProvider>
  );
};

export default Navbar;
