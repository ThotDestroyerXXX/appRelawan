import { sql } from "drizzle-orm";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { activity } from "~/server/db/schema";
export const activityRouter = createTRPCRouter({
  getActivityCount: publicProcedure.query(async ({ ctx }) => {
    const result = await ctx.db
      .select({ count: sql<number>`COUNT(*)` })
      .from(activity)
      .execute();

    const activityCount = result[0]?.count ?? 0;
    return activityCount;
  }),
});
