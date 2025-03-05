import indonesia from "territory-indonesia";
import { useEffect, useState } from "react";
import {
  type Province,
  type Regency,
  type District,
  type Village,
} from "territory-indonesia";
import Select from "react-select";

interface TerritoryProps {
  value: string;
  label: string;
}

const TerritoryForm = () => {
  const [province, setProvince] = useState<Province[]>();
  const [regency, setRegency] = useState<Regency[]>();
  const [subDistrict, setSubDistrict] = useState<District[]>();
  const [ward, setWard] = useState<Village[]>();
  const [selectedProvince, setSelectedProvince] = useState<TerritoryProps>();
  const [selectedRegency, setSelectedRegency] = useState<TerritoryProps>();
  const [selectedSubDistrict, setSelectedSubDistrict] =
    useState<TerritoryProps>();
  const [selectedWard, setSelectedWard] = useState<TerritoryProps>();
  useEffect(() => {
    const getTerritoryData = async () => {
      await indonesia.getAllProvinces().then((data) => {
        setProvince(data);
      });
      await indonesia.getAllRegencies().then((data) => {
        setRegency(data);
      });
      await indonesia.getAllDistricts().then((data) => {
        setSubDistrict(data);
      });
      await indonesia.getAllVillages().then((data) => {
        setWard(data);
      });
    };
    getTerritoryData().catch((error) => {
      console.error("Failed to fetch territory data:", error);
    });
  }, []);

  const provinceOptions = province?.map((prov) => ({
    value: prov.id,
    label: prov.name,
  }));

  const regencyOptions = regency
    ?.filter((reg) => reg.province_id === selectedProvince?.value)
    .map((reg) => ({
      value: reg.id,
      label: reg.name,
    }));

  const subDistrictOptions = subDistrict
    ?.filter((sub) => sub.regency_id === selectedRegency?.value)
    .map((sub) => ({
      value: sub.id,
      label: sub.name,
    }));

  const wardOptions = ward
    ?.filter((w) => w.district_id === selectedSubDistrict?.value)
    .map((w) => ({
      value: w.id,
      label: w.name,
    }));

  const customStyles = {
    control: () => "w-screen max-w-sm",
  };
  return (
    <div className="flex flex-col gap-6">
      <div>
        <label
          htmlFor="province-select"
          className="mb-2 block text-sm text-gray-700"
        >
          Provinsi Organisasi
        </label>
        <Select
          inputId="province-select"
          id="province-select"
          options={provinceOptions}
          placeholder="Masukkan Provinsi"
          onChange={(option) =>
            setSelectedProvince(option ?? { value: "", label: "" })
          }
          classNames={customStyles}
          name="province-select"
          value={selectedProvince}
        />
      </div>
      <div>
        <label
          htmlFor="regency-select"
          className="mb-2 block text-sm text-gray-700"
        >
          Kabupaten Organisasi
        </label>
        <Select
          inputId="regency-select"
          id="regency-select"
          options={regencyOptions}
          placeholder="Masukkan Kabupaten"
          onChange={(option) =>
            setSelectedRegency(option ?? { value: "", label: "" })
          }
          isDisabled={!selectedProvince}
          classNames={customStyles}
          name="regency-select"
          value={selectedRegency}
        />
      </div>
      <div>
        <label
          htmlFor="subdistrict-select"
          className="mb-2 block text-sm text-gray-700"
        >
          Kecamatan Organisasi
        </label>
        <Select
          inputId="subdistrict-select"
          id="subdistrict-select"
          options={subDistrictOptions}
          placeholder="Masukkan Kecamatan"
          onChange={(option) =>
            setSelectedSubDistrict(option ?? { value: "", label: "" })
          }
          isDisabled={!selectedRegency}
          classNames={customStyles}
          name="subdistrict-select"
          value={selectedSubDistrict}
        />
      </div>
      <div>
        <label
          htmlFor="ward-select"
          className="mb-2 block text-sm text-gray-700"
        >
          Kelurahan Organisasi
        </label>
        <Select
          inputId="ward-select"
          id="ward-select"
          options={wardOptions}
          placeholder="Masukkan Kelurahan"
          onChange={(option) =>
            setSelectedWard(option ?? { value: "", label: "" })
          }
          isDisabled={!selectedSubDistrict}
          classNames={customStyles}
          name="ward-select"
          value={selectedWard}
        />
      </div>
    </div>
  );
};

export default TerritoryForm;
