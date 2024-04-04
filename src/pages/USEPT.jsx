import useProgress from "../features/user/beranda/useProgress";
import LayoutUSEPT from "../features/user/usept/LayoutUSEPT";
import ContentTitle from "../ui/ContentTitle";

export default function USEPT() {
  const { isVerifiedDataUsept } = useProgress();
  return (
    <div>
      <div className="flex items-center mb-5">
        <ContentTitle verified={isVerifiedDataUsept}>Hasil Test</ContentTitle>
      </div>

      <LayoutUSEPT />
    </div>
  );
}
