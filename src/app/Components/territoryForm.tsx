import indonesia from "territory-indonesia";
import { useEffect, useState } from "react";
import {
  type Province,
  type Regency,
  type District,
  type Village,
} from "territory-indonesia";
import Select from "react-select";

export interface TerritoryProps {
  value: string;
  label: string;
}

interface TerritoryFormProps {
  setSelectedProvince: (option: TerritoryProps | null) => void;
  setSelectedRegency: (option: TerritoryProps | null) => void;
  setSelectedSubDistrict: (option: TerritoryProps | null) => void;
  setSelectedWard: (option: TerritoryProps | null) => void;
  selectedProvince: TerritoryProps | null;
  selectedRegency: TerritoryProps | null;
  selectedSubDistrict: TerritoryProps | null;
  selectedWard: TerritoryProps | null;
  disabled: boolean;
}

const TerritoryForm: React.FC<TerritoryFormProps> = ({
  setSelectedProvince,
  setSelectedRegency,
  setSelectedSubDistrict,
  setSelectedWard,
  selectedProvince,
  selectedRegency,
  selectedSubDistrict,
  selectedWard,
  disabled,
}) => {
  const [province, setProvince] = useState<Province[]>();
  const [regency, setRegency] = useState<Regency[]>();
  const [subDistrict, setSubDistrict] = useState<District[]>();
  const [ward, setWard] = useState<Village[]>();
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
          getOptionLabel={(option) => option.label}
          getOptionValue={(option) => option.value}
          placeholder="Masukkan Provinsi"
          onChange={(option) =>
            setSelectedProvince(option ?? { value: "", label: "" })
          }
          classNames={customStyles}
          name="province-select"
          value={selectedProvince}
          isDisabled={disabled}
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
          getOptionLabel={(option) => option.label}
          getOptionValue={(option) => option.value}
          placeholder="Masukkan Kabupaten"
          onChange={(option) =>
            setSelectedRegency(option ?? { value: "", label: "" })
          }
          isDisabled={!selectedProvince || disabled}
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
          getOptionLabel={(option) => option.label}
          getOptionValue={(option) => option.value}
          placeholder="Masukkan Kecamatan"
          onChange={(option) =>
            setSelectedSubDistrict(option ?? { value: "", label: "" })
          }
          isDisabled={!selectedRegency || disabled}
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
          getOptionLabel={(option) => option.label}
          getOptionValue={(option) => option.value}
          placeholder="Masukkan Kelurahan"
          onChange={(option) =>
            setSelectedWard(option ?? { value: "", label: "" })
          }
          isDisabled={!selectedSubDistrict || disabled}
          classNames={customStyles}
          name="ward-select"
          value={selectedWard}
        />
      </div>
    </div>
  );
};

export default TerritoryForm;
