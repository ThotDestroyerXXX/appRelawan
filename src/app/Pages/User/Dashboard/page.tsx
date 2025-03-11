"use client";
import {
  fetchProsesSeleksi,
  fetchFollowedOrganization,
} from "~/app/api/Dashboard/Dashboard";
import EmptyMessage from "~/app/_Components/EmptyMessage";
import Spinner from "~/app/_Components/Spinner";
import { authClient } from "~/lib/auth-client";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";

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
    <main className="flex flex-col gap-6 bg-[#F8EDE3] pb-10 pl-10 pr-10">
      <ToastContainer />
      <h1 className="text-[2em] font-bold">Dashboard</h1>
      <section className="flex h-80 flex-col rounded-lg bg-white shadow-md">
        <div className="relative flex h-full flex-col justify-between p-5">
          <div>
            <h2>Proses Seleksi</h2>
          </div>
          <div>
            {isLoadingProsesSeleksi && <Spinner />}
            {!isLoadingProsesSeleksi && prosesSeleksi && (
              <>
                {prosesSeleksi.map((proses) => (
                  <div key={proses.activity.id}>
                    <h1>{proses.activity.name}</h1>
                    <p>Status : {proses.userActivityStatus.name}</p>
                  </div>
                ))}
              </>
            )}
            {!isLoadingProsesSeleksi &&
              (!prosesSeleksi || prosesSeleksi.length <= 0) && (
                <EmptyMessage
                  msg="Belum ada aktivitas, nih!"
                  link="/Pages/CariAktivitas"
                  placeholderBtn="Cari Aktivitas"
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
          <div>
            {isLoadingFollowedOrganization && <Spinner />}
            {!isLoadingFollowedOrganization && followedOrganization && (
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
          </div>
        </div>
      </section>
    </main>
  );
}
