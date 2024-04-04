import supabase from "./supabase";

export async function createTranskrip({ fileTranskrip, nim, id }) {
  const fileName = `transkripnilai-${nim}-${Math.random()}`;

  const { data, error } = await supabase
    .from("datatranskrip")
    .insert([{ file: fileName, id }])
    .select();

  const { error: storageError } = await supabase.storage
    .from("transkripnilai")
    .upload(fileName, fileTranskrip);

  if (error) throw new Error(error.message);
  if (storageError) throw new Error(storageError.message);

  return data;
}

export async function getTranskrip(id) {
  const { data, error } = await supabase
    .from("datatranskrip")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function getFileTranskrip(file) {
  const { data, error } = await supabase.storage
    .from("transkripnilai")
    .createSignedUrl(file, 10000);

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  if (data) {
    const url = data.signedUrl;
    return url;
  }
}
