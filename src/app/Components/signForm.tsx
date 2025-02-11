interface SignFormProps {
  label: string[];
  type: string[];
  placeholder: string[];
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SignForm: React.FC<SignFormProps> = ({
  label,
  type,
  placeholder,
  onSubmit,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center gap-3 rounded-lg border-[1px] border-black p-14 shadow-lg"
    >
      {label.map((lbl, index) => (
        <div key={lbl} className="mb-4 w-screen max-w-sm">
          <label className="mb-2 block text-sm text-gray-700">{lbl}</label>
          <input
            type={type[index]}
            placeholder={placeholder[index]}
            defaultValue={""}
            className="w-full appearance-none rounded border border-gray-300 px-3 py-2 leading-tight text-gray-700 focus:outline-green-500"
          />
        </div>
      ))}
      <div className="w-screen max-w-sm">
        <div className="mb-4 flex flex-row items-center gap-2">
          <input type="checkbox" id="rememberMe" className="h-4 w-4" />
          <label htmlFor="rememberMe" className="text-sm text-gray-700">
            remember me
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="w-full rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700 focus:outline-green-500"
      >
        Submit
      </button>
    </form>
  );
};
export default SignForm;
