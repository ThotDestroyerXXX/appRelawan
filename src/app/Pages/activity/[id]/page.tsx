"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import {
  getActivityDetail,
  getActivityGallery,
  getActivityTimeDetail,
  getUserActivityByUserId,
  getUserActivityCount,
} from "~/app/api/searchActivity/search";
import Image from "next/image";
import { Calendar, Clock, Info, MapPin, User, UsersRound } from "lucide-react";
import { formatDate, formatTimeDisplay } from "~/lib/utils";
import { Button } from "~/app/Components/button";
import JoinActivityDialog from "~/app/Components/joinActivityDialog";
import Loading from "~/app/Components/loading";
import { authClient } from "~/lib/auth-client";
import { SubmitJoinActivity } from "~/app/api/joinActivity/join";

export default function ActivityDetail({
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
  const { activityTimeDetail } = getActivityTimeDetail(id);
  const { userActivity } = getUserActivityByUserId(session?.user.id ?? "", id);
  const { activityGallery } = getActivityGallery(id);
  const { userActivityCount } = getUserActivityCount(id);
  const { activityDetail, isLoading, isFetched } = getActivityDetail(id);

  const { handleSubmit } = SubmitJoinActivity(setLoading);

  // First Condition: Check if the user is not a Binusian and the activity is Binusian-only
  const isBinusianOnly =
    session && activityDetail
      ? (!session && activityDetail?.activity.binusian_only) ||
        (!session?.user.email.endsWith("@binus.ac.id") &&
          activityDetail?.activity.binusian_only)
      : activityDetail?.activity.binusian_only;

  const binusianOnlyAndEmailVerified =
    session?.user.email.endsWith("@binus.ac.id") &&
    !session?.user.emailVerified &&
    activityDetail?.activity.binusian_only;

  // Second Condition: Check if the person limit has been reached
  const isPersonLimitReached =
    (activityDetail?.activity.activity_person_limit ?? 0) <=
    (userActivityCount ?? 0);

  // Third Condition: Check if the activity requires confirmation
  const requiresConfirmation = activityDetail?.activity.require_confirmation;

  // Render the appropriate component based on the conditions
  let actionComponent;

  if (isBinusianOnly) {
    actionComponent = (
      <Button className="h-10 w-full bg-gray-500" type="button" disabled={true}>
        Binusian Only
      </Button>
    );
  } else if (binusianOnlyAndEmailVerified) {
    actionComponent = (
      <Button className="h-10 w-full bg-gray-500" type="button" disabled={true}>
        Email binus belum terverifikasi
      </Button>
    );
  } else if (isPersonLimitReached) {
    actionComponent = (
      <Button className="h-10 w-full bg-red-500" type="button" disabled={true}>
        Telah mencapai limit pendaftar
      </Button>
    );
  } else if (requiresConfirmation) {
    actionComponent = (
      <JoinActivityDialog
        setLoading={setLoading}
        activityId={activityDetail.activity.id}
        userId={session?.user.id ?? ""}
      />
    );
  } else {
    actionComponent = (
      <form
        onSubmit={(e) =>
          handleSubmit({
            e,
            userId: session?.user.id ?? "",
            activityId: activityDetail?.activity.id ?? "",
            requireConfirmation: false,
          })
        }
      >
        <Button
          className="h-10 w-full bg-green-500 hover:bg-green-700"
          type="submit"
        >
          Join Aktivitas
        </Button>
      </form>
    );
  }

  if (!activityDetail && !isLoading && isFetched) {
    return redirect("/Pages/activity");
  }

  return (
    <>
      {(loading || (isLoading && !isFetched)) && <Loading />}
      <div className="flex min-h-screen flex-col gap-4 bg-[#F8EDE3] p-5">
        <div className="flex w-full flex-row justify-between gap-4 max-lg:flex-col">
          <div className="flex w-full flex-1 flex-col items-center gap-4">
            {activityDetail?.activity.thumbnail_url && (
              <Image
                src={activityDetail.activity.thumbnail_url}
                alt="hehe"
                width={500}
                height={500}
                className="h-full w-full rounded-lg object-cover"
              />
            )}
          </div>
          <div className="flex min-h-[25rem] flex-1 flex-col gap-4 rounded-lg bg-white p-4 shadow-md">
            <h1 className="break-all text-center text-2xl font-bold">
              {activityDetail?.activity.name}
            </h1>
            <div className="flex flex-row items-center gap-2 self-start">
              {activityDetail?.organization.logo_url && (
                <Image
                  src={activityDetail?.organization.logo_url}
                  alt="hehe"
                  width={50}
                  height={50}
                  className="h-10 w-10 rounded-full object-cover"
                />
              )}
              <p>{activityDetail?.organization.name}</p>
            </div>
            <div className="flex flex-row flex-wrap gap-4">
              <p className="rounded-lg bg-gray-200 p-1 px-2 text-sm">
                {activityDetail?.activityCategory1}
              </p>
              {activityDetail?.activityCategory2 !==
                activityDetail?.activityCategory1 && (
                <p className="rounded-lg bg-gray-200 p-1 px-2 text-sm">
                  {activityDetail?.activityCategory2}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-row items-center gap-2">
                <UsersRound className="h-5 w-5" />
                <p className="text-sm">{activityDetail?.activityType}</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Calendar className="h-5 w-5" />
              <p className="text-sm">
                {activityDetail?.activity.start_date ==
                activityDetail?.activity.end_date ? (
                  <>{formatDate(activityDetail?.activity.start_date ?? "")}</>
                ) : (
                  <>
                    {formatDate(activityDetail?.activity.start_date ?? "")} -{" "}
                    {formatDate(activityDetail?.activity.end_date ?? "")}
                  </>
                )}
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <Clock className="h-5 w-5" />
              <div className="flex flex-col gap-1">
                {activityTimeDetail?.map((time) => (
                  <p key={time.id} className="text-sm">
                    {time.day}, {formatTimeDisplay(time.start_time)} -{" "}
                    {formatTimeDisplay(time.end_time)}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <MapPin className="h-5 w-5" />
              <p>
                {activityDetail?.locationType === "Virtual" ||
                activityDetail?.locationType === "Hybrid" ? (
                  <span className="text-sm">
                    {activityDetail?.locationType}
                  </span>
                ) : (
                  <span className="text-sm">
                    {activityDetail?.activity.province},{" "}
                    {activityDetail?.activity.city},{" "}
                    {activityDetail?.activity.subdistrict},{" "}
                    {activityDetail?.activity.address}
                  </span>
                )}
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Info className="h-5 w-5" />
              <p className="text-sm">
                Pendaftaran ditutup pada{" "}
                {formatDate(
                  activityDetail?.activity.registration_deadline_date ?? "",
                )}
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <User className="h-5 w-5" />
              <p className="text-sm">
                Limit Pendaftar :{" "}
                {activityDetail?.activity.activity_person_limit} orang
              </p>
            </div>
            {activityDetail?.activity.binusian_only && (
              <div className="flex flex-row items-center gap-2">
                <Info className="h-5 w-5" />
                <p className="text-sm">Binusian Only</p>
              </div>
            )}
            {!session ||
            session?.user.organization_id ===
              activityDetail?.activity.organization_id ||
            !!userActivity ? (
              <></>
            ) : (
              <div>{actionComponent}</div>
            )}
          </div>
        </div>
        <div className="flex flex-row justify-around gap-2 rounded-lg bg-white p-4 shadow-md max-md:flex-col">
          <div className="flex-1 border-r border-black p-4 max-md:border-b max-md:border-r-0">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl">Deskripsi</h2>
              <p className="break-all text-gray-500">
                {activityDetail?.activityDetail.description}
              </p>
            </div>
          </div>
          <div className="flex-1 border-r border-black p-4 max-md:border-b max-md:border-r-0">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl">Detail Aktivitas</h2>
              <p className="break-all text-gray-500">
                {activityDetail?.activityDetail.activity_detail}
              </p>
            </div>
          </div>
          <div className="flex-1 p-4">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl">Pekerjaan</h2>
              <p className="break-all text-gray-500">
                {activityDetail?.activityDetail.job_detail}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl">Galeri</h2>
          <div className="flex flex-row flex-wrap gap-4">
            {activityGallery?.map((gallery) => (
              <Image
                key={gallery.activityGallery.id}
                src={gallery.activityGallery.image_url}
                alt="hehe"
                width={200}
                height={200}
                className="h-50 w-96 rounded-lg object-cover shadow-md transition-all duration-300 ease-in-out hover:scale-105 max-sm:h-40 max-sm:w-80"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
