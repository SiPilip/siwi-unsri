export default function LoginRegisterContainer({ children }) {
  return (
    <div className="bg-gray-100 w-screen h-screen flex justify-center items-center">
      <div className="w-[500px] shadow-lg bg-white py-10 flex flex-wrap justify-center relative ">
        {children}
      </div>
    </div>
  );
}
