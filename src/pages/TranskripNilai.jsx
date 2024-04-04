import LayoutTranskripNilai from "../features/user/transkripnilai/LayoutTranskripNilai";
import TranskripNilaiForm from "../features/user/transkripnilai/TranskripNilaiForm";
import ContentTitle from "../ui/ContentTitle";

export default function TranskripNilai() {
  return (
    <div>
      <div className="flex items-center mb-5">
        <ContentTitle>Transkrip Nilai Pendaftar</ContentTitle>
      </div>

      <TranskripNilaiForm />
    </div>
  );
}
