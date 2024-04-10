import { useQuery } from "@tanstack/react-query";
import { getPengaturan } from "../../../services/apiPengaturan";

export default function usePengaturan() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["pengaturan"],
    queryFn: getPengaturan,
  });

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return { isLoading, data, error };
}
