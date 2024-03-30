export default function TableTranskripNilai() {
  return (
    <div className=" rounded-lg overflow-hidden w-full h-full text-center uppercase mb-5">
      <table className="w-full h-full min-w-full table-auto ">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-unsri border-r-[1px]">No</th>
            <th className="px-4 py-2 bg-unsri border-r-[1px]">Kode</th>
            <th className="px-4 py-2 bg-unsri border-r-[1px]">Mata Kuliah</th>
            <th className="px-4 py-2 bg-unsri border-r-[1px]">Jumlah SKS</th>
            <th className="px-4 py-2 bg-unsri border-r-[1px]">HM</th>
            <th className="px-4 py-2 bg-unsri border-r-[1px]">AM</th>
            <th className="px-4 py-2 bg-unsri border-r-[1px]">K</th>
            <th className="px-4 py-2 bg-unsri">M</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">UN100</td>
            <td className="border px-4 py-2">
              ANALISA MATA JULIAN BERBASIS OBJEK
            </td>
            <td className="border px-4 py-2">3 SKS</td>
            <td className="border px-4 py-2">A</td>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
