export default function TableLayoutUSEPT({ isVerified = false }) {
  const data = [
    {
      tanggal_test: "12-OKTOBER-2024",
      nim: "09021182227014",
      nama: "NANIK SARIFUDDIN",
      listening: "89",
      structure: "88",
      reading: "88",
      skor: "560",
      syarat_lulus_priode: "600",
      keterangan: "TIDAK LULUS",
    },
    {
      tanggal_test: "13-OKTOBER-2024",
      nim: "09021182227014",
      nama: "NANIK SARIFUDDIN",
      listening: "92",
      structure: "90",
      reading: "89",
      skor: "550",
      syarat_lulus_priode: "600",
      keterangan: "TIDAK LULUS",
    },
    {
      tanggal_test: "14-OKTOBER-2024",
      nim: "09021182227014",
      nama: "NANIK SARIFUDDIN",
      listening: "78",
      structure: "82",
      reading: "85",
      skor: "425",
      syarat_lulus_priode: "600",
      keterangan: "TIDAK LULUS",
    },
    {
      tanggal_test: "15-OKTOBER-2024",
      nim: "09021182227014",
      nama: "NANIK SARIFUDDIN",
      listening: "95",
      structure: "93",
      reading: "91",
      skor: "700",
      syarat_lulus_priode: "600",
      keterangan: "LULUS",
    },
  ];

  return (
    <div
      className={`rounded-lg overflow-hidden w-full h-full text-center uppercase mb-5 relative ${
        isVerified && "select-none cursor-not-allowed"
      }`}
    >
      <table className="w-full h-full min-w-full min-h-[200px] table-auto ">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-unsri border-r-[1px]" rowSpan={2}>
              No
            </th>
            <th className="px-4 py-2 bg-unsri border-r-[1px]" rowSpan={2}>
              Tanggal Test
            </th>
            <th className="px-4 py-2 bg-unsri border-r-[1px]" rowSpan={2}>
              NIM
            </th>
            <th className="px-4 py-2 bg-unsri border-r-[1px]" rowSpan={2}>
              Nama
            </th>
            <th
              className="px-4 py-2 bg-unsri border-r-[1px] border-b-[1px]"
              colSpan={4}
            >
              Hasil Test
            </th>
            <th className="px-4 py-2 bg-unsri border-r-[1px]" rowSpan={2}>
              Syarat Lulus Periode
            </th>
            <th className="px-4 py-2 bg-unsri " rowSpan={2}>
              Keterangan
            </th>
          </tr>
          <tr>
            <th className="px-4 py-2 bg-unsri border-r-[1px]">Listening</th>
            <th className="px-4 py-2 bg-unsri border-r-[1px]">Structure</th>
            <th className="px-4 py-2 bg-unsri border-r-[1px]">Reading</th>
            <th className="px-4 py-2 bg-unsri border-r-[1px]">Skor</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`border px-4 py-2 ${
                item.keterangan === "LULUS" && "bg-unsrihover2"
              }`}
            >
              <td className="border px-4 py-2 ">{index + 1}</td>
              <td className="border px-4 py-2">{item.tanggal_test}</td>
              <td className="border px-4 py-2">{item.nim}</td>
              <td className="border px-4 py-2">{item.nama}</td>
              <td className="border px-4 py-2">{item.listening}</td>
              <td className="border px-4 py-2">{item.structure}</td>
              <td className="border px-4 py-2">{item.reading}</td>
              <td className="border px-4 py-2">{item.skor}</td>
              <td className="border px-4 py-2">{item.syarat_lulus_priode}</td>
              <td className="border px-4 py-2">{item.keterangan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
