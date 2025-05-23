import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { auth } from "~/lib/auth";
import { headers } from "next/headers";
import Navbar from "./Components/navbar";
import { Toaster } from "./Components/ui/sonner";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Navbar session={session} />

        <TRPCReactProvider>
          {children}
          <Toaster richColors expand={true} visibleToasts={6} />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
