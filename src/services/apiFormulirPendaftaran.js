import supabase from "./supabase";

export async function createFormulirPendaftaran(dataformulir) {
  const { data, error } = await supabase
    .from("dataformulirpendaftaran")
    .insert([dataformulir]);

  if (error) {
    throw new Error("Data tidak bisa di ambil!");
  }

  return data;
}

export async function getFormulirPendaftaran(id) {
  const { data, error } = await supabase
    .from("dataformulirpendaftaran")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error(error);
    throw new Error("Data tidak bisa di ambil!");
  }

  return data;
}
