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

export async function getDataAkademik(id) {
  let { data, error } = await supabase
    .from("dataakademik")
    .select("*")
    .eq("id", id).
    maybeSingle();

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return data;
}
