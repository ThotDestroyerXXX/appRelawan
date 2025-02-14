"use client";

import Image from "next/image";
import chad from "../Assets/chad.jpg";
import Link from "next/link";
import { type Session } from "~/lib/auth";
import SignOutButton from "./signOutButton";
import { usePathname } from "next/navigation"

const Navbar = ({ session }: { session: Session | null }) => {
    var pathname = usePathname();
  return (
    <div className="flex h-16 w-full items-center justify-between border-b-2 border-black bg-sageGreen pb-2 pl-10 pr-10 pt-2 text-black">
      <div>
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
        <Link href="/Pages/signIn">
          <button className="rounded-md pb-2 pl-4 pr-4 pt-2">sign In</button>
        </Link>
        <Link href="/Pages/signUp">
          <button className="rounded-md pb-2 pl-4 pr-4 pt-2">sign Up</button>
        </Link>
      </div>
      <div>
        {session ? (
          <SignOutButton />
        ) : (
          <button className="rounded-md bg-green-600 pb-2 pl-4 pr-4 pt-2 text-white" onClick={() => (pathname == "/Pages/signIn" ? window.location.href = "/Pages/signUp" : window.location.href = "/Pages/signIn") }>
            {pathname == "/Pages/signIn" ? 'Sign Up' : 'Sign In'}
          </button>
        )}
      </div>
    </div>
  );
};
export default Navbar;
