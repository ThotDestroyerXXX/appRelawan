"use client";

import { useState, useEffect } from "react";
import { api } from "~/trpc/react"; // Sesuaikan dengan path Anda
import { type Session } from "~/lib/auth";

const UserProfile = () => {
    const [newUsername, setNewUsername] = useState("");
    const [session, setSession] = useState(null);
    useEffect(() => {
        async function fetchSession() {
            const response = await fetch("/api/user/session");
            const data = await response.json();
            setSession(data);
        }
        fetchSession();
    }, []);

    const updateUserName = api.user.updateUser.useMutation();

    const handleChangeUsername = () => {
        console.log(session);
        if (session && newUsername) {
            updateUserName.mutate({ id: session.id, newName: newUsername });
            setNewUsername(""); 
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                placeholder="Enter new username"
                className="rounded border p-2"
            />
            <button
                className="rounded bg-blue-500 px-4 py-2 text-white"
                onClick={handleChangeUsername}
            >
                Change Username
            </button>
        </div>
    );
};

export default UserProfile;