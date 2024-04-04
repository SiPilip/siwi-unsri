import { useQuery } from "@tanstack/react-query";
import { getDataPribadi } from "../../../services/apiDataPribadi";
import { getDataAkademik } from "../../../services/apiDataAkademik";

export default function useDataAkademik(nim) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["dataAkademik"],
    queryFn: () => getDataAkademik(nim),
  });

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return { isLoading, data, error };
}
