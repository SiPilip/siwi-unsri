import { useForm } from "react-hook-form";
import FormRow from "../../../ui/FormRow";
import FormButton from "../../../ui/FormButton";
import { useDataSimak } from "../../../hooks/useDataSimak";
import { useUser } from "../../authentication/useUser";
import SpinnerFullPage from "../../../ui/SpinnerFullPage";
import useCreateDataPribadi from "./useCreateDataPribadi";
import { getDataPribadi } from "../../../services/apiDataPribadi";
import useDataPribadi from "./useDataPribadi";
import toast from "react-hot-toast";

export default function DataPribadi() {
  // SIMAK SECTION
  const {
    user: { nim },
  } = useUser();

  const { dataSimak, isSimakLoading } = useDataSimak({ nim });
  const { namaMahasiswa, tanggalLahir } = dataSimak || {};

  // FORM SECTION
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const { createDataPribadi, isCreating } = useCreateDataPribadi();

  function onSubmit(data) {
    console.log(data);
    createDataPribadi(data, {
      onSuccess: () => {
        reset();
      },
    });
  }
  function onError() {
    toast.error("Cek kembali input anda!");
  }

  // CHECK DATA
  const { dataPribadi, isLoadingData } = useDataPribadi({ nim });
  const { tempatlahir, jeniskelamin, agama, alamat } = dataPribadi || {};
  const isVerified = Boolean(dataPribadi);

  if (isSimakLoading || isLoadingData) return <SpinnerFullPage />;

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex flex-col gap-5 "
    >
      <FormRow label="Nama Lengkap" error={errors?.nama?.message} required>
        <input
          type="text"
          id="namalengkap"
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full disabled:text-gray-500"
          disabled
          {...register("namalengkap", {
            required: "Kolom input wajib diisi!",
            value: namaMahasiswa,
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
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full disabled:text-gray-500"
          {...register("nim", {
            required: "Kolom input wajib diisi!",
            value: nim,
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
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full disabled:text-gray-500"
          {...register("tanggallahir", {
            required: "Kolom input wajib diisi!",
            value: tanggalLahir,
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
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full disabled:text-gray-500"
          disabled={isVerified}
          value={tempatlahir}
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
        <select
          type="text"
          id="jeniskelamin"
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full disabled:bg-gray-100 disabled:border-gray-300"
          disabled={isVerified}
          value={jeniskelamin}
          {...register("jeniskelamin", {
            required: "Kolom input wajib diisi!",
          })}
        >
          <option value="Pria">Pria</option>
          <option value="Perempuan">Perempuan</option>
        </select>
      </FormRow>
      <FormRow label="Agama" error={errors?.agama?.message} required>
        <select
          type="text"
          id="agama"
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full disabled:bg-gray-100 disabled:border-gray-300"
          disabled={isVerified}
          value={agama}
          {...register("agama", {
            required: "Kolom input wajib diisi!",
          })}
        >
          <option value="Islam">Islam</option>
          <option value="Protestan">Kristen Protestan</option>
          <option value="Katolik">Katolik</option>
          <option value="Hindu">Hindu</option>
          <option value="Buddha">Buddha</option>
          <option value="Konghucu">Konghucu</option>
        </select>
      </FormRow>
      <FormRow
        label=" Domisili / Tempat Tinggal / Alamat Lengkap"
        error={errors?.alamat?.message}
        required
      >
        <textarea
          type="text"
          id="alamat"
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full disabled:text-gray-500"
          disabled={isVerified}
          value={alamat}
          {...register("alamat", {
            required: "Kolom input wajib diisi!",
            maxLength: {
              value: 50,
              message: "Batas Pengisian 50 character",
            },
          })}
        />
      </FormRow>
      <FormButton label={"Simpan Data"} />
    </form>
  );
}
