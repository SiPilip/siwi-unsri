import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createTranskrip as createTranskripApi } from "../../../services/apiTranskrip";
import { useNavigate } from "react-router-dom";

export default function useCreateTranskrip() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createTranskrip, isLoading: isCreating } = useMutation({
    mutationFn: createTranskripApi,
    onSuccess: () => {
      toast.success("Data Transkrip anda telah disimpan!");
      queryClient.invalidateQueries({ queryKey: ["dataTranskrip"] });
      navigate("/beranda", { replace: true });
    },
    onError: (err) => toast.error(err),
  });

  return { createTranskrip, isCreating };
}
