"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import {
  fetchOrganizationActivity,
  getOrganizationDetail,
  getOrganizationFollowerByOrganizationId,
} from "~/app/api/organization/dashboard";
import Loading from "~/app/Components/loading";
import Image from "next/image";
import { Button } from "~/app/Components/button";
import {
  UserRoundPlus,
  MapPin,
  House,
  Globe,
  PhoneCall,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { activityStatusText, formatDate } from "~/lib/utils";
import { authClient } from "~/lib/auth-client";
import {
  followOrganization,
  unfollowOrganization,
} from "~/app/api/follow/follow";
import guestImage from "~/app/Assets/guest.png";

export default function OrganizationDetailPage({
  params,
}: Readonly<{
  params: Promise<{ id: string }>;
}>) {
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState<string | null>(null);
  const { data: session } = authClient.useSession();
  useEffect(() => {
    const fetchData = async () => {
      const { id } = await params;
      setId(id);
      setLoading(false);
    };
    fetchData().catch(() => {
      return redirect("/Pages/activity");
    });
  }, [params]);

  const { handleFollowOrganization } = followOrganization({ setLoading });
  const { handleUnfollowOrganization } = unfollowOrganization({ setLoading });

  const { organizationFollower } = getOrganizationFollowerByOrganizationId(
    id ?? "",
  );

  const { organizationActivity } = fetchOrganizationActivity(id ?? "");

  const { organizationDetail, isLoading, isFetched } = getOrganizationDetail(
    id ?? "",
  );

  return (
    <div className="flex flex-col gap-4 bg-[#F8EDE3] p-4">
      {(loading || (isLoading && !isFetched)) && <Loading />}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Organization Detail</h1>
        <div className="flex flex-col gap-2 rounded-md bg-white p-4 shadow-md">
          <div
            key={organizationDetail?.organization.id}
            className="flex flex-col gap-2"
          >
            <div className="flex flex-row items-center gap-4">
              {organizationDetail?.organization.logo_url && (
                <Image
                  src={organizationDetail?.organization.logo_url}
                  alt="Profile Picture"
                  width={50}
                  height={50}
                  className="h-20 w-20 rounded-full object-cover"
                />
              )}
              <div className="flex flex-col gap-2 break-all">
                <h2 className="text-lg font-semibold">
                  {organizationDetail?.organization.name}
                </h2>
                <p className="text-gray-500">
                  Status:{" "}
                  {organizationDetail?.organization.is_active
                    ? "Aktif"
                    : "Tidak aktif"}
                </p>
                {!session?.user.organization_id && !!session && (
                  <>
                    {!organizationFollower?.some(
                      (follower) =>
                        follower.followOrganization.user_id === session.user.id,
                    ) ? (
                      <Button
                        className="bg-green-500 text-sm hover:bg-green-700"
                        onClick={(e) => {
                          e.preventDefault();
                          handleFollowOrganization({
                            user_id: session.user.id,
                            organization_id:
                              organizationDetail?.organization.id ?? "",
                          });
                        }}
                      >
                        <UserRoundPlus />
                        Ikuti Organisasi
                      </Button>
                    ) : (
                      <Button
                        className="bg-red-500 text-sm hover:bg-red-700"
                        onClick={(e) => {
                          e.preventDefault();
                          handleUnfollowOrganization({
                            user_id: session.user.id,
                            organization_id:
                              organizationDetail?.organization.id ?? "",
                          });
                        }}
                      >
                        <UserRoundPlus />
                        Unfollow Organisasi
                      </Button>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 break-all">
              <p className="text-gray-500">
                {organizationDetail?.organization.description}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-md bg-white p-6 shadow-md">
          <h2 className="text-lg font-semibold">Informasi Umum</h2>
          <div className="flex flex-col gap-4 break-all">
            <div className="flex flex-row items-center gap-2 break-all">
              <MapPin />
              <div className="flex flex-col break-all">
                <p>Lokasi</p>
                <p className="text-gray-500">
                  {organizationDetail?.organization.province},{" "}
                  {organizationDetail?.organization.city},{" "}
                  {organizationDetail?.organization.subdistrict}, Kode Pos{" "}
                  {organizationDetail?.organization.postal_code}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2 break-all">
              <House />
              <div className="flex flex-col break-all">
                <p>Alamat</p>
                <p className="text-gray-500">
                  {organizationDetail?.organization.address}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2 break-all">
              <Globe />
              <div className="flex flex-col break-all">
                <p>Website</p>
                <p className="text-gray-500">
                  {organizationDetail?.organization.website_url}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2 break-all">
              <PhoneCall />
              <div className="flex flex-col break-all">
                <p>Nomor Telepon</p>
                <p className="text-gray-500">
                  {organizationDetail?.organization.phone_number}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2 break-all">
              <Calendar />
              <div className="flex flex-col break-all">
                <p>Tanggal Berdiri</p>
                <p className="text-gray-500">
                  {formatDate(
                    organizationDetail?.organization.establishment_date ?? "",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-md bg-white p-6 shadow-md">
          <h2 className="text-lg font-semibold">Aktivitas</h2>
          <div className="flex flex-col gap-2">
            <hr className="mb-2 border-[1px] border-gray-500" />
            {organizationActivity && organizationActivity.length > 0 ? (
              organizationActivity.map((proses) => (
                <Link
                  key={proses.id}
                  href={`/Pages/activity/${proses.id}`}
                  shallow={true}
                  prefetch={true}
                >
                  <div className="flex flex-col justify-between gap-5 py-2">
                    <div className="flex flex-row justify-between gap-5">
                      <div className="flex flex-row gap-5">
                        {proses.thumbnail && (
                          <Image
                            src={proses.thumbnail}
                            alt="Activity Thumbnail"
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
                            Status:{" "}
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
                    <hr className="border-[1px] border-gray-500" />
                  </div>
                </Link>
              ))
            ) : (
              <div className="flex items-center justify-between p-4">
                <p>Organisasi ini belum mempunyai aktivitas</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-md bg-white p-6 shadow-md">
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
        </div>
      </div>
    </div>
  );
}
