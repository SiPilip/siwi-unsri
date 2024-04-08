import { useQuery } from "@tanstack/react-query";
import { getAllDataPribadi } from "../../../services/apiDataPribadi";

export default function useAllDataPribadi() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["dataPribadi"],
    queryFn: () => getAllDataPribadi(),
  });

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return { isLoading, data, error };
}
