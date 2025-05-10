"use client";
import { getOrganization } from "~/app/api/organization/dashboard";
import Loading from "~/app/Components/loading";
import Link from "next/link";
import OrganizationCard from "~/app/Components/organization-card";
import { useState } from "react";

export default function SearchOrganization() {
  const { allOrganization, isLoading, isFetched } = getOrganization();
  const [search, setSearch] = useState<string>("");

  const filteredOrganizations = allOrganization?.filter((org) =>
    org.organization.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      {isLoading && !isFetched && <Loading />}
      <div className="flex min-h-screen flex-col gap-4 bg-[#F8EDE3] p-4">
        <h1 className="text-2xl font-bold">Search Organization</h1>
        <p className="text-gray-500">Search for an organization by name.</p>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Search for an organization..."
            className="rounded border border-gray-300 p-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div>
          <div className="flex flex-col gap-2">
            {/* Replace with actual search results */}
            {!!filteredOrganizations && filteredOrganizations.length > 0 ? (
              <>
                {filteredOrganizations.map((org) => (
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
            ) : (
              <div>
                <p>Tidak ada organisasi</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
