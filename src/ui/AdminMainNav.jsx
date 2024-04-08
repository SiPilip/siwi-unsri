import DashboardLogo from "../components/DashboardLogo";
import useProgress from "../features/user/beranda/useProgress";
import NavbarItem from "./NavbarItem";
import NavbarItemHead from "./NavbarItemHead";

export default function AdminMainNav() {
  return (
    <>
      <DashboardLogo />
      <ul>
        <NavbarItem to="/admin/beranda">Beranda</NavbarItem>
        <NavbarItem to="/admin/datapendaftar">Data Pendaftar</NavbarItem>

        <NavbarItemHead>Aplikasi</NavbarItemHead>
        <NavbarItem to="/admin/pengaturan">Pengaturan Aplikasi</NavbarItem>
      </ul>
    </>
  );
}
