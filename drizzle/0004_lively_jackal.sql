CREATE TABLE IF NOT EXISTS "activity" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"start_date" date NOT NULL,
	"end_date" date NOT NULL,
	"province" text NOT NULL,
	"city" text NOT NULL,
	"subdistrict" text NOT NULL,
	"ward" text NOT NULL,
	"address" text NOT NULL,
	"registration_deadline_date" date NOT NULL,
	"thumbnail_url" text,
	"activity_person_limit" integer NOT NULL,
	"binusian_only" boolean NOT NULL,
	"require_confirmation" boolean NOT NULL,
	"activity_status_id" integer NOT NULL,
	"activity_category_id_1" integer NOT NULL,
	"activity_category_id_2" integer NOT NULL,
	"organization_id" uuid NOT NULL,
	"location_type_id" integer NOT NULL,
	"activity_type_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "activityCategory" (
	"id" integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (sequence name "activityCategory_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "activityDetail" (
	"id" uuid PRIMARY KEY NOT NULL,
	"description" text NOT NULL,
	"activity_detail" text NOT NULL,
	"job_detail" text NOT NULL,
	"activity_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "activityGallery" (
	"id" uuid PRIMARY KEY NOT NULL,
	"image_url" text NOT NULL,
	"activity_detail_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "activityRatingReview" (
	"user_id" text NOT NULL,
	"activity_id" uuid NOT NULL,
	"rating" integer NOT NULL,
	"review" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "activityStatusType" (
	"id" integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (sequence name "activityStatusType_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "activityTimeDetail" (
	"id" uuid PRIMARY KEY NOT NULL,
	"start_time" time NOT NULL,
	"end_time" time NOT NULL,
	"day" text NOT NULL,
	"activity_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "activityType" (
	"id" integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (sequence name "activityType_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(50) NOT NULL,
	CONSTRAINT "activityType_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "followOrganization" (
	"user_id" text NOT NULL,
	"organization_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "locationType" (
	"id" integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (sequence name "locationType_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "organization" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"is_active" boolean NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"phone_number" varchar(20) NOT NULL,
	"website_url" varchar(100),
	"description" text NOT NULL,
	"province" text NOT NULL,
	"city" text NOT NULL,
	"subdistrict" text NOT NULL,
	"ward" text NOT NULL,
	"address" text NOT NULL,
	"postal_code" varchar(10) NOT NULL,
	"logo_url" text,
	"establishment_date" date NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "organizationRatingReview" (
	"user_id" text NOT NULL,
	"organization_id" uuid NOT NULL,
	"rating" integer NOT NULL,
	"review" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "userActivity" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"activity_id" uuid NOT NULL,
	"user_activity_status_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "userActivityApply" (
	"user_activity_id" uuid NOT NULL,
	"question_1" text NOT NULL,
	"question_2" text NOT NULL,
	"current_job" text NOT NULL,
	"phone_number" varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "userActivityStatus" (
	"id" integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (sequence name "userActivityStatus_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(50) NOT NULL
);
--> statement-breakpoint
DROP TABLE "MsUser";--> statement-breakpoint
DROP TABLE "post";--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "organization_id" uuid;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "activity" ADD CONSTRAINT "activity_activity_status_id_activityStatusType_id_fk" FOREIGN KEY ("activity_status_id") REFERENCES "public"."activityStatusType"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "activity" ADD CONSTRAINT "activity_activity_category_id_1_activityCategory_id_fk" FOREIGN KEY ("activity_category_id_1") REFERENCES "public"."activityCategory"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "activity" ADD CONSTRAINT "activity_activity_category_id_2_activityCategory_id_fk" FOREIGN KEY ("activity_category_id_2") REFERENCES "public"."activityCategory"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "activity" ADD CONSTRAINT "activity_organization_id_organization_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organization"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "activity" ADD CONSTRAINT "activity_location_type_id_locationType_id_fk" FOREIGN KEY ("location_type_id") REFERENCES "public"."locationType"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "activity" ADD CONSTRAINT "activity_activity_type_id_activityType_id_fk" FOREIGN KEY ("activity_type_id") REFERENCES "public"."activityType"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "activityDetail" ADD CONSTRAINT "activityDetail_activity_id_activity_id_fk" FOREIGN KEY ("activity_id") REFERENCES "public"."activity"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "activityGallery" ADD CONSTRAINT "activityGallery_activity_detail_id_activityDetail_id_fk" FOREIGN KEY ("activity_detail_id") REFERENCES "public"."activityDetail"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "activityRatingReview" ADD CONSTRAINT "activityRatingReview_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "activityRatingReview" ADD CONSTRAINT "activityRatingReview_activity_id_activity_id_fk" FOREIGN KEY ("activity_id") REFERENCES "public"."activity"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "activityTimeDetail" ADD CONSTRAINT "activityTimeDetail_activity_id_activity_id_fk" FOREIGN KEY ("activity_id") REFERENCES "public"."activity"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "followOrganization" ADD CONSTRAINT "followOrganization_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "followOrganization" ADD CONSTRAINT "followOrganization_organization_id_organization_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organization"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "organizationRatingReview" ADD CONSTRAINT "organizationRatingReview_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "organizationRatingReview" ADD CONSTRAINT "organizationRatingReview_organization_id_organization_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organization"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "userActivity" ADD CONSTRAINT "userActivity_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "userActivity" ADD CONSTRAINT "userActivity_activity_id_activity_id_fk" FOREIGN KEY ("activity_id") REFERENCES "public"."activity"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "userActivity" ADD CONSTRAINT "userActivity_user_activity_status_id_userActivityStatus_id_fk" FOREIGN KEY ("user_activity_status_id") REFERENCES "public"."userActivityStatus"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "userActivityApply" ADD CONSTRAINT "userActivityApply_user_activity_id_userActivity_id_fk" FOREIGN KEY ("user_activity_id") REFERENCES "public"."userActivity"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user" ADD CONSTRAINT "user_organization_id_organization_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organization"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
