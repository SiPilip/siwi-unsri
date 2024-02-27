import { useNavigate } from "react-router-dom";

export default function BackButtonLogin() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="flex items-center justify-center w-10 h-14 px-5 py-2 text-sm text-gray-700 rounded-full transition-colors duration-200 bg-white  gap-x-2 sm:w-auto  hover:bg-gray-100 absolute top-0 -mt-8 left-2 shadow-lg"
      onClick={() => {
        navigate(-1);
      }}
    >
      <svg
        className="w-5 h-5 rtl:rotate-180 "
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
        />
      </svg>
    </button>
  );
}
