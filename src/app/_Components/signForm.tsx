interface SignFormProps {
  label: string[];
  type: string[];
  placeholder: string[];
  error?: string | null;
  disabled?: boolean;
  labelTextSize?: string;
}

const SignForm: React.FC<SignFormProps> = ({
  label,
  type,
  placeholder,
  error,
  disabled,
  labelTextSize,
}) => {
  return (
    <>
      {label.map((lbl, index) => (
        <div key={lbl} className="w-full">
          <label
            className={`mb-2 block text-${labelTextSize ?? "sm"} text-gray-700`}
          >
            {lbl}
          </label>
          <input
            type={type[index]}
            placeholder={placeholder[index]}
            defaultValue={""}
            disabled={disabled}
            id={`${lbl.replaceAll(" ", "").trim().toLowerCase()}`}
            name={`${lbl.replaceAll(" ", "").trim().toLowerCase()}`}
            className="w-full appearance-none rounded border border-gray-300 px-3 py-2 leading-tight text-gray-700 focus:outline-green-500"
          />
        </div>
      ))}

      {error && <p className="text-red-500">{error}</p>}
    </>
  );
};
export default SignForm;
