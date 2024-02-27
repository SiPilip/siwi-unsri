import user from "../../public/icons/user.svg";
import lock from "../../public/icons/lock.svg";
import LoginLogo from "../components/LoginLogo";

export default function Register() {
  return (
    <div className="bg-gray-100 w-screen h-screen flex justify-center items-center">
      <div className="w-[500px] shadow-lg bg-white py-10 ">
        <div className=" flex flex-wrap justify-center">
          <LoginLogo />

          {/* REGISTER */}
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="nim"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nomor Induk Mahasiswa
                </label>
                <div className="mt-2 flex w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-3 py-2">
                  <img src={user} alt="" className="mr-2" />
                  <input
                    id="nim"
                    name="nim"
                    type="email"
                    required
                    placeholder="xxxxxxxxxxx"
                    className="focus:outline-none w-full"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email Mahasiswa
                </label>
                <div className="mt-2 flex w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-3 py-2">
                  <img src={user} alt="" className="mr-2" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="xxxxx@student.unsri.ac.id"
                    className="focus:outline-none w-full"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Kata Sandi
                </label>
                <div className="mt-2 flex w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-3 py-2">
                  <img src={lock} alt="" className="mr-2" />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    required
                    placeholder="•••••••"
                    className="focus:outline-none w-full"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="passwordrepeat"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Ulangi Kata Sandi
                </label>
                <div className="mt-2 flex w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-3 py-2">
                  <img src={lock} alt="" className="mr-2" />
                  <input
                    id="passwordrepeat"
                    name="passwordrepeat"
                    type="password"
                    autoComplete="password"
                    required
                    placeholder="•••••••"
                    className="focus:outline-none w-full"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    No. Token
                  </label>
                </div>
                <div className="mt-2">
                  <div className="mt-2 w-full flex rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-3 py-2">
                    <img src={lock} alt="" className="mr-2" />
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="focus:outline-none w-full"
                      placeholder="xxxxx"
                    />
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-unsri border-unsri border-[1px] mt-3 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-unsrihover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-unsrihover transition-all duration-300 ease-in-out"
                >
                  Registrasi
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Masalah teknis?
              <a
                href="#"
                className="font-semibold leading-6 text-neutral-800 hover:text-black ml-1"
              >
                Hubungi admin.
              </a>
            </p>
          </div>
          {/* LOGIN */}
        </div>
      </div>
    </div>
  );
}
