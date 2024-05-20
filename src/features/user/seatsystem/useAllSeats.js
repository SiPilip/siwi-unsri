import { useQuery } from "@tanstack/react-query";
import { getAllSeats } from "../../../services/apiSeatSystem";

export default function useAllSeats() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["allSeats"],
    queryFn: getAllSeats,
  });

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return { isLoading, data };
}
