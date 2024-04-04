import { useQuery } from "@tanstack/react-query";
import { getDataAkademik } from "../../../services/apiDataAkademik";

export default function useDataAkademik(id) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["dataAkademik"],
    queryFn: () => getDataAkademik(id),
  });

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return { isLoading, data};
}
