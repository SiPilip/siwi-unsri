import { useQuery } from "@tanstack/react-query";
import { getUsept } from "../../../services/apiUsept";

export default function useUsept(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["dataUsept"],
    queryFn: () => getUsept(id),
  });

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return { data, isLoading, error };
}
