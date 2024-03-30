import { Link } from "react-router-dom";

export default function LoginFormButton({ label, disabled }) {
  if (label === "Login")
    return (
      <button
        className="bg-unsri font-semibold rounded-md py-2 px-5 w-full mb-4 text-sm"
        disabled={disabled}
      >
        {label}
      </button>
    );

  if (label === "Register")
    return (
      <Link to={"/register"}>
        <div className="text-center bg-transparent border-[1px] border-unsri font-semibold rounded-md py-2 px-5 w-full text-sm">
          {label}
        </div>
      </Link>
    );
}
