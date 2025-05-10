"use client";
import {
  fetchProsesSeleksi,
  fetchFollowedOrganization,
} from "~/app/api/Dashboard/Dashboard";
import EmptyMessage from "~/app/Components/EmptyMessage";
import Spinner from "~/app/Components/Spinner";
import { authClient } from "~/lib/auth-client";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { userActivityStatusText } from "~/lib/utils";
import Link from "next/link";
import OrganizationCard from "~/app/Components/organization-card";
import Image from "next/image";

export default function Dashboard() {
  const user_id = authClient.useSession().data?.user.id;
  const {
    followedOrganization,
    isLoadingFollowedOrganization,
    fetchFollowedOrganizationError,
  } = fetchFollowedOrganization(user_id ?? "");
  const { prosesSeleksi, isLoadingProsesSeleksi, error } = fetchProsesSeleksi(
    user_id ?? "",
  );

  useEffect(() => {
    if (error || fetchFollowedOrganizationError) {
      toast.error(
        error?.message ??
          fetchFollowedOrganizationError?.message ??
          "An unknown error occurred",
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
        },
      );
    }
  }, [error, fetchFollowedOrganizationError]);

  return (
    <main className="flex min-h-screen flex-col gap-6 bg-[#F8EDE3] pb-10 pl-10 pr-10">
      <ToastContainer />
      <h1 className="text-[2em] font-bold">Dashboard</h1>
      <section className="flex flex-col">
        <div className="flex h-full flex-col gap-2 rounded-lg bg-white p-5 shadow-md">
          <div>
            <h2 className="text-[1.5em] font-semibold">
              Aktivitas yang diikuti
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {isLoadingProsesSeleksi && (
              <div className="flex flex-row flex-wrap items-center gap-5 rounded-lg bg-white p-4 shadow-md">
                <Spinner />
              </div>
            )}
            {!isLoadingProsesSeleksi && prosesSeleksi && (
              <>
                {prosesSeleksi.map((proses) => (
                  <div key={proses.activity.id} className="flex flex-col gap-2">
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
                            proses.userActivityStatus.name,
                            proses.activity.start_date,
                            proses.activity.end_date,
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
            {!isLoadingProsesSeleksi &&
              (!prosesSeleksi || prosesSeleksi.length <= 0) && (
                <EmptyMessage
                  msg="Belum ada aktivitas, nih!"
                  link="/Pages/activity"
                  placeholderBtn="Cari Aktivitas"
                />
              )}
          </div>
        </div>
      </section>
      <section className="flex flex-col rounded-lg bg-white shadow-md">
        <div className="relative flex h-full flex-col gap-2 p-5">
          <div>
            <h2>Followed Organisasi</h2>
          </div>
          <div className="flex flex-col gap-4">
            {isLoadingFollowedOrganization && <Spinner />}
            {!isLoadingFollowedOrganization && followedOrganization && (
              <>
                {followedOrganization.map((org) => (
                  <Link
                    key={org.organization.id}
                    href={`/Pages/SearchOrganization/${org.organization.id}`}
                    shallow={true}
                    prefetch={true}
                  >
                    <OrganizationCard
                      organization={org.organization}
                      totalFollower={org.totalFollower}
                      totalActivity={org.totalActivity}
                    />
                  </Link>
                ))}
              </>
            )}
            {!isLoadingFollowedOrganization &&
              (!followedOrganization || followedOrganization.length <= 0) && (
                <EmptyMessage
                  msg="Belum ada organisasi yang diikuti, nih!"
                  link="/Pages/SearchOrganization"
                  placeholderBtn="Cari Organisasi"
                />
              )}
          </div>
        </div>
      </section>
    </main>
  );
}
