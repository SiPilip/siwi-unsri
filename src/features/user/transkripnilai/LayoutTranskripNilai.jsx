import FormButton from "../../../ui/FormButton";
import TableTranskripNilai from "./TableTranskripNilai";

export default function LayoutTranskripNilai() {
  return (
    <div>
      <div className="mb-5">
        <TableTranskripNilai />
      </div>
      <FormButton label={"Konfirmasi Transkrip"} />
    </div>
  );
}
