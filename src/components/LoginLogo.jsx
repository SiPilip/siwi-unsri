import { NavLink } from "react-router-dom";
import unsri from "../../public/unsri.png";

export default function LoginLogo() {
  return (
    <NavLink to="/login">
      <div className="w-full flex justify-center flex-wrap mb-10">
        <img src={unsri} alt="" />
        <div className="w-full text-center">
          <h1 className="text-xl font-bold mt-3">SIWI UNSRI</h1>
          <p className="text-sm">
            Sistem Informasi Wisuda Universitas Sriwijaya
          </p>
        </div>
      </div>
    </NavLink>
  );
}
