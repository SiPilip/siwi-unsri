import supabase from "./supabase";

export async function getPengaturan() {
  const { data, error } = await supabase
    .from("pengaturan")
    .select("tanggaltutup, tanggalbuka")
    .single();

  if (error) {
    console.error(error);
    throw new Error("Data tidak bisa di ambil");
  }

  return data;
}

export async function updatePengaturan(updateData) {
  const { data, error } = await supabase
    .from("pengaturan")
    .update(updateData)
    .eq("id", 1)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Ada yang salah!");
  }

  return data;
}
