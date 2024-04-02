export default function LoginRegisterContainer({ children }) {
  return (
    <div className="bg-gray-100 w-screen min-h-screen h-screen  items-center flex justify-center px-5 md:px-0 py-10">
      <img
        src="https://linggaupos.disway.id/upload/c9412b31ee77c91092e7031c23c844e1.jpg"
        className="fixed min-h-screen min-w-screen opacity-10"
      />
      <div className="w-[500px] shadow-lg bg-white py-10 flex flex-wrap justify-center items-center relative px-5 md:px-0">
        {children}
      </div>
    </div>
  );
}
