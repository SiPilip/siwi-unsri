import toast from "react-hot-toast";
import supabase from "./supabase";

export async function createDataOrangTua(newDataOrangTua) {
  const { data, error } = await supabase
    .from("dataorangtua")
    .insert(newDataOrangTua);

  if (error) {
    throw new Error("Data tidak bisa di ambil!");
  }

  return data;
}

export async function getDataOrangTua({ id }) {
  const { data, error } = await supabase
    .from("dataorangtua")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Data tidak bisa di ambil!");
  }

  return data;
}
