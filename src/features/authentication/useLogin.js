import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useUser } from "./useUser";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { user } = useUser();
  const { role } = user?.user_metadata || {};

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      if (role === "admin") navigate("/admin", { replace: true });
      navigate("/beranda", { replace: true });
    },
    onError: (err) => {
      toast.error("Email atau sandi anda salah!");
    },
  });

  return { login, isLoading };
}
