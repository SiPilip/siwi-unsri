import { useForm } from "react-hook-form";
import FormRow from "../../../ui/FormRow";
import FormButton from "../../../ui/FormButton";
import { useUser } from "../../authentication/useUser";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useCreateTranskrip from "./useCreateTranskrip";
import SpinnerFullContainer from "../../../ui/SpinnerFullContainer";
import useTranskrip from "./useTranskrip";
import { getFileTranskrip } from "../../../services/apiTranskrip";
import SpinnerMini from "../../../ui/SpinnerMini";
import FilePreview from "../../../ui/FilePreview";

export default function TranskripNilaiForm() {
  const [file1, setFile1] = useState(null);
  const [error, setError] = useState("");

  const {
    user: { id, email },
  } = useUser();

  const { createTranskrip, isCreating } = useCreateTranskrip();
  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (file1.size > 300000) {
      setError("File anda diatas 300kb");
      return;
    }
    createTranskrip({ fileTranskrip: file1, nim });
  }

  // CHECK DATA
  const { isLoading, data: dataTranskrip } = useTranskrip(id);
  const { file } = dataTranskrip || {};
  const isVerified = Boolean(dataTranskrip);
  useEffect(
    function () {
      if (isVerified) {
        async function getFile(file) {
          const url = await getFileTranskrip(file);
          setFile1(url);
        }
        getFile(file);
      }
    },
    [isVerified]
  );
  if (isCreating || isLoading) return <SpinnerFullContainer />;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 ">
      <FormRow label="Nomor Induk Mahasiswa">
        <input
          type="text"
          id="nim"
          disabled
          value={email.substring(0,14)}
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full disabled:text-gray-500"
        />
      </FormRow>

      {!isVerified && (
        <FormRow
          label="Transkrip Nilai Terlegalisir"
          warn=".pdf max. 300kb"
          required
          error={error}
        >
          <input
            type="file"
            id="transkriplegalisir"
            className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full disabled:text-gray-500 file:bg-unsri file:px-3 file:py-1 file:rounded-md file:mr-3 file:border-none file:text-black file:cursor-pointer file:-ml-1"
            accept=".pdf"
            onChange={(e) => setFile1(e.target.files[0])}
          />
        </FormRow>
      )}

      {isVerified && <FilePreview file={file1} filename={file} />}

      <FormButton label={"Simpan Transkrip"} disabled={isVerified} />
    </form>
  );
}
