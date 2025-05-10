"use client";

import {
  getFinishedUserActivityByUserId,
  getTestimonyByUserId,
} from "~/app/api/testimony/testimony";
import EmptyMessage from "~/app/Components/EmptyMessage";
import Spinner from "~/app/Components/Spinner";
import { authClient } from "~/lib/auth-client";
import Image from "next/image";
import { formatDate, userActivityStatusText } from "~/lib/utils";
import Link from "next/link";

export default function MakeTestimonyPage() {
  const { data: session } = authClient.useSession();
  const { testimony } = getTestimonyByUserId({
    user_id: session?.user.id ?? "",
  });
  const { finishedActivity, isLoading, isFetched } =
    getFinishedUserActivityByUserId(session?.user.id ?? "");

  return (
    <div className="bg- flex min-h-screen flex-col gap-4 bg-[#F8EDE3] p-8">
      <h1 className="text-2xl font-bold">Buat Testimoni</h1>

      <div className="flex h-full flex-col gap-4 rounded-lg bg-white p-4 shadow-md">
        <h2 className="text-lg font-semibold">
          Aktivitas yang telah selesai diikuti
        </h2>
        <div className="flex flex-col gap-4">
          {isLoading && (
            <div className="flex items-center justify-center">
              <Spinner />
            </div>
          )}
          {isFetched && finishedActivity?.length === 0 && (
            <div className="flex items-center justify-center">
              <EmptyMessage
                link="/Pages/activity"
                msg="Belum ada aktivitas, nih!"
                placeholderBtn="Cari Aktivitas"
              />
            </div>
          )}
          {finishedActivity?.map((proses) => (
            <Link
              key={proses.activity.id}
              shallow={true}
              prefetch={true}
              href={`/Pages/User/MakeTestimony/${proses.activity.id}`}
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-5 rounded-lg bg-white p-4 shadow-md max-sm:flex-col">
                  {proses.activity.thumbnail_url && (
                    <Image
                      src={proses.activity.thumbnail_url}
                      alt="hehe"
                      width={200}
                      height={200}
                      className="w-52 rounded-lg object-cover max-sm:w-full"
                    />
                  )}
                  <div className="flex flex-col gap-2">
                    <h1 className="line-clamp-1 break-all">
                      {proses.activity.name}
                    </h1>

                    <div className="flex flex-row items-center gap-2">
                      {proses.organization.logo_url && (
                        <Image
                          src={proses.organization.logo_url}
                          alt="hehe"
                          width={50}
                          height={50}
                          className="h-8 w-8 rounded-full object-cover"
                        />
                      )}
                      <div className="flex flex-col gap-1">
                        <h1 className="text-sm text-gray-500">
                          {proses.organization.name}
                        </h1>
                      </div>
                    </div>
                    <p className="text-sm">
                      Status :{" "}
                      {userActivityStatusText(
                        proses.userActivityStatus,
                        proses.activity.start_date,
                        proses.activity.end_date,
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex h-full flex-col gap-4 rounded-lg bg-white p-4 shadow-md">
        <h2 className="text-lg font-semibold">Testimoni anda</h2>
        <div className="flex flex-col gap-4">
          {isLoading && (
            <div className="flex items-center justify-center">
              <Spinner />
            </div>
          )}
          {isFetched && testimony?.length === 0 && (
            <div className="flex items-center justify-center">
              <EmptyMessage msg="Belum ada testimoni, nih!" />
            </div>
          )}
          {testimony?.map((activity) => (
            <div
              key={activity.activity.id}
              className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-md"
            >
              <Link
                href={`/Pages/activity/${activity.activity.id}`}
                className="line-clamp-1 break-all text-lg text-green-700 underline"
                prefetch={true}
                shallow={true}
              >
                {activity.activity.name}
              </Link>
              <Link
                href={`/Pages/SearchOrganization/${activity.organization.id}`}
                prefetch={true}
                shallow={true}
              >
                <div className="flex flex-row items-center gap-2">
                  {activity.organization.logo_url && (
                    <Image
                      src={activity.organization.logo_url}
                      alt="Organization Logo"
                      width={50}
                      height={50}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  )}
                  <div className="flex flex-col gap-1">
                    <p className="text-sm">{activity.organization.name}</p>
                    <p className="text-sm text-gray-500">
                      Created at{" "}
                      {formatDate(
                        activity.activityRatingReview.created_at.toString(),
                      )}
                    </p>
                  </div>
                </div>
              </Link>
              <h3 className="break-all">
                {activity.activityRatingReview.review}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
