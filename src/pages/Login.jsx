import user from "../../public/icons/user.svg";
import lock from "../../public/icons/lock.svg";
import LoginLogo from "../components/LoginLogo";
import LoginRegisterInput from "../components/LoginRegisterInput";
import LoginRegisterButton from "../components/LoginRegisterButton";
import LoginRegisterGetHelp from "../components/LoginRegisterGetHelp";

import { Link } from "react-router-dom";
import LoginRegisterContainer from "../components/LoginRegisterContainer";

export default function Login() {
  return (
    <LoginRegisterContainer>
      <LoginLogo />
      <form
        className="space-y-5 mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
        action="#"
        method="POST"
      >
        <LoginRegisterInput
          id="nim"
          src={user}
          type="nim"
          required
          placeholder="xxxxxxxxxxx"
        >
          Nomor Induk Mahasiswa
        </LoginRegisterInput>
        <LoginRegisterInput
          id="password"
          src={lock}
          type="password"
          required
          placeholder="•••••••"
        >
          Kata Sandi
        </LoginRegisterInput>

        <LoginRegisterButton type="full">Login</LoginRegisterButton>
        <Link to="/register">
          <LoginRegisterButton type="unfull">Register</LoginRegisterButton>
        </Link>
        <LoginRegisterGetHelp />
      </form>
    </LoginRegisterContainer>
  );
}
