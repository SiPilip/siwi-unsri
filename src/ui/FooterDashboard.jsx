export default function FooterDashboard() {
  return (
    <div className="w-full mb-8 mx-auto h-[6%] flex items-center ">
      <div className="text-sm text-gray-700 py-1">
        Copyright@ 2024 -
        <a
          className="text-gray-700 font-semibold"
          href="https://www.sipilip.com"
          target="_blank"
        >
          {" SIWI UNSRI "}
        </a>
        by
        <a
          href="https://www.sipilip.com"
          className="text-gray-700 font-semibold"
          target="_blank"
        >
          {" PPLBO-G1 "}
        </a>
        .
      </div>
    </div>
  );
}
