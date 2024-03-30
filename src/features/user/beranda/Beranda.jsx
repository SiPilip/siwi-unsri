import { useState } from "react";
import WarnBox from "../../../components/WarnBox";
import ContentTitle from "../../../ui/ContentTitle";
import ProgressBar from "../../../ui/ProgressBar";
import FormCard from "../../../ui/FormCard";

export default function Beranda() {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      {isShow && (
        <WarnBox
          text2="Segera selesaikan pemberkasan anda! Sebelum tanggal"
          text3=" xx-xx-xxxx"
          onClose={() => setIsShow((e) => !e)}
        />
      )}
      <section>
        <ContentTitle>Pemberkasan</ContentTitle>
        <ProgressBar progress="80" />
        <div className=" flex justify-start flex-wrap gap-y-5 gap-x-5 w-full ">
          <FormCard condition="finished">Data Pribadi</FormCard>
          <FormCard>Data Akademik</FormCard>
          <FormCard>USEPT</FormCard>
          <FormCard>Formulir Pendaftaran</FormCard>
          <FormCard>Transkrip Nilai</FormCard>
        </div>
      </section>
      <section>
        <ContentTitle>Pra-wisuda</ContentTitle>
        <ProgressBar progress="0" />
        <div className=" flex justify-start flex-wrap gap-y-5 gap-x-5">
          <FormCard isOpened={false}>Pembayaran</FormCard>
          <FormCard isOpened={false}>Seat System</FormCard>
          <FormCard isOpened={false}>Kartu Undangan</FormCard>
        </div>
      </section>
    </>
  );
}