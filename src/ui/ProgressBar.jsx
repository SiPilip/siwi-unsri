export default function ProgressBar({ progress }) {
  let progressPercent = "0%";
  progressPercent = progress + "%";

  if (progress === "0")
    return (
      <div className="w-full h-7 bg-gray-50 border-solid border-[2px] overflow-hidden flex items-center border-neutral-100 rounded-full my-5  cursor-not-allowed">
        <div
          className="h-6 bg-unsri rounded-full  text-center text-white font-semibold"
          style={{ width: progressPercent }}
          disabled
        >
          {progress}%
        </div>
      </div>
    );

  if (progress !== 0)
    return (
      <div className="w-full h-7 bg-gray-50 border-solid border-[2px] overflow-hidden flex items-center border-neutral-100 rounded-full my-5 ">
        <div
          className="h-6 bg-unsri rounded-full  text-center text-white font-semibold transition-all duration-500 ease-in-out"
          style={{ width: progressPercent }}
          disabled
        >
          {progress}%
        </div>
      </div>
    );
}
