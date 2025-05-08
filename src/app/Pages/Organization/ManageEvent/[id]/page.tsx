"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import {
  getActivityByOrganizationId,
  getUserActivityApplyByActivityId,
  getUserActivityData,
} from "~/app/api/ManageActivity/manage";
import Loading from "~/app/Components/loading";
import { authClient } from "~/lib/auth-client";
import Image from "next/image";
import { UserDataTable } from "~/app/Components/userDataTable";

export default function ManageEvent({
  params,
}: Readonly<{ params: Promise<{ id: string }> }>) {
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState<string>("");
  const { data: session } = authClient.useSession();
  useEffect(() => {
    const fetchData = async () => {
      const { id } = await params;
      setId(id);
      setLoading(false);
    };
    fetchData().catch(() => {
      return redirect("/Pages/SearchActivity");
    });
  }, [params]);

  const { activity } = getActivityByOrganizationId({
    organization_id: session?.user.organization_id ?? "",
    activity_id: id,
  });

  const { userActivityData } = getUserActivityData({
    activity_id: id,
  });

  const { userActivity, isPending, isFetched } =
    getUserActivityApplyByActivityId({
      activity_id: id,
    });

  if (!session) {
    return;
  }

  if ((!id || !userActivity) && !loading && isFetched && !isPending) {
    redirect("/Pages/SearchActivity");
  }

  return (
    <>
      {(loading || isPending) && <Loading />}
      <div className="flex flex-col items-center gap-4 bg-[#F8EDE3] p-5">
        <h1 className="text-[2em] font-bold">Manage Event</h1>
        <div className="flex w-full flex-1 flex-col items-center gap-4">
          {activity?.thumbnail_url && (
            <Image
              src={activity?.thumbnail_url}
              alt="hehe"
              width={500}
              height={500}
              className="h-[16rem] w-[32rem] rounded-lg object-cover"
            />
          )}
          <h1 className="break-all text-xl font-semibold">{activity?.name}</h1>
        </div>
        <div className="flex w-full flex-col gap-2 overflow-hidden p-4">
          <p>Deadline Pendaftaran : {activity?.registration_deadline_date}</p>
          <p>Limit Orang : {activity?.activity_person_limit}</p>

          {userActivityData && userActivityData.length > 0 ? (
            <UserDataTable
              userData={userActivityData}
              limit={activity?.activity_person_limit ?? 0}
              end_date={activity?.end_date ?? ""}
              setLoading={setLoading}
            />
          ) : (
            <p>
              Belum ada yang mendaftar untuk event ini, silahkan tunggu hingga
              ada yang mendaftar
            </p>
          )}
        </div>
      </div>
    </>
  );
}
