import TableDataPendaftar from "../../features/admin/datapendaftar/TableDataPendaftar";
import ContentTitle from "../../ui/ContentTitle";

export default function DataPendaftarAdmin() {
  return (
    <div>
      <div className="flex items-center mb-5">
        <ContentTitle>Daftar Data</ContentTitle>
      </div>

      <TableDataPendaftar />
    </div>
  );
}
