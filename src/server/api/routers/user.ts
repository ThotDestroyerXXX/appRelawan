import { count, eq } from "drizzle-orm";
import { z } from "zod";
import { auth } from "~/lib/auth";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { account, user } from "~/server/db/schema";
export const userRouter = createTRPCRouter({
  getUserCount: publicProcedure.query(async ({ ctx }) => {
    const result = await ctx.db
      .select({ count: count(user.id) })
      .from(user)
      .execute();

    const userCount = result[0]?.count ?? 0;
    return userCount;
  }),

  updateUser: publicProcedure
    .input(z.object({ id: z.string(), newName: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const existUser = await ctx.db.query.user.findFirst({
        where: (users, { eq }) => eq(users.id, input.id),
      });

      if (existUser == null) {
        throw new Error("User Invalid");
      } else {
        await ctx.db
          .update(user)
          .set({ name: input.newName })
          .where(eq(user.id, input.id));
      }

      return { message: "Username Changed" };
    }),

  changePassword: publicProcedure
    .input(
      z.object({
        oldPass: z
          .string()
          .nonempty({ message: "password must not be empty!" }),
        newPass: z.string(),
        userId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const existUser = await ctx.db.query.account.findFirst({
        where: (x, { eq }) => eq(x.accountId, input.userId),
      });

      if (!existUser?.password) {
        throw new Error("User Invalid");
      }
      const cts = await auth.$context;
      if (
        (await cts.password.verify({
          password: input.oldPass,
          hash: existUser.password,
        })) === false
      ) {
        throw new Error("Old password is incorrect");
      }

      const hash = await cts.password.hash(input.newPass);

      await ctx.db
        .update(account)
        .set({ password: hash })
        .where(eq(account.userId, input.userId));

      return { message: "Password has been changed" };
    }),
});
