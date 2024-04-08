import SpinnerFullContainer from "../../../ui/SpinnerFullContainer";
import DataAkademik from "./DataAkademik";
import DataOrangTua from "./DataOrangTua";
import DataPribadi from "./DataPribadi";
import DataTranskrip from "./DataTranskrip";
import useDataAkademik from "./useDataAkademik";
import useDataOrangTua from "./useDataOrangTua";
import useDataPribadi from "./useDataPribadi";
import useDataTranskrip from "./useDataTranskrip";
import { useNavigate } from "react-router-dom";

export default function LayoutDataPendaftarDetail() {
  const navigate = useNavigate();
  const { data: dataPribadi, isLoading: isLoadingDataPribadi } =
    useDataPribadi();
  const { data: dataOrangTua, isLoading: isLoadingDataOrangTua } =
    useDataOrangTua();
  const { data: dataAkademik, isLoading: isLoadingDataAkademik } =
    useDataAkademik();
  const { data: dataTranskrip, isLoading: isLoadingDataTranskrip } =
    useDataTranskrip();

  if (isLoadingDataPribadi) return <SpinnerFullContainer />;

  return (
    <div className="flex flex-col gap-10">
      <DataPribadi data={dataPribadi} />
      <DataOrangTua data={dataOrangTua} />
      <DataAkademik data={dataAkademik} />
      <DataTranskrip data={dataTranskrip} isLoading={isLoadingDataTranskrip} />
      <button
        className="bg-unsri w-fit px-3 py-1 rounded-md text-white"
        onClick={() => {
          navigate("/admin/datapendaftar", { replace: true });
        }}
      >
        Kembali ke beranda
      </button>
    </div>
  );
}
