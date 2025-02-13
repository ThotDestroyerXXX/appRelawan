"use client";

import Image from "next/image";
import chad from "../Assets/chad.jpg";
import Link from "next/link";
import SignOutButton from "./signOutButton";
import { type Session } from "~/lib/auth";

const Navbar = ({ session }: { session: Session | null }) => {
  return (
    <div className="flex w-full items-center justify-between border-b-2 border-black bg-white pb-2 pl-10 pr-10 pt-2 text-black">
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
          <Link href="/Pages/signIn">
            <button className="rounded-md bg-green-600 pb-2 pl-4 pr-4 pt-2 text-white">
              sign In
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;
