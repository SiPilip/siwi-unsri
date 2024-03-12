export default function NavbarTitle({ title }) {
  return (
    <div className="bg-white shadow-md h-[13%] w-full py-10 px-12 flex items-center justify-between">
      <h1 className="font-bold text-3xl">{title}</h1>
      <button>
        <div className="rounded-full overflow-hidden">
          <img src="https://i.pravatar.cc/50" alt="" />
        </div>
      </button>
    </div>
  );
}
