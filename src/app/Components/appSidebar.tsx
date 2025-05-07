import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/app/Components/sidebar";
import { FaHome, FaPeopleCarry } from "react-icons/fa";
import { GrOrganization } from "react-icons/gr";
import { MdAddBox, MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { type Session } from "~/lib/auth";
import chad from "~/app/Assets/chad.jpg";
import Image from "next/image";

const items = [
  { title: "Home", url: "/", icon: <FaHome /> },
  {
    title: "Cari Aktivitas",
    url: "/Pages/SearchActivity",
    icon: <FaPeopleCarry />,
  },
  {
    title: "Cari Organisasi",
    url: "/Pages/SearchOrganization",
    icon: <GrOrganization />,
  },
  {
    title: "About Us",
    url: "/Pages/AboutUs",
    icon: <IoMdInformationCircleOutline />,
  },
];

const organizationMenu = [
  {
    title: "Buat Aktivitas",
    url: "/Pages/Organization/CreateActivity",
    icon: <MdAddBox />,
  },
  {
    title: "Dashboard Organisasi",
    url: "/Pages/Organization/Dashboard",
    icon: <MdDashboard />,
  },
];

const userMenu = [
  {
    title: "Profile",
    url: "/Pages/User/UserProfile",
    icon: <CgProfile />,
  },
  {
    title: "Dashboard Relawan",
    url: "/Pages/User/Dashboard",
    icon: <MdDashboard />,
  },
];

export function AppSidebar({ session }: { readonly session: Session | null }) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarHeader>App Relawan</SidebarHeader>
        <hr className="h-[2px] bg-white" />
        {session && (
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-15 w-full">
                  <div className="h-15 flex w-full flex-row items-center gap-2">
                    <Image
                      src={session.user.image ?? chad}
                      alt="tes"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <span>{session.user.name}</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {session.user.organization_id
                ? organizationMenu.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link href={item.url} shallow={true} prefetch={true}>
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))
                : userMenu.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link href={item.url} shallow={true} prefetch={true}>
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
            </SidebarMenu>
          </SidebarGroup>
        )}
        <hr className="h-[2px] rounded-full bg-white" />
        <SidebarGroup>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.url} shallow={true} prefetch={true}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
