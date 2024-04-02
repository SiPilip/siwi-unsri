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
  const { data: dataorangtua, error: errorGetDataOrangTua } = await supabase
    .from("dataorangtua")
    .select("*")
    .eq("id", id)
    .single();

  if (errorGetDataOrangTua) {
    throw new Error("Data tidak bisa di ambil!");
  }

  return dataorangtua;
}
