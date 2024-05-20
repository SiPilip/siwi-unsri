import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createFormulirPendaftaran as createFormulirPendaftaranApi } from "../../../services/apiFormulirPendaftaran";

export default function useCreateFormulirPendaftaran() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createFormulirPendaftaran, isLoading: isCreating } =
    useMutation({
      mutationFn: createFormulirPendaftaranApi,
      onSuccess: () => {
        toast.success("Data anda telah disimpan!");
        queryClient.invalidateQueries({
          queryKey: ["dataFormulirPendaftaran"],
        });
        navigate("/beranda", { replace: true });
      },
      onError: (err) => toast.error(err),
    });

  return { createFormulirPendaftaran, isCreating };
}
