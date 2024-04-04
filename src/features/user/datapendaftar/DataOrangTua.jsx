import { useForm } from "react-hook-form";
import FormRow from "../../../ui/FormRow";
import FormButton from "../../../ui/FormButton";
import { useEffect, useState } from "react";
import useCreateDataOrangTua from "./useCreateDataOrangTua";
import toast from "react-hot-toast";
import useDataOrangTua from "./useDataOrangTua";
import { useUser } from "../../authentication/useUser";
import SpinnerFullContainer from "../../../ui/SpinnerFullContainer";

export default function DataOrangTua() {
  const { register, handleSubmit, formState, reset } = useForm("");
  const { errors } = formState;
  
  const {
    user: { id, email},
  } = useUser();
  
  const { createDataOrangTua, isCreating } = useCreateDataOrangTua();
  function onSubmit(data) {
    data["nim"] = email.substring(0,14);
    console.log(data)
    createDataOrangTua(data, {
      onSuccess: () => {
        reset();
      },
    });
  }
  function onError() {
    toast.error("Cek kembali input anda!");
  }
  
  const { isLoading: isLoadingData, data: dataOrangTua } = useDataOrangTua({
    id,
  });
  const {
    statusorangtua,
    namaayah,
    telpayah,
    namaibu,
    telpibu,
    namawali,
    telpwali,
  } = dataOrangTua || {}
  const isVerified = Boolean(dataOrangTua);
  const [status, setStatus] = useState(statusorangtua || "Lengkap");
  useEffect(()=>{
    setStatus(statusorangtua)
  },[statusorangtua])
  if (isCreating || isLoadingData) return <SpinnerFullContainer />;
  
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
          disabled={isVerified}
          value={status}
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
              disabled={isVerified}
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
              disabled={isVerified}
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
              disabled={isVerified}
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
              disabled={isVerified}
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
              disabled={isVerified}
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
              disabled={isVerified}
              value={telpwali}
              {...register("telpwali", {
                required: "Kolom input wajib diisi!",
              })}
            />
          </FormRow>
        </>
      )}

      <FormButton label={"Simpan Data"} disabled={isVerified} />
    </form>
  );
}
