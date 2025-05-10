import { type OrganizationCardProps } from "~/lib/interface";
import Image from "next/image";
import { Flame, Users } from "lucide-react";

export default function OrganizationCard({
  organization,
  totalFollower,
  totalActivity,
}: Readonly<OrganizationCardProps>) {
  return (
    <div className="flex flex-col gap-2 rounded-md bg-white p-4 shadow-md">
      <div className="flex flex-row items-center">
        {organization.logo_url && (
          <Image
            src={organization.logo_url}
            alt="hehe"
            width={50}
            height={50}
            className="h-11 w-11 rounded-full object-cover max-sm:h-10 max-sm:w-10"
          />
        )}
        <div className="ml-4 flex flex-col">
          <h2 className="text-lg font-semibold">{organization.name}</h2>
          <p className="line-clamp-1 break-all text-gray-500">
            {organization.province}, {organization.city},{" "}
            {organization.subdistrict}, {organization.ward}, Kode Pos{" "}
            {organization.postal_code}
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-16 text-gray-500">
        <div className="flex flex-row items-center gap-2">
          <Users className="h-5 w-5" />
          <p>{totalFollower} Pengikut</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Flame className="h-5 w-5" />
          <p>{totalActivity} Aktivitas</p>
        </div>
      </div>
    </div>
  );
}
