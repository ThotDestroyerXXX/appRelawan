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
    const [isOpen, setIsOpen] = useState(false);

    const openProfile = () => {
        setIsOpen(!isOpen);
    };

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

            <div className="relative z-50">
                {session ? (
                    <div
                        className="flex items-center gap-3 hover:cursor-pointer"
                        onClick={openProfile}
                    >
                        <span className="text-lg font-semibold">{session.user?.name || "User"}</span>
                        {session.user?.image && (
                            <img
                                src={session.user.image}
                                alt="User Profile"
                                className="w-8 h-8 rounded-full"
                            />
                        )}
                    </div>
                ) : (
                    <Link href={pathname !== "/Pages/Auth/signIn" ? "/Pages/Auth/signIn" : ""}>
                        <button
                            className="rounded-md border-2 border-[#F8EDE3] pb-1 pl-3 pr-3 pt-1 text-white hover:bg-[#F8EDE3] hover:text-black"
                            onClick={() => setModalOpen(pathname === "/Pages/Auth/signIn")}
                        >
                            {pathname === "/Pages/Auth/signIn" ? "Sign Up" : "Sign In"}
                        </button>
                    </Link>
                )}

                <div
                    id="userPopup"
                    className={`absolute right-0 mt-2 w-48 bg-[#798777] shadow-md rounded-lg p-2 top-12 space-y-2 transform transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
                        }`}
                >
                    <p className="text-white">Profile</p>
                    <SignOutButton onSignOut={() => setIsOpen(false)} />
                </div>
            </div>

            <AlertModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default Navbar;
