import { useForm } from "react-hook-form";
import FormRow from "../../../ui/FormRow";
import FormButton from "../../../ui/FormButton";

export default function PendaftaranForm() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  function onError(e) {
    console.error(e);
  }

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormRow label="No Token" error={errors?.nama?.message} required>
        <input
          type="text"
          id="notoken"
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full"
          {...register("notoken", {
            required: "Nomor token wajib diisi!",
          })}
        />
      </FormRow>

      <FormButton label={"Simpan Data"} />
    </form>
  );
}
