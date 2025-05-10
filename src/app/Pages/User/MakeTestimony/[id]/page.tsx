"use client";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import {
  getActivityDetail,
  getUserActivityByUserId,
} from "~/app/api/searchActivity/search";
import { authClient } from "~/lib/auth-client";
import { FaStar } from "react-icons/fa"; // Import FontAwesome star icon
import { isBeforeOrSameDate } from "~/lib/utils";
import Loading from "~/app/Components/loading";
import { SubmitTestimony } from "~/app/api/testimony/testimony";

export default function TestimonyDetailPage({
  params,
}: Readonly<{
  params: Promise<{ id: string }>;
}>) {
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState<string>("");
  const [rating, setRating] = useState<number>(0); // State to store the selected rating
  const { data: session } = authClient.useSession();

  useEffect(() => {
    const fetchData = async () => {
      const { id } = await params;
      setId(id);
      setLoading(false);
    };
    fetchData().catch(() => {
      return redirect("/Pages/User/MakeTestimony");
    });
  }, [params]);

  const {
    userActivity,
    isLoading: userActivityLoading,
    isFetched: userActivityFetched,
  } = getUserActivityByUserId(session?.user.id ?? "", id);
  const { activityDetail, isLoading, isFetched } = getActivityDetail(id);

  const { handleSubmit } = SubmitTestimony(setLoading);
  if (
    ((!activityDetail || !userActivity) &&
      !isLoading &&
      isFetched &&
      !userActivityLoading &&
      userActivityFetched) ||
    (activityDetail &&
      !isLoading &&
      isFetched &&
      !isBeforeOrSameDate(
        new Date(activityDetail?.activity.end_date ?? ""),
        new Date(),
      ))
  ) {
    return redirect("/Pages/User/MakeTestimony");
  }

  return (
    <>
      {(loading || isLoading) && <Loading />}
      <div className="flex flex-col items-center gap-4 bg-[#F8EDE3] p-5">
        <h1 className="text-[2em] font-bold">Testimony</h1>
        <div className="flex w-full flex-1 flex-col items-center gap-4">
          {activityDetail?.activity.thumbnail_url && (
            <Image
              src={activityDetail.activity.thumbnail_url}
              alt="Activity Thumbnail"
              width={200}
              height={200}
              className="h-54 w-96 rounded-lg object-cover"
            />
          )}
          <div className="flex flex-col gap-2">
            <h1 className="break-all text-lg font-semibold">
              {activityDetail?.activity.name}
            </h1>
            <div className="flex flex-row items-center gap-2">
              {activityDetail?.organization.logo_url && (
                <Image
                  src={activityDetail.organization.logo_url}
                  alt="Organization Logo"
                  width={50}
                  height={50}
                  className="h-8 w-8 rounded-full object-cover"
                />
              )}
              <p>{activityDetail?.organization.name}</p>
            </div>
          </div>

          {/* Rating System */}

          <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-4 shadow-md">
            <form
              onSubmit={(e) => {
                handleSubmit({
                  e,
                  rating,
                  activity_id: id,
                  user_id: session?.user.id ?? "",
                });
              }}
            >
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-lg font-semibold">
                  Berikan Rating Aktivitas ini
                </h2>
                <div className="flex flex-row gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`h-8 w-8 cursor-pointer ${
                        star <= rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                      onClick={() => setRating(star)} // Set the rating when a star is clicked
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  {rating > 0
                    ? `Anda memberikan rating ${rating}`
                    : "Klik untuk memberikan rating"}
                </p>
              </div>

              {/* Testimony Input */}
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-semibold">
                  Berikan Testimoni Anda
                </h2>
                <textarea
                  className="w-full rounded-lg border border-gray-300 p-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  rows={5}
                  name="testimony"
                  placeholder="Tulis testimoni Anda di sini..."
                />
              </div>

              {/* Submit Button */}
              <button
                className="mt-4 w-full rounded-lg bg-green-500 p-2 text-white hover:bg-green-600 disabled:opacity-50"
                type="submit"
                disabled={rating === 0 || loading}
              >
                Kirim Testimoni
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
