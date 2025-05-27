import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { api } from "~/trpc/react";

export default function ChangePassword(setLoading: (loading: boolean) => void) {
  const utils = api.useUtils();
  const router = useRouter();
  const { mutate } = api.user.changePassword.useMutation({
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: async () => {
      setLoading(false);
      await utils.invalidate();
      toast.success("Password changed successfully.");
      router.push("/Pages/User/UserProfile");
      router.refresh();
    },
    onError: (error) => {
      setLoading(false);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    },
  });

  const handleChangePassword = (
    currentPassword: string,
    newPassword: string,
    userId: string,
  ) => {
    setLoading(true);
    if (!currentPassword || !newPassword) {
      setLoading(false);
      toast.error("Current password and new password are required.");
      return;
    }
    try {
      mutate({
        oldPass: currentPassword,
        newPass: newPassword,
        userId: userId,
      });
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };
  return { handleChangePassword };
}
