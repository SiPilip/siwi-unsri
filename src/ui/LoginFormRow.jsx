import { HiKey } from "react-icons/hi2";

export default function LoginFormRow({ label, error, children, icon }) {
  return (
    <div className="w-full mb-5">
      <label
        htmlFor={children.props.id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="w-full flex rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset text-xs sm:text-sm sm:leading-6 px-3 py-2 items-center">
        <span className="mr-2 text-neutral-400">{children.props.icon}</span>
        {children}
      </div>
      {error && <span className="text-red-400 text-xs ">{error}</span>}
    </div>
  );
}
