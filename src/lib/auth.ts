import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "~/server/db"; // your drizzle instance

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite"
  }),
  emailAndPassword: {
    enabled: true,
    },
    socialProviders: {
        //microsoft: {
        //    clientId: process.env.MICROSOFT_CLIENT_ID as string,
        //    clientSecret: process.env.MICROSOFT_CLIENT_SECRET as string,
        //    requireSelectAccount: true
        //},

        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
});

export type Session = typeof auth.$Infer.Session;
