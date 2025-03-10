import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  activity,
  followOrganization,
  organization,
  organizationRatingReview,
} from "~/server/db/schema";
import { TRPCClientError } from "@trpc/client";
import { avg, count, eq } from "drizzle-orm";

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

  getOrganizationDetail: publicProcedure.query(async ({ ctx }) => {
    const result = await ctx.db
      .select({
        id: organization.id,
        name: organization.name,
        description: organization.description,
        phone_number: organization.phone_number,
        province: organization.province,
        city: organization.city,
        subdistrict: organization.subdistrict,
        ward: organization.ward,
        address: organization.address,
        postal_code: organization.postal_code,
        logo_url: organization.logo_url,
        website_url: organization.website_url,
        establishment_date: organization.establishment_date,
        totalFollower: count(followOrganization.organization_id),
        totalActivity: count(activity.id),
        organizationRating: avg(organizationRatingReview.rating),
      })
      .from(organization)
      .innerJoin(activity, eq(organization.id, activity.organization_id))
      .innerJoin(
        followOrganization,
        eq(organization.id, followOrganization.organization_id),
      )
      .innerJoin(
        organizationRatingReview,
        eq(organization.id, organizationRatingReview.organization_id),
      );
    return result;
  }),

  getFollowedOrganization: publicProcedure
    .input(z.object({ user_id: z.string() }))
    .query(async ({ input, ctx }) => {
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
        .where(eq(followOrganization.user_id, input.user_id))
        .groupBy(
          organization.id,
          organization.name,
          organization.province,
          organization.city,
          organization.logo_url,
        )
        .execute();
    }),
});
