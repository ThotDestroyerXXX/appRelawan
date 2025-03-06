"use client";
import Image from "next/image";
import { useState } from "react";
import { useSignUp } from "~/app/api/SignUp/SignUp";
import chad from "~/app/Assets/chad.jpg";
import SignForm from "~/app/Components/signForm";
import TerritoryForm from "~/app/Components/territoryForm";
import { type TerritoryProps } from "~/app/Components/territoryForm";

const SignUpOrg = () => {
  const { handleSubmit, isPending, errors } = useSignUp();
  const [selectedProvince, setSelectedProvince] =
    useState<TerritoryProps | null>(null);
  const [selectedRegency, setSelectedRegency] = useState<TerritoryProps | null>(
    null,
  );
  const [selectedSubDistrict, setSelectedSubDistrict] =
    useState<TerritoryProps | null>(null);
  const [selectedWard, setSelectedWard] = useState<TerritoryProps | null>(null);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex h-full w-full flex-col items-center gap-4 bg-cream pb-5 pt-5">
        <Image
          src={chad}
          alt="chad"
          className="h-11 w-11 rounded-full object-cover"
        />
        <h2 className="text-3xl font-bold">Sign Up for Free</h2>
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
            handleSubmit(
              true,
              e,
              selectedProvince ?? undefined,
              selectedRegency ?? undefined,
              selectedSubDistrict ?? undefined,
              selectedWard ?? undefined,
            )
          }
          className="flex flex-col items-center gap-6 rounded-lg border-[1px] border-black bg-sageGreen p-10 shadow-lg"
        >
          <SignForm
            label={[
              "Username",
              "Nama Organisasi",
              "email",
              "Nomor Telepon Organisasi",
              "Password",
              "Tanggal Berdiri Organisasi",
              "Detail Lokasi",
              "Kode Postal",
            ]}
            type={[
              "text",
              "text",
              "text",
              "text",
              "password",
              "date",
              "text",
              "text",
            ]}
            placeholder={[
              "Masukkan username Anda",
              "Masukkan Nama Organisasi Anda",
              "Masukkan email Anda",
              "Masukkan nomor telepon Organisasi Anda",
              "Masukkan password Anda",
              "Masukkan tanggal berdiri Organisasi Anda",
              "Masukkan detail lokasi (jalan, bangunan, dll)",
              "Masukkan kode postal Organisasi Anda",
            ]}
            disabled={isPending}
            error={errors}
          />
          <TerritoryForm
            setSelectedProvince={setSelectedProvince}
            setSelectedRegency={setSelectedRegency}
            setSelectedSubDistrict={setSelectedSubDistrict}
            setSelectedWard={setSelectedWard}
            selectedProvince={selectedProvince}
            selectedRegency={selectedRegency}
            selectedSubDistrict={selectedSubDistrict}
            selectedWard={selectedWard}
            disabled={isPending}
          />
          <div className="flex w-screen max-w-sm flex-col">
            <label
              htmlFor="deskripsiOrganisasi"
              className="text-sm text-gray-700"
            >
              Deskripsi Organisasi (100 - 500 kata)
            </label>
            <textarea
              id="deskripsiOrganisasi"
              name="deskripsiOrganisasi"
              maxLength={500}
              minLength={100}
              disabled={isPending}
            />
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700 focus:outline-green-500 disabled:opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpOrg;
