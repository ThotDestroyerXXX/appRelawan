import { TRPCClientError } from "@trpc/client";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { showErrorMessage } from "~/lib/utils";
import { api } from "~/trpc/react";
import { v4 as uuidv4 } from "uuid";

export const SubmitJoinActivity = (setLoading: (loading: boolean) => void) => {
  const utils = api.useUtils();
  const router = useRouter();

  const { mutateAsync: mutateUserActivity } =
    api.userActivity.createUserActivity.useMutation({
      onMutate: () => {
        setLoading(true);
      },
      onError: (error) => {
        showErrorMessage(error);
        setLoading(false);
      },
    });

  const { mutateAsync: mutateUserActivityApply } =
    api.userActivity.createUserActivityApply.useMutation({
      onMutate: () => {
        setLoading(true);
      },
      onError: (error) => {
        showErrorMessage(error);
        setLoading(false);
      },
    });

  const handleSubmit = async ({
    e,
    userId,
    activityId,
    requireConfirmation,
  }: {
    e: React.FormEvent<HTMLFormElement>;
    userId: string;
    activityId: string;
    requireConfirmation: boolean;
  }) => {
    e.preventDefault();
    setLoading(true);

    if (!requireConfirmation) {
      try {
        await mutateUserActivity({
          user_id: userId,
          activity_id: activityId,
          user_activity_status_id: 1,
        });
        await utils.invalidate();
        setLoading(false);
        router.push("/Pages/User/Dashboard");
        return;
      } catch (error) {
        if (error instanceof z.ZodError || error instanceof TRPCClientError) {
          showErrorMessage(error);
        }
        setLoading(false);
      }
    } else {
      const formData = new FormData(e.currentTarget);
      const question1 = formData.get("question1") as string;
      const question2 = formData.get("question2") as string;
      const currentJob = formData.get("current_job") as string;
      const phoneNumber = formData.get("phone_number") as string;

      const activitySchema = z.object({
        question1: z
          .string()
          .nonempty("Question 1 is required")
          .max(100, "Question 1 must be at most 100 characters"),
        question2: z
          .string()
          .nonempty("Question 2 is required")
          .max(100, "Question 2 must be at most 100 characters"),
        currentJob: z
          .string()
          .nonempty("Current job is required")
          .max(100, "Current job must be at most 100 characters"),
        phoneNumber: z
          .string()
          .nonempty("Phone number is required")
          .max(20, "Phone number must be at max 20 characters"),
      });

      try {
        const activityData = {
          question1: question1,
          question2: question2,
          currentJob: currentJob,
          phoneNumber: phoneNumber,
        };

        // Validate the data using zod
        activitySchema.parse(activityData);
      } catch (error) {
        if (error instanceof z.ZodError) {
          showErrorMessage(error);
        }
        setLoading(false);
        return;
      }
      try {
        const userActivityId = await mutateUserActivity({
          user_id: userId,
          activity_id: activityId,
          user_activity_status_id: 1,
        });
        await utils.invalidate();
        console.log(userActivityId[0]?.id);
        if (userActivityId[0]?.id) {
          await mutateUserActivityApply({
            user_activity_id: userActivityId[0]?.id ?? uuidv4(),
            question1: question1,
            question2: question2,
            current_job: currentJob,
            phone_number: phoneNumber,
          });

          await utils.invalidate();

          setLoading(false);
          router.push("/Pages/User/Dashboard");
          return;
        }
      } catch (error) {
        if (error instanceof z.ZodError || error instanceof TRPCClientError) {
          showErrorMessage(error);
        }
        setLoading(false);
        return;
      }
    }
  };
  return { handleSubmit };
};
