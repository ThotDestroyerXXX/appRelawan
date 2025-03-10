// app/api/user/session/route.ts
import { NextResponse } from 'next/server';
import { headers } from "next/headers";
import { auth } from "~/lib/auth";

export async function GET() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (session) {
        return NextResponse.json({
            id: session.user?.id,
        });
    } else {
        return NextResponse.json({ isAuthenticated: false });
    }
}