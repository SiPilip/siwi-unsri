import { useState } from "react";
import SpinnerMini from "./SpinnerMini";

export default function FilePreview({ file, filename }) {
  const [fileLoad, setFileLoad] = useState(false);
  return (
    <a href={file} download>
      <div className="w-max overflow-hidden select-none relative">
        <div className="w-full h-full absolute text-xs overflow-hidden"></div>
        <div className="w-full h-full absolute flex justify-center items-center">
          {!fileLoad && <SpinnerMini />}
        </div>
        <iframe
          src={file}
          className="w-[100px] h-max overflow-hidden select-none"
          onLoad={() => setFileLoad(true)}
        ></iframe>
      </div>
      <span className="text-black">{filename.substring(0, 29)}</span>
    </a>
  );
}
