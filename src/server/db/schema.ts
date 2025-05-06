// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  integer,
  pgTableCreator,
  timestamp,
  uuid,
  varchar,
  text,
  boolean,
  date,
  time,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `${name}`);

export const user = createTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  organization_id: uuid("organization_id").references(() => organization.id),
});

export const session = createTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
});

export const account = createTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verification = createTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const activityCategory = createTable("activityCategory", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  name: varchar("name", { length: 50 }).notNull(),
});

export const locationType = createTable("locationType", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  name: varchar("name", { length: 50 }).notNull(),
});

export const organization = createTable("organization", {
  id: uuid("id").primaryKey(),
  name: text("name").notNull(),
  is_active: boolean("is_active").notNull(),
  created_at: timestamp("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  phone_number: varchar("phone_number", { length: 20 }).notNull(),
  website_url: varchar("website_url", { length: 100 }),
  description: text("description").notNull(),
  province: text("province").notNull(),
  city: text("city").notNull(),
  subdistrict: text("subdistrict").notNull(),
  ward: text("ward").notNull(),
  address: text("address").notNull(),
  postal_code: varchar("postal_code", { length: 10 }).notNull(),
  logo_url: text("logo_url"),
  establishment_date: date("establishment_date").notNull(),
});

export const followOrganization = createTable("followOrganization", {
  user_id: text("user_id")
    .notNull()
    .references(() => user.id),
  organization_id: uuid("organization_id")
    .notNull()
    .references(() => organization.id),
});

export const organizationRatingReview = createTable(
  "organizationRatingReview",
  {
    user_id: text("user_id")
      .notNull()
      .references(() => user.id),
    organization_id: uuid("organization_id")
      .notNull()
      .references(() => organization.id),
    rating: integer("rating").notNull(),
    review: text("review").notNull(),
  },
);

export const userActivity = createTable("userActivity", {
  id: uuid("id").primaryKey(),
  user_id: text("user_id")
    .notNull()
    .references(() => user.id),
  activity_id: uuid("activity_id")
    .notNull()
    .references(() => activity.id),
  user_activity_status_id: integer("user_activity_status_id")
    .notNull()
    .references(() => userActivityStatus.id),
});

export const userActivityApply = createTable("userActivityApply", {
  user_activity_id: uuid("user_activity_id")
    .references(() => userActivity.id)
    .notNull(),
  question_1: text("question_1").notNull(),
  question_2: text("question_2").notNull(),
  current_job: text("current_job").notNull(),
  phone_number: varchar("phone_number", { length: 20 }).notNull(),
});

export const userActivityStatus = createTable("userActivityStatus", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  name: varchar("name", { length: 50 }).notNull(),
});

export const activity = createTable("activity", {
  id: uuid("id").primaryKey(),
  name: text("name").notNull(),
  start_date: date("start_date").notNull(),
  end_date: date("end_date").notNull(),
  province: text("province").notNull(),
  city: text("city").notNull(),
  subdistrict: text("subdistrict").notNull(),
  ward: text("ward").notNull(),
  address: text("address").notNull(),
  registration_deadline_date: date("registration_deadline_date").notNull(),
  thumbnail_url: text("thumbnail_url"),
  activity_person_limit: integer("activity_person_limit").notNull(),
  binusian_only: boolean("binusian_only").notNull(),
  require_confirmation: boolean("require_confirmation").notNull(),
  activity_status_id: integer("activity_status_id")
    .notNull()
    .references(() => activityStatus.id),
  activity_category_id_1: integer("activity_category_id_1")
    .notNull()
    .references(() => activityCategory.id),
  activity_category_id_2: integer("activity_category_id_2")
    .notNull()
    .references(() => activityCategory.id),
  organization_id: uuid("organization_id")
    .notNull()
    .references(() => organization.id),
  location_type_id: integer("location_type_id")
    .notNull()
    .references(() => locationType.id),
  activity_type_id: integer("activity_type_id")
    .notNull()
    .references(() => activityType.id),
});

export const activityTimeDetail = createTable("activityTimeDetail", {
  id: uuid("id").primaryKey(),
  start_time: time("start_time").notNull(),
  end_time: time("end_time").notNull(),
  day: text("day").notNull(),
  activity_id: uuid("activity_id")
    .notNull()
    .references(() => activity.id),
});

export const activityStatus = createTable("activityStatusType", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  name: varchar("name", { length: 50 }).notNull(),
});

export const activityDetail = createTable("activityDetail", {
  id: uuid("id").primaryKey(),
  description: text("description").notNull(),
  activity_detail: text("activity_detail").notNull(),
  job_detail: text("job_detail").notNull(),
  activity_id: uuid("activity_id")
    .notNull()
    .references(() => activity.id),
});

export const activityGallery = createTable("activityGallery", {
  id: uuid("id").primaryKey(),
  image_url: text("image_url").notNull(),
  activity_detail_id: uuid("activity_detail_id")
    .notNull()
    .references(() => activityDetail.id),
});

export const activityRatingReview = createTable("activityRatingReview", {
  user_id: text("user_id")
    .notNull()
    .references(() => user.id),
  activity_id: uuid("activity_id")
    .notNull()
    .references(() => activity.id),
  rating: integer("rating").notNull(),
  review: text("review").notNull(),
});

export const activityType = createTable("activityType", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  name: varchar("name", { length: 50 }).notNull().unique(),
});
