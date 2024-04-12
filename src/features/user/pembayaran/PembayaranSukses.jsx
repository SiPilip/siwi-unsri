import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import useCreatePembayaran from "./useCreatePembayaran";
import SpinnerFullContainer from "../../../ui/SpinnerFullContainer";
import Invoice from "./Invoice";

export default function PembayaranSukses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const order_id = searchParams.get("order_id") || "";
  const status_code = searchParams.get("status_code") || "";
  const transaction_status = searchParams.get("transaction_status") || "";

  const { createPembayaran, isCreating } = useCreatePembayaran();

  useEffect(function () {
    let status;
    if (status_code === "200") status = "isPaid";
    if (status_code !== "200") status = "notPaid!";

    let dataPembayaran = {
      transaction_status,
      order_id,
      status_code,
      status,
    };

    if (
      order_id &&
      status_code === "200" &&
      transaction_status === "settlement"
    )
      createPembayaran({ dataPembayaran });
  }, []);

  if (isCreating) return <SpinnerFullContainer />;

  return (
    <div>
      <p className="text-unsri font-semibold uppercase text-2xl mb-5">
        Terimakasih!
      </p>
      <div className=" italic text-gray-700 text-base">
        <p>Pembayaran dengan kode transaksi : {order_id}</p>
        <p>Telah berhasil dilakukan!</p>
      </div>
      <hr className="my-10" />

      <Invoice invoiceid={`aw`} nim={`aw`} nama={`aw`} harga={124} />
    </div>
  );
}
