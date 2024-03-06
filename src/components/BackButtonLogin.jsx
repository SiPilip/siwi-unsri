import { useNavigate } from "react-router-dom";
import backarrow from "../../public/icons/backarrow.svg";

export default function BackButtonLogin() {
  const navigate = useNavigate();

  function backButton() {
    navigate(-1);
  }

  return (
    <button
      type="button"
      className="flex items-center justify-center sm:h-14 w-14 h-14 sm:px-5 px-2 sm:py-2 text-sm text-gray-700 rounded-full transition-colors duration-200 bg-white  gap-x-2 sm:w-auto  hover:bg-gray-100 absolute top-0 mt-2 left-2 shadow-lg"
      onClick={backButton}
    >
      <div className="flex w-full items-center justify-center">
        <img src={backarrow} alt="" />
      </div>
    </button>
  );
}
