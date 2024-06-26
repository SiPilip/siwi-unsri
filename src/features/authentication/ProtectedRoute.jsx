import { useNavigate } from "react-router-dom";
import { useUser } from "./useUser";
import { useEffect } from "react";
import Spinner from "../../ui/Spinner";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { user, isUserLoading, isAuthenticated } = useUser();
  const { role } = user?.user_metadata || {};

  // 2. If there is no authenticated user, redirect to /login
  useEffect(
    function () {
      if (!isAuthenticated && !isUserLoading) {
        navigate("/login", { replace: true });
      } else {
        if (role === "admin") navigate("/admin", { replace: true });
      }
    },
    [isAuthenticated, isUserLoading, role, navigate]
  );

  // 3. While loading, show a spinner
  if (isUserLoading)
    return (
      <div className="h-screen bg-gray-50 flex justify-center items-center">
        <Spinner />
      </div>
    );

  // 4. If there is a user, render the app
  if (isAuthenticated && role === "user") return children;
}
