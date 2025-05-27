import { CancelActivity } from "../api/ManageActivity/manage";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogClose,
} from "./ui/dialog";

export default function CancelActivityDialog({
  setLoading,
  activityId,
}: Readonly<{
  setLoading: (loading: boolean) => void;
  activityId: string;
}>) {
  const { handleCancelActivity } = CancelActivity(setLoading);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-red-500 text-white hover:bg-red-700">
          Batalkan Aktivitas
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pertanyaan Konfirmasi</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Aksi ini tidak dapat dibatalkan. Pastikan anda sudah yakin untuk
          membatalkan aktivitas ini.
        </DialogDescription>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              onClick={() => {
                handleCancelActivity({
                  activity_id: activityId,
                });
              }}
              className="bg-red-500 text-white hover:bg-red-700"
            >
              Batalkan Aktivitas
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
