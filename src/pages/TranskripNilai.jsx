import LayoutTranskripNilai from "../features/user/transkripnilai/LayoutTranskripNilai";
import ContentTitle from "../ui/ContentTitle";

export default function TranskripNilai() {
  return (
    <div>
      <div className="flex items-center mb-5">
        <ContentTitle>Transkrip Nilai Pendaftar</ContentTitle>
      </div>

      <LayoutTranskripNilai />
    </div>
  );
}
