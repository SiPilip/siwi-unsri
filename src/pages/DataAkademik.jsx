import DataAkademikForm from "../features/user/dataAkademik/DataAkademikForm";
import ContentTitle from "../ui/ContentTitle";
import Verified from "../ui/Verified";

export default function DataAkademik() {
  return (
    <div>
      <div className="flex items-center mb-5">
        <ContentTitle>Data Akademik Pendaftar</ContentTitle>
      </div>

      <DataAkademikForm />
    </div>
  );
}
