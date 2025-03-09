"use client";

import { useState, useEffect } from "react";
import { api } from "~/trpc/react"; // Sesuaikan dengan path Anda
import { type Session } from "~/lib/auth";
import { authClient } from "~/lib/auth-client";
import { useSearchParams } from "next/navigation";

const UserProfile = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const [newPassword, setNewUsername] = useState("");
    const [session, setSession] = useState(null);

    useEffect(() => {
        async function fetchSession() {
            const response = await fetch("/api/user/session");
            const data = await response.json();
            setSession(data);
            console.log(data);
        }
        fetchSession();
    }, []);

    const updatePassword = api.user.updatePassword.useMutation();

    const handleChangeUsername = () => {
        console.log("Testing" + token);
        if (session && newPassword) {
            updatePassword.mutate({ id: session.id, newPass: newPassword });
            setNewUsername(""); 
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <input
                type="text"
                value={newPassword}
                onChange={(e) => setNewUsername(e.target.value)}
                placeholder="Enter new password"
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