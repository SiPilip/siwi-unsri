import { useEffect, useState } from "react";
import { getUsers } from "../../services/apiUser";
import useNim from "../../hooks/useNim";

export default function DashboardAdmin() {
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
    <div>
      <p>{berkas.id}</p>
      <p>{berkas.nim}</p>
      <p>{berkas.roles}</p>
    </div>
  );
}
