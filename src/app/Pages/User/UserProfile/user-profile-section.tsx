"use client";

import Link from "next/link";
import { useState } from "react";
import ChangeName from "~/app/api/profile/profile";
import { Button } from "~/app/Components/button";
import Loading from "~/app/Components/loading";
import { type Session } from "~/lib/auth";

export default function UserProfileSection({
  user,
}: Readonly<{ user: Session["user"] }>) {
  const [loading, setLoading] = useState(false);
  const { handleChangeName } = ChangeName(setLoading);
  return (
    <>
      {loading && <Loading />}
      <main className="flex min-h-screen flex-col gap-6 bg-[#F8EDE3] p-10">
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => handleChangeName(e, user.id)}
        >
          <input
            type="text"
            name="name"
            placeholder="Enter new username"
            className="rounded border p-2"
            defaultValue={user.name}
          />
          <Button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Change Username
          </Button>
        </form>
        <div>
          <h2 className="text-xl font-bold">User Profile</h2>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p className="flex flex-row flex-wrap gap-2">
            <strong>Email:</strong> {user.email}
            {!user.emailVerified && (
              <Link
                href={"/Pages/verify-email"}
                prefetch={true}
                shallow={true}
                className="text-blue-500 hover:underline"
              >
                Verify Email
              </Link>
            )}
          </p>
        </div>
        <Link
          href={"/Pages/User/UserProfile/change-password"}
          className="text-blue-500 hover:underline"
        >
          Change Password
        </Link>
      </main>
    </>
  );
}
