import useProgress from "../features/user/beranda/useProgress";
import DataAkademikForm from "../features/user/dataAkademik/DataAkademikForm";
import ContentTitle from "../ui/ContentTitle";
import Verified from "../ui/Verified";

export default function DataAkademik() {
  const { isVerifiedDataAkademik } = useProgress();
  return (
    <div>
      <div className="flex items-center mb-5">
        <ContentTitle verified={isVerifiedDataAkademik}>
          Data Akademik Pendaftar
        </ContentTitle>
      </div>

      <DataAkademikForm />
    </div>
  );
}
