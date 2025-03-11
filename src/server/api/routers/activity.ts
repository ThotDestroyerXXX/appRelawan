import { count } from "drizzle-orm";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  activity,
  activityCategory,
  activityType,
  locationType,
} from "~/server/db/schema";
export const activityRouter = createTRPCRouter({
  getActivityCount: publicProcedure.query(async ({ ctx }) => {
    const result = await ctx.db
      .select({ count: count(activity.id) })
      .from(activity)
      .execute();

    const activityCount = result[0]?.count ?? 0;
    return activityCount;
  }),
  getActivityCategory: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.select().from(activityCategory).execute();
  }),
  getLocationType: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.select().from(locationType).execute();
  }),
  getActivityType: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.select().from(activityType).execute();
  }),
});
