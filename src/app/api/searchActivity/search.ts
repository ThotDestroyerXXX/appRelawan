import { api } from "~/trpc/react";

export const getListActivity = () => {
  const {
    data: listActivity,
    isLoading,
    isError,
  } = api.activity.getListActivity.useQuery();
  return { listActivity, isLoading, isError };
};

export const getActivityDetail = (id: string) => {
  const {
    data: activityDetail,
    isLoading,
    isFetched,
  } = api.activity.getActivityDetail.useQuery(
    { id },
    {
      enabled: !!id,
    },
  );
  return { activityDetail, isLoading, isFetched };
};

export const getActivityGallery = (id: string) => {
  const {
    data: activityGallery,
    isLoading,
    isFetched,
  } = api.activity.getActivityGalleryByActivityId.useQuery(
    { activity_id: id },
    {
      enabled: !!id,
    },
  );
  return { activityGallery, isLoading, isFetched };
};

export const getActivityTimeDetail = (id: string) => {
  const {
    data: activityTimeDetail,
    isLoading,
    isFetched,
  } = api.activity.getActivityTimeDetailByActivityId.useQuery(
    { activity_id: id },
    {
      enabled: !!id,
    },
  );
  return { activityTimeDetail, isLoading, isFetched };
};

export const getUserActivityByUserId = (
  user_id: string,
  activity_id: string,
) => {
  const {
    data: userActivity,
    isLoading,
    isFetched,
  } = api.userActivity.getUserActivityByUserId.useQuery(
    { user_id, activity_id },
    {
      enabled: !!user_id && !!activity_id,
    },
  );
  return { userActivity, isLoading, isFetched };
};

export const getUserActivityCount = (activity_id: string) => {
  const {
    data: userActivityCount,
    isLoading,
    isFetched,
  } = api.userActivity.getUserActivityCount.useQuery(
    { activity_id },
    {
      enabled: !!activity_id,
    },
  );
  return { userActivityCount, isLoading, isFetched };
};
