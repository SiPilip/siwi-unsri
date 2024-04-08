import { useEffect, useState } from "react";
import ContentTitle from "../../../ui/ContentTitle";
import { getFileTranskrip } from "../../../services/apiTranskrip";
import SpinnerFullContainer from "../../../ui/SpinnerFullContainer";
import FilePreview from "../../../ui/FilePreview";

export default function DataTranskrip({ data, isLoading }) {
  const { file } = data || {};
  const [file1, setFile1] = useState();
  useEffect(
    function () {
      if (!isLoading) {
        async function getFile(file) {
          const url = await getFileTranskrip(file);
          setFile1(url);
        }
        getFile(file);
      }
    },
    [file, isLoading]
  );

  if (isLoading) return <SpinnerFullContainer />;

  return (
    <div>
      <div className="flex items-center mb-3">
        <ContentTitle>Data Transkrip Wisudawan</ContentTitle>
      </div>
      <div className="w-full flex justify-start">
        <FilePreview file={file1} filename={file} />
      </div>
    </div>
  );
}
