import { useState } from "react";
import SpinnerMini from "./SpinnerMini";

export default function FilePreview({ file, filename }) {
  const [fileLoad, setFileLoad] = useState(false);

  return (
    <a href={file} download className="bg-gray-100 w-max rounded-md px-3 py-2 ">
      <div className="w-full overflow-hidden select-none relative flex justify-center">
        <div className="w-full h-full absolute text-xs overflow-hidden"></div>
        <div className="w-full h-full absolute flex justify-center items-center">
          {!fileLoad && <SpinnerMini />}
        </div>
        <iframe
          src={file}
          className="w-[150px] overflow-hidden select-none"
          onLoad={() => setFileLoad(true)}
          scrolling="no"
        ></iframe>
      </div>
      <span className="text-black text-xs">{filename.substring(0, 29)}</span>
    </a>
  );
}
