import { Outlet, useLocation } from "react-router-dom";
import FooterDashboard from "./FooterDashboard";
import HeaderUser from "./HeaderUser";
import MainNav from "./MainNav";

export default function AppLayout() {
  const location = useLocation();
  let namaRoute = location.pathname.slice(1);
  if (namaRoute === "beranda") namaRoute = "Beranda Utama";
  if (namaRoute === "datapendaftar") namaRoute = "Data Pendaftar";
  if (namaRoute === "dataakademik") namaRoute = "Data Akademik";
  if (namaRoute === "transkripnilai") namaRoute = "Transkrip Nilai";
  if (namaRoute === "usept") namaRoute = "English Proficiency Test - USEPT";
  if (namaRoute === "daftar") namaRoute = "Formulir Pendaftaran";

  return (
    <>
      <div className="grid h-screen grid-cols-[19rem_1fr] grid-rows-[auto_1fr]">
        <header className="py-[1.2rem] px-[2.8rem] pr-[3.8rem] border-b-[1px] border-b-gray-100">
          <HeaderUser title={namaRoute} />
        </header>
        <aside className="border-r-gray-100 bg-white row-[1/-1] flex flex-col gap-[3.2rem] px-[2.4rem] py-[2rem] border-r border-solid">
          <MainNav />
        </aside>
        <main className="bg-gray-50 overflow-scroll pt-16 pb-[6.4rem] px-11">
          <div className="max-w-[120rem] flex flex-col gap-[3.2rem] mx-auto my-0 bg-white py-10 pb-14 px-10 rounded-md border-gray-100 border-[2px] -mt-5">
            <Outlet />
          </div>
          <FooterDashboard />
        </main>
      </div>
    </>
  );
}
