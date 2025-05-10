import { type UserDataTableProps } from "~/lib/interface";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "./ui/table";
import { Button } from "./button";
import { UpdateUserActivityStatus } from "../api/ManageActivity/manage";
import { isBeforeOrSameDate } from "~/lib/utils";

const actionButton = (
  status: string,
  user_activity_id: string,
  handleUpdateUserActivityStatus: ({
    user_activity_id,
    status_id,
  }: {
    user_activity_id: string;
    status_id: number;
  }) => void,
) => {
  switch (status) {
    case "Dalam Review":
      return (
        <Button
          className="h-10 w-full bg-green-500 hover:bg-green-700"
          onClick={(e) => {
            e.preventDefault();
            handleUpdateUserActivityStatus({
              user_activity_id: user_activity_id,
              status_id: 2,
            });
          }}
        >
          Terima
        </Button>
      );
    case "Diterima":
      return (
        <div className="flex flex-row gap-2">
          <Button
            className="h-10 w-full bg-yellow-500 hover:bg-yellow-700"
            onClick={(e) => {
              e.preventDefault();
              handleUpdateUserActivityStatus({
                user_activity_id: user_activity_id,
                status_id: 5,
              });
            }}
          >
            Hilang
          </Button>
          <Button
            className="h-10 w-full bg-red-500 hover:bg-red-700"
            onClick={(e) => {
              e.preventDefault();
              handleUpdateUserActivityStatus({
                user_activity_id: user_activity_id,
                status_id: 3,
              });
            }}
          >
            Mengundurkan Diri
          </Button>
        </div>
      );
    default:
      return;
  }
};

export function UserDataTable({
  userData,
  limit,
  start_date,
  end_date,
  setLoading,
}: Readonly<{
  userData: UserDataTableProps[];
  limit: number;
  start_date: string;
  end_date: string;
  setLoading: (loading: boolean) => void;
}>) {
  const { handleUpdateUserActivityStatus } =
    UpdateUserActivityStatus(setLoading);
  return (
    <div className="flex flex-col gap-2">
      <p>
        Diterima :{" "}
        {
          userData.filter((data) => data.userActivityStatus === "Diterima")
            .length
        }
      </p>
      <Table className="border-separate rounded-md border-[1px] border-black bg-white text-black shadow-md">
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-24 text-center">Nama</TableHead>
            <TableHead className="min-w-36 text-center">Email</TableHead>
            <TableHead className="min-w-36 text-center">Status</TableHead>
            {userData[0]?.userActivityApply && (
              <>
                <TableHead className="min-w-24 max-w-64 break-all text-center">
                  Alasan Bergabung
                </TableHead>
                <TableHead className="min-w-24 max-w-64 break-all text-center">
                  Kontribusi yang bisa diberikan
                </TableHead>
                <TableHead className="min-w-24 max-w-64 break-all text-center">
                  Pekerjaan saat ini
                </TableHead>
                <TableHead className="min-w-24 max-w-64 break-all text-center">
                  Nomor HP
                </TableHead>
              </>
            )}
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userData.map((data) => (
            <TableRow key={data.userActivity.id}>
              <TableCell className="min-w-24 max-w-64 break-all text-center font-medium">
                {data.user.name}
              </TableCell>
              <TableCell className="min-w-24 max-w-64 break-all text-center">
                {data.user.email}
              </TableCell>
              <TableCell className="min-w-24 max-w-64 break-all text-center">
                {data.userActivityStatus}
              </TableCell>
              {data.userActivityApply && (
                <>
                  <TableCell className="min-w-24 max-w-64 break-all text-center">
                    {data.userActivityApply.question_1}
                  </TableCell>
                  <TableCell className="min-w-24 max-w-64 break-all text-center">
                    {data.userActivityApply.question_2}
                  </TableCell>
                  <TableCell className="min-w-24 max-w-64 break-all text-center">
                    {data.userActivityApply.current_job}
                  </TableCell>
                  <TableCell className="min-w-24 max-w-64 break-all text-center">
                    {data.userActivityApply.phone_number}
                  </TableCell>
                </>
              )}
              <TableCell className="flex flex-row justify-center gap-2">
                {isBeforeOrSameDate(new Date(), new Date(end_date)) &&
                  (data.userActivityStatus !== "Dalam Review" ||
                    (data.userActivityStatus === "Dalam Review" &&
                      isBeforeOrSameDate(new Date(), new Date(start_date)) &&
                      userData.filter(
                        (data) => data.userActivityStatus === "Diterima",
                      ).length < limit)) &&
                  actionButton(
                    data.userActivityStatus,
                    data.userActivity.id,
                    handleUpdateUserActivityStatus,
                  )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
