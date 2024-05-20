import { useQuery } from "@tanstack/react-query";
import { getSeat } from "../../../services/apiSeatSystem";

export default function useSeat(id) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["seat"],
    queryFn: () => getSeat(id),
  });

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return { isLoading, data };
}
