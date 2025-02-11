import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

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
      // Your mutation logic here
      return { success: true };
    }),
});
