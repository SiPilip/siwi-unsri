import ContentTitle from "../../../ui/ContentTitle";

export default function DataAkademik({ data }) {
  const {
    ips,
    lamastudi,
    semesterterakhir,
    jenisbeasiswa,
    ipk,
    totalbeasiswa,
  } = data || {};

  return (
    <div>
      <div className="flex items-center mb-3">
        <ContentTitle>Data Akademik Wisudawan</ContentTitle>
      </div>
      <div className="grid grid-cols-2 grid-rows-5 gap-4">
        <div>Semester Terakhir Ditempuh</div>
        <div>{semesterterakhir}</div>
        <div>Lama Studi</div>
        <div>{lamastudi}</div>
        <div>Indeks Prestasi Semester Terakhir</div>
        <div>{ips}</div>
        <div>Indeks Prestasi Kumulatif</div>
        <div>{ipk}</div>
        <div>Total Beasiswa Dijalani</div>
        <div>{totalbeasiswa}</div>
        <div>Beasiswa Dijalani</div>
        <div>{jenisbeasiswa}</div>
      </div>
    </div>
  );
}
