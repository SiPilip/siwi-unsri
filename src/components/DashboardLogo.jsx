import { NavLink } from "react-router-dom";
import unsri from "../../public/unsri.png";

export default function DashboardLogo() {
  return (
    <NavLink to="/login">
      <div className="flex justify-center flex-wrap -mb-5">
        <img src={unsri} alt="" className="w-[40%]" />
        <div className="w-full text-center">
          <h1 className="text-xl font-bold mt-2">SIWI UNSRI</h1>
          <p className="text-sm"></p>
        </div>
      </div>
    </NavLink>
  );
}
