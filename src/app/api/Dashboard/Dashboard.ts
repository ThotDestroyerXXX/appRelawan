import { api } from "~/trpc/react";

export const fetchProsesSeleksi = (user_id: string) => {
  const {
    data: prosesSeleksi,
    isLoading: isLoadingProsesSeleksi,
    error,
  } = api.userActivity.getSelectionProcess.useQuery({ user_id });
  return { prosesSeleksi, isLoadingProsesSeleksi, error };
};
