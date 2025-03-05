interface SignFormProps {
  label: string[];
  type: string[];
  placeholder: string[];
  error?: string | null;
  disabled?: boolean;
}

const SignForm: React.FC<SignFormProps> = ({
  label,
  type,
  placeholder,
  error,
  disabled,
}) => {
  return (
    <>
      {label.map((lbl, index) => (
        <div key={lbl} className="mb-4 w-screen max-w-sm">
          <label className="mb-2 block text-sm text-gray-700">{lbl}</label>
          <input
            type={type[index]}
            placeholder={placeholder[index]}
            defaultValue={""}
            disabled={disabled}
            name={`${lbl.toLowerCase()}`}
            className="w-full appearance-none rounded border border-gray-300 px-3 py-2 leading-tight text-gray-700 focus:outline-green-500"
          />
        </div>
      ))}
      <div className="w-screen max-w-sm">
        <div className="mb-4 flex flex-row items-center gap-2">
          <input
            type="checkbox"
            id="rememberMe"
            className="h-4 w-4"
            disabled={disabled}
          />
          <label htmlFor="rememberMe" className="text-sm text-gray-700">
            remember me
          </label>
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
};
export default SignForm;
