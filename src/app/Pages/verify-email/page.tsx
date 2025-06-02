import { HydrateClient } from "~/trpc/server";
import VerifyEmailSection from "./verify-email-section";
import { auth } from "~/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import transporter from "~/lib/nodemailer";

export default async function VerifyEmailPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  await transporter.verify();

  if (!session) {
    redirect("/Pages/Auth/signIn");
  } else if (session.user.emailVerified) {
    redirect("/Pages/User/UserProfile");
  }

  await auth.api.sendVerificationEmail({
    body: {
      email: session.user.email,
    },
  });

  return (
    <HydrateClient>
      <VerifyEmailSection />
    </HydrateClient>
  );
}
