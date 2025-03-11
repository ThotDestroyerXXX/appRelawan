import {
  fetchAllActivityType,
  fetchAllCategory,
  fetchAllLocationType,
} from "../api/CreateActivity/CreateActivity";
import Select from "react-select";

interface ActivityCategoryAndTypeProps {
  setSelectedCategory1: (option: TypeProps | null) => void;
  setSelectedCategory2: (option: TypeProps | null) => void;
  setSelectedActivityType: (option: TypeProps | null) => void;
  setSelectedLocationType: (option: TypeProps | null) => void;
  selectedCategory1: TypeProps | null;
  selectedCategory2: TypeProps | null;
  selectedActivityType: TypeProps | null;
  selectedLocationType: TypeProps | null;
  disabled?: boolean;
}

export interface TypeProps {
  id: number;
  name: string;
}

const ActivityCategoryAndType: React.FC<ActivityCategoryAndTypeProps> = ({
  setSelectedCategory1,
  setSelectedCategory2,
  setSelectedActivityType,
  setSelectedLocationType,
  selectedCategory1,
  selectedCategory2,
  selectedActivityType,
  selectedLocationType,
  disabled,
}) => {
  const categoryList = fetchAllCategory().categoryList;
  const ActivityTypeList = fetchAllActivityType().ActivityTypeList;
  const LocationTypeList = fetchAllLocationType().LocationTypeList;

  const categoryListOptions = categoryList?.map((cat) => ({
    id: cat.id,
    name: cat.name,
  }));
  const ActivityTypeOptions = ActivityTypeList?.map((act) => ({
    id: act.id,
    name: act.name,
  }));
  const LocationTypeOptions = LocationTypeList?.map((loc) => ({
    id: loc.id,
    name: loc.name,
  }));

  const customStyles = {
    control: () => "w-full",
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <label
          htmlFor="category-select-1"
          className="mb-2 block text-sm text-gray-700"
        >
          Kategori Aktivitas 1
        </label>
        <Select
          inputId="category-select-1"
          id="category-select-1"
          options={categoryListOptions}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id.toString()}
          placeholder="Masukkan Kategori 1"
          onChange={(option) =>
            setSelectedCategory1(option ?? { id: -1, name: "" })
          }
          classNames={customStyles}
          name="category-select-1"
          value={selectedCategory1}
          isDisabled={disabled}
        />
      </div>
      <div>
        <label
          htmlFor="category-select-2"
          className="mb-2 block text-sm text-gray-700"
        >
          Kategori Aktivitas 2
        </label>
        <Select
          inputId="category-select-2"
          id="category-select-2"
          options={categoryListOptions}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id.toString()}
          placeholder="Masukkan kategori 2"
          onChange={(option) =>
            setSelectedCategory2(option ?? { id: -1, name: "" })
          }
          isDisabled={disabled}
          classNames={customStyles}
          name="category-select-2"
          value={selectedCategory2}
        />
      </div>
      <div>
        <label
          htmlFor="tipeAktivitas-select"
          className="mb-2 block text-sm text-gray-700"
        >
          Tipe Aktivitas
        </label>
        <Select
          inputId="tipeAktivitas-select"
          id="tipeAktivitas-select"
          options={ActivityTypeOptions}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id.toString()}
          placeholder="Masukkan Tipe Aktivitas"
          onChange={(option) =>
            setSelectedActivityType(option ?? { id: -1, name: "" })
          }
          isDisabled={disabled}
          classNames={customStyles}
          name="tipeAktivitas-select"
          value={selectedActivityType}
        />
      </div>
      <div>
        <label
          htmlFor="tipeLokasi-select"
          className="mb-2 block text-sm text-gray-700"
        >
          Tipe Lokasi
        </label>
        <Select
          inputId="tipeLokasi-select"
          id="tipeLokasi-select"
          options={LocationTypeOptions}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id.toString()}
          placeholder="Masukkan Tipe Lokasi"
          onChange={(option) =>
            setSelectedLocationType(option ?? { id: -1, name: "" })
          }
          isDisabled={disabled}
          classNames={customStyles}
          name="tipeLokasi-select"
          value={selectedLocationType}
        />
      </div>
    </div>
  );
};

export default ActivityCategoryAndType;
