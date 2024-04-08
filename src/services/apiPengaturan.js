import supabase from "./supabase";

export async function getPengaturan() {
  const { data, error } = await supabase
    .from("pengaturan")
    .select("haritutup")
    .single();

  if (error) {
    console.error(error);
    throw new Error("Data tidak bisa di ambil");
  }

  return data;
}
