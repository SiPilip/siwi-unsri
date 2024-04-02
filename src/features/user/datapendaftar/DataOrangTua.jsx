import { useForm } from "react-hook-form";
import FormRow from "../../../ui/FormRow";
import FormButton from "../../../ui/FormButton";
import { useEffect, useState } from "react";
import useCreateDataOrangTua from "./useCreateDataOrangTua";
import toast from "react-hot-toast";
import useDataOrangTua from "./useDataOrangTua";
import { useUser } from "../../authentication/useUser";

export default function DataOrangTua() {
  const [status, setStatus] = useState("lengkap");
  const { register, handleSubmit, formState, reset } = useForm("");
  const { errors } = formState;

  const { createDataOrangTua, isCreating } = useCreateDataOrangTua();
  function onSubmit(data) {
    createDataOrangTua(data, {
      onSuccess: () => {
        reset();
      },
    });
  }
  function onError() {
    toast.error("Cek kembali input anda!");
  }

  const {
    user: { id },
  } = useUser();
  const { isLoading, dataOrangTua } = useDataOrangTua({ id });
  const {
    statusorangtua,
    namaayah,
    telpayah,
    namaibu,
    telpibu,
    namawali,
    telpwali,
  } = dataOrangTua || {};

  useEffect(() => {
    if (dataOrangTua) setStatus(statusorangtua);
  }, [setStatus]);

  if (isCreating || isLoading) return <SpinnerFullContainer />;

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
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full disabled:bg-gray-100 disabled:border-gray-300"
          {...register("statusorangtua")}
          onChange={(e) => setStatus(e.target.value)}
          disabled={Boolean(dataOrangTua)}
          value={statusorangtua}
        >
          <option value="Lengkap">Lengkap</option>
          <option value="Yatim">Yatim / Tanpa Ayah</option>
          <option value="Piatu">Piatu / Tanpa Ibu</option>
          <option value="Yatim/Piatu">Yatim Piatu</option>
        </select>
      </FormRow>
      {status === "Lengkap" || status === "Piatu" ? (
        <>
          <FormRow
            label="Nama Lengkap Ayah"
            error={errors?.namaayah?.message}
            required
          >
            <input
              type="text"
              id="namaayah"
              className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full"
              disabled={Boolean(dataOrangTua)}
              value={namaayah}
              {...register("namaayah", {
                required: "Kolom input wajib diisi!",
              })}
            />
          </FormRow>
          <FormRow
            label="Nomor Handphone Ayah"
            error={errors?.telpayah?.message}
            required
          >
            <input
              type="text"
              id="telpayah"
              className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full"
              disabled={Boolean(dataOrangTua)}
              value={telpayah}
              {...register("telpayah", {
                required: "Kolom input wajib diisi!",
              })}
            />
          </FormRow>
        </>
      ) : (
        ""
      )}
      {status === "Lengkap" || status === "Yatim" ? (
        <>
          <FormRow
            label="Nama Lengkap Ibu"
            error={errors?.namaibu?.message}
            required
          >
            <input
              type="text"
              id="namaibu"
              className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full"
              disabled={Boolean(dataOrangTua)}
              value={namaibu}
              {...register("namaibu", {
                required: "Kolom input wajib diisi!",
              })}
            />
          </FormRow>
          <FormRow
            label="Nomor Handphone Ibu"
            error={errors?.telpibu?.message}
            required
          >
            <input
              type="text"
              id="telpibu"
              className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full"
              disabled={Boolean(dataOrangTua)}
              value={telpibu}
              {...register("telpibu", {
                required: "Kolom input wajib diisi!",
              })}
            />
          </FormRow>
        </>
      ) : (
        ""
      )}
      {status === "Yatim/Piatu" && (
        <>
          <FormRow label="Nama Wali" error={errors?.namawali?.message} required>
            <input
              type="text"
              id="namawali"
              className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full"
              disabled={Boolean(dataOrangTua)}
              value={namawali}
              {...register("namawali", {
                required: "Kolom input wajib diisi!",
              })}
            />
          </FormRow>
          <FormRow
            label="Nomor Handphone Wali"
            error={errors?.telpwali?.message}
            required
          >
            <input
              type="text"
              id="telpwali"
              className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full"
              disabled={Boolean(dataOrangTua)}
              value={telpwali}
              {...register("telpwali", {
                required: "Kolom input wajib diisi!",
              })}
            />
          </FormRow>
        </>
      )}

      <FormButton label={"Simpan Data"} disabled={Boolean(dataOrangTua)} />
    </form>
  );
}
