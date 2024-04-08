import {
  HiCheckCircle,
  HiEllipsisHorizontal,
  HiMiniClipboard,
} from "react-icons/hi2";
import SpinnerFullContainer from "../../../ui/SpinnerFullContainer";
import { useNavigate } from "react-router-dom";
import useAllDataPribadi from "./useAllDataPribadi";

export default function TableDataPendaftar() {
  const navigate = useNavigate();

  const { data, isLoading } = useAllDataPribadi();
  if (isLoading) return <SpinnerFullContainer />;

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="text-start w-10">No</th>
          <th className="text-start w-[15rem]">Nomor Induk Mahasiswa</th>
          <th className="text-start w-[15rem]">Nama Mahasiswa</th>
          <th className="text-start">Status</th>
          <th className="text-start">Detail</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e, index) => (
          <tr key={e.id}>
            <td>{index + 1}</td>
            <td>{e.nim}</td>
            <td>{e.namalengkap}</td>
            <td>
              {false ? (
                <div className="bg-unsri text-white px-3 py-1 w-max gap-2 rounded-full text-xs flex items-center">
                  <HiMiniClipboard /> Pendaftaran
                </div>
              ) : (
                <div className="bg-green-500 text-white px-3 py-1 w-max gap-2 rounded-full text-xs flex items-center">
                  <HiCheckCircle /> Selesai
                </div>
              )}
            </td>
            <td>
              <button
                className="bg-gray-100 w-max h-max px-2 py-1 rounded-sm text-black flex items-center justify-center text-lg"
                onClick={() => navigate(`${e.id}`, { replace: true })}
              >
                <HiEllipsisHorizontal />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
