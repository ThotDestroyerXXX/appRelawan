// VerifyButton.tsx
"use client";

import { Button } from "~/app/Components/button";
import { sendVerificationEmail } from "~/app/api/send-email/send-email";

export default function VerifyButton({ email }: Readonly<{ email: string }>) {
  const { handleClick } = sendVerificationEmail();

  return (
    <Button
      variant={"link"}
      onClick={() => {
        handleClick(email).catch((error) => {
          console.error("Error sending verification email:", error);
          alert("Failed to send verification email. Please try again later.");
        });
      }}
    >
      Here
    </Button>
  );
}
