import UbahProfileForm from "../features/authentication/UbahProfileForm";
import ContentTitle from "../ui/ContentTitle";

export default function UbahProfile() {
  return (
    <div>
      <div className="flex items-center mb-5">
        <ContentTitle>Ubah Profile</ContentTitle>
      </div>

      <UbahProfileForm />
    </div>
  );
}
