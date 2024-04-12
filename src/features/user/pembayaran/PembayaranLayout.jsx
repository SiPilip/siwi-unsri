import { useEffect } from "react";
import FormButton from "../../../ui/FormButton";
import Invoice from "./Invoice";
import { useUser } from "../../authentication/useUser";
import usePembayaran from "./usePembayaran";
import SpinnerFullContainer from "../../../ui/SpinnerFullContainer";
import { linkbe } from "../../../../dir/environment";

export default function PembayaranLayout() {
  const {
    user: { id, email },
    user,
  } = useUser();

  const harga = 750000;
  const { fullName } = user.user_metadata || {};

  const randomInt = Math.floor(Math.random() * 900) + 100;

  async function checkout() {
    const data = {
      id: `${randomInt}-${email.substring(0, 14)}`,
      productName: `${email.substring(0, 14)}-pembayaranwisudaunsri`,
      price: harga,
      quantity: 1,
    };

    const response = await fetch(linkbe, {
      method: "POST",
      body: JSON.stringify(data),
    });
    const requestData = await response.json();
    window.snap.pay(requestData);
  }

  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = import.meta.env.VITE_PUBLIC_CLIENT;
    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const { data: dataPembayaran, isLoading } = usePembayaran(id);
  const { status, created_at } = dataPembayaran || {};

  function dateString() {
    if (dataPembayaran) {
      const dateString = created_at.toString();
      const date = new Date(dateString);
      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const formattedTime = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      const formattedDateTime = `${formattedDate}, ${formattedTime}`;
      return formattedDateTime;
    }
  }

  if (isLoading) return <SpinnerFullContainer />;
  return (
    <>
      {status !== "isPaid" && (
        <div>
          <Invoice
            invoiceid={`#${randomInt}-${email.substring(0, 14)}`}
            nim={email.substring(0, 14)}
            nama={fullName}
            harga={harga}
          />
          <FormButton
            label={"Lakukan Pembayaran"}
            handleClick={() => checkout()}
          />
          <p className="mt-1 text-sm text-gray-500 italic ">
            Pembayaran akan dilakukan via api{" "}
            <a href="https://midtrans.com/id/en" className="underline">
              midtrans - powered by goto
            </a>
          </p>
        </div>
      )}
      {status === "isPaid" && (
        <div>
          {fullName} sudah melakukan pembayaran wisuda pada tanggal{" "}
          <span className="font-semibold">{dateString()}</span>
        </div>
      )}
    </>
  );
}
