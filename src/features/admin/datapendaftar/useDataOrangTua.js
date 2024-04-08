import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getDataOrangTua } from "../../../services/apiDataOrangTua";

export default function useDataOrangTua() {
  const { id } = useParams();

  const { isLoading, data, error } = useQuery({
    queryKey: ["dataOrangTua", id],
    queryFn: () => getDataOrangTua({ id }),
  });

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return { isLoading, data, error };
}
