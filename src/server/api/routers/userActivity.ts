import { eq } from "drizzle-orm";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { activity, userActivity, userActivityStatus } from "~/server/db/schema";
export const userActivityRouter = createTRPCRouter({
  getSelectionProcess: publicProcedure
    .input(
      z.object({
        user_id: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      return await ctx.db
        .select()
        .from(userActivity)
        .innerJoin(activity, eq(userActivity.activity_id, activity.id))
        .innerJoin(
          userActivityStatus,
          eq(userActivity.user_activity_status_id, userActivityStatus.id),
        )
        .where(eq(userActivity.user_id, input.user_id))
        .execute()
        .catch((err: string) => {
          console.log(err);
          throw new Error(err);
        });
    }),
});
