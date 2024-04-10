import DashboardLogo from "../components/DashboardLogo";
import useProgress from "../features/user/beranda/useProgress";
import NavbarItem from "./NavbarItem";
import NavbarItemHead from "./NavbarItemHead";

export default function MainNav() {
  const isOpenPraWisuda = false;
  const {
    isVerifiedDataOrangTua,
    isVerifiedDataPribadi,
    isVerifiedDataAkademik,
    isVerifiedDataTranskrip,
    isVerifiedDataUsept,
  } = useProgress();

  return (
    <>
      <DashboardLogo />
      <ul>
        <NavbarItem to="/beranda">Beranda</NavbarItem>

        <NavbarItemHead>Data Mahasiswa</NavbarItemHead>
        <NavbarItem to="/datapendaftar">Data Pendaftar</NavbarItem>
        <NavbarItem
          to="/dataakademik"
          disable={!isVerifiedDataOrangTua || !isVerifiedDataPribadi}
        >
          Data Akademik
        </NavbarItem>
        <NavbarItem to="/transkripnilai" disable={!isVerifiedDataAkademik}>
          Transkrip Nilai
        </NavbarItem>
        <NavbarItem to="/usept" disable={!isVerifiedDataTranskrip}>
          USEPT
        </NavbarItem>

        <NavbarItemHead>Pra-Wisuda</NavbarItemHead>
        <NavbarItem to="/daftar" disable={!isOpenPraWisuda}>
          Formulir Pendaftaran
        </NavbarItem>
        <NavbarItem to="/pembayaran" disable={false}>
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
