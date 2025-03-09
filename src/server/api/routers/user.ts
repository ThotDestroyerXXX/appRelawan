import { eq, sql } from "drizzle-orm";
import { createTRPCRouter, publicProcedure, t } from "~/server/api/trpc";
import { user } from "~/server/db/schema";
import { z } from "zod";

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

        return 0; // atau kembalikan pesan sukses
    }),
});
