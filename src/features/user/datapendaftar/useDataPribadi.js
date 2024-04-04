import { useQuery } from "@tanstack/react-query";
import { getDataPribadi } from "../../../services/apiDataPribadi";

export default function useDataPribadi({ nim }) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["dataPribadi"],
    queryFn: () => getDataPribadi({ nim }),
  });

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return { isLoading, data, error };
}