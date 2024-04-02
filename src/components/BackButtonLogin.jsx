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
      className="flex items-center justify-center sm:h-14 w-max aspect-square text-sm text-gray-700 rounded-full transition-colors duration-200 bg-white  gap-x-2 sm:w-auto hover:bg-gray-100 absolute top-3 left-3 border-[1px] border-gray-100"
      onClick={backButton}
    >
      <div className="flex w-max aspect-square items-center justify-center ">
        <img src={backarrow} alt="" />
      </div>
    </button>
  );
}
