import { Outlet, useLocation } from "react-router-dom";
import FooterDashboard from "./FooterDashboard";
import HeaderUser from "./HeaderUser";
import AdminMainNav from "./AdminMainNav";

export default function AdminAppLayout() {
  const location = useLocation();
  let namaRoute = location.pathname.slice(7);
  if (namaRoute === "beranda") namaRoute = "Beranda Admin";
  if (namaRoute === "datapendaftar") namaRoute = "Data Pendaftar Wisuda";
  if (namaRoute.includes("datapendaftar")) namaRoute = "Data Detail Pendaftar";
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
          <AdminMainNav />
        </aside>
        <main className="bg-gray-50 overflow-scroll pt-12 pb-[6.4rem] px-8 flex flex-col justify-start ">
          <div className=" w-full gap-[3.2rem] mx-auto my-0 bg-white py-10 pb-14 px-10 rounded-md border-gray-100 border-[2px] -mt-5 flex flex-col">
            <Outlet />
          </div>
          <div className="w-full mx-auto flex flex-col pl-2 pt-5 justify-start ">
            <FooterDashboard />
          </div>
        </main>
      </div>
    </>
  );
}
