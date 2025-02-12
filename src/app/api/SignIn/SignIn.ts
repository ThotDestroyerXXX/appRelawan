"use client";

import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { type NextRequest } from "next/server";

import { env } from "~/env";
import { appRouter } from "~/server/api/root";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useSignIn = () => {
    const router = useRouter();
    const [errors, setErrors] = useState<string | null>(null);

    const { mutate, isPending } = api.user.signIn.useMutation({
        onSuccess() {
            router.push("/");
        },
        onError(error) {
            if (error.message) {
                setErrors(error.message);
            }

            const fieldErrors = error.data?.zodError?.fieldErrors;
            if (fieldErrors && Object.keys(fieldErrors).length > 0) {
                const firstKey = Object.keys(fieldErrors)[0]!;
                setErrors(fieldErrors[firstKey]?.[0] ?? null);
            }
        },
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email") as string;
        const password = form.get("password") as string;

        mutate({
            email,
            password,
        });
    };
    return { handleSubmit, isPending, errors };
};