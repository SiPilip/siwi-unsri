import { useUser } from "../../authentication/useUser";
import useDataPribadi from "./useDataPribadi";

export default function useVerifiedDataPribadi() {
  const {
    user: { nim },
  } = useUser();

  const { dataPribadi, isLoadingData } = useDataPribadi({ nim });
  const isVerified = Boolean(dataPribadi);

  return { isVerified, isLoadingData };
}
