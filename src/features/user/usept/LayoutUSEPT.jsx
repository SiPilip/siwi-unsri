import FormButton from "../../../ui/FormButton";
import SpinnerFullContainer from "../../../ui/SpinnerFullContainer";
import { useUser } from "../../authentication/useUser";
import TableLayoutUSEPT from "./TableLayoutUSEPT";
import useCreateUsept from "./useCreateUsept";
import useUsept from "./useUsept";

export default function LayoutUSEPT() {
  const {
    user: { id, email },
  } = useUser();

  const { createUsept, isCreating } = useCreateUsept();
  function handleSubmit(e) {
    e.preventDefault();
    createUsept(email.substring(0, 14));
  }

  // CHECK DATA
  const { data, isLoading } = useUsept(id);
  const isVerifiedDataUsept = Boolean(data);

  if (isCreating || isLoading) return <SpinnerFullContainer />;

  return (
    <div>
      <TableLayoutUSEPT isVerified={isVerifiedDataUsept} />
      <form onSubmit={handleSubmit}>
        {!isVerifiedDataUsept && <FormButton label={"Konfirmasi Data"} />}
      </form>
    </div>
  );
}
