import { toast } from "sonner";
import { showErrorMessage } from "~/lib/utils";
import { api } from "~/trpc/react";

export const followOrganization = ({
  setLoading,
}: {
  setLoading: (loading: boolean) => void;
}) => {
  const utils = api.useUtils();
  const { mutate: followOrganization } =
    api.organization.followOrganization.useMutation({
      onMutate: () => {
        setLoading(true);
      },
      onSuccess: async () => {
        await utils.invalidate();
        toast.success("organisasi berhasil diikuti");
        setLoading(false);
      },
      onError: (e) => {
        showErrorMessage(e);
        setLoading(false);
      },
    });

  const handleFollowOrganization = ({
    user_id,
    organization_id,
  }: {
    user_id: string;
    organization_id: string;
  }) => {
    followOrganization({
      user_id,
      organization_id,
    });
  };
  return { handleFollowOrganization };
};

export const unfollowOrganization = ({
  setLoading,
}: {
  setLoading: (loading: boolean) => void;
}) => {
  const utils = api.useUtils();
  const { mutate: unfollowOrganization } =
    api.organization.unfollowOrganization.useMutation({
      onMutate: () => {
        setLoading(true);
      },
      onSuccess: async () => {
        await utils.invalidate();
        toast.success("organisasi berhasil dihapus dari daftar ikuti");
        setLoading(false);
      },
      onError: (e) => {
        showErrorMessage(e);
        setLoading(false);
      },
    });

  const handleUnfollowOrganization = ({
    user_id,
    organization_id,
  }: {
    user_id: string;
    organization_id: string;
  }) => {
    unfollowOrganization({
      user_id,
      organization_id,
    });
  };
  return { handleUnfollowOrganization };
};
