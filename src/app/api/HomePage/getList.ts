import { api } from "~/trpc/react";

export function fetchOrganizationCount() {
  const result = api.organization.getAllOrganization.useQuery();
  return result;
}

export function fetchUserCount() {
  const result = api.user.getUserCount.useQuery();
  return result;
}

export function fetchActivityCount() {
  const result = api.activity.getActivityCount.useQuery();
  return result;
}

export function fetchUserById(id: string) {
  const result = api.user.getUserById.useQuery({ id: id });
  return result;
}
