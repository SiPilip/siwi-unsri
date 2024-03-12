import { useEffect, useState } from "react";
import { getUsers } from "../../services/apiUser";
import useNim from "../../hooks/useNim";
import Navbar from "../../ui/Navbar";
import FooterDashboard from "../../ui/FooterDashboard";
import { Outlet } from "react-router-dom";

export default function DashboardUser() {
  const [data, setData] = useState([]);
  const [berkas, setBerkas] = useState({});
  const currentID = useNim();

  useEffect(function () {
    async function fetchData() {
      try {
        const users = await getUsers();
        setData(users);
      } catch {
        throw new Error("Gagal fetch user");
      }
    }
    fetchData();
  }, []);

  useEffect(function () {
    async function fetchSIMAK() {
      try {
        const data = await fetch("https://projects.sipilip.com/simak-fakeapi/");
        const res = await data.json();
        console.log(res);
      } catch {
        throw new Error("duh gagal ni ntol");
      }
    }
    fetchSIMAK();
  }, []);

  useEffect(
    function () {
      data.map((e) => {
        if (e.id === currentID) {
          setBerkas(e);
        }
      });
    },
    [data, currentID]
  );

  return (
    <main className="w-full h-screen bg-[#F7F7F8]">
      <div className="flex w-screen h-[94%]">
        <Navbar />
        <Outlet />
      </div>
      <FooterDashboard />
    </main>
  );
}
