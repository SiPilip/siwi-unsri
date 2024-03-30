import { useForm } from "react-hook-form";
import FormRow from "../../../ui/FormRow";
import FormButton from "../../../ui/FormButton";

export default function DataPribadi() {
  const { register, handleSubmit, reset, formState } = useForm();

  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }
  function onError() {}

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex flex-col gap-5"
    >
      <FormRow label="Nama Lengkap" error={errors?.nama?.message} required>
        <input
          type="text"
          id="nama"
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full"
          disabled
          {...register("nama", {
            required: "Kolom input wajib diisi!",
            value: "Dian Maheru",
          })}
        />
      </FormRow>
      <FormRow
        label="Nomor Induk Mahasiswa"
        error={errors?.nim?.message}
        required
      >
        <input
          type="text"
          id="nim"
          disabled
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full"
          {...register("nim", {
            required: "Kolom input wajib diisi!",
            value: "09021182227014",
          })}
        />
      </FormRow>
      <FormRow
        label="Tanggal Lahir"
        error={errors?.tanggallahir?.message}
        required
      >
        <input
          type="date"
          id="tanggallahir"
          disabled
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full"
          {...register("tanggallahir", {
            required: "Kolom input wajib diisi!",
            value: "2004-10-19",
          })}
        />
      </FormRow>
      <FormRow
        label="Tempat Lahir"
        error={errors?.tempatlahir?.message}
        required
      >
        <input
          type="text"
          id="tempatlahir"
          defaultValue="Makassar"
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full"
          {...register("tempatlahir", {
            required: "Kolom input wajib diisi!",
          })}
        />
      </FormRow>
      <FormRow
        label="Jenis Kelamin"
        error={errors?.jeniskelamin?.message}
        required
      >
        <input
          type="text"
          id="jeniskelamin"
          defaultValue="Laki-laki"
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full"
          {...register("jeniskelamin", {
            required: "Kolom input wajib diisi!",
          })}
        />
      </FormRow>
      <FormRow label="Agama" error={errors?.agama?.message} required>
        <input
          type="text"
          id="agama"
          defaultValue="Islam"
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full"
          {...register("agama", {
            required: "Kolom input wajib diisi!",
          })}
        />
      </FormRow>
      <FormRow
        label=" Domisili / Tempat Tinggal / Alamat Lengkap"
        error={errors?.alamat?.message}
        required
      >
        <input
          type="text"
          id="alamat"
          defaultValue="Komp. Sukarami Indah Blok B.1 No.8"
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full"
          {...register("alamat", {
            required: "Kolom input wajib diisi!",
          })}
        />
      </FormRow>
      <FormButton label={"Simpan Data"} />
    </form>
  );
}
