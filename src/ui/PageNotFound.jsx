import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-wrap">
      <div className="text-center bg-white rounded-lg shadow-lg py-28 px-48">
        <h1 className="mb-4 text-6xl font-semibold text-unsri">404</h1>
        <p className="mb-4 text-lg text-gray-600">
          Halaman yang anda cari sepertinya tidak ada.
        </p>
        <div className="animate-pulse ">
          <svg
            className="mx-auto h-16 w-16 text-unsri"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
        <p className="mt-5 text-gray-600">
          Kembali ke{" "}
          <Link to={"/beranda"}>
            <span className="text-blue-500 cursor-pointer">beranda</span>
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
