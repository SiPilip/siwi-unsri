import { useSearchParams } from "react-router-dom";

export default function useNim() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  return id;
}
