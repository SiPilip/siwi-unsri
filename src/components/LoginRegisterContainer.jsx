export default function LoginRegisterContainer({ children }) {
  return (
    <div className="bg-gray-100 w-screen min-h-screen h-full  items-center flex justify-center px-5 md:px-0 py-10">
      <div className="w-[500px] shadow-lg bg-white py-10 flex flex-wrap justify-center relative px-5 md:px-0">
        {children}
      </div>
    </div>
  );
}
