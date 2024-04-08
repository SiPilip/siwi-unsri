import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTranskrip } from "../../../services/apiTranskrip";

export default function useDataTranskrip() {
  const { id } = useParams();

  const { isLoading, data, error } = useQuery({
    queryKey: ["dataTranskrip", id],
    queryFn: () => getTranskrip(id),
  });

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return { isLoading, data, error };
}
