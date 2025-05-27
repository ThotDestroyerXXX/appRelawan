import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { sendEmail } from "~/app/api/send-email/send-email";
import { db } from "~/server/db"; // your drizzle instance

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite"
  }),
  emailAndPassword: {
    enabled: true,
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, request) => {
      await sendEmail({
        to: user.email,
        subject: "Verify your email address",
        text: `Click the link to verify your email: <a href="${url}">Click here</a>`,
      });
    },
  },

  socialProviders: {
    //microsoft: {
    //    clientId: process.env.MICROSOFT_CLIENT_ID as string,
    //    clientSecret: process.env.MICROSOFT_CLIENT_SECRET as string,
    //    requireSelectAccount: true
    //},

    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  user: {
    additionalFields: {
      organization_id: {
        type: "string",
        required: false,
        references: {
          model: "organization",
          field: "id",
        },
      },
    },
  },
});

export type Session = typeof auth.$Infer.Session;
