import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { showErrorMessage } from "~/lib/utils";
import { api } from "~/trpc/react";

export default function ChangeName(setLoading: (loading: boolean) => void) {
  const router = useRouter();
  const { mutate } = api.user.updateUser.useMutation({
    onMutate: () => {
      setLoading(true);
    },
    onError: (error) => {
      showErrorMessage(error);
      setLoading(false);
    },
    onSuccess: () => {
      setLoading(false);
      toast.success("Name updated successfully");
      router.push("/Pages/User/UserProfile");
      router.refresh();
    },
  });

  const handleChangeName = async (
    e: React.FormEvent<HTMLFormElement>,
    userId: string,
  ) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    mutate({
      id: userId,
      newName: name,
    });
  };
  return {
    handleChangeName,
  };
}
