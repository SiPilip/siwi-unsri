import user from "../../public/icons/user.svg";
import lock from "../../public/icons/lock.svg";
import emailsvg from "../../public/icons/email.svg";
import LoginLogo from "../components/LoginLogo";
import BackButtonLogin from "../components/BackButtonLogin";
import LoginRegisterInput from "../components/LoginRegisterInput";
import LoginRegisterButton from "../components/LoginRegisterButton";
import LoginRegisterGetHelp from "../components/LoginRegisterGetHelp";
import LoginRegisterContainer from "../components/LoginRegisterContainer";
import { useEffect, useState } from "react";
import FormContainer from "../components/FormContainer";
import WarnBox from "../components/WarnBox";

const TOKEN_SIWI_2024 = "anjeng";

export default function Register() {
  const [nim, setNim] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [token, setToken] = useState("");

  return (
    <LoginRegisterContainer>
      <BackButtonLogin />
      <LoginLogo />
      <FormContainer>
        <LoginRegisterInput
          id="nim"
          src={user}
          type="number"
          required
          placeholder="xxxxxxxxxxx"
          value={nim}
          onChange={(e) => {
            setNim(e.target.value);
          }}
          onKeyInput={(e) => {
            if (!/[0-9]/.test(e.key)) {
              e.preventDefault();
            }
          }}
        >
          Nomor Induk Mahasiswa
        </LoginRegisterInput>
        <LoginRegisterInput
          id="email"
          src={emailsvg}
          type="email"
          required
          placeholder=".....@student.unsri.ac.id"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        >
          Email Kampus
        </LoginRegisterInput>
        <LoginRegisterInput
          id="password"
          src={lock}
          type="password"
          required
          placeholder="•••••••"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        >
          Kata Sandi
        </LoginRegisterInput>
        <LoginRegisterInput
          id="repeatpassword"
          src={lock}
          type="password"
          required
          placeholder="•••••••"
          value={repeatPassword}
          onChange={(e) => {
            setRepeatPassword(e.target.value);
          }}
        >
          Ulang Kata Sandi
        </LoginRegisterInput>
        <LoginRegisterInput
          id="token"
          src={user}
          type="text"
          required
          placeholder="XXXXX"
          value={token}
          onChange={(e) => {
            setToken(e.target.value);
          }}
        >
          No. Token
        </LoginRegisterInput>

        <LoginRegisterButton type="full" onClick={(e) => handleSubmit(e)}>
          Registrasi
        </LoginRegisterButton>
        <LoginRegisterGetHelp />
      </FormContainer>
    </LoginRegisterContainer>
  );
}
