import { useRouter } from "next/navigation";
import { showErrorMessage } from "~/lib/utils";
import { api } from "~/trpc/react";

export const getFinishedUserActivityByUserId = (user_id: string) => {
  const {
    data: finishedActivity,
    isLoading,
    isFetched,
  } = api.userActivity.getFinishedUserActivityByUserId.useQuery(
    {
      user_id,
    },
    {
      enabled: !!user_id,
    },
  );
  return {
    finishedActivity,
    isLoading,
    isFetched,
  };
};

export const getTestimonyByUserId = ({ user_id }: { user_id: string }) => {
  const {
    data: testimony,
    isLoading,
    isFetched,
  } = api.userActivity.getTestimonyByUserId.useQuery(
    {
      user_id,
    },
    {
      enabled: !!user_id,
    },
  );
  return {
    testimony,
    isLoading,
    isFetched,
  };
};

export const SubmitTestimony = (setLoading: (loading: boolean) => void) => {
  const utils = api.useUtils();
  const router = useRouter();
  const { mutate } = api.activity.createActivityRatingReview.useMutation({
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: async () => {
      await utils.invalidate();
      router.push("/Pages/User/MakeTestimony");
      router.refresh();
      setLoading(false);
    },
    onError: (error) => {
      showErrorMessage(error);
      setLoading(false);
    },
  });

  const handleSubmit = ({
    e,
    rating,
    activity_id,
    user_id,
  }: {
    e: React.FormEvent<HTMLFormElement>;
    rating: number;
    activity_id: string;
    user_id: string;
  }) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const testimony = formData.get("testimony") as string;
    mutate({
      user_id,
      rating,
      review: testimony,
      activity_id,
    });
  };
  return {
    handleSubmit,
  };
};
