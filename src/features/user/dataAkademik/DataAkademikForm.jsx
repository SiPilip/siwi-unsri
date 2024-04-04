import { useForm } from "react-hook-form";
import FormRow from "../../../ui/FormRow";
import FormButton from "../../../ui/FormButton";
import { useState } from "react";
import useBeasiswa from "./useBeasiswa";
import { useUser } from "../../authentication/useUser";
import useCreateDataAkaddemik from "./useCreateDataAkademik";
import useDataAkademik from "./useDataAkademik";
import SpinnerFullContainer from "../../../ui/SpinnerFullContainer";
import toast from "react-hot-toast";

export default function DataAkademikForm() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  const [beasiswaCount, setBeasiswaCount] = useState(0);
  let arr = Array.apply(null, { length: beasiswaCount });

  const {
    user: { id, email },
  } = useUser();

  const { createDataAkademik, isCreating } = useCreateDataAkaddemik();
  function onSubmit(data) {
    const { dataFinal } = useBeasiswa(data, beasiswaCount);
    createDataAkademik(dataFinal, {
      onSuccess: () => {
        reset();
      },
    });
  }
  function onError() {
    toast.error("Cek kembali input anda!");
  }

  // CHECK DATA
  const { isLoading, data: dataAkademik } = useDataAkademik(id);
  const {
    ips,
    semesterterakhir,
    lamastudi,
    ipk,
    jenisbeasiswa,
    totalbeasiswa,
  } = dataAkademik || {};
  const isVerified = Boolean(dataAkademik);

  if (isCreating || isLoading) return <SpinnerFullContainer />;

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormRow label="Nomor Induk Mahasiswa" error={errors?.nama?.message}>
        <input
          type="text"
          id="nim"
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full disabled:text-gray-500"
          disabled
          {...register("nim", {
            required: "Kolom input wajib diisi!",
            value: email.substring(0, 14),
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
          step="0.01"
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full disabled:text-gray-500"
          disabled={isVerified}
          value={ips}
          {...register("ips", {
            required: "Kolom input wajib diisi!",
            validate: (value) =>
              (value <= 4.0 && value > 0) ||
              "Isi dengan format ips yang benar!",
            valueAsNumber: true,
          })}
        />
      </FormRow>
      <FormRow
        label="Semester Terakhir (Sesuai IPS)"
        error={errors?.semesterterakhir?.message}
      >
        <input
          type="number"
          id="semesterterakhir"
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full disabled:text-gray-500"
          disabled={isVerified}
          value={semesterterakhir}
          {...register("semesterterakhir", {
            required: "Kolom input wajib diisi!",
            validate: (value) =>
              (value <= 9 && value > 6) || "Isi dengan tahun yang benar!",
            valueAsNumber: true,
          })}
        />
      </FormRow>

      <FormRow
        label="Indeks Prestasi Kumulatif (IPK)"
        error={errors?.ipk?.message}
      >
        <input
          type="number"
          step="0.01"
          id="ipk"
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full disabled:text-gray-500"
          disabled={isVerified}
          value={ipk}
          {...register("ipk", {
            required: "Kolom input wajib diisi!",
            validate: (value) =>
              (value <= 4.0 && value > 0) ||
              "Isi dengan format ipk yang benar!",
            valueAsNumber: true,
          })}
        />
      </FormRow>

      <FormRow
        label="Total Lama Studi (Tahun)"
        error={errors?.lamastudi?.message}
      >
        <input
          type="number"
          id="lamastudi"
          step="0.01"
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full disabled:text-gray-500"
          disabled={isVerified}
          value={lamastudi}
          {...register("lamastudi", {
            required: "Kolom input wajib diisi!",
            validate: (value) =>
              (value <= 5 && value > 3) || "Isi dengan tahun yang benar!",
            valueAsNumber: true,
          })}
        />
      </FormRow>

      <FormRow label="Beasiswa Diikuti">
        {!isVerified ? (
          <input
            type="number"
            id="totalbeasiswa"
            className="border-2 px-2 py-1 border-neutral-200 rounded-md w-max disabled:text-gray-500"
            value={beasiswaCount}
            disabled={isVerified}
            {...register("totalbeasiswa", {
              required: "Kolom input wajib diisi!",
              valueAsNumber: true,
            })}
            onChange={(e) => {
              e.target.value < 0
                ? setBeasiswaCount(0)
                : setBeasiswaCount(e.target.value);
            }}
          />
        ) : (
          <input
            type="number"
            id="totalbeasiswa"
            className="border-2 px-2 py-1 border-neutral-200 rounded-md w-max disabled:text-gray-500"
            value={totalbeasiswa}
            disabled={isVerified}
            {...register("totalbeasiswa", {
              required: "Kolom input wajib diisi!",
              valueAsNumber: true,
            })}
          />
        )}
      </FormRow>

      {!isVerified ? (
        <div className="flex flex-wrap gap-4">
          {arr.map((e, index) => {
            index += 1;
            return (
              <FormRow label={`Nama Beasiswa ${index}`} key={index}>
                <input
                  type="text"
                  id={`beasiswa${index}`}
                  className="border-2 px-2 py-1 border-neutral-200 rounded-md w-max disabled:text-gray-500"
                  {...register(`beasiswa${index}`, {
                    required: "Kolom beasiswa wajib diisi!",
                  })}
                />
              </FormRow>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-wrap gap-4">
          {jenisbeasiswa.split(", ").map((e, index) => {
            index += 1;
            return (
              <FormRow label={`Nama Beasiswa ${index}`} key={index}>
                <input
                  type="text"
                  id={`beasiswa${index}`}
                  className="border-2 px-2 py-1 border-neutral-200 rounded-md w-max disabled:text-gray-500"
                  value={e}
                  disabled
                  {...register(`beasiswa${index}`, {
                    required: "Kolom beasiswa wajib diisi!",
                  })}
                />
              </FormRow>
            );
          })}
        </div>
      )}

      <FormButton label={"Konfirmasi Data"} disabled={isVerified} />
    </form>
  );
}
