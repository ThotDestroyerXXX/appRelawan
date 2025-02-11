ALTER TABLE "app_relawan_post" RENAME TO "post";--> statement-breakpoint
ALTER TABLE "app_relawan_MsUser" RENAME TO "MsUser";--> statement-breakpoint
ALTER TABLE "MsUser" DROP CONSTRAINT "app_relawan_MsUser_Email_unique";--> statement-breakpoint
ALTER TABLE "MsUser" DROP CONSTRAINT "app_relawan_MsUser_Username_unique";--> statement-breakpoint
ALTER TABLE "MsUser" ALTER COLUMN "UserId" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "MsUser" ALTER COLUMN "UserId" DROP IDENTITY;--> statement-breakpoint
ALTER TABLE "MsUser" ADD CONSTRAINT "MsUser_Email_unique" UNIQUE("Email");--> statement-breakpoint
ALTER TABLE "MsUser" ADD CONSTRAINT "MsUser_Username_unique" UNIQUE("Username");