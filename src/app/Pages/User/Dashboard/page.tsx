"use client";
import { fetchProsesSeleksi } from "~/app/api/Dashboard/Dashboard";
import EmptyMessage from "~/app/Components/EmptyMessage";
import Spinner from "~/app/Components/Spinner";
import { authClient } from "~/lib/auth-client";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";

export default function Dashboard() {
  const user_id = authClient.useSession().data?.user.id;
  const { prosesSeleksi, isLoadingProsesSeleksi, error } = fetchProsesSeleksi(
    user_id ?? "",
  );

  useEffect(() => {
    if (error) {
      toast.error(error.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  }, [error]);

  return (
    <main className="flex flex-col gap-6 bg-[#F8EDE3] p-10">
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
              (!prosesSeleksi || prosesSeleksi.length <= 0) && <EmptyMessage />}
          </div>
        </div>
      </section>
    </main>
  );
}
