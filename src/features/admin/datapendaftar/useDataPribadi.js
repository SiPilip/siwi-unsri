import { useQuery } from "@tanstack/react-query";
import { getDataPribadi } from "../../../services/apiDataPribadi";
import { useParams } from "react-router-dom";

export default function useDataPribadi() {
  const { id } = useParams();

  const { isLoading, data, error } = useQuery({
    queryKey: ["dataPribadi", id],
    queryFn: () => getDataPribadi({ id }),
  });

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return { isLoading, data, error };
}
