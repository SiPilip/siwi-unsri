export default function LoginRegisterInput({
  id,
  src,
  type,
  children,
  required = true,
  placeholder,
  value,
  onChange,
  onKeyInput,
  label,
}) {
  return (
    <div className="-mb-3 w-full">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div
        className="mt-2 w-full flex rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset text-xs sm:text-sm sm:leading-6 px-3 py-2"
        htmlFor={id}
      >
        <img src={src} alt="" className="mr-2" />
        {children}
      </div>
    </div>
  );
}
