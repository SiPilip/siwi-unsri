import ContentTitle from "../../../ui/ContentTitle";
import uparrow from "../../../../public/icons/up_arrow.svg";
import Verified from "../../../ui/Verified";

export default function SubHeaderDataPendaftar({
  title,
  handleClick,
  isShowing,
  verified,
}) {
  return (
    <button
      className={`${
        !isShowing && "border-b-[1px]"
      } border-solid border-b-gray-200 py-2 -mb-4`}
      onClick={handleClick}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <ContentTitle verified={verified}>{title}</ContentTitle>
        </div>
        <img
          src={uparrow}
          alt=""
          className={`scale-110 transition-all duration-500 ease-in-out ${
            isShowing === true && "rotate-180"
          }`}
        />
      </div>
    </button>
  );
}
