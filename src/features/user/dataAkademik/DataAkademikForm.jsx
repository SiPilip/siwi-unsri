import { useForm } from "react-hook-form";
import FormRow from "../../../ui/FormRow";
import FormButton from "../../../ui/FormButton";
import { useState } from "react";
import useBeasiswa from "./useBeasiswa";
import { useUser } from "../../authentication/useUser";

export default function DataAkademikForm() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const [beasiswaCount, setBeasiswaCount] = useState(0);
  let arr = Array.apply(null, { length: beasiswaCount });

  const {
    user: { nim },
  } = useUser();

  function onSubmit(data) {
    const { jenisBeasiswa } = useBeasiswa(data, beasiswaCount);
    console.log(jenisBeasiswa);
  }

  function onError(e) {
    console.error(e);
  }

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormRow label="Nama Lengkap Pendaftar" error={errors?.nama?.message}>
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
        label="Indeks Prestasi Semester (IPS) Terakhir"
        error={errors?.ips?.message}
      >
        <input
          type="number"
          id="ips"
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full"
          {...register("ips", {
            required: "Kolom input wajib diisi!",
          })}
        />
      </FormRow>

      <FormRow
        label="Indeks Prestasi Kumulatif (IPK)"
        error={errors?.ipk?.message}
      >
        <input
          type="text"
          id="ipk"
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full"
          {...register("ipk", {
            required: "Kolom input wajib diisi!",
          })}
        />
      </FormRow>

      <FormRow
        label="Total Lama Studi (tahun)"
        error={errors?.lamastudi?.message}
      >
        <input
          type="number"
          id="lamastudi"
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full"
          {...register("lamastudi", {
            required: "Kolom input wajib diisi!",
          })}
        />
      </FormRow>

      <FormRow label="Beasiswa Diikuti">
        <input
          type="number"
          id="lamastudi"
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-max"
          value={beasiswaCount}
          onChange={(e) => {
            e.target.value < 0
              ? setBeasiswaCount(0)
              : setBeasiswaCount(e.target.value);
          }}
        />
      </FormRow>

      <div className="flex flex-wrap gap-4">
        {arr.map((e, index) => {
          index += 1;
          return (
            <FormRow label={`Nama Beasiswa ${index}`} key={index}>
              <input
                type="text"
                id={`beasiswa${index}`}
                className="border-2 px-2 py-1 border-neutral-200 rounded-md w-max"
                {...register(`beasiswa${index}`, {
                  required: "Kolom beasiswa wajib diisi!",
                })}
              />
            </FormRow>
          );
        })}
      </div>

      <FormButton label={"Konfirmasi Data"} />
    </form>
  );
}
