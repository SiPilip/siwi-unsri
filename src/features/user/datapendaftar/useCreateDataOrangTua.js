import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createDataOrangTua as createDataOrangTuaApi } from "../../../services/apiDataOrangTua";
import { useNavigate } from "react-router-dom";

export default function useCreateDataOrangTua() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createDataOrangTua, isLoading: isCreating } = useMutation({
    mutationFn: createDataOrangTuaApi,
    onSuccess: () => {
      toast.success("Data Orang Tua anda telah disimpan!");
      queryClient.invalidateQueries({ queryKey: ["dataOrangTua"] });
      navigate("/beranda", { replace: true });
    },
    onError: (err) => toast.error(err),
  });

  return { createDataOrangTua, isCreating };
}
