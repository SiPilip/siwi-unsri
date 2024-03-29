import DashboardLogo from "../components/DashboardLogo";
import WarnBox from "../components/WarnBox";
import NavbarItem from "./NavbarItem";
import NavbarItemHead from "./NavbarItemHead";

export default function Navbar() {
  return (
    <div className="flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 w-full  max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 py-10">
      <DashboardLogo />
      <div className="mt-5">
        <WarnBox text2="Segera selesaikan data diri anda!" />
      </div>
      <div className="mt-5">
        <NavbarItem to="/user/beranda">Beranda</NavbarItem>
        <NavbarItemHead>Pemberkasan</NavbarItemHead>
        <NavbarItem to="/user/datapribadi">Data Pribadi</NavbarItem>
        <NavbarItem>Data Akademik</NavbarItem>
        <NavbarItem>USEPT</NavbarItem>
        <NavbarItem>Formulir Pendaftaran</NavbarItem>
        <NavbarItem>Transkrip Nilai</NavbarItem>
        <NavbarItemHead>Pra-Wisuda</NavbarItemHead>
        <NavbarItem>Pembayaran</NavbarItem>
        <NavbarItem>Seatsystem</NavbarItem>
        <NavbarItem>Kartu Undangan</NavbarItem>
        <NavbarItemHead>Akun</NavbarItemHead>
        <NavbarItem>Ubah Profile</NavbarItem>
      </div>
    </div>
  );
}
