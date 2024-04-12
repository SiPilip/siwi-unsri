import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createPembayaran as createPembayaranApi } from "../../../services/apiPembayaran";

export default function useCreatePembayaran() {
  const queryClient = useQueryClient();

  const { mutate: createPembayaran, isLoading: isCreating } = useMutation({
    mutationFn: createPembayaranApi,
    onSuccess: () => {
      toast.success("Pembayaran anda berhasil dilakukan!");
      queryClient.invalidateQueries({ queryKey: ["pembayaran"] });
    },
    onError: (err) => toast.error(err),
  });

  return { createPembayaran, isCreating };
}
