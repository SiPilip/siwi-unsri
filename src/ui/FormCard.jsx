import trueicons from "../../public/icons/true-ring.svg";
import wrongicons from "../../public/icons/wrong-ring.svg";

export default function FormCard({
  children,
  condition = false,
  isOpened = true,
}) {
  if (isOpened)
    return (
      <div className="bg-white py-8 px-12 rounded-xl border-2 border-solid border-neutral-100 flex justify-start items-center gap-5 w-[20rem] h-[6rem]">
        {condition === true && (
          <img src={trueicons} className="scale-150"></img>
        )}

        {condition === false && (
          <img src={wrongicons} className="scale-150"></img>
        )}

        <span className="text-lg font-medium">{children}</span>
      </div>
    );

  if (!isOpened)
    return (
      <div className=" bg-gray-50 cursor-not-allowed py-8 px-14 rounded-xl border-2 border-solid border-neutral-100  w-[20rem] h-[6rem] flex justify-start items-center ">
        <span className="flex justify-start items-center gap-10 opacity-20">
          <img src={wrongicons} className="scale-150"></img>
          <span className="text-lg font-semibold">{children}</span>
        </span>
      </div>
    );
}
