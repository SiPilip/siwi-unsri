import { useEffect, useState } from "react";
import Seat from "./Seat";
import FormButton from "../../../ui/FormButton";
import useCreateSeat from "./useCreateSeat";
import useAllSeats from "./useAllSeats";
import SpinnerFullContainer from "../../../ui/SpinnerFullContainer";
import { useUser } from "../../authentication/useUser";
import useSeat from "./useSeat";

export default function SeatSystemForm() {
  const seatX = ["A", "B", "C", "D", "E", "F", "G"];
  const seatY = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const [seatPick, setSeatPick] = useState("");
  const [pickedSeat, setPickedSeat] = useState([]);
  const [userSeat, setUserSeat] = useState(null);

  const { createSeat, isCreating } = useCreateSeat();
  function handleSubmit(e) {
    e.preventDefault();
    if (seatPick === "") return;
    createSeat(seatPick);
  }

  const { data: allSeats, isLoading: isLoadingAllSeats } = useAllSeats();
  useEffect(() => {
    if (!isLoadingAllSeats) {
      setPickedSeat(allSeats.map((seatObj) => seatObj.seat));
    }
  }, [isLoadingAllSeats]);

  const {
    user: { id },
  } = useUser();
  const { data: dataUserSeat, isLoading: isLoadingSeat } = useSeat(id);
  const { seat } = dataUserSeat || {};
  useEffect(() => {
    if (!isLoadingSeat) {
      setUserSeat(seat);
      if (userSeat) setSeatPick(userSeat);
    }
  }, [isLoadingSeat, userSeat]);

  if (isLoadingAllSeats || isCreating || isLoadingSeat)
    return <SpinnerFullContainer />;
  return (
    <div>
      <p className="mb-8">Kursi dipilih: {seatPick}</p>
      <div className="seatsystem w-fit select-none">
        <div className="w-full bg-gray-100 h-10 mb-3 rounded-md flex justify-center items-center cursor-not-allowed">
          Podium
        </div>
        {seatX.map((itemX, index) => (
          <div className="flex gap-3 mb-3" key={index}>
            {seatY.map((itemY, index) => (
              <Seat
                key={index}
                label={`${itemX}${itemY}`}
                handleClick={() => {
                  if (!userSeat) setSeatPick(`${itemX}${itemY}`);
                }}
                pick={
                  seatPick === `${itemX}${itemY}` ||
                  userSeat === `${itemX}${itemY}`
                }
                pickedSeat={pickedSeat}
                userSeat={userSeat}
                select={Boolean(userSeat)}
              />
            ))}
          </div>
        ))}
        <div className="w-full bg-gray-100 h-10 rounded-md flex justify-center items-center cursor-not-allowed">
          Exit
        </div>
      </div>

      <i className="text-gray-500 text-sm block mb-3">
        Arahkan kursor untuk melihat informasi kursi yang yang sudah terpilih
      </i>
      {!seat && (
        <form onSubmit={handleSubmit}>
          <FormButton label="Simpan Data" />
        </form>
      )}
    </div>
  );
}
