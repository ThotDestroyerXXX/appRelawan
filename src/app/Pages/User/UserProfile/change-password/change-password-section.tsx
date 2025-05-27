"use client";
import { useState } from "react";
import ChangePassword from "~/app/api/change-password/change-password";
import { Button } from "~/app/Components/button";
import Loading from "~/app/Components/loading";
import { type Session } from "~/lib/auth";

export default function ChangePasswordSection({
  user,
}: Readonly<{
  user: Session["user"];
}>) {
  const [loading, setLoading] = useState(false);
  const { handleChangePassword } = ChangePassword(setLoading);
  return (
    <main className="flex min-h-screen flex-col gap-6 bg-[#F8EDE3]">
      {loading && <Loading />}
      <div className="flex min-h-screen flex-col gap-6 bg-[#F8EDE3] p-10">
        <h1 className="text-2xl font-bold">Change Password</h1>
        <p className="text-gray-600">Please enter your new password below.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const currentPassword = formData.get("password") as string;
            const newPassword = formData.get("new-password") as string;
            handleChangePassword(currentPassword, newPassword, user.id);
          }}
        >
          <div className="flex w-full max-w-md flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              placeholder="Enter old password"
              className="rounded border p-2"
              name="password"
            />
          </div>
          <div className="mt-4 flex w-full max-w-md flex-col">
            <label htmlFor="new-password">New Password</label>
            <input
              type="text"
              className="rounded border p-2"
              placeholder="Enter new password"
              name="new-password"
            />
          </div>
          <Button variant={"default"} className="mt-4">
            Submit
          </Button>
        </form>
      </div>
    </main>
  );
}
