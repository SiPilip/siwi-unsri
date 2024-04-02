import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDataPribadi as createDataPribadiApi } from "../../../services/apiDataPribadi";
import toast from "react-hot-toast";

export default function useCreateDataPribadi() {
  const queryClient = useQueryClient();

  const { mutate: createDataPribadi, isLoading: isCreating } = useMutation({
    mutationFn: createDataPribadiApi,
    onSuccess: () => {
      toast.success("Data Pribadi anda telah disimpan!");
      queryClient.invalidateQueries({ queryKey: ["dataPribadi"] });
    },
    onError: (err) => toast.error(err),
  });

  return { createDataPribadi, isCreating };
}
