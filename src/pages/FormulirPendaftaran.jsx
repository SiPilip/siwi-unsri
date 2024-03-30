import PendaftaranForm from "../features/user/formulirpendaftaran/PendaftaranForm";
import ContentTitle from "../ui/ContentTitle";

export default function FormulirPendaftaran() {
  return (
    <div>
      <div className="flex items-center mb-5">
        <ContentTitle>Formulir Pendaftaran Wisuda</ContentTitle>
      </div>

      <PendaftaranForm />
    </div>
  );
}
