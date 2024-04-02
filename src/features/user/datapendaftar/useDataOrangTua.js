import { useQuery } from "@tanstack/react-query";
import { getDataOrangTua } from "../../../services/apiDataOrangTua";

export default function useDataOrangTua({ id }) {
  const { isLoading, data: dataOrangTua } = useQuery({
    queryKey: ["dataOrangTua"],
    queryFn: () => getDataOrangTua({ id }),
    retry: false,
  });

  return { isLoadingData: isLoading, dataOrangTua };
}
