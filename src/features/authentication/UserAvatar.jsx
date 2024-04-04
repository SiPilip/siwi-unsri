import supabase, { supabaseUrl } from "../../services/supabase";
import SpinnerMini from "../../ui/SpinnerMini";
import useDataPribadi from "../user/datapendaftar/useDataPribadi";
import { useUser } from "./useUser";

export default function UserAvatar() {
  const {
    user: { nim },
    user,
    isUserLoading,
  } = useUser();
  const { fullName, avatar, email } = user?.user_metadata;
  const tahunawal = nim?.substring(7, 9);

  if (isUserLoading) return <SpinnerMini />;
  return (
    <div className="flex gap-2 items-center font-medium text-neutral-700 text-xs text-end">
      <div>
        <span className="block text-end">{fullName}</span>
        <span className="block">{email?.substring(0, 14)}</span>
      </div>
      <img
        className="block w-[2.5rem] aspect-square object-cover object-center rounded-full outline-[2px] outline-gray-100 bg-gray-100"
        src={
          avatar ||
          `https://akademik.unsri.ac.id/images/foto_mhs/20${tahunawal}/${nim}.jpg`
        }
        alt={fullName}
      />
    </div>
  );
}
