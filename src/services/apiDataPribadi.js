import supabase from "./supabase";

export async function createDataPribadi(newDataPribadi) {
  const { data, error: errorCreateDataPribadi } = await supabase
    .from("datapribadi")
    .insert([newDataPribadi]);

  if (errorCreateDataPribadi) {
    throw new Error("Data tidak bisa di buat!");
  }

  return data;
}

export async function getDataPribadi({ id }) {
  const { data, error } = await supabase
    .from("datapribadi")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error(error);
    throw new Error("Data tidak bisa di ambil");
  }

  return data;
}
