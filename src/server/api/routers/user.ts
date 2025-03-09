import { eq, sql } from "drizzle-orm";
import { createTRPCRouter, publicProcedure, t } from "~/server/api/trpc";
import { user, account } from "~/server/db/schema";
import { z } from "zod";
import { authClient } from "~/lib/auth-client";
import { auth } from "../../../lib/auth";

export const userRouter = createTRPCRouter({
  getUserCount: publicProcedure.query(async ({ ctx }) => {
    const result = await ctx.db
      .select({ count: sql<number>`COUNT(*)` })
      .from(user)
      .execute();

    const userCount = result[0]?.count ?? 0;
    return userCount;
  }),

    updateUser: publicProcedure.input(z.object({ id: z.string(), newName: z.string() })).mutation(async ({ ctx, input }) => {
        const existUser = await ctx.db.query.user.findFirst({
            where: (users, { eq }) => eq(users.id, input.id),
        });

        if (existUser == null) {
            throw new Error("User Invalid");
        } else {
            await ctx.db
                .update(user)
                .set({ name: input.newName })
                .where(eq(user.id, input.id));
        }

        return { message: "Username Changed" };
    }),

    updatePassword: publicProcedure.input(z.object({ id: z.string(), newPass: z.string() })).mutation(async ({ ctx, input }) => {
        const existUser = await ctx.db.query.account.findFirst({
            where: (x, { eq }) => eq(x.accountId, input.id),
        })

        const cts = await auth.$context;
        const hash = await cts.password.hash(input.newPass);

        if (existUser == null) {
            throw new Error("User Invalid");
        } else {
            await ctx.db
                .update(account)
                .set({ password: hash })
                .where(eq(account.accountId, input.id));
        }

        return { message: "Password has been changed"};
    }),
});
