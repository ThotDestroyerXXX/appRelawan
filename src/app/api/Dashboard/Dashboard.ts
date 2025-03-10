import { api } from "~/trpc/react";

export const fetchProsesSeleksi = (user_id: string) => {
  const {
    data: prosesSeleksi,
    isLoading: isLoadingProsesSeleksi,
    error,
  } = api.userActivity.getSelectionProcess.useQuery({ user_id });
  return { prosesSeleksi, isLoadingProsesSeleksi, error };
};

export const fetchFollowedOrganization = (user_id: string) => {
  const {
    data: followedOrganization,
    isLoading: isLoadingFollowedOrganization,
    error: fetchFollowedOrganizationError,
  } = api.organization.getFollowedOrganization.useQuery({ user_id });
  return {
    followedOrganization,
    isLoadingFollowedOrganization,
    fetchFollowedOrganizationError,
  };
};
