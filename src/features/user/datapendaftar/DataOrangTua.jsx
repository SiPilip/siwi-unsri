import { useForm } from "react-hook-form";
import FormRow from "../../../ui/FormRow";
import FormButton from "../../../ui/FormButton";
import { useState } from "react";

export default function DataOrangTua() {
  const [status, setStatus] = useState("lengkap");

  const { register, handleSubmit, formState, getValues } = useForm("");

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
      <FormRow
        label="Status Orang Tua"
        error={errors?.statusorangtua?.message}
        required
      >
        <select
          type="text"
          id="statusorangtua"
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full"
          {...register("statusorangtua")}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="lengkap">Lengkap</option>
          <option value="yatim">Yatim / Tanpa Ayah</option>
          <option value="piatu">Piatu / Tanpa Ibu</option>
          <option value="yatimpiatu">Yatim Piatu</option>
        </select>
      </FormRow>
      {status === "lengkap" || status === "piatu" ? (
        <FormRow
          label="Nama Lengkap Ayah"
          error={errors?.namaayah?.message}
          required
        >
          <input
            type="text"
            id="namaayah"
            className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full"
            {...register("namaayah", {
              required: "Kolom input wajib diisi!",
            })}
          />
        </FormRow>
      ) : (
        ""
      )}
      {status === "lengkap" || status === "yatim" ? (
        <FormRow
          label="Nama Lengkap Ibu"
          error={errors?.namaibu?.message}
          required
        >
          <input
            type="text"
            id="namaibu"
            className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full"
            {...register("namaibu", {
              required: "Kolom input wajib diisi!",
            })}
          />
        </FormRow>
      ) : (
        ""
      )}
      {status === "yatimpiatu" && (
        <FormRow label="Nama Wali" error={errors?.namawali?.message} required>
          <input
            type="text"
            id="namawali"
            className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full"
            {...register("namawali", {
              required: "Kolom input wajib diisi!",
            })}
          />
        </FormRow>
      )}

      <FormButton label={"Simpan Data"} />
    </form>
  );
}
