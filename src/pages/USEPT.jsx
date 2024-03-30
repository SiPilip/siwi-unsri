import LayoutUSEPT from "../features/user/usept/LayoutUSEPT";
import ContentTitle from "../ui/ContentTitle";

export default function USEPT() {
  return (
    <div>
      <div className="flex items-center mb-5">
        <ContentTitle verified>Hasil Test</ContentTitle>
      </div>

      <LayoutUSEPT />
    </div>
  );
}
