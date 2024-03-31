import FormRow from "../../ui/FormRow";
import FormButton from "../../ui/FormButton";
import { useState } from "react";
import { useUser } from "./useUser";
import useUpdateUser from "./useUpdateUser";

export default function UbahProfileForm() {
  const [avatar, setAvatar] = useState(null);

  const {
    user: { email },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  function handleSubmit(e) {
    e.preventDefault();
    if (!avatar) return;
    updateUser(
      { avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <FormRow label="Email Mahasiswa">
        <input
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full"
          type="email"
          value={email}
          disabled
        />
      </FormRow>
      <FormRow label="Ubah Gambar Profile">
        <input
          className="border-2 px-2 py-1 border-neutral-200 rounded-md w-full"
          type="file"
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </FormRow>

      <FormButton label={"Simpan Profile"} />
    </form>
  );
}
