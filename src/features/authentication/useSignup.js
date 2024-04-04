import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        "Silahkan cek email mahasiswa anda dan lakukan konfirmasi registrasi!"
      );
    },
  });

  return { signup, isLoading };
}
