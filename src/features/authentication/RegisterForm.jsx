import { useForm } from "react-hook-form";
import LoginFormRow from "../../ui/LoginFormRow";
import LoginFormButton from "../../ui/LoginFormButton";
import LoginFormHelp from "../../ui/LoginFormHelp";
import {
  HiMiniEnvelope,
  HiMiniKey,
  HiMiniLockClosed,
  HiMiniUser,
} from "react-icons/hi2";
import { TOKEN_SIWI_2024 } from "../../env/TOKEN_SIWI";
import toast from "react-hot-toast";
import useSignup from "./useSignup";
export default function RegisterForm() {
  const TOKEN = TOKEN_SIWI_2024;

  const { register, handleSubmit, formState, reset, getValues } = useForm();
  const { errors } = formState;

  const { signup, isLoading } = useSignup();

  function onSubmit({ email, password }) {
    signup({ email, password }, { onSuccess: () => reset });
  }

  function onError() {
    toast.error("Cek kembali kolom registrasi anda!");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="w-[70%]">
      <LoginFormRow label="Nomor Induk Mahasiswa" error={errors?.nim?.message}>
        <input
          className="focus:outline-none w-full focus:bg-transparent active:bg-transparent"
          id="nim"
          icon={<HiMiniUser />}
          disabled={isLoading}
          {...register("nim", {
            required: "Nomor Induk Mahasiswa wajib diisi!",
            minLength: {
              value: 14,
              message: "Nomor Induk Mahasiswa harus terdiri dari 14 karakter",
            },
            maxLength: {
              value: 14,
              message: "Nomor Induk Mahasiswa harus terdiri dari 14 karakter",
            },
          })}
        />
      </LoginFormRow>
      <LoginFormRow label="Email Mahasiswa" error={errors?.email?.message}>
        <input
          type="text"
          className="focus:outline-none w-full focus:bg-transparent active:bg-transparent"
          id="email"
          disabled={isLoading}
          icon={<HiMiniEnvelope />}
          {...register("email", {
            required: "Email Mahasiswa wajib diisi!",
            validate: (value) =>
              value.substring(0, 14) === getValues().nim ||
              "Email dan NIM anda tidak sesuai!",
            pattern: {
              value: /\S+@student\.unsri\.ac\.id/,
              message: "Tolong masukkan format email yang benar!",
            },
          })}
        />
      </LoginFormRow>
      <LoginFormRow label="Kata Sandi" error={errors?.password?.message}>
        <input
          type="password"
          className="focus:outline-none w-full focus:bg-transparent active:bg-transparent"
          id="password"
          disabled={isLoading}
          icon={<HiMiniKey />}
          {...register("password", {
            required: "Kata Sandi wajib diisi!",
            minLength: {
              value: 6,
              message: "Kata sandi minimal 6 digit",
            },
          })}
        />
      </LoginFormRow>
      <LoginFormRow
        label="Ulangi Kata Sandi"
        error={errors?.passwordrepeat?.message}
      >
        <input
          type="password"
          className="focus:outline-none w-full focus:bg-transparent active:bg-transparent"
          id="passwordrepeat"
          disabled={isLoading}
          icon={<HiMiniKey />}
          {...register("passwordrepeat", {
            required: "Kata Sandi wajib diisi!",
            validate: (value) =>
              value === getValues().password || "Password anda tidak sama!",
          })}
        />
      </LoginFormRow>
      <LoginFormRow label="TOKEN SIWI 2024" error={errors?.token?.message}>
        <input
          type="text"
          className="focus:outline-none w-full focus:bg-transparent active:bg-transparent"
          id="token"
          disabled={isLoading}
          icon={<HiMiniLockClosed />}
          {...register("token", {
            required: "Token wajib diisi!",
            validate: (value) => value === TOKEN || "Cek kembali token anda!",
          })}
        />
      </LoginFormRow>
      <LoginFormButton label="Register" type="full" disabled={isLoading} />
      <LoginFormHelp />
    </form>
  );
}
