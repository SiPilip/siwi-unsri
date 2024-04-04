import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDataPribadi as createDataPribadiApi } from "../../../services/apiDataPribadi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useCreateDataPribadi() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createDataPribadi, isLoading: isCreating } = useMutation({
    mutationFn: createDataPribadiApi,
    onSuccess: () => {
      toast.success("Data Pribadi anda telah disimpan!");
      queryClient.invalidateQueries({ queryKey: ["dataPribadi"] });
      navigate("/beranda", { replace: true });
    },
    onError: (err) => toast.error(err),
  });

  return { createDataPribadi, isCreating };
}
