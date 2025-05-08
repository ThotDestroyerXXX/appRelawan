import { useRouter } from "next/navigation";
import { showErrorMessage } from "~/lib/utils";
import { api } from "~/trpc/react";

export const getUserActivityApplyByActivityId = ({
  activity_id,
}: {
  activity_id: string;
}) => {
  const {
    data: userActivity,
    isPending,
    isFetched,
  } = api.userActivity.getUserActivityApplyByAtivityId.useQuery(
    {
      activity_id: activity_id,
    },
    {
      enabled: !!activity_id,
    },
  );
  return {
    userActivity,
    isPending,
    isFetched,
  };
};

export const getActivityByOrganizationId = ({
  organization_id,
  activity_id,
}: {
  organization_id: string;
  activity_id: string;
}) => {
  const {
    data: activity,
    isPending,
    isFetched,
  } = api.activity.getActivityByOrganizationId.useQuery(
    {
      organization_id: organization_id,
      activity_id: activity_id,
    },
    {
      enabled: !!organization_id && !!activity_id,
    },
  );
  return {
    activity,
    isPending,
    isFetched,
  };
};

export const getUserActivityData = ({
  activity_id,
}: {
  activity_id: string;
}) => {
  const {
    data: userActivityData,
    isPending,
    isFetched,
  } = api.userActivity.getUserActivityData.useQuery(
    {
      activity_id: activity_id,
    },
    {
      enabled: !!activity_id,
    },
  );
  return {
    userActivityData,
    isPending,
    isFetched,
  };
};

export const UpdateUserActivityStatus = (
  setLoading: (loading: boolean) => void,
) => {
  const router = useRouter();
  const utils = api.useUtils();
  const { mutate } = api.userActivity.updateUserActivityStatus.useMutation({
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: async () => {
      await utils.invalidate();
      router.refresh();
      setLoading(false);
    },
    onError: (error) => {
      showErrorMessage(error);
      setLoading(false);
    },
  });

  const handleUpdateUserActivityStatus = ({
    user_activity_id,
    status_id,
  }: {
    user_activity_id: string;
    status_id: number;
  }) => {
    setLoading(true);

    try {
      mutate({
        id: user_activity_id,
        user_activity_status_id: status_id,
      });
    } catch (error) {
      console.error("Error updating user activity status:", error);
    } finally {
      setLoading(false);
    }
  };
  return {
    handleUpdateUserActivityStatus,
  };
};

export const getListActivityByOrganizationId = ({
  organization_id,
}: {
  organization_id: string;
}) => {
  const {
    data: listActivity,
    isPending,
    isFetched,
  } = api.activity.getListActivityByOrganizationId.useQuery(
    {
      organization_id: organization_id,
    },
    {
      enabled: !!organization_id,
    },
  );
  return {
    listActivity,
    isPending,
    isFetched,
  };
};
