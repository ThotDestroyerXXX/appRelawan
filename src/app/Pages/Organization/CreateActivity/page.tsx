"use client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ActivityCategoryAndType, {
  type TypeProps,
} from "~/app/Components/ActivityCategoryAndType";
import DayTimeForm from "~/app/Components/DayTimeForm";
import SignForm from "~/app/Components/signForm";
import TerritoryForm, {
  type TerritoryProps,
} from "~/app/Components/territoryForm";
import Image from "next/image";
import { Button } from "~/app/Components/button";
import { CreateOneActivity } from "~/app/api/CreateActivity/CreateActivity";
import { authClient } from "~/lib/auth-client";
import { useRouter } from "next/navigation";

export default function CreateActivity() {
  const [timeFields, setTimeFields] = useState<{ id: string; value: string }[]>(
    [{ id: uuidv4(), value: "" }],
  );
  const [finishFields, setFinishFields] = useState<
    { id: string; value: string }[]
  >([{ id: uuidv4(), value: "" }]);
  const [dayInputNumber, setDayInputNumber] = useState<(TypeProps | null)[]>([
    { id: 0, name: "" },
  ]);
  const [selectedProvince, setSelectedProvince] =
    useState<TerritoryProps | null>(null);
  const [selectedRegency, setSelectedRegency] = useState<TerritoryProps | null>(
    null,
  );
  const [selectedSubDistrict, setSelectedSubDistrict] =
    useState<TerritoryProps | null>(null);
  const [selectedWard, setSelectedWard] = useState<TerritoryProps | null>(null);

  const [selectedCategory1, setSelectedCategory1] = useState<TypeProps | null>(
    null,
  );
  const [selectedCategory2, setSelectedCategory2] = useState<TypeProps | null>(
    null,
  );
  const [selectedActivityType, setSelectedActivityType] =
    useState<TypeProps | null>(null);
  const [selectedLocationType, setSelectedLocationType] =
    useState<TypeProps | null>(null);

  const [galleryImages, setGalleryImages] = useState<File[] | null>(null);

  const [thumbnailImage, setThumbnailImage] = useState<File | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { handleSubmit } = CreateOneActivity(setLoading, setError);
  const router = useRouter();

  const organization = authClient.useSession();
  if (organization.data?.user.organization_id === null) {
    router.push("/");
    return null;
  }

  return (
    <main className="flex flex-col gap-6 bg-[#F8EDE3] p-10">
      <div>
        <h1 className="text-3xl">Buat Aktivitas</h1>
      </div>
      <div className="rounded-lg bg-white p-10 shadow-md">
        <form
          className="flex flex-col gap-6"
          onSubmit={(e) =>
            handleSubmit(
              e,
              galleryImages,
              thumbnailImage,
              selectedProvince,
              selectedRegency,
              selectedSubDistrict,
              selectedWard,
              selectedCategory1,
              selectedCategory2,
              selectedActivityType,
              selectedLocationType,
              timeFields,
              dayInputNumber,
              finishFields,
              organization.data?.user.organization_id ?? "",
            )
          }
        >
          <SignForm
            label={[
              "Nama Aktivitas",
              "Limit Orang",
              "Tanggal Mulai",
              "Tanggal Selesai",
              "Deadline Registrasi",
              "Detail Lokasi",
            ]}
            placeholder={[
              "Masukkan nama aktivitas",
              "Masukkan limit orang",
              "Masukkan tanggal mulai",
              "Masukkan tanggal selesai",
              "Masukkan deadline registrasi",
              "Masukkan nama jalan, gedung, etc.",
            ]}
            type={["text", "number", "date", "date", "date", "text"]}
            labelTextSize="md"
          />
          <div>
            <label htmlFor="deskripsiAktivitas">
              Deskripsi Aktivitas (min. 20 kata)
            </label>
            <textarea
              name="deskripsiAktivitas"
              placeholder="Masukkan deskripsi singkat aktivitas"
              id=""
              className="w-full appearance-none rounded border border-gray-300 px-3 py-2 leading-tight text-gray-700 focus:outline-green-500"
            />
          </div>
          <div>
            <label htmlFor="detailAktivitas">Detail Aktivitas</label>
            <textarea
              name="detailAktivitas"
              placeholder="Metode briefing, kegiatan, dll."
              id=""
              className="w-full appearance-none rounded border border-gray-300 px-3 py-2 leading-tight text-gray-700 focus:outline-green-500"
            />
          </div>
          <TerritoryForm
            setSelectedProvince={setSelectedProvince}
            setSelectedRegency={setSelectedRegency}
            setSelectedSubDistrict={setSelectedSubDistrict}
            setSelectedWard={setSelectedWard}
            selectedProvince={selectedProvince}
            selectedRegency={selectedRegency}
            selectedSubDistrict={selectedSubDistrict}
            selectedWard={selectedWard}
            labelPlaceholder="Aktivitas"
          />

          <ActivityCategoryAndType
            setSelectedActivityType={setSelectedActivityType}
            setSelectedCategory1={setSelectedCategory1}
            setSelectedCategory2={setSelectedCategory2}
            setSelectedLocationType={setSelectedLocationType}
            selectedActivityType={selectedActivityType}
            selectedCategory1={selectedCategory1}
            selectedCategory2={selectedCategory2}
            selectedLocationType={selectedLocationType}
            disabled={false}
          />
          <div>
            <label htmlFor="detailPekerjaan">Detail Pekerjaan</label>
            <textarea
              name="detailPekerjaan"
              placeholder="Tugas, total jam, kriteria, perlengkapan, dll."
              id=""
              className="w-full appearance-none rounded border border-gray-300 px-3 py-2 leading-tight text-gray-700 focus:outline-green-500"
            />
          </div>

          <DayTimeForm
            setDayInputNumber={setDayInputNumber}
            setTimeFields={setTimeFields}
            dayInputNumber={dayInputNumber}
            timeFields={timeFields}
            setFinishFields={setFinishFields}
            finishFields={finishFields}
          />

          <div className="flex flex-col">
            <label htmlFor="thumbnailImage">Gambar thumbnail</label>
            <input
              name="thumbnailImage"
              type="file"
              accept="image/png, image/jpg, image/jpeg, image/webp"
              onChange={(e) => setThumbnailImage(e.target.files?.[0] ?? null)}
            />
          </div>
          {thumbnailImage && (
            <div className="flex flex-row flex-wrap gap-2">
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={URL.createObjectURL(thumbnailImage)}
                  alt={`Preview thumbnail`}
                  width={200}
                  height={200}
                  className="rounded-md object-cover"
                />
                <p>{thumbnailImage.name}</p>
              </div>
            </div>
          )}

          <div className="flex flex-col">
            <label htmlFor="galleryImage">Gambar Gallery</label>
            <input
              name="galleryImage"
              type="file"
              multiple
              accept="image/png, image/jpg, image/jpeg, image/webp"
              onChange={(e) =>
                setGalleryImages(
                  e.target.files ? Array.from(e.target.files) : null,
                )
              }
            />
          </div>
          {galleryImages && (
            <div className="flex flex-row flex-wrap gap-2">
              {galleryImages.map((image, index) => (
                <div
                  key={`${image.name}_${index}`}
                  className="flex flex-col items-center gap-2"
                >
                  <Image
                    src={URL.createObjectURL(image)}
                    alt={`Preview ${index}`}
                    width={200}
                    height={200}
                    className="rounded-md object-cover"
                  />
                  <p>{image.name}</p>
                </div>
              ))}
            </div>
          )}
          <div className="flex flex-row items-center gap-2">
            <input
              type="checkbox"
              name="binusianOnly"
              className="h-5 w-5 rounded-sm"
            />
            <label htmlFor="binusianOnly">BINUSIAN Only</label>
          </div>
          <div className="flex flex-row items-center gap-2">
            <input
              type="checkbox"
              name="requireConfirmation"
              className="h-5 w-5 rounded-sm"
            />
            <label htmlFor="requireConfirmation">Confirm Participants</label>
          </div>
          <div>{error && <p className="text-red-500">{error}</p>}</div>
          <Button
            className="h-10 bg-green-500 hover:bg-green-600"
            type="submit"
            disabled={loading}
          >
            {loading ? "membuat aktivitas..." : "Buat Aktivitas"}
          </Button>
        </form>
      </div>
    </main>
  );
}
