import { useForm } from "react-hook-form";
import LoginFormRow from "../../ui/LoginFormRow";
import LoginFormButton from "../../ui/LoginFormButton";
import LoginFormHelp from "../../ui/LoginFormHelp";
import { HiEnvelope, HiMiniKey, HiUser } from "react-icons/hi2";
import { useLogin } from "./useLogin";
export default function LoginForm() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  const { login, isLoading } = useLogin();

  function onSubmit({ nim, password }) {
    const email = `${nim}@student.unsri.ac.id`;
    login({ email, password }, { onSettled: () => reset });
  }

  function onError(e) {
    console.error(e);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="w-[70%]">
      <LoginFormRow label="Nomor Induk Mahasiswa" error={errors?.nim?.message}>
        <input
          className="focus:outline-none w-full"
          id="nim"
          icon={<HiUser />}
          disabled={isLoading}
          {...register("nim", {
            required: "Nomor Induk Mahasiswa wajib diisi!",
          })}
        />
      </LoginFormRow>
      <LoginFormRow label="Kata Sandi" error={errors?.password?.message}>
        <input
          type="password"
          className="focus:outline-none w-full"
          id="password"
          disabled={isLoading}
          icon={<HiMiniKey />}
          {...register("password", {
            required: "Kata Sandi wajib diisi!",
          })}
        />
      </LoginFormRow>
      <LoginFormButton type="full" label="Login" disabled={isLoading} />
      <LoginFormButton type="unfull" label="Register" disabled={isLoading} />
      <LoginFormHelp />
    </form>
  );
}
