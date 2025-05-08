"use client";
import { getOrganization } from "~/app/api/organization/dashboard";
import Loading from "~/app/Components/loading";
import Image from "next/image";
import { Flame, Users } from "lucide-react";
import Link from "next/link";

export default function SearchOrganization() {
  const { allOrganization, isLoading, isFetched } = getOrganization();

  return (
    <>
      {isLoading && !isFetched && <Loading />}
      <div className="flex flex-col gap-4 bg-[#F8EDE3] p-4">
        <h1 className="text-2xl font-bold">Search Organization</h1>
        <p className="text-gray-500">Search for an organization by name.</p>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Search for an organization..."
            className="rounded border border-gray-300 p-2"
          />
          <button className="rounded bg-blue-500 p-2 text-white hover:bg-blue-600">
            Search
          </button>
        </div>

        <div>
          <div className="flex flex-col gap-2">
            {/* Replace with actual search results */}
            {!!allOrganization && allOrganization.length > 0 ? (
              <>
                {allOrganization.map((org) => (
                  <Link
                    key={org.organization.id}
                    href={`/Pages/OrganizationDetail/${org.organization.id}`}
                    shallow={true}
                    prefetch={true}
                  >
                    <div className="flex flex-col gap-2 rounded-md bg-white p-4 shadow-md">
                      <div className="flex flex-row items-center">
                        {org.organization.logo_url && (
                          <Image
                            src={org.organization.logo_url}
                            alt="hehe"
                            width={50}
                            height={50}
                            className="h-20 w-20 rounded-full object-cover"
                          />
                        )}
                        <div className="ml-4 flex flex-col">
                          <h2 className="text-lg font-semibold">
                            {org.organization.name}
                          </h2>
                          <p className="text-gray-500">
                            {org.organization.province}, {org.organization.city}
                            , {org.organization.subdistrict},{" "}
                            {org.organization.ward}, Kode Pos{" "}
                            {org.organization.postal_code}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row gap-16 text-gray-500">
                        <div className="flex flex-row items-center gap-2">
                          <Users className="h-5 w-5" />
                          <p>{org.totalFollower} Pengikut</p>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                          <Flame className="h-5 w-5" />
                          <p>{org.totalActivity} Aktivitas</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </>
            ) : (
              <div className="flex items-center justify-between rounded border border-gray-300 p-4">
                <p>Tidak ada organisasi</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
