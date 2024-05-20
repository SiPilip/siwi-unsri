import { useState } from "react";
import SubHeaderDataPendaftar from "./SubHeaderDataPendaftar";
import DataPribadi from "./DataPribadi";
import DataOrangTua from "./DataOrangTua";
import useProgress from "../beranda/useProgress";

export default function LayoutDataPendaftar() {
  const [isShowingDataPribadi, setIsShowingDataPribadi] = useState(false);
  const [isShowingDataOrangTua, setIsShowingDataOrangTua] = useState(false);

  const { isVerifiedDataOrangTua, isVerifiedDataPribadi } = useProgress();

  return (
    <>
      <SubHeaderDataPendaftar
        title={"Data Pribadi"}
        isShowing={isShowingDataPribadi}
        handleClick={() => setIsShowingDataPribadi((show) => !show)}
        verified={isVerifiedDataPribadi}
      />
      {isShowingDataPribadi && <DataPribadi />}

      <SubHeaderDataPendaftar
        title={"Data Orangtua / Wali"}
        isShowing={isShowingDataOrangTua}
        handleClick={() => setIsShowingDataOrangTua((show) => !show)}
        verified={isVerifiedDataOrangTua}
      />
      {isShowingDataOrangTua && <DataOrangTua />}
    </>
  );
}
