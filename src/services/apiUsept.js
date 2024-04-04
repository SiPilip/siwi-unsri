import supabase from "./supabase";

export async function createUsept(nim) {
  const { data, error } = await supabase
    .from("datausept")
    .insert([{ nim: nim }]);

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return data;
}

export async function getUsept(id) {
  const { data, error } = await supabase
    .from("datausept")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return data;
}
