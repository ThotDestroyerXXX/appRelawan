DROP TABLE "activityStatusType";--> statement-breakpoint
ALTER TABLE "activity" DROP CONSTRAINT "activity_activity_status_id_activityStatusType_id_fk";
--> statement-breakpoint
ALTER TABLE "activity" DROP COLUMN IF EXISTS "activity_status_id";