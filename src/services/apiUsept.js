import supabase from "./supabase";

export async function createUsept(dataUsept) {
  const { data, error } = await supabase.from("datausept").insert([dataUsept]);

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return data;
}

export async function getUsept(nim) {
  const { data, error } = await supabase
    .from("datausept")
    .select("*")
    .eq("nim", nim);

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return data;
}
