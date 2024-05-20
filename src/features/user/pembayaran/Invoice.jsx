import numeral from "numeral";
import DashboardLogo from "../../../components/DashboardLogo";
import currencyFormatIDR from "../../../utils/currencyFormatIDR";
import dateFormatID from "../../../utils/dateFormatID";

export default function Invoice({
  invoiceid,
  nim,
  nama,
  harga,
  created_at,
  isPaid = false,
}) {
  const date = new Date();
  return (
    <div>
      <header className="flex justify-between">
        <div className="text-3xl font-semibold">Pembayaran {invoiceid}</div>
        <div className="text-end">
          <p>SIWI UNSRI</p>
          <p>Sistem Informasi Wisuda Universitas Sriwijaya</p>
          <p>Jl. Raya Palembang - Prabumulih No.Km. 32</p>
          <p>{dateFormatID(date)}</p>
        </div>
      </header>
      <section className="my-10 flex justify-between  ">
        <div>
          <div className="font-semibold uppercase">Bill To</div>
          <div className="mt-3 italic text-gray-500">
            <p className="uppercase">{nama}</p>
            <p>{nim}</p>
            <p>Pembayaran Wisuda Universitas Sriwijaya </p>
            <p>Tahun Ajaran 2023/2024</p>
          </div>
        </div>
        {isPaid && (
          <div className="w-full h-fit flex justify-end mt-10 opacity-75 rotate-1 mr-16">
            <div className="border-2 border-green-600 text-green-600 py-5 px-10 text-center font-semibold uppercase">
              Pembayaran Telah Dilakukan
            </div>
          </div>
        )}
      </section>
      <main>
        <table className="w-full text-left ">
          <thead className="uppercase bg-gray-50 text-gray-700 ">
            <tr>
              <th className="pl-5 py-3 font-medium">Nama Wisudawan</th>
              <th className="font-medium">Harga</th>
              <th className="font-medium">Tanggal Pembayaran</th>
              <th className="font-medium">Total Pembayaran</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pl-5 py-3 font-normal">{nama}</td>
              <td className="font-normal text-gray-400">
                {currencyFormatIDR(harga)}
              </td>
              <td className="font-normal">
                {isPaid ? dateFormatID(created_at) : dateFormatID(date)}
              </td>
              <td className="font-medium">{currencyFormatIDR(harga)}</td>
            </tr>
          </tbody>
        </table>
      </main>
      <hr className="my-10" />
      <footer className="w-full flex flex-wrap justify-end">
        <div className="flex flex-unwrap gap-16 font-medium text-xl">
          <p>Total Dibayarkan</p>
          <p>{currencyFormatIDR(harga)}</p>
        </div>
      </footer>
    </div>
  );
}
