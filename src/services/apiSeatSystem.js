import supabase from "./supabase";

export async function createSeat(dataSeat) {
  const { data, error } = await supabase
    .from("seatsystem")
    .insert([{ seat: dataSeat }]);

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return data;
}

export async function getSeat(id) {
  const { data, error } = await supabase
    .from("seatsystem")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return data;
}

export async function getAllSeats() {
  const { data, error } = await supabase.from("seatsystem").select("seat");

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return data;
}
