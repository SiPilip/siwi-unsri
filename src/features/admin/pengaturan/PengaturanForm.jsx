import FormRow from "../../../ui/FormRow";
import FormButton from "../../../ui/FormButton";
import useUpdatePengaturan from "./useUpdatePengaturan";
import { useForm } from "react-hook-form";
import usePengaturan from "../../user/beranda/usePengaturan";
import SpinnerFullContainer from "../../../ui/SpinnerFullContainer";

export default function PengaturanForm() {
  const { updatePengaturan, isUpdating } = useUpdatePengaturan();

  const { register, handleSubmit, reset, formState, getValues } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    updatePengaturan(data);
  }
  function onError() {
    toast.error("Cek kembali input anda!");
  }

  // Ambil data
  const { data, isLoading } = usePengaturan();
  const { tanggaltutup } = data || {};

  if (isLoading) return <SpinnerFullContainer />;

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormRow
        label="Tenggat Akhir Pendaftaran"
        error={errors?.tanggaltutup?.message}
        required
      >
        <input
          type="date"
          id="tanggaltutup"
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full disabled:text-gray-500"
          defaultValue={tanggaltutup}
          {...register("tanggaltutup", {
            valueAsDate: true,
          })}
        />
      </FormRow>

      <FormButton label={"Simpan"} />
    </form>
  );
}
