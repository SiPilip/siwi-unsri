import user from "../../public/icons/user.svg";
import lock from "../../public/icons/lock.svg";
import email from "../../public/icons/email.svg";
import LoginLogo from "../components/LoginLogo";
import BackButtonLogin from "../components/BackButtonLogin";
import LoginRegisterInput from "../components/LoginRegisterInput";
import LoginRegisterButton from "../components/LoginRegisterButton";
import LoginRegisterGetHelp from "../components/LoginRegisterGetHelp";
import LoginRegisterContainer from "../components/LoginRegisterContainer";

export default function Register() {
  return (
    <LoginRegisterContainer>
      <BackButtonLogin />
      <LoginLogo />
      <form
        className="space-y-5 mt-10 sm:mx-auto sm:w-full w-full sm:max-w-sm relative px-3"
        action="#"
        method="POST"
      >
        <LoginRegisterInput
          id="nim"
          src={user}
          type="number"
          required
          placeholder="xxxxxxxxxxx"
        >
          Nomor Induk Mahasiswa
        </LoginRegisterInput>
        <LoginRegisterInput
          id="email"
          src={email}
          type="email"
          required
          placeholder=".....@student.unsri.ac.id"
        >
          Email Kampus
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
        <LoginRegisterInput
          id="repeatpassword"
          src={lock}
          type="password"
          required
          placeholder="•••••••"
        >
          Ulang Kata Sandi
        </LoginRegisterInput>
        <LoginRegisterInput
          id="token"
          src={user}
          type="text"
          required
          placeholder="XXXXX"
        >
          No. Token
        </LoginRegisterInput>

        <LoginRegisterButton type="full">Registrasi</LoginRegisterButton>
        <LoginRegisterGetHelp />
      </form>
    </LoginRegisterContainer>
  );
}
