import { type Session } from "~/lib/auth";
// import VerifyButton from "./verify-button";

export default function VerifyEmailSection({
  user,
}: Readonly<{
  user: Session["user"];
}>) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Verify Your Email</h1>
      <p className="text-gray-600">
        {/* Click <VerifyButton email={user.email} /> to verify your email. Please */}
        check your email for a verification link. If you haven&apos;t received
        it, refresh the page
      </p>
    </div>
  );
}
