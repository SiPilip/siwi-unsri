import supabase from "./supabase";

export async function createDataAkademik(dataAkademik) {
  const { data, error } = await supabase
    .from("dataakademik")
    .insert([dataAkademik])
    .select();

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return data;
}

export async function getDataAkademik(nim) {
  let { data, error } = await supabase
    .from("dataakademik")
    .select("*")
    .eq("nim", nim);

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return data;
}
