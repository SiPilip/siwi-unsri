import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import useCreatePembayaran from "./useCreatePembayaran";
import SpinnerFullContainer from "../../../ui/SpinnerFullContainer";
import Invoice from "./Invoice";
import { useUser } from "../../authentication/useUser";
import ReactToPrint from "react-to-print";

export default function PembayaranSukses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const order_id = searchParams.get("order_id") || "";
  const status_code = searchParams.get("status_code") || "";
  const transaction_status = searchParams.get("transaction_status") || "";

  const { createPembayaran, isCreating } = useCreatePembayaran();
  if (isCreating) return <SpinnerFullContainer />;

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

  const date = new Date();
  const { user } = useUser();
  const { fullName, email } = user.user_metadata || {};

  const componentRef = useRef();
  return (
    <div>
      <p className="text-unsri font-semibold uppercase text-2xl mb-4">
        Pembayaran Berhasil!
      </p>
      <div className=" italic text-gray-700 text-base">
        <p>Pembayaran kode transaksi : #{order_id}</p>
        <p>
          Telah berhasil dilakukan!{" "}
          <span className="font-semibold">
            Harap simpan bukti pembayaran anda
          </span>
        </p>
      </div>
      <ReactToPrint
        trigger={() => (
          <button className="italic bg-unsri py-2 px-5 rounded-md mt-5 font-semibold">
            Print Bukti Pembayaran
          </button>
        )}
        content={() => componentRef.current}
        pageStyle={"padding: 300px"}
      />
      <hr className="my-10" />

      <main ref={componentRef}>
        <Invoice
          invoiceid={`#${order_id}`}
          nim={email.substring(0, 14)}
          nama={fullName}
          harga={300000}
          created_at={date}
          isPaid
        />
      </main>
    </div>
  );
}
