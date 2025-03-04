"use client";

import Image from "next/image";
import chad from "../Assets/chad.jpg";
import Link from "next/link";
import { type Session } from "~/lib/auth";
import SignOutButton from "./signOutButton";
import { usePathname } from "next/navigation";

const Navbar = ({ session }: { session: Session | null }) => {
    const pathname = usePathname();
    return (
        <div className="flex h-16 w-full items-center justify-between border-b-2 border-black bg-sageGreen pb-2 pl-10 pr-10 pt-2 text-black">
            <div className="flex items-center gap-3">
                <Image
                    src={chad}
                    alt="chad"
                    className="h-11 w-11 rounded-full object-cover"
                />
                {session && (
                    <span className="font-semibold text-lg">
                        {session.user?.name || "User"}
                    </span>
                )}
            </div>
            <div className="flex gap-6">
                <Link href="/">
                    <button className="rounded-md pb-2 pl-4 pr-4 pt-2">Home</button>
                </Link>
                {!session && (
                    <>
                        <Link href="/Pages/signIn">
                            <button className="rounded-md pb-2 pl-4 pr-4 pt-2">Sign In</button>
                        </Link>
                        <Link href="/Pages/signUp">
                            <button className="rounded-md pb-2 pl-4 pr-4 pt-2">Sign Up</button>
                        </Link>
                    </>
                )}
            </div>
            <div>
                {session ? (
                    <SignOutButton />
                ) : (
                    <Link
                        href={
                            pathname == "/Pages/signIn" ? "/Pages/signUp" : "/Pages/signIn"
                        }
                    >
                        <button className="rounded-md bg-green-600 pb-2 pl-4 pr-4 pt-2 text-white">
                            {pathname == "/Pages/signIn" ? "Sign Up" : "Sign In"}
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};
export default Navbar;
