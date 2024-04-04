import { useQuery } from "@tanstack/react-query";
import { getTranskrip } from "../../../services/apiTranskrip";

export default function useTranskrip(id) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["dataTranskrip"],
    queryFn: () => getTranskrip(id),
  });

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return { isLoading, data, error };
}
