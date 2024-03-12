export default function NavbarItem({ children }) {
  return (
    <div
      role="button"
      tabIndex="0"
      className="flex items-center w-full p-3 -mt-1 rounded-lg text-start leading-tight transition-all hover:bg-unsrihover2 hover:bg-opacity-80  focus:bg-opacity-80 active:bg-unsri active:bg-opacity-80 hover:text-black focus:text-black active:font-semibold focus:font-semibold  outline-none focus:bg-unsri"
    >
      <div className="grid place-items-center mr-4">?</div>
      {children}
    </div>
  );
}
