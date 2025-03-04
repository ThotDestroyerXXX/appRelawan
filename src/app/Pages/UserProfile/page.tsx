"use client";

import { useState } from "react";

const UserProfile = () => {
  const [newUsername, setNewUsername] = useState("");

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
        placeholder="Enter new username"
        className="rounded border p-2"
      />
      <button className="rounded bg-blue-500 px-4 py-2 text-white">
        Change Username
      </button>
    </div>
  );
};

export default UserProfile;
