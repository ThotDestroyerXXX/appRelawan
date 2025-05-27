// DUMMY PAGE UNTUK VERIFIKASI ORGANISASI
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { fetchOrganizationActivity } from "~/app/api/organization/dashboard";
import { Button } from "~/app/Components/button";
import CancelActivityDialog from "~/app/Components/CancelActivityDialog";
import EmptyMessage from "~/app/Components/EmptyMessage";
import Spinner from "~/app/Components/Spinner";
import { useSession } from "~/hooks/use-session";
import { activityStatusText, isBeforeOrSameDate } from "~/lib/utils";

export default function OrganizationPage() {
  const session = useSession();
  const [loading, setLoading] = useState(false);

  console.log(session?.user.organization_id);

  const { organizationActivity, isLoading } = fetchOrganizationActivity(
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
                        <p className="h-fit rounded-full bg-gray-200 p-2 text-sm">
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
      <section className="flex h-80 flex-col rounded-lg bg-white shadow-md">
        <div className="relative flex h-full flex-col justify-between p-5">
          <div>
            <h2>Followed Organisasi</h2>
          </div>
          {/* <div>
            {isLoading && <Spinner />}
            {!isLoading && organizationActivity && (
              <>
                {followedOrganization.map((proses) => (
                  <div key={proses.id}>
                    <h1>{proses.name}</h1>
                    <p>
                      {proses.city}, {proses.province}
                    </p>
                    <div className="flex flex-row gap-6">
                      <p>{proses.totalActivity} Aktivitas</p>
                      <p>{proses.totalFollower} Pendukung</p>
                      <p>Rating: {proses.organizationRating}</p>
                    </div>
                  </div>
                ))}
              </>
            )}
            {!isLoadingFollowedOrganization &&
              (!followedOrganization || followedOrganization.length <= 0) && (
                <EmptyMessage
                  msg="Belum ada organisasi yang diikuti, nih!"
                  link="/Pages/CariOrganisasi"
                  placeholderBtn="Cari Organisasi"
                />
              )}
          </div> */}
        </div>
      </section>
    </main>
  );
}
