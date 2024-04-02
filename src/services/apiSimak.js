import { simakFakeApiUrl } from "./simakfakeapi";

export async function getDataSimak({ nim }) {
  let res = await fetch(`${simakFakeApiUrl}/mahasiswa/${nim}`);
  let data = await res.json();

  return data;
}
