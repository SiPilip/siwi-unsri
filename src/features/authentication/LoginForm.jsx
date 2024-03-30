import user from "../../../public/icons/user.svg";
import lock from "../../../public/icons/lock.svg";
import FormContainer from "../../components/FormContainer";
import LoginRegisterInput from "../../components/LoginRegisterInput";
import LoginRegisterButton from "../../components/LoginRegisterButton";
import { Link } from "react-router-dom";
import LoginRegisterGetHelp from "../../components/LoginRegisterGetHelp";
import { useForm } from "react-hook-form";
import LoginFormRow from "../../ui/LoginFormRow";
import LoginFormButton from "../../ui/LoginFormButton";
import LoginFormHelp from "../../ui/LoginFormHelp";
import { HiEnvelope, HiMiniKey } from "react-icons/hi2";
import { useLogin } from "./useLogin";
export default function LoginForm() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  const { login, isLoading } = useLogin();

  function onSubmit({ email, password }) {
    login({ email, password }, { onSettled: () => reset });
  }

  function onError(e) {
    console.error(e);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="w-[70%]">
      <LoginFormRow label="Email Mahasiswa" error={errors?.email?.message}>
        <input
          className="focus:outline-none w-full"
          id="email"
          icon={<HiEnvelope />}
          disabled={isLoading}
          {...register("email", {
            required: "Email wajib diisi!",
            value: "pilip@sipilip.com",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Tolong masukkan format email yang benar!",
            },
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
      <LoginFormButton label="Login" disabled={isLoading} />
      <LoginFormButton label="Register" disabled={isLoading} />
      <LoginFormHelp />
    </form>
  );
}
