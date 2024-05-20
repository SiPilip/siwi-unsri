import unsri from "/public/unsri2.png";
import "./Undangan.css";

export default function Undangan() {
  return (
    <div className="border-2 border-black px-5 py-5">
      <header className="text-center font-bold text-xl flex flex-wrap justify-center w-full mb-3">
        <img src={unsri} alt="unsrilogo" className="w-24" />
        <div className="w-full">
          <h1>Komisi & Bidang Kewisudaan</h1>
          <h1>Universitas Sriwijaya</h1>
        </div>
      </header>
      <hr className="border-black border-[1.8px]" />
      <hr className="mt-[1.3px] border-black border-[0.5px]" />
      <main className="text-sm">
        <div className="font-times">
          <p>Kami menyatakan mahasiswa dengan identitas dibawah ini;</p>
          <table className="text-sm text-left ">
            <tr>
              <td className="w-52">Nomor Induk Mahasiswa</td>
              <td>: Nomor Induk Mahasiswa</td>
            </tr>
            <tr>
              <td>Nama Lengkap Mahasiswa</td>
              <td>: Nama Lengkap Mahasiswa</td>
            </tr>
            <tr>
              <td>Fakultas Asal</td>
              <td>: Fakultas Asal</td>
            </tr>
            <tr>
              <td>Jurusan Asal</td>
              <td>: Jurusan Asal</td>
            </tr>
            <tr>
              <td>Prodi Asal</td>
              <td>: Prodi Asal</td>
            </tr>
          </table>
        </div>
        <div className="font-times">
          <p>Dan undangan dengan identitas dibawah ini;</p>
          <table className="text-sm text-left ">
            <tr>
              <td className="w-52">Nama Undangan 1 / Status</td>
              <td>: Rohiman / Ayah Wisudawan</td>
            </tr>
            <tr>
              <td>Nama Undangan 2 / Status</td>
              <td>: Wihungyu / Ibu Wisudawan</td>
            </tr>
          </table>
        </div>
      </main>
    </div>
  );
}
