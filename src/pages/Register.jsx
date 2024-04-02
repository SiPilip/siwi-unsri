import BackButtonLogin from "../components/BackButtonLogin";
import LoginLogo from "../components/LoginLogo";
import LoginRegisterContainer from "../components/LoginRegisterContainer";
import RegisterForm from "../features/authentication/RegisterForm";

export default function Register() {
  return (
    <LoginRegisterContainer>
      <BackButtonLogin />
      <LoginLogo />
      <RegisterForm />
    </LoginRegisterContainer>
  );
}
