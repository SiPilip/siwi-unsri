import supabase from "./supabase";

export async function createPembayaran({ dataPembayaran }) {
  const { data, error } = await supabase
    .from("pembayaran")
    .insert([dataPembayaran]);

  if (error) {
    console.log(error);
  }

  return { data };
}

export async function getPembayaran(id) {
  const { data, error } = await supabase
    .from("pembayaran")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error(error);
    throw new Error("Data tidak bisa di ambil");
  }

  return data;
}
