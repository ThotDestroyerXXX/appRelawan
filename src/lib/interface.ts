import {
  type organization,
  type user,
  type userActivity,
  type userActivityApply,
} from "~/server/db/schema";

export interface UserDataTableProps {
  userActivity: typeof userActivity.$inferSelect;
  userActivityApply: typeof userActivityApply.$inferSelect | null;
  user: typeof user.$inferSelect;
  userActivityStatus: string;
}

export interface OrganizationCardProps {
  organization: typeof organization.$inferSelect;
  totalFollower: number;
  totalActivity: number;
}
