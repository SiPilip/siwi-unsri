import SpinnerFullPage from "../../../ui/SpinnerFullPage";
import { useUser } from "../../authentication/useUser";
import useDataOrangTua from "../datapendaftar/useDataOrangTua";
import useDataPribadi from "../datapendaftar/useDataPribadi";

export default function useProgress() {
  const {
    user: { id, nim },
  } = useUser();

  const { dataPribadi, isLoadingData: isLoadingDataPribadi } = useDataPribadi({
    nim,
  });
  const { dataOrangTua, isLoading: isLoadingDataOrangTua } = useDataOrangTua({
    id,
  });

  const isVerifiedDataPribadi = Boolean(dataPribadi);
  const isVerifiedDataOrangTua = Boolean(dataOrangTua);

  const isLoading = isLoadingDataOrangTua || isLoadingDataPribadi;

  let progress = 0;
  if (isVerifiedDataPribadi) progress = progress + 1;
  if (isVerifiedDataOrangTua) progress = progress + 1;
  progress = String(Math.floor(Number((progress / 6) * 100)));

  return {
    progress,
    isVerifiedDataPribadi,
    isVerifiedDataOrangTua,
    isLoading,
  };
}
