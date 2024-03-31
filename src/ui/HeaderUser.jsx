import { HiArrowRightOnRectangle } from "react-icons/hi2";
import Logout from "../features/authentication/Logout";
import UserAvatar from "../features/authentication/UserAvatar";

export default function HeaderUser({ title }) {
  return (
    <div className="w-full py-3  flex items-center justify-between">
      <h1 className="font-semibold text-3xl">{title}</h1>
      <div className="flex gap-3 justify-end">
        {/* <button className="rounded-full overflow-hidden w-10 h-10">
          <img src="https://i.pravatar.cc/50" alt="" />
        </button> */}
        <UserAvatar />
        <Logout />
      </div>
    </div>
  );
}
