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

    getUserById: publicProcedure.input(z.object({ id: z.string() })).query(async ({ ctx, input }) => {
        const existUser = await ctx.db.query.user.findFirst({
            where: (users, { eq }) => eq(users.id, input.id),
        });
        return existUser;
    })

});
