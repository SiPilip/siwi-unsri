import { useState } from "react";
import WarnBox from "../../../components/WarnBox";
import ContentTitle from "../../../ui/ContentTitle";
import ProgressBar from "../../../ui/ProgressBar";
import FormCard from "../../../ui/FormCard";
import useProgress from "./useProgress";
import usePengaturan from "./usePengaturan";
import SpinnerFullContainer from "../../../ui/SpinnerFullContainer";

export default function Beranda() {
  const [isShow, setIsShow] = useState(true);
  const {
    progress,
    isVerifiedDataOrangTua,
    isVerifiedDataPribadi,
    isVerifiedDataAkademik,
    isVerifiedDataTranskrip,
    isVerifiedDataUsept,
  } = useProgress();

  const { data, isLoading } = usePengaturan();
  const { tanggaltutup } = data || {};
  let date = new Date(tanggaltutup);

  let dateMDY = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;

  if (isLoading) return <SpinnerFullContainer />;

  return (
    <>
      {isShow && (
        <WarnBox
          text2="Segera selesaikan pendaftaran anda! Sebelum tanggal"
          text3={` ${dateMDY}!`}
          onClose={() => setIsShow((e) => !e)}
        />
      )}

      <section>
        <ContentTitle>Pemberkasan</ContentTitle>
        <ProgressBar progress={progress} />
        <div className="flex justify-start flex-wrap gap-y-5 gap-x-5 w-full ">
          <FormCard condition={isVerifiedDataPribadi}>Data Pribadi</FormCard>
          <FormCard condition={isVerifiedDataOrangTua}>Data Orang Tua</FormCard>
          <FormCard condition={isVerifiedDataAkademik}>Data Akademik</FormCard>
          <FormCard condition={isVerifiedDataTranskrip}>
            Transkrip Nilai
          </FormCard>
          <FormCard condition={isVerifiedDataUsept}>USEPT</FormCard>
        </div>
      </section>
      <section>
        <ContentTitle>Pra-wisuda</ContentTitle>
        <ProgressBar progress="0" />
        <div className=" flex justify-start flex-wrap gap-y-5 gap-x-5">
          <FormCard isOpened={false}>Formulir Pendaftaran</FormCard>
          <FormCard isOpened={false}>Pembayaran</FormCard>
          <FormCard isOpened={false}>Seat System</FormCard>
          <FormCard isOpened={false}>Kartu Undangan</FormCard>
        </div>
      </section>
    </>
  );
}
