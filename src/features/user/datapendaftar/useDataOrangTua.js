import { useQuery } from "@tanstack/react-query";
import { getDataOrangTua } from "../../../services/apiDataOrangTua";

export default function useDataOrangTua({ id }) {
  const {
    isLoading,
    data: dataOrangTua,
    isError,
  } = useQuery({
    queryKey: ["dataOrangTua"],
    queryFn: () => getDataOrangTua({ id }),
  });

  if (isError) return {};

  return { isLoadingData: isLoading, dataOrangTua };
}
