import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { organization } from "~/server/db/schema";
import { TRPCClientError } from "@trpc/client";
import { sql } from "drizzle-orm";

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
      .select({ count: sql<number>`COUNT(*)` })
      .from(organization)
      .execute();

    const organizationCount = result[0]?.count ?? 0;
    return organizationCount;
  }),
});
