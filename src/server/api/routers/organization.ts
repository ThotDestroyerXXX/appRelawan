import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  activity,
  followOrganization,
  organization,
  organizationRatingReview,
  user,
} from "~/server/db/schema";
import { TRPCClientError } from "@trpc/client";
import { avg, count, eq, desc, and } from "drizzle-orm";

export const organizationRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(
      z.object({
        id: z.string(),
        email: z.string().email("Invalid Email"),
        password: z
          .string()
          .min(8, "Password harus lebih dari 7 karakter")
          .max(50, "Password tidak boleh lebih dari 50 karakter"),
        name: z
          .string()
          .min(2, "Username harus lebih dari 1 karakter")
          .max(50, "Username tidak boleh lebih dari 50 karakter"),
        organizationName: z.string(),
        organizationPhone: z.string(),
        organizationEstablished: z.string(),
        organizationDescription: z
          .string()
          .min(100, "deskripsi harus lebih dari 100 karakter")
          .max(500, "deskripsi tidak boleh lebih dari 500 karakter"),
        organizationProvince: z
          .string()
          .nonempty("Provinsi tidak boleh kosong"),
        organizationCity: z.string().nonempty("Kota tidak boleh kosong"),
        organizationDistrict: z
          .string()
          .nonempty("Kecamatan tidak boleh kosong"),
        organizationWard: z.string().nonempty("Kelurahan tidak boleh kosong"),
        organizationAddress: z.string().nonempty("Alamat tidak boleh kosong"),
        organizationPostalCode: z.string().max(10, "Kode pos terlalu panjang"),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const existUser = await ctx.db.query.user.findFirst({
        where: (users, { eq }) => eq(users.email, input.email),
      });
      if (existUser) {
        throw new TRPCClientError("Email already registered", {
          cause: new Error("Email already registered"),
        });
      }
      return await ctx.db
        .insert(organization)
        .values({
          id: input.id,
          establishment_date: new Date(
            input.organizationEstablished,
          ).toISOString(),
          name: input.organizationName,
          phone_number: input.organizationPhone,
          description: input.organizationDescription,
          province: input.organizationProvince,
          city: input.organizationCity,
          subdistrict: input.organizationDistrict,
          ward: input.organizationWard,
          is_active: true,
          created_at: new Date(),
          logo_url: "",
          address: input.organizationAddress,
          postal_code: input.organizationPostalCode,
          website_url: "",
        })
        .returning({ id: organization.id })
        .execute();
    }),
  getAllOrganization: publicProcedure.query(async ({ ctx }) => {
    const result = await ctx.db
      .select({ count: count(organization.id) })
      .from(organization)
      .where(eq(organization.is_active, true))
      .execute();

    const organizationCount = result[0]?.count ?? 0;
    return organizationCount;
  }),

  getOrganization: publicProcedure.query(async ({ ctx }) => {
    const result = await ctx.db
      .select({
        organization: organization,
        totalFollower: count(followOrganization.organization_id),
        totalActivity: count(activity.id),
      })
      .from(organization)
      .leftJoin(
        followOrganization,
        eq(organization.id, followOrganization.organization_id),
      )
      .leftJoin(activity, eq(organization.id, activity.organization_id))
      .groupBy(organization.id)
      .where(eq(organization.is_active, true))
      .orderBy(desc(organization.created_at))
      .execute();
    return result;
  }),

  getOrganizationDetail: publicProcedure
    .input(
      z.object({
        organization_id: z.string().nonempty("organization id not found"),
      }),
    )
    .query(async ({ input, ctx }) => {
      const result = await ctx.db
        .select({
          organization: organization,
          totalFollower: count(followOrganization.organization_id),
          totalActivity: count(activity.id),
        })
        .from(organization)
        .leftJoin(
          followOrganization,
          eq(organization.id, followOrganization.organization_id),
        )
        .leftJoin(activity, eq(organization.id, activity.organization_id))
        .where(eq(organization.id, input.organization_id))
        .groupBy(organization.id)
        .execute();
      return result[0];
    }),

  getOrganizationFollowerByOrganizationId: publicProcedure
    .input(
      z.object({
        organization_id: z.string().nonempty("organization id not found"),
      }),
    )
    .query(async ({ input, ctx }) => {
      const result = await ctx.db
        .select({
          followOrganization: followOrganization,
          user: user,
        })
        .from(followOrganization)
        .innerJoin(user, eq(followOrganization.user_id, user.id))
        .where(eq(followOrganization.organization_id, input.organization_id))
        .execute();
      if (result) {
        return result;
      } else {
        return null;
      }
    }),

  getFollowedOrganization: publicProcedure
    .input(z.object({ user_id: z.string() }))
    .query(async ({ input, ctx }) => {
      return await ctx.db
        .select({
          organization: organization,
          totalFollower: count(followOrganization.organization_id),
          totalActivity: count(activity.id),
        })
        .from(followOrganization)
        .innerJoin(
          organization,
          eq(followOrganization.organization_id, organization.id),
        )
        .leftJoin(activity, eq(organization.id, activity.organization_id))
        .where(eq(followOrganization.user_id, input.user_id))
        .groupBy(organization.id)
        .execute();
    }),

  getListOrganization: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db
      .select({
        id: organization.id,
        name: organization.name,
        province: organization.province,
        city: organization.city,
        logo_url: organization.logo_url,
        totalFollower: count(followOrganization.organization_id),
        totalActivity: count(activity.id),
        organizationRating: avg(organizationRatingReview.rating),
      })
      .from(followOrganization)
      .innerJoin(
        organization,
        eq(followOrganization.organization_id, organization.id),
      )
      .innerJoin(activity, eq(organization.id, activity.organization_id))
      .innerJoin(
        organizationRatingReview,
        eq(organization.id, organizationRatingReview.organization_id),
      )
      .groupBy(
        organization.id,
        organization.name,
        organization.province,
        organization.city,
        organization.logo_url,
      )
      .execute();
  }),

  followOrganization: publicProcedure
    .input(
      z.object({
        user_id: z.string(),
        organization_id: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.db
        .insert(followOrganization)
        .values({
          user_id: input.user_id,
          organization_id: input.organization_id,
        })
        .returning({ id: followOrganization.user_id })
        .execute();
    }),

  unfollowOrganization: publicProcedure
    .input(
      z.object({
        user_id: z.string(),
        organization_id: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.db
        .delete(followOrganization)
        .where(
          and(
            eq(followOrganization.user_id, input.user_id),
            eq(followOrganization.organization_id, input.organization_id),
          ),
        )
        .returning({ id: followOrganization.user_id })
        .execute();
    }),
});
