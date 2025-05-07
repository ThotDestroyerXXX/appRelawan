import { count, eq, avg, desc, and } from "drizzle-orm";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { v4 as uuidv4 } from "uuid";
import {
  activity,
  activityDetail,
  organization,
  locationType,
  activityCategory,
  activityType,
  organizationRatingReview,
  activityTimeDetail,
  activityGallery,
  activityRatingReview,
  user,
  activityStatus,
  userActivityStatus,
  userActivity,
} from "~/server/db/schema";
import { alias } from "drizzle-orm/pg-core";
import { start } from "repl";
export const activityRouter = createTRPCRouter({
  getActivityCount: publicProcedure.query(async ({ ctx }) => {
    const result = await ctx.db
      .select({ count: count(activity.id) })
      .from(activity)
      .execute();

    return result[0]?.count ?? 0;
  }),
  getListActivity: publicProcedure.query(async ({ ctx }) => {
    const activityCategory1 = alias(activityCategory, "activityCategory1");
    const activityCategory2 = alias(activityCategory, "activityCategory2");
    const result = await ctx.db
      .select({
        id: activity.id,
        name: activity.name,
        desc: activityDetail.description,
        company: organization.name,
        company_logo: organization.logo_url,
        thumbnail: activity.thumbnail_url,
        start_date: activity.start_date,
        end_date: activity.end_date,
        activityStatus: activityStatus.name,
        activityCategory1: activityCategory1.name,
        activityCategory2: activityCategory2.name,
        activityType: activityType.name,
        locationType: locationType.name,
        province: activity.province,
      })
      .from(activity)
      .innerJoin(activityDetail, eq(activityDetail.activity_id, activity.id))
      .innerJoin(organization, eq(organization.id, activity.organization_id))
      .innerJoin(
        activityStatus,
        eq(activityStatus.id, activity.activity_status_id),
      )
      .innerJoin(activityType, eq(activityType.id, activity.activity_type_id))
      .innerJoin(
        activityCategory1,
        eq(activityCategory1.id, activity.activity_category_id_1),
      )
      .innerJoin(
        activityCategory2,
        eq(activityCategory2.id, activity.activity_category_id_2),
      )
      .innerJoin(locationType, eq(locationType.id, activity.location_type_id))
      .where(eq(activity.activity_status_id, 1))
      .groupBy(
        activity.id,
        activity.name,
        activityDetail.description,
        organization.name,
        activity.thumbnail_url,
        activity.end_date,
        activityStatus.name,
        activityCategory1.name,
        activityCategory2.name,
        activityType.name,
        locationType.name,
        activity.province,
        organization.logo_url,
      )
      .orderBy(desc(activity.end_date))
      .execute();

    return result;
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

  getActivityDetail: publicProcedure
    .input(
      z.object({
        id: z.string().nonempty("Activity ID is required"),
      }),
    )
    .query(async ({ ctx, input }) => {
      const activityCategory1 = alias(activityCategory, "activityCategory1");
      const activityCategory2 = alias(activityCategory, "activityCategory2");
      const result = await ctx.db
        .select({
          activity: activity,
          activityDetail: activityDetail,
          organization: organization,
          locationType: locationType.name,
          activityCategory1: activityCategory1.name,
          activityCategory2: activityCategory2.name,
          activityType: activityType.name,
          activityStatus: activityStatus.name,
          userActivity: userActivity,
          userActivityStatus: userActivityStatus.name,
        })
        .from(activity)
        .innerJoin(activityDetail, eq(activityDetail.activity_id, activity.id))
        .innerJoin(organization, eq(organization.id, activity.organization_id))
        .innerJoin(locationType, eq(locationType.id, activity.location_type_id))
        .innerJoin(
          activityCategory1,
          eq(activityCategory1.id, activity.activity_category_id_1),
        )
        .innerJoin(
          activityCategory2,
          eq(activityCategory2.id, activity.activity_category_id_2),
        )
        .innerJoin(activityType, eq(activityType.id, activity.activity_type_id))
        .innerJoin(
          activityStatus,
          eq(activityStatus.id, activity.activity_status_id),
        )
        .leftJoin(userActivity, eq(userActivity.activity_id, activity.id))
        .leftJoin(
          userActivityStatus,
          eq(userActivityStatus.id, userActivity.user_activity_status_id),
        )
        .where(eq(activity.id, input.id))
        .groupBy(
          activity.id,
          activityDetail.id,
          organization.name,
          locationType.name,
          activityCategory1.name,
          activityCategory2.name,
          activityType.name,
          activityStatus.name,
          userActivityStatus.name,
          organization.id,
          userActivity.id,
        )
        .execute();

      return result[0] ?? null;
    }),

  getActivityTimeDetailByActivityId: publicProcedure
    .input(
      z.object({
        activity_id: z.string().nonempty("Activity ID is required"),
      }),
    )
    .query(async ({ ctx, input }) => {
      return await ctx.db
        .select()
        .from(activityTimeDetail)
        .where(eq(activityTimeDetail.activity_id, input.activity_id))
        .execute();
    }),

  createActivity: publicProcedure
    .input(
      z.object({
        name: z
          .string()
          .min(1, "Name is required")
          .max(255, "Name has to be less than 255 characters"),
        start_date: z
          .date()
          .min(new Date(), "Start date must be in the future"),
        end_date: z.date().min(new Date(), "End date must be in the future"),
        province: z.string().nonempty("Province is required"),
        city: z.string().nonempty("City is required"),
        subdistrict: z.string().nonempty("Subdistrict is required"),
        ward: z.string().nonempty("Ward is required"),
        address: z
          .string()
          .nonempty("Address is required")
          .max(255, "Address has to be less than 255 characters"),
        registration_deadline_date: z
          .date()
          .min(new Date(), "Registration deadline must be in the future"),
        thumbnail_url: z.string().nonempty("Thumbnail URL is required"),
        activity_person_limit: z
          .number()
          .min(1, "Activity person limit must be at least 1")
          .max(2000, "Activity person limit must be less than 1000"),
        binusian_only: z.boolean(),
        require_confirmation: z.boolean(),
        location_type_id: z
          .number()
          .nonnegative("Location type ID is required"),
        organization_id: z.string().nonempty("Organization ID is required"),
        activity_category_id_1: z
          .number()
          .nonnegative("Activity Category 1 is required"),
        activity_category_id_2: z
          .number()
          .nonnegative("Activity Category 2 is required"),
        activity_type_id: z.number().nonnegative("Activity Type is required"),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.db
        .insert(activity)
        .values({
          id: uuidv4(),
          name: input.name,
          start_date: input.start_date.toISOString(),
          end_date: input.end_date.toISOString(),
          province: input.province,
          city: input.city,
          subdistrict: input.subdistrict,
          ward: input.ward,
          address: input.address,
          registration_deadline_date:
            input.registration_deadline_date.toISOString(),
          thumbnail_url: input.thumbnail_url,
          activity_person_limit: input.activity_person_limit,
          binusian_only: input.binusian_only,
          require_confirmation: input.require_confirmation,
          activity_status_id: 1,
          activity_category_id_1: input.activity_category_id_1,
          activity_category_id_2: input.activity_category_id_2,
          location_type_id: input.location_type_id,
          organization_id: input.organization_id,
          activity_type_id: input.activity_type_id,
        })
        .returning({ id: activity.id })
        .execute();
    }),

  createActivityTimeDetail: publicProcedure
    .input(
      z.object({
        activity_id: z.string().nonempty("Activity ID is required"),
        start_time: z.string().time().nonempty("Start time is required"),
        end_time: z.string().time().nonempty("End time is required"),
        day: z.string().nonempty("Day is required"),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.db
        .insert(activityTimeDetail)
        .values({
          id: uuidv4(),
          activity_id: input.activity_id,
          start_time: input.start_time,
          end_time: input.end_time,
          day: input.day,
        })
        .returning({ id: activityTimeDetail.id })
        .execute();
    }),

  createActivityDetail: publicProcedure
    .input(
      z.object({
        activity_id: z.string().nonempty("Activity ID is required"),
        description: z
          .string()
          .nonempty("Description is required")
          .min(20, "Description has to be more than 50 characters")
          .max(1000, "Description has to be less than 1000 characters"),
        activity_detail: z
          .string()
          .nonempty("Activity detail is required")
          .min(20, "Activity detail has to be more than 50 characters")
          .max(1000, "Activity detail has to be less than 1000 characters"),
        job_detail: z
          .string()
          .nonempty("Job detail is required")
          .min(20, "Job detail has to be more than 50 characters")
          .max(1000, "Job detail has to be less than 1000 characters"),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.db
        .insert(activityDetail)
        .values({
          id: uuidv4(),
          activity_id: input.activity_id,
          description: input.description,
          activity_detail: input.activity_detail,
          job_detail: input.job_detail,
        })
        .returning({ id: activityDetail.id })
        .execute();
    }),

  createActivityGallery: publicProcedure
    .input(
      z.object({
        activity_detail_id: z
          .string()
          .nonempty("Activity detail ID is required"),
        image_url: z.string().nonempty("Image URL is required"),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.db
        .insert(activityGallery)
        .values({
          id: uuidv4(),
          activity_detail_id: input.activity_detail_id,
          image_url: input.image_url,
        })
        .returning({ id: activityGallery.id })
        .execute();
    }),

  getOrganizationActivity: publicProcedure
    .input(
      z.object({
        organization_id: z.string().nonempty("User ID is required"),
      }),
    )
    .query(async ({ ctx, input }) => {
      const activityCategory1 = alias(activityCategory, "activityCategory1");
      const activityCategory2 = alias(activityCategory, "activityCategory2");
      const result = await ctx.db
        .select({
          id: activity.id,
          name: activity.name,
          desc: activityDetail.description,
          company: organization.name,
          thumbnail: activity.thumbnail_url,
          end_date: activity.end_date,
          activityStatus: activityStatus.name,
          activityCategory1: activityCategory1.name,
          activityCategory2: activityCategory2.name,
          activityType: activityType.name,
        })
        .from(activity)
        .innerJoin(activityDetail, eq(activityDetail.activity_id, activity.id))
        .innerJoin(organization, eq(organization.id, activity.organization_id))
        .innerJoin(
          activityStatus,
          eq(activityStatus.id, activity.activity_status_id),
        )
        .innerJoin(activityType, eq(activityType.id, activity.activity_type_id))
        .innerJoin(
          activityCategory1,
          eq(activityCategory1.id, activity.activity_category_id_1),
        )
        .innerJoin(
          activityCategory2,
          eq(activityCategory2.id, activity.activity_category_id_2),
        )
        .where(eq(activity.organization_id, input.organization_id))
        .groupBy(
          activity.id,
          activity.name,
          activityDetail.description,
          organization.name,
          activity.thumbnail_url,
          activity.end_date,
          activityStatus.name,
          activityCategory1.name,
          activityCategory2.name,
          activityType.name,
        )
        .orderBy(desc(activity.end_date))
        .execute();

      return result;
    }),
});
