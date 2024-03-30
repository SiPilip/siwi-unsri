import LoginLogo from "../components/LoginLogo";
import LoginRegisterContainer from "../components/LoginRegisterContainer";
import LoginForm from "../features/authentication/LoginForm";

export default function Login() {
  return (
    <LoginRegisterContainer>
      <LoginLogo />
      <LoginForm />
    </LoginRegisterContainer>
  );
}
