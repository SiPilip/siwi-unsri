import { useQuery } from "@tanstack/react-query";
import { getDataOrangTua } from "../../../services/apiDataOrangTua";

export default function useDataOrangTua({ id }) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["dataOrangTua"],
    queryFn: () => getDataOrangTua({ id }),
  });

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return { isLoading, data, error };
}
