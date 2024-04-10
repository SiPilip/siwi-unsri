import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updatePengaturan as updatePengaturanApi } from "../../../services/apiPengaturan";

export default function useUpdatePengaturan() {
  const queryClient = useQueryClient();

  const { mutate: updatePengaturan, isLoading: isUpdating } = useMutation({
    mutationFn: updatePengaturanApi,
    onSuccess: ({ pengaturan }) => {
      toast.success("Pengaturan berhasil diupdate!");
      queryClient.setQueryData(["pengaturan"], pengaturan);
      queryClient.invalidateQueries({ queryKey: ["pengaturan"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { updatePengaturan, isUpdating };
}
