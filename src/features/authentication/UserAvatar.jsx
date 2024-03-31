import supabase, { supabaseUrl } from "../../services/supabase";
import { useUser } from "./useUser";

export default function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;

  return (
    <div className="flex gap-2 items-center font-medium text-neutral-700 text-xs">
      <div>
        <span className="block text-end">Philifs Bryan</span>
        <span className="block">{fullName}</span>
      </div>
      <img
        className="block w-[3rem] aspect-square object-cover object-center rounded-full outline-[2px] outline-gray-100 bg-gray-100"
        src={
          avatar ||
          `${supabaseUrl}/storage/v1/object/public/avatars/default-user.png`
        }
        alt={fullName}
      />
    </div>
  );
}
