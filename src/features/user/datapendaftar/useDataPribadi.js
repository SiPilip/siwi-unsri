import { useQuery } from "@tanstack/react-query";
import { getDataPribadi } from "../../../services/apiDataPribadi";

export default function useDataPribadi({ nim }) {
  const {
    isLoading,
    data: dataPribadi,
    error,
  } = useQuery({
    queryKey: ["dataPribadi"],
    queryFn: () => getDataPribadi({ nim }),
  });

  return { isLoadingData: isLoading, dataPribadi, error };
}
