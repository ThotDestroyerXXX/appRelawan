"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import { authClient } from "~/lib/auth-client";

const UserProfile = async () => {
    const { data: session } = authClient.useSession();
    const [newUsername, setNewUsername] = useState("");
    const [message, setMessage] = useState("");

    const changeUsername = api.changeUsername.changeUsername.useMutation({
        onSuccess: (data) => setMessage(data.message),
        onError: (error) => setMessage(error.message),
    });

    const handleChangeUsername = () => {
        if (!session?.user?.id) {
            setMessage("You must be logged in");
            return;
        }

        changeUsername.mutate({ userId: session.user.id, newUsername });
    };

    return (
        <div className="flex flex-col gap-2">
            <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                placeholder="Enter new username"
                className="border p-2 rounded"
            />
            <button onClick={handleChangeUsername} className="bg-blue-500 text-white px-4 py-2 rounded">
                Change Username
            </button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default UserProfile;
