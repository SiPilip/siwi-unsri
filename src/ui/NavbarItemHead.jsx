export default function NavbarItemHead({ children }) {
  return (
    <div
      tabIndex="0"
      className="flex items-center w-full p-3 mt-3 rounded-lg text-start leading-tight transition-all font-semibold active:bg-gray-50 active:bg-opacity-80  outline-none text-gray-700"
    >
      {children}
    </div>
  );
}
