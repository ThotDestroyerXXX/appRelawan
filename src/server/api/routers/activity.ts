import { count, eq, avg, desc } from "drizzle-orm";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
    activity,
    activityDetail,
    organization,
    organizationRatingReview
} from "~/server/db/schema";
export const activityRouter = createTRPCRouter({
  getActivityCount: publicProcedure.query(async ({ ctx }) => {
    const result = await ctx.db
      .select({ count: count(activity.id) })
      .from(activity)
      .execute();

    return result[0]?.count ?? 0;
  }),

    getListActivity: publicProcedure.query(async ({ ctx }) => {

        const result = await ctx.db
            .select({
                id: activity.id,
                name: activity.name,
                desc: activityDetail.description,
                company: organization.name,
                organizationrating: avg(organizationRatingReview.rating),
                thumbnail: activity.thumbnail_url,
                end_date: activity.end_date,
            })
            .from(activity)
            .innerJoin(activityDetail, eq(activityDetail.activity_id, activity.id))
            .innerJoin(organization, eq(organization.id, activity.organization_id))
            .innerJoin(organizationRatingReview, eq(organizationRatingReview.organization_id, organization.id))
            .groupBy(activity.id,
                activity.name,
                activityDetail.description,
                organization.name,
                activity.thumbnail_url,
                activity.end_date
            )
            .orderBy(desc(activity.end_date));

        return result;
    }),
});
