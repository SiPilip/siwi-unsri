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

export async function getDataPribadi({ nim }) {
  const { data: datapribadi, error } = await supabase
    .from("datapribadi")
    .select("*")
    .eq("nim", nim)
    .single();

  if (error) {
    return null;
  }

  return datapribadi;
}
