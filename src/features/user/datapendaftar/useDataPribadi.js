import { useQuery } from "@tanstack/react-query";
import { getDataPribadi } from "../../../services/apiDataPribadi";
import { useParams } from "react-router-dom";

export default function useDataPribadi({ id }) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["dataPribadi"],
    queryFn: () => getDataPribadi({ id }),
  });

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return { isLoading, data, error };
}
