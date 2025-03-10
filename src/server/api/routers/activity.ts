import { count } from "drizzle-orm";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { activity } from "~/server/db/schema";
export const activityRouter = createTRPCRouter({
  getActivityCount: publicProcedure.query(async ({ ctx }) => {
    const result = await ctx.db
      .select({ count: count(activity.id) })
      .from(activity)
      .execute();

    const activityCount = result[0]?.count ?? 0;
    return activityCount;
  }),
});
