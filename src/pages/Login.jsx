import user from "../../public/icons/user.svg";
import lock from "../../public/icons/lock.svg";
import LoginLogo from "../components/LoginLogo";
import LoginRegisterInput from "../components/LoginRegisterInput";
import LoginRegisterButton from "../components/LoginRegisterButton";
import LoginRegisterGetHelp from "../components/LoginRegisterGetHelp";
import FormContainer from "../components/FormContainer";

import { Link, useNavigate } from "react-router-dom";
import LoginRegisterContainer from "../components/LoginRegisterContainer";
import { useEffect, useState } from "react";
import WarnBox from "../components/WarnBox";
import { getUsers } from "../services/apiUser";

export default function Login() {
  const [data, setData] = useState([]);

  useEffect(function () {
    getUsers().then((data) => setData(data));
  }, []);

  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");

  const [isNim, setIsNim] = useState(true);
  const [isPassword, setIsPassword] = useState(true);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!nim) {
      setIsNim(false);
      return;
    }
    if (!password) {
      setIsPassword(false);
      return;
    }
    setNim("");
    setPassword("");
    data.forEach((e) => {
      if (nim === e.nim) {
        if (password === e.password) {
          (e.roles === "user") && navigate(`/dashboarduser?id=${e.id}`, { replace: true });
          (e.roles === "admin") && navigate(`/dashboardadm?id=${e.id}`, { replace: true });
        }
      }
    });
  }

  useEffect(
    function nimChange() {
      setIsNim(true);
      setIsPassword(true);
    },
    [nim, password]
  );

  return (
    <LoginRegisterContainer>
      <LoginLogo />
      <FormContainer>
        {(!isNim || !isPassword) && (
          <WarnBox
            text2={`Mohon isi ${!nim ? "Nomor Induk Mahasiswa" : ""} 
            ${!nim && !password ? " & " : ""}${!password ? "sandi" : ""} anda`}
            onClose={() => {
              setIsNim(true);
              setIsPassword(true);
            }}
          />
        )}
        <LoginRegisterInput
          id="nim"
          src={user}
          type="nim"
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
        <LoginRegisterButton type="full" onClick={handleSubmit}>
          Login
        </LoginRegisterButton>
        <Link to="/register">
          <LoginRegisterButton type="unfull">Register</LoginRegisterButton>
        </Link>
        <LoginRegisterGetHelp />
      </FormContainer>
    </LoginRegisterContainer>
  );
}
