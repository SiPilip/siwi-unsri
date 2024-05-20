import { useQuery } from "@tanstack/react-query";
import { getFormulirPendaftaran } from "../../../services/apiFormulirPendaftaran";

export default function useFormulirPendaftaran(id) {
  const { isLoading, data } = useQuery({
    queryKey: ["dataFormulirPendaftaran"],
    queryFn: () => getFormulirPendaftaran(id),
  });

  return { isLoading, data };
}
