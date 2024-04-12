import numeral from "numeral";
import DashboardLogo from "../../../components/DashboardLogo";

export default function Invoice({ invoiceid, nim, nama, harga }) {
  const date = new Date();
  let day = date.getDate();
  let month = date.toLocaleString("default", { month: "long" });
  let year = date.getFullYear();

  let hargaFormat = harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  hargaFormat = `Rp. ${hargaFormat},00`;
  return (
    <div>
      <header className="flex justify-between">
        <div className="text-3xl font-semibold">Pembayaran {invoiceid}</div>
        <div className="text-end">
          <p>SIWI UNSRI</p>
          <p>Sistem Informasi Wisuda Universitas Sriwijaya</p>
          <p>Jl. Raya Palembang - Prabumulih No.Km. 32</p>
          <p>
            {day} {month}, {year}
          </p>
        </div>
      </header>
      <section className="my-10">
        <div className="font-semibold uppercase">Bill To</div>
        <div className="mt-3 italic text-gray-500">
          <p className="uppercase">{nama}</p>
          <p>{nim}</p>
          <p>Pembayaran Wisuda Universitas Sriwijaya </p>
          <p>Tahun Ajaran 2023/2024</p>
        </div>
      </section>
      <main>
        <table className="w-full text-left ">
          <thead className="uppercase bg-gray-50 text-gray-700 ">
            <th className="pl-5 py-3 font-medium">Nama Wisudawan</th>
            <th className="font-medium">Harga</th>
            <th className="font-medium">Tanggal Pembayaran</th>
            <th className="font-medium">Total Pembayaran</th>
          </thead>
          <tbody>
            <tr>
              <td className="pl-5 py-3 font-normal">Philifs Bryan Sipahutar</td>
              <td className="font-normal text-gray-400">{hargaFormat}</td>
              <td className="font-normal">
                {day} {month}, {year}
              </td>
              <td className="font-medium">{hargaFormat}</td>
            </tr>
          </tbody>
        </table>
      </main>
      <hr className="my-10" />
      <footer className="w-full flex justify-end">
        <div className="flex flex-unwrap gap-16 font-medium text-xl">
          <p>Total Dibayarkan</p>
          <p>{hargaFormat}</p>
        </div>
      </footer>
    </div>
  );
}
