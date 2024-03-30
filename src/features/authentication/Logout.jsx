import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

export default function Logout() {
  const { logout, isLogouting } = useLogout();

  return (
    <button disabled={isLogouting} onClick={logout}>
      {!isLogouting ? (
        <HiArrowRightOnRectangle className="w-10 h-10 text-unsri" />
      ) : (
        <SpinnerMini />
      )}
    </button>
  );
}
