import { eq, and, count } from "drizzle-orm";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  activity,
  user,
  userActivity,
  userActivityApply,
  userActivityStatus,
} from "~/server/db/schema";
import { v4 as uuidv4 } from "uuid";
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

  getUserActivityByUserId: publicProcedure
    .input(
      z.object({
        user_id: z.string().nonempty("User ID is required"),
        activity_id: z.string().nonempty("Activity ID is required"),
      }),
    )
    .query(async ({ ctx, input }) => {
      const result = await ctx.db
        .select({
          userActivity: userActivity,
          userActivityStatus: userActivityStatus.name,
        })
        .from(userActivity)
        .leftJoin(
          userActivityStatus,
          eq(userActivityStatus.id, userActivity.user_activity_status_id),
        )
        .where(
          and(
            eq(userActivity.user_id, input.user_id),
            eq(userActivity.activity_id, input.activity_id),
          ),
        )
        .execute();

      return result[0] ?? null;
    }),

  createUserActivity: publicProcedure
    .input(
      z.object({
        user_id: z.string().nonempty("User ID is required"),
        activity_id: z.string().nonempty("Activity ID is required"),
        user_activity_status_id: z
          .number()
          .nonnegative("User activity status ID is required"),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { user_id, activity_id, user_activity_status_id } = input;
      return await ctx.db
        .insert(userActivity)
        .values({
          id: uuidv4(),
          user_id,
          activity_id,
          user_activity_status_id,
        })
        .returning({ id: userActivity.id })
        .execute();
    }),

  createUserActivityApply: publicProcedure
    .input(
      z.object({
        user_activity_id: z.string().nonempty("Activity ID is required"),
        question1: z
          .string()
          .nonempty("Question 1 is required")
          .max(100, "Question 1 must be at most 100 characters"),
        question2: z
          .string()
          .nonempty("Question 2 is required")
          .max(100, "Question 2 must be at most 100 characters"),
        current_job: z
          .string()
          .nonempty("Current job is required")
          .max(100, "Current job must be at most 100 characters"),
        phone_number: z
          .string()
          .nonempty("Phone number is required")
          .max(20, "Phone number must be at max 20 characters"),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const {
        user_activity_id,
        question1,
        question2,
        current_job,
        phone_number,
      } = input;
      const result = await ctx.db
        .insert(userActivityApply)
        .values({
          user_activity_id: user_activity_id,
          question_1: question1,
          question_2: question2,
          current_job,
          phone_number,
        })
        .returning({ id: userActivityApply.user_activity_id })
        .execute();
      return result;
    }),
  getUserActivityApplyByAtivityId: publicProcedure
    .input(
      z.object({
        activity_id: z.string().nonempty("Activity ID is required"),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { activity_id } = input;
      return await ctx.db
        .select({
          user: user,
          userActivityApply: userActivityApply,
          userActivity: userActivity,
          userActivityStatus: userActivityStatus.name,
        })
        .from(userActivity)
        .innerJoin(user, eq(user.id, userActivity.user_id))
        .leftJoin(
          userActivityApply,
          eq(userActivity.id, userActivityApply.user_activity_id),
        )
        .innerJoin(
          userActivityStatus,
          eq(userActivityStatus.id, userActivity.user_activity_status_id),
        )
        .where(eq(userActivity.activity_id, activity_id))
        .execute();
    }),

  getUserActivityData: publicProcedure
    .input(
      z.object({
        activity_id: z.string().nonempty("Activity ID is required"),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { activity_id } = input;
      return await ctx.db
        .select({
          userActivity: userActivity,
          userActivityApply: userActivityApply,
          user: user,
          userActivityStatus: userActivityStatus.name,
        })
        .from(userActivity)
        .innerJoin(user, eq(user.id, userActivity.user_id))
        .leftJoin(
          userActivityApply,
          eq(userActivity.id, userActivityApply.user_activity_id),
        )
        .innerJoin(
          userActivityStatus,
          eq(userActivityStatus.id, userActivity.user_activity_status_id),
        )
        .where(eq(userActivity.activity_id, activity_id))
        .execute();
    }),

  updateUserActivityStatus: publicProcedure
    .input(
      z.object({
        id: z.string().nonempty("User activity ID is required"),
        user_activity_status_id: z
          .number()
          .nonnegative("User activity status ID is required"),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id, user_activity_status_id } = input;
      return await ctx.db
        .update(userActivity)
        .set({ user_activity_status_id })
        .where(eq(userActivity.id, id))
        .returning({ id: userActivity.id })
        .execute();
    }),

  getUserActivityCount: publicProcedure
    .input(
      z.object({
        activity_id: z.string().nonempty("Activity ID is required"),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { activity_id } = input;
      const result = await ctx.db
        .select({ count: count(userActivity.id) })
        .from(userActivity)
        .where(eq(userActivity.activity_id, activity_id))
        .execute();
      return result[0]?.count ?? 0;
    }),
});
