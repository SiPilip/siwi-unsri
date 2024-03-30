import { HiOutlineNoSymbol } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

export default function NavbarItem({ children, to, disable = false }) {
  if (disable)
    return (
      <li role="button" tabIndex="0">
        <ul className="flex items-center p-3 -mt-1 my-1 rounded-lg text-start leading-tight transition-all   outline-none cursor-not-allowed text-gray-400">
          <div className="pl-4 flex flex-nowrap gap-2">
            <HiOutlineNoSymbol />
            {children}
          </div>
        </ul>
      </li>
    );

  return (
    <li role="button" tabIndex="0">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "flex items-center p-3 -mt-1 my-1 rounded-lg text-start leading-tight transition-all  hover:text-black  outline-none bg-unsri font-semibold"
            : "flex items-center p-3 -mt-1 my-1 rounded-lg text-start leading-tight transition-all hover:bg-unsrihover2  hover:text-black focus:text-black active:font-semibold focus:font-semibold outline-none"
        }
      >
        <div className="mr-4" />
        {children}
      </NavLink>
    </li>
  );
}
