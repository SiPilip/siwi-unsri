import { useQuery } from "@tanstack/react-query";
import { getTranskrip } from "../../../services/apiTranskrip";

export default function useTranskrip(nim) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["dataTranskrip"],
    queryFn: () => getTranskrip(nim),
  });

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return { isLoading, data, error };
}
