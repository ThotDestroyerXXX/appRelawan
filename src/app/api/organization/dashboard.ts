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

export const getOrganization = () => {
  const {
    data: allOrganization,
    isLoading,
    isFetched,
  } = api.organization.getOrganization.useQuery();
  return { allOrganization, isLoading, isFetched };
};

export const getOrganizationDetail = (id: string) => {
  const {
    data: organizationDetail,
    isLoading,
    isFetched,
  } = api.organization.getOrganizationDetail.useQuery(
    { organization_id: id },
    {
      enabled: !!id,
    },
  );
  return { organizationDetail, isLoading, isFetched };
};

export const getOrganizationFollowerByOrganizationId = (id: string) => {
  const {
    data: organizationFollower,
    isLoading,
    isFetched,
  } = api.organization.getOrganizationFollowerByOrganizationId.useQuery(
    { organization_id: id },
    {
      enabled: !!id,
    },
  );
  return { organizationFollower, isLoading, isFetched };
};

export const getOrganizationTestimony = (id: string) => {
  const {
    data: organizationTestimony,
    isLoading,
    isFetched,
  } = api.userActivity.getTestimonyByOrganizationId.useQuery(
    { organization_id: id },
    {
      enabled: !!id,
    },
  );
  return { organizationTestimony, isLoading, isFetched };
};
