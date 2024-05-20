import { useForm } from "react-hook-form";
import FormRow from "../../../ui/FormRow";
import FormButton from "../../../ui/FormButton";
import { useUser } from "../../authentication/useUser";
import useCreateFormulirPendaftaran from "./useCreateFormulirPendaftaran";
import useFormulirPendaftaran from "./useFormulirPendaftaran";
import SpinnerFullContainer from "../../../ui/SpinnerFullContainer";
import toast from "react-hot-toast";

export default function PendaftaranForm() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  // CREATE DATA
  const { createFormulirPendaftaran, isCreating } =
    useCreateFormulirPendaftaran();
  const {
    user: { email, id },
  } = useUser();
  function onSubmit(data) {
    const { token } = data;
    if (token !== import.meta.env.VITE_TOKEN_SIWI) {
      toast.error("Token yang anda masukkan salah!");
      return null;
    }
    const nim = email.substring(0, 14);
    const dataFormulir = { nim: nim };
    createFormulirPendaftaran(dataFormulir);
  }

  // GET DATA
  const { data: dataFormulirPendaftaran, isLoading } =
    useFormulirPendaftaran(id);
  const { nim } = dataFormulirPendaftaran || {};

  if (isCreating || isLoading) return <SpinnerFullContainer />;
  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="Token Pendaftaran"
        error={errors?.token?.message}
        required
      >
        <input
          type="password"
          id="token"
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full"
          disabled={dataFormulirPendaftaran}
          value={nim}
          {...register("token", {
            required: "Nomor token wajib diisi!",
          })}
        />
      </FormRow>

      {!dataFormulirPendaftaran && <FormButton label={"Simpan Data"} />}
    </form>
  );
}
