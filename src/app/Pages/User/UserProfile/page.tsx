import { HydrateClient } from "~/trpc/server";
import UserProfileSection from "./user-profile-section";
import { auth } from "~/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const UserProfile = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/Pages/Auth/signIn");
  }

  return (
    <HydrateClient>
      <UserProfileSection user={session.user} />
    </HydrateClient>
  );
};

export default UserProfile;
