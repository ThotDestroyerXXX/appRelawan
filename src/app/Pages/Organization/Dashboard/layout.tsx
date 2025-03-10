import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "~/lib/auth";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user.organization_id) {
    redirect("/Pages/User/Dashboard");
  }
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
