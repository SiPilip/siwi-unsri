import { useQuery } from "@tanstack/react-query";
import { getDataPribadi } from "../../../services/apiDataPribadi";
import { useParams } from "react-router-dom";
import { getDataAkademik } from "../../../services/apiDataAkademik";

export default function useDataAkademik() {
  const { id } = useParams();

  const { isLoading, data, error } = useQuery({
    queryKey: ["dataAkademik", id],
    queryFn: () => getDataAkademik(id),
  });

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return { isLoading, data, error };
}
