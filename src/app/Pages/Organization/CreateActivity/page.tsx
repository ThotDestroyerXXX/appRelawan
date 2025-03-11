"use client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ActivityCategoryAndType, {
  type TypeProps,
} from "~/app/_Components/ActivityCategoryAndType";
import DayTimeForm from "~/app/_Components/DayTimeForm";
import SignForm from "~/app/_Components/signForm";
import TerritoryForm, {
  type TerritoryProps,
} from "~/app/_Components/territoryForm";

export default function CreateActivity() {
  const [timeFields, setTimeFields] = useState<{ id: string; value: string }[]>(
    [{ id: uuidv4(), value: "" }],
  );
  const [dayInputNumber, setDayInputNumber] = useState<(TypeProps | null)[]>(
    [],
  );
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

  return (
    <main className="flex flex-col gap-6 bg-[#F8EDE3] p-10">
      <div>
        <h1 className="text-3xl">Buat Aktivitas</h1>
      </div>
      <div className="rounded-lg bg-white p-10 shadow-md">
        <form action="" className="flex flex-col gap-6">
          <SignForm
            label={[
              "Nama Aktivitas",
              "Limit Relawan",
              "Tanggal Mulai",
              "Tanggal Selesai",
              "Deadline Registrasi",
              "Detail Lokasi",
            ]}
            placeholder={[
              "Masukkan nama aktivitas",
              "Masukkan limit relawan",
              "Masukkan tanggal mulai",
              "Masukkan tanggal selesai",
              "Masukkan deadline registrasi",
              "Masukkan nama jalan, gedung, etc.",
            ]}
            type={["text", "number", "date", "date", "date", "text"]}
            labelTextSize="md"
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

          <DayTimeForm
            setDayInputNumber={setDayInputNumber}
            setTimeFields={setTimeFields}
            dayInputNumber={dayInputNumber}
            timeFields={timeFields}
          />
        </form>
      </div>
    </main>
  );
}
