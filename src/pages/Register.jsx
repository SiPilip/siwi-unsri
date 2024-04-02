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

// export default function Register() {
//   const [nim, setNim] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [repeatPassword, setRepeatPassword] = useState("");
//   const [token, setToken] = useState("");

//   return (
//     <LoginRegisterContainer>
//       <BackButtonLogin />
//       <LoginLogo />
//       <FormContainer>
//         <LoginRegisterInput
//           id="nim"
//           src={user}
//           type="number"
//           required
//           placeholder="xxxxxxxxxxx"
//           value={nim}
//           onChange={(e) => {
//             setNim(e.target.value);
//           }}
//           onKeyInput={(e) => {
//             if (!/[0-9]/.test(e.key)) {
//               e.preventDefault();
//             }
//           }}
//         >
//           Nomor Induk Mahasiswa
//         </LoginRegisterInput>
//         <LoginRegisterInput
//           id="email"
//           src={emailsvg}
//           type="email"
//           required
//           placeholder=".....@student.unsri.ac.id"
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         >
//           Email Kampus
//         </LoginRegisterInput>
//         <LoginRegisterInput
//           id="password"
//           src={lock}
//           type="password"
//           required
//           placeholder="•••••••"
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//         >
//           Kata Sandi
//         </LoginRegisterInput>
//         <LoginRegisterInput
//           id="repeatpassword"
//           src={lock}
//           type="password"
//           required
//           placeholder="•••••••"
//           value={repeatPassword}
//           onChange={(e) => {
//             setRepeatPassword(e.target.value);
//           }}
//         >
//           Ulang Kata Sandi
//         </LoginRegisterInput>
//         <LoginRegisterInput
//           id="token"
//           src={user}
//           type="text"
//           required
//           placeholder="XXXXX"
//           value={token}
//           onChange={(e) => {
//             setToken(e.target.value);
//           }}
//         >
//           No. Token
//         </LoginRegisterInput>

//         <LoginRegisterButton type="full" onClick={(e) => handleSubmit(e)}>
//           Registrasi
//         </LoginRegisterButton>
//         <LoginRegisterGetHelp />
//       </FormContainer>
//     </LoginRegisterContainer>
//   );
// }
