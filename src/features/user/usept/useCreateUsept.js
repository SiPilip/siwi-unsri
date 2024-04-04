import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUsept as createUseptApi } from "../../../services/apiUsept";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useCreateUsept() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createUsept, isLoading: isCreating } = useMutation({
    mutationFn: createUseptApi,
    onSuccess: () => {
      toast.success("Data USEPT anda telah disimpan!");
      queryClient.invalidateQueries({ queryKey: ["dataUsept"] });
      navigate("/beranda", { replace: true });
    },
    onError: (err) => toast.error(err),
  });

  return { createUsept, isCreating };
}
