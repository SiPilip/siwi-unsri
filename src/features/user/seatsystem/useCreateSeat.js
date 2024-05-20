import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createSeat as createSeatApi } from "../../../services/apiSeatSystem";

export default function useCreateSeat() {
  const queryClient = useQueryClient();

  const { mutate: createSeat, isLoading: isCreating } = useMutation({
    mutationFn: createSeatApi,
    onSuccess: () => {
      toast.success("Data anda telah disimpan!");
      queryClient.invalidateQueries({ queryKey: ["seat"] });
    },
    onError: (err) => toast.error(err),
  });

  return { createSeat, isCreating };
}
