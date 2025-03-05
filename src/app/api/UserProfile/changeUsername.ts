// import { z } from "zod";
// import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
// import { MsUser } from "~/server/db/schema";
// import { eq } from "drizzle-orm";

// export const changeUsernameRouter = createTRPCRouter({
//     changeUsername: publicProcedure
//         .input(
//             z.object({
//                 userId: z.string(),
//                 newUsername: z.string().min(3, "Username must be at least 3 characters"),
//             })
//         )
//         .mutation(async ({ ctx, input }) => {
//             const { db } = ctx;

//             // Cek apakah user ada
//             const user = await db.select().from(MsUser).where(eq(MsUser.UserId, input.userId));
//             if (user.length == 0) {
//                 throw new Error("User not found");
//             }

//             // Update username di database
//             await db.update(MsUser)
//                 .set({ Username: input.newUsername })
//                 .where(eq(MsUser.UserId, input.userId))
//                 .execute();

//             return { message: "Username updated successfully" };
//         }),
// });
