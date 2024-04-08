import ContentTitle from "../../../ui/ContentTitle";

export default function DataOrangTua({ data }) {
  const {
    statusorangtua,
    namaayah,
    telpayah,
    namaibu,
    telpibu,
    namawali,
    telpwali,
  } = data || {};

  return (
    <div>
      <div className="flex items-center mb-3">
        <ContentTitle>Data Orang Tua Wisudawan</ContentTitle>
      </div>
      <div className="grid grid-cols-2 grid-rows-5 gap-4">
        <div>Status Orang Tua</div>
        <div>{statusorangtua}</div>
        <div>Nama Ayah</div>
        <div>{namaayah || "-"}</div>
        <div>No. Telp Ayah</div>
        <div>{telpayah || "-"}</div>
        <div>Nama Ibu</div>
        <div>{namaibu || "-"}</div>
        <div>No. Telp Ibu</div>
        <div>{telpibu || "-"}</div>
        <div>Nama Wali</div>
        <div>{namawali || "-"}</div>
        <div>No. Telp Wali</div>
        <div>{telpwali || "-"}</div>
      </div>
    </div>
  );
}
