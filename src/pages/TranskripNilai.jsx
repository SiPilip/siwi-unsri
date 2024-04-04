import useProgress from "../features/user/beranda/useProgress";
import TranskripNilaiForm from "../features/user/transkripnilai/TranskripNilaiForm";
import ContentTitle from "../ui/ContentTitle";

export default function TranskripNilai() {
  const { isVerifiedDataTranskrip } = useProgress();
  return (
    <div>
      <div className="flex items-center mb-5">
        <ContentTitle verified={isVerifiedDataTranskrip}>
          Transkrip Nilai Pendaftar
        </ContentTitle>
      </div>

      <TranskripNilaiForm />
    </div>
  );
}
