import { useEffect, useState } from "react";
import { useUser } from "../../authentication/useUser";
import useDataAkademik from "../dataAkademik/useDataAkademik";
import useDataOrangTua from "../datapendaftar/useDataOrangTua";
import useDataPribadi from "../datapendaftar/useDataPribadi";
import useTranskrip from "../transkripnilai/useTranskrip";
import useUsept from "../usept/useUsept";

export default function useProgress() {
  const {
    user: { id },
  } = useUser();

  const { data: dataPribadi, isLoadingData: isLoadingDataPribadi } =
    useDataPribadi({
      id,
    });
  const { data: dataOrangTua, isLoading: isLoadingDataOrangTua } =
    useDataOrangTua({
      id,
    });
  const { data: dataAkademik, isLoading: isLoadingDataAkademik } =
    useDataAkademik(id);
  const { data: dataTranskrip, isLoading: isLoadingTranskrip } =
    useTranskrip(id);
  const { data: dataUsept, isLoading: isLoadingUsept } = useUsept(id);

  const isVerifiedDataPribadi = Boolean(dataPribadi);
  const isVerifiedDataOrangTua = Boolean(dataOrangTua);
  const isVerifiedDataAkademik = Boolean(dataAkademik);
  const isVerifiedDataTranskrip = Boolean(dataTranskrip);
  const isVerifiedDataUsept = Boolean(dataUsept);

  const isLoading =
    isLoadingDataOrangTua ||
    isLoadingDataPribadi ||
    isLoadingDataAkademik ||
    isLoadingTranskrip;

  const progressTotal = Number(
    isVerifiedDataAkademik +
      isVerifiedDataOrangTua +
      isVerifiedDataPribadi +
      isVerifiedDataTranskrip +
      isVerifiedDataUsept
  );
  const progress = String(Math.floor(Number((progressTotal / 5) * 100)));

  return {
    progress,
    isVerifiedDataPribadi,
    isVerifiedDataOrangTua,
    isVerifiedDataAkademik,
    isVerifiedDataTranskrip,
    isVerifiedDataUsept,
    isLoading,
  };
}
