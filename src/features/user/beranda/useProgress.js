import { useEffect, useState } from "react";
import SpinnerFullPage from "../../../ui/SpinnerFullPage";
import { useUser } from "../../authentication/useUser";
import useDataOrangTua from "../datapendaftar/useDataOrangTua";
import useDataPribadi from "../datapendaftar/useDataPribadi";

export default function useProgress() {
  const { user } = useUser();
  const { nim, id } = user?.user_metadata;
  console.log(nim);
  const {
    data: dataPribadi,
    isLoadingData: isLoadingDataPribadi,
    error,
  } = useDataPribadi({
    nim,
  });
  const {
    data: dataOrangTua,
    isLoading: isLoadingDataOrangTua,
    error: error2,
  } = useDataOrangTua({
    id,
  });

  if (error || error2) {
    console.error("Data tidak bisa diambil");
    throw new Error("Data tidak bisa diambil");
  }

  const isVerifiedDataPribadi = Boolean(dataPribadi);
  const isVerifiedDataOrangTua = Boolean(dataOrangTua);

  const isLoading = isLoadingDataOrangTua || isLoadingDataPribadi;

  let progress = 0;
  if (isVerifiedDataPribadi) progress = progress + 1;
  if (isVerifiedDataOrangTua) progress = progress + 1;
  progress = String(Math.floor(Number((progress / 6) * 100)));

  return {
    progress,
    isVerifiedDataPribadi,
    isVerifiedDataOrangTua,
    isLoading,
  };
}
