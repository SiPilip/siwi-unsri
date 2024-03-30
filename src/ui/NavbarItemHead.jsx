export default function NavbarItemHead({ children }) {
  return (
    <div
      tabIndex="0"
      className="flex items-center p-3 rounded-lg text-start leading-tight transition-all font-semibold  outline-none text-gray-700"
    >
      {children}
    </div>
  );
}
