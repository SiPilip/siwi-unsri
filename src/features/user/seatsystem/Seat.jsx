export default function Seat({
  label,
  handleClick,
  pick,
  pickedSeat,
  userSeat,
  select = false,
}) {
  let seated = false;
  pickedSeat.map((seat) => {
    if (seat === label && label !== userSeat) seated = true;
  });

  if (!seated)
    return (
      <button
        className={`bg-gray-100 w-10 h-10 rounded-md transition-all duration-300 ${
          pick && "bg-unsri"
        } ${select && "cursor-not-allowed"}`}
        onClick={handleClick}
      >
        {label}
      </button>
    );

  if (seated)
    return (
      <div
        className={`bg-gray-200 w-10 h-10 rounded-md transition-all duration-300 opacity-50 cursor-not-allowed flex justify-center items-center`}
        title="09021182227104&#13;Nama: Agus &#13;Prodi: Teknik Informatika"
      >
        {label}
      </div>
    );
}
