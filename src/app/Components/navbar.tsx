"use client"

import Image from "next/image"
import chad from "../Assets/chad.jpg"
import Link from "next/link"
import type { Session } from "~/lib/auth"
import SignOutButton from "./signOutButton"
import { usePathname } from "next/navigation"
import AlertModal from "./signUpType"
import { useState } from "react"
import { Search, Menu } from "lucide-react"
import { SidebarTrigger, SidebarProvider } from "./sidebar"
import { AppSidebar } from "./appSidebar"

const Navbar = ({ session }: { session: Session | null }) => {
  const pathname = usePathname()
  const [modalOpen, setModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <SidebarProvider>
      <AppSidebar session={session} />
      <div className="relative z-10 flex h-14 w-full items-center bg-[#798777] px-5 text-white shadow-lg">

        {/* sidebar + logo + avatar r*/}
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <Image
            src={chad || "/placeholder.svg"}
            alt="chad"
            className="h-11 w-11 rounded-full object-cover"
          />
          <Link href="/" shallow prefetch>
            <button className="rounded-md px-4 py-2 text-xl font-bold hover:bg-[#6a7568] transition-colors">
              ImpactHub
            </button>
          </Link>
        </div>

        {/* search bar gw buat center */}
        <div className="absolute left-1/2 -translate-x-1/2 transform w-full max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border-0 bg-white px-4 pr-10 py-1.5 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <button className="text-white hover:bg-[#6a7568] p-2 rounded transition-colors">
            <Menu className="h-5 w-5" />
          </button>

          {session ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-200 hidden lg:block">
                {session.user?.name || session.user?.email}
              </span>
              <SignOutButton />
            </div>
          ) : (
            <Link href={pathname !== "/Pages/Auth/signIn" ? "/Pages/Auth/signIn" : ""} shallow prefetch>
              <button
                className="rounded-md border-2 border-[#F8EDE3] px-3 py-1 text-white hover:bg-[#F8EDE3] hover:text-black transition-colors"
                type="button"
                onClick={() => setModalOpen(pathname === "/Pages/Auth/signIn")}
              >
                {pathname === "/Pages/Auth/signIn" ? "Sign Up" : "Sign In"}
              </button>
            </Link>
          )}
        </div>

        <AlertModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </SidebarProvider>
  )
}

export default Navbar
