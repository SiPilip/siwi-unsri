import PengaturanForm from "../../features/admin/pengaturan/PengaturanForm";
import ContentTitle from "../../ui/ContentTitle";

export default function Pengaturan() {
  return (
    <div>
      <div className="flex items-center mb-5">
        <ContentTitle>Tenggat Pemberkasan Aplikasi</ContentTitle>
      </div>

      <PengaturanForm />
    </div>
  );
}
