import { HydrateClient } from "~/trpc/server";
import ChangePasswordSection from "./change-password-section";
import { auth } from "~/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/Pages/Auth/signIn");
  }

  return (
    <HydrateClient>
      <ChangePasswordSection user={session.user} />
    </HydrateClient>
  );
}
