import { SubmitJoinActivity } from "../api/joinActivity/join";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export default function JoinActivityDialog({
  setLoading,
  activityId,
  userId,
}: Readonly<{
  setLoading: (loading: boolean) => void;
  activityId: string;
  userId: string;
}>) {
  const { handleSubmit } = SubmitJoinActivity(setLoading);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-10 w-full bg-green-500 hover:bg-green-700">
          Join Aktivitas
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pertanyaan Konfirmasi</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={(e) =>
            handleSubmit({
              e,
              userId,
              activityId,
              requireConfirmation: true,
            })
          }
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="question1" className="text-sm font-medium">
                Apa alasan anda bergabung dengan aktivitas ini?
              </label>
              <input
                type="text"
                id="question1"
                name="question1"
                className="h-10 w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Masukkan alasan anda bergabung"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="question2" className="text-sm font-medium">
                Apa kontribusi yang bisa anda berikan untuk aktivitas ini?
              </label>
              <input
                type="text"
                id="question2"
                name="question2"
                className="h-10 w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Masukkan kontribusi anda"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="current_job" className="text-sm font-medium">
                Apa pekerjaan anda saat ini?
              </label>
              <input
                type="text"
                id="current_job"
                name="current_job"
                className="h-10 w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Masukkan pekerjaan anda saat ini"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone_number" className="text-sm font-medium">
                Nomor HP
              </label>
              <input
                type="text"
                id="phone_number"
                name="phone_number"
                className="h-10 w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Masukkan nomor HP anda"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="mt-4 w-full bg-green-500 hover:bg-green-700"
            >
              Bergabung
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
