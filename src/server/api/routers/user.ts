import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import bcrypt from "bcrypt";
import { TRPCClientError } from "@trpc/client";
import { MsUser } from "~/server/db/schema";

export const userRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(
      z.object({
        username: z
          .string()
          .min(1, "Username must be at least 1 character long")
          .max(50, "Username must be at most 50 characters long"),
        email: z.string().email("Invalid email"),
        password: z
          .string()
          .min(8, "Password must be at least 8 characters long")
          .max(50, "Password must be at most 50 characters long"),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.db.query.MsUser.findFirst({
        where: (users, { eq }) => eq(users.Email, input.email),
      });
      if (user) {
        throw new TRPCClientError("Email already registered", {
          cause: new Error("Email already registered"),
        });
      }
      console.log("tes");
      const saltRounds = 14;
      const hashPassword = await bcrypt.hash(input.password, saltRounds);
      return ctx.db.insert(MsUser).values({
        UserId: crypto.randomUUID(),
        Username: input.username,
        Email: input.email,
        Password: hashPassword,
      });
    }),

  signIn: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.db.query.MsUser.findFirst({
        where: (users, { eq }) => eq(users.Email, input.email),
      });
      if (!user) {
        throw new TRPCClientError("Invalid email or password", {
          cause: new Error("Invalid email or password"),
        });
      }
      const isPasswordValid = await bcrypt.compare(
        input.password,
        user.Password,
      );
      if (!isPasswordValid) {
        throw new TRPCClientError("Invalid email or password", {
          cause: new Error("Invalid email or password"),
        });
      }
      return user;
    }),
});
