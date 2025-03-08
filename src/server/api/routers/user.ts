import { sql } from "drizzle-orm";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { user } from "~/server/db/schema";
export const userRouter = createTRPCRouter({
  getUserCount: publicProcedure.query(async ({ ctx }) => {
    const result = await ctx.db
      .select({ count: sql<number>`COUNT(*)` })
      .from(user)
      .execute();

    const userCount = result[0]?.count ?? 0;
    return userCount;
  }),
});
