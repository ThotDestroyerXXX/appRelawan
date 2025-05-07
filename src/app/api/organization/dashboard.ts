import { api } from "~/trpc/react";

export const fetchOrganizationActivity = (user_id: string) => {
  const {
    data: organizationActivity,
    isLoading,
    isError,
  } = api.activity.getOrganizationActivity.useQuery(
    {
      organization_id: user_id,
    },
    {
      enabled: !!user_id,
    },
  );
  return { organizationActivity, isLoading, isError };
};
