import Verified from "./Verified";

export default function ContentTitle({ children, verified = false }) {
  return (
    <div className="flex items-center flex-nowrap gap-1">
      <div className="font-semibold text-2xl">{children}</div>{" "}
      {verified && <Verified />}
    </div>
  );
}
