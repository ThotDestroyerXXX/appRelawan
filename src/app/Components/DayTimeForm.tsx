import { type TypeProps } from "./ActivityCategoryAndType";
import { v4 as uuidv4 } from "uuid";
import Select from "react-select";
import { days } from "~/app/api/CreateActivity/CreateActivity";
import { FaTrashAlt } from "react-icons/fa";

interface DayTimeFormProps {
  timeFields: { id: string; value: string }[];
  setTimeFields: (value: { id: string; value: string }[]) => void;
  finishFields: { id: string; value: string }[];
  setFinishFields: (value: { id: string; value: string }[]) => void;
  dayInputNumber: (TypeProps | null)[];
  setDayInputNumber: (value: (TypeProps | null)[]) => void;
}

const DayTimeForm: React.FC<DayTimeFormProps> = ({
  timeFields,
  setTimeFields,
  dayInputNumber,
  setDayInputNumber,
  finishFields,
  setFinishFields,
}) => {
  const customStyles = {
    control: () => "w-full",
  };
  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const values = [...timeFields];
    if (values[index]) {
      values[index].value = event.target.value;
      console.log(values);
    }
    setTimeFields(values);
  };
  const handleFinishChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const values = [...finishFields];
    if (values[index]) {
      values[index].value = event.target.value;
      console.log(values);
    }
    setFinishFields(values);
  };

  const handleDayChange = (index: number, option: TypeProps | null) => {
    const values = [...dayInputNumber];
    values[index] = option;
    setDayInputNumber(values);
  };

  const addTimeField = () => {
    setTimeFields([...timeFields, { id: uuidv4(), value: "" }]);
    setFinishFields([...finishFields, { id: uuidv4(), value: "" }]);
    setDayInputNumber([...dayInputNumber, null]);
  };
  const removeTimeField = (index: number) => {
    const updatedValues = timeFields.filter((_, i) => i !== index);
    const updatedFinishValues = finishFields.filter((_, i) => i !== index);
    const updatedDayInputNumber = dayInputNumber.filter((_, i) => i !== index);
    setDayInputNumber(updatedDayInputNumber);
    setTimeFields(updatedValues);
    setFinishFields(updatedFinishValues);
  };
  return (
    <>
      {timeFields.map((timeField, index) => (
        <div key={timeField.id} className="flex flex-row gap-2 max-md:flex-col">
          <div className="flex w-full flex-col">
            <label
              htmlFor={`day-${index}`}
              className="mb-2 block text-sm text-gray-700"
            >
              Hari
            </label>
            <Select
              inputId={`day-${index}`}
              id={`day-${index}`}
              options={days}
              getOptionLabel={(option) => option?.name ?? ""}
              getOptionValue={(option) => option?.id.toString() ?? ""}
              placeholder="Masukkan Hari Aktivitas"
              onChange={(option) => {
                handleDayChange(index, option);
              }}
              value={dayInputNumber[index]}
              classNames={customStyles}
            />
          </div>
          <div className="flex w-full flex-col">
            <label
              htmlFor={`time-${index}`}
              className="mb-2 block text-sm text-gray-700"
            >
              Waktu Mulai
            </label>
            <div className="flex flex-row gap-3">
              <input
                type="time"
                id={`time-${index}`}
                name={`time-${index}`}
                className="w-full appearance-none rounded border border-gray-300 px-3 py-2 leading-tight text-gray-700 focus:outline-green-500"
                value={timeField.value}
                onChange={(e) => handleInputChange(index, e)}
              />
            </div>
          </div>
          <div className="flex w-full flex-col">
            <label
              htmlFor={`finish-time-${index}`}
              className="mb-2 block text-sm text-gray-700"
            >
              Waktu Selesai
            </label>
            <div className="flex flex-row items-center gap-3 max-sm:flex-col">
              <input
                type="time"
                id={`time-${index}`}
                name={`finish-time-${index}`}
                className="w-full appearance-none rounded border border-gray-300 px-3 py-2 leading-tight text-gray-700 focus:outline-green-500"
                value={finishFields[index]?.value}
                onChange={(e) => handleFinishChange(index, e)}
              />
              <div className="flex aspect-square h-full cursor-pointer items-center justify-center rounded-sm bg-red-500 text-white hover:bg-red-600 max-md:h-8 max-md:w-full">
                <FaTrashAlt
                  onClick={(e) => {
                    e.preventDefault();
                    removeTimeField(index);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={(e) => {
          e.preventDefault();
          addTimeField();
        }}
        className="mt-4 w-full rounded-md bg-green-500 py-2 text-white"
      >
        Tambahkan Waktu
      </button>
    </>
  );
};

export default DayTimeForm;
