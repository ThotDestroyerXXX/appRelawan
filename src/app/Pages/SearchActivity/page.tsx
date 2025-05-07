"use client";
import { getListActivity } from "~/app/api/searchActivity/search";
import { formatDate } from "~/lib/utils";
import Image from "next/image";
import { Calendar, MapPin, UsersRound } from "lucide-react";
import Link from "next/link";
import Loading from "~/app/Components/loading";

export default function SearchActivity() {
  const { listActivity, isLoading } = getListActivity();

  return (
    <>
      {isLoading && <Loading />}
      <main className="flex min-h-screen flex-col gap-6 bg-[#F8EDE3] p-5">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Cari Aktivitas</h1>
          <p className="text-gray-500">
            Cari aktivitas yang ingin anda lakukan
          </p>
        </div>
        <div>
          {!isLoading && listActivity && listActivity.length > 0 ? (
            <div className="flex flex-row flex-wrap gap-4">
              {listActivity.map((activity) => (
                <Link
                  href={`/Pages/activity/${activity.id}`}
                  key={activity.id}
                  shallow={true}
                  prefetch={true}
                >
                  <div className="flex min-h-[35rem] max-w-[25rem] flex-col gap-3 rounded-lg bg-white p-4 shadow-md">
                    {activity.thumbnail && (
                      <Image
                        src={activity.thumbnail}
                        alt="Activity Thumbnail"
                        width={200}
                        height={200}
                        className="h-30 w-full rounded-lg object-cover"
                      />
                    )}
                    <div className="flex flex-row flex-nowrap items-center gap-2 overflow-hidden">
                      <p className="h-fit truncate rounded-lg bg-gray-200 p-1 px-2 text-sm">
                        {activity.activityCategory1}
                      </p>
                      {activity.activityCategory2 !==
                        activity.activityCategory1 && (
                        <p className="h-fit truncate rounded-lg bg-gray-200 p-1 px-2 text-sm">
                          {activity.activityCategory2}
                        </p>
                      )}
                    </div>
                    <h2 className="line-clamp-2 break-all text-justify text-base font-medium">
                      {activity.name}
                    </h2>
                    <p className="line-clamp-2 break-all text-justify text-sm">
                      {activity.desc}
                    </p>
                    <div className="flex flex-row items-center gap-3">
                      {activity.company_logo && (
                        <Image
                          src={activity.company_logo}
                          alt="Company Logo"
                          width={30}
                          height={30}
                          className="rounded-full object-cover"
                        />
                      )}
                      <p className="text-sm text-gray-600">
                        {activity.company}
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <UsersRound className="h-5 w-5" />
                      <p className="text-sm">{activity.activityType}</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      <p className="text-sm">
                        {activity.start_date == activity.end_date ? (
                          <>{formatDate(activity.start_date)}</>
                        ) : (
                          <>
                            {formatDate(activity.start_date)} -{" "}
                            {formatDate(activity.end_date)}
                          </>
                        )}
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      <p>
                        {activity.locationType === "Virtual" ||
                        activity.locationType === "Hybrid" ? (
                          <span className="text-sm">
                            {activity.locationType}
                          </span>
                        ) : (
                          <span className="text-sm">{activity.province}</span>
                        )}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Tidak ada aktivitas yang ditemukan</p>
          )}
        </div>
      </main>
    </>
  );
}
