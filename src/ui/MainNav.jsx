import DashboardLogo from "../components/DashboardLogo";
import NavbarItem from "./NavbarItem";
import NavbarItemHead from "./NavbarItemHead";

export default function MainNav() {
  const isOpenPraWisuda = true;
  return (
    <>
      <DashboardLogo />
      <ul>
        <NavbarItem to="/beranda">Beranda</NavbarItem>

        <NavbarItemHead>Data Mahasiswa</NavbarItemHead>
        <NavbarItem to="/datapendaftar">Data Pendaftar</NavbarItem>
        <NavbarItem to="/dataakademik">Data Akademik</NavbarItem>
        <NavbarItem to="/transkripnilai">Transkrip Nilai</NavbarItem>
        <NavbarItem to="/usept">USEPT</NavbarItem>

        <NavbarItemHead>Pra-Wisuda</NavbarItemHead>
        <NavbarItem to="/daftar" disable={!isOpenPraWisuda}>
          Formulir Pendaftaran
        </NavbarItem>
        <NavbarItem to="/pembayaran" disable={!isOpenPraWisuda}>
          Pembayaran
        </NavbarItem>
        <NavbarItem to="/seatsystem" disable={!isOpenPraWisuda}>
          Seatsystem
        </NavbarItem>
        <NavbarItem to="/kartuundangan" disable={!isOpenPraWisuda}>
          Kartu Undangan
        </NavbarItem>

        <NavbarItemHead>Akun</NavbarItemHead>
        <NavbarItem to="/ubahprofile">Ubah Profile</NavbarItem>
      </ul>
    </>
  );
}
