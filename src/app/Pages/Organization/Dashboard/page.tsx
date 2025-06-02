// DUMMY PAGE UNTUK VERIFIKASI ORGANISASI
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  fetchOrganizationActivity,
  getOrganizationFollowerByOrganizationId,
  getOrganizationTestimony,
} from "~/app/api/organization/dashboard";
import { Button } from "~/app/Components/button";
import CancelActivityDialog from "~/app/Components/CancelActivityDialog";
import EmptyMessage from "~/app/Components/EmptyMessage";
import Spinner from "~/app/Components/Spinner";
import { useSession } from "~/hooks/use-session";
import { activityStatusText, isBeforeOrSameDate } from "~/lib/utils";
import guestImage from "~/app/Assets/guest.png";
import { FaStar } from "react-icons/fa";

export default function OrganizationPage() {
  const session = useSession();
  const [loading, setLoading] = useState(false);

  console.log(session?.user.organization_id);

  const { organizationActivity, isLoading } = fetchOrganizationActivity(
    session?.user.organization_id ?? "",
  );

  const { organizationFollower } = getOrganizationFollowerByOrganizationId(
    session?.user.organization_id ?? "",
  );

  const { organizationTestimony } = getOrganizationTestimony(
    session?.user.organization_id ?? "",
  );

  return (
    <main className="flex flex-col gap-6 bg-[#F8EDE3] p-10">
      <h1 className="text-[2em] font-bold">Dashboard</h1>
      <section className="flex min-h-80 flex-col rounded-lg bg-white shadow-md">
        <div className="relative flex h-full flex-col gap-5 p-5">
          <div>
            <h1 className="text-2xl">Event Anda</h1>
          </div>
          <div>
            {(isLoading || loading) && <Spinner />}
            {!isLoading && organizationActivity && (
              <>
                <hr className="mb-2 border-[1px] border-gray-500" />
                {organizationActivity.map((proses) => (
                  <div
                    key={proses.id}
                    className="flex flex-col justify-between gap-5 py-2"
                  >
                    <div className="flex flex-row justify-between gap-5">
                      <div className="flex flex-row gap-5">
                        {proses.thumbnail && (
                          <Image
                            src={proses.thumbnail}
                            alt="hehe"
                            width={190}
                            height={200}
                            className="h-20 w-24 rounded-lg object-cover"
                          />
                        )}

                        <div className="flex flex-col gap-2">
                          <h1 className="line-clamp-1 break-all">
                            {proses.name}
                          </h1>
                          <p>
                            Status :{" "}
                            {activityStatusText(
                              proses.registration_deadline_date,
                              proses.start_date,
                              proses.end_date,
                            )}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="h-fit rounded-full bg-gray-200 p-2 text-sm max-sm:hidden">
                          {proses.activityType}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="line-clamp-2 w-full break-words">
                        {proses.desc}
                      </p>
                    </div>
                    <div className="flex flex-row flex-wrap gap-2">
                      <Link
                        href={`/Pages/Organization/ManageEvent/${proses.id}`}
                      >
                        <Button className="bg-green-500 text-white hover:bg-green-700">
                          Manage
                        </Button>
                      </Link>
                      {isBeforeOrSameDate(
                        new Date(),
                        new Date(proses.registration_deadline_date),
                      ) && (
                        <CancelActivityDialog
                          setLoading={setLoading}
                          activityId={proses.id}
                        />
                      )}
                    </div>
                    <hr className="border-[1px] border-gray-500" />
                  </div>
                ))}
              </>
            )}
            {!isLoading &&
              (!organizationActivity || organizationActivity.length <= 0) && (
                <EmptyMessage
                  msg="Belum ada aktivitas, nih!"
                  link="/Pages/Organization/CreateActivity"
                  placeholderBtn="Buat Aktivitas"
                />
              )}
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-2 rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-lg font-semibold">Follower</h2>
        <div className="flex flex-row flex-wrap gap-10 break-all">
          {organizationFollower && organizationFollower.length > 0 ? (
            organizationFollower.map((follower) => (
              <div
                key={follower.followOrganization.user_id}
                className="flex flex-row items-center gap-2"
              >
                {follower.user.image ? (
                  <Image
                    src={follower.user.image}
                    alt="Profile Picture"
                    width={50}
                    height={50}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                ) : (
                  <Image
                    src={guestImage}
                    alt="Profile Picture"
                    width={50}
                    height={50}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                )}
                <div className="flex flex-col">
                  <p>{follower.user.name}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center p-4">
              <p>Organisasi ini belum mempunyai pengikut</p>
            </div>
          )}
        </div>
      </section>
      <section className="flex flex-col gap-2 rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-lg font-semibold">Testimoni</h2>
        <div className="flex flex-col gap-4">
          {organizationTestimony && organizationTestimony.length > 0 ? (
            organizationTestimony.map((testimony) => (
              <div
                key={testimony.userActivity.id}
                className="flex flex-col gap-2 border-b pb-2"
              >
                <p className="break-all font-semibold">{testimony.user.name}</p>
                <div className="flex flex-row gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`h-4 w-4 cursor-pointer ${
                        star <= testimony.activityRatingReview.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    {new Date(
                      testimony.activityRatingReview.created_at,
                    ).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <Link
                    className="break-all text-sm text-gray-500"
                    href={`/Pages/activity/${testimony.activity.id}`}
                    prefetch={true}
                    shallow={true}
                  >
                    {testimony.activity.name}
                  </Link>
                </div>
                <p className="break-all">
                  {testimony.activityRatingReview.review}
                </p>
              </div>
            ))
          ) : (
            <div className="flex items-center p-4">
              <p>Belum ada testimoni</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
