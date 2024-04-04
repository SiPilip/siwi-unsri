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
  const { data, error } = await supabase
    .from("datapribadi")
    .select("*")
    .eq("nim", nim);

  if (error) {
    console.error(error);
    throw new Error("Data tidak bisa di ambil");
  }

  return data;
}
