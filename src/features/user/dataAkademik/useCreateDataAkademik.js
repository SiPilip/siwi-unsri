import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDataPribadi as createDataPribadiApi } from "../../../services/apiDataPribadi";
import toast from "react-hot-toast";
import { createDataAkademik as createDataAkademikApi } from "../../../services/apiDataAkademik";

export default function useCreateDataAkaddemik() {
  const queryClient = useQueryClient();

  const { mutate: createDataAkademik, isLoading: isCreating } = useMutation({
    mutationFn: createDataAkademikApi,
    onSuccess: () => {
      toast.success("Data Akademik anda telah disimpan!");
      queryClient.invalidateQueries({ queryKey: ["dataAkademik"] });
    },
    onError: (err) => toast.error(err),
  });

  return { createDataAkademik, isCreating };
}
