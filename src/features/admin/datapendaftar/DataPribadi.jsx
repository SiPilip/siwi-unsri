import ContentTitle from "../../../ui/ContentTitle";

export default function DataPribadi({ data }) {
  const {
    nim,
    namalengkap,
    tempatlahir,
    tanggallahir,
    jeniskelamin,
    agama,
    alamat,
  } = data || {};

  return (
    <div>
      <div className="flex items-center mb-3">
        <ContentTitle>Data Pribadi Wisudawan</ContentTitle>
      </div>
      <div className="grid grid-cols-2 grid-rows-5 gap-4">
        <div>Nomor Induk Mahasiswa</div>
        <div>{nim}</div>
        <div>Nama Lengkap Pendaftar</div>
        <div>{namalengkap}</div>
        <div>Tempat, Tanggal Lahir</div>
        <div>
          {tempatlahir}, {tanggallahir}
        </div>
        <div>Jenis Kelamin</div>
        <div>{jeniskelamin}</div>
        <div>Agama</div>
        <div>{agama}</div>
        <div>Alamat</div>
        <div>{alamat}</div>
      </div>
    </div>
  );
}
