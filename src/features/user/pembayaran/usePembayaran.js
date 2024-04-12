import { useQuery } from "@tanstack/react-query";
import { getPembayaran } from "../../../services/apiPembayaran";

export default function usePembayaran(id) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["pembayaran"],
    queryFn: () => getPembayaran(id),
  });

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return { isLoading, data };
}
