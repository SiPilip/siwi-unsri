export default function LoginRegisterButton({ children, type }) {
  if (type === "full") {
    return (
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-unsri px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-unsrihover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-unsrihover transition-all duration-300 ease-in-out"
      >
        {children}
      </button>
    );
  }
  if (type === "unfull") {
    return (
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-transparent border-unsri border-[1px] mt-3 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-unsrihover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-unsrihover transition-all duration-300 ease-in-out"
      >
        {children}
      </button>
    );
  }
}
