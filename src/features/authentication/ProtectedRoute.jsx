import { useNavigate } from "react-router-dom";
import { useUser } from "./useUser";
import { useEffect } from "react";
import Spinner from "../../ui/Spinner";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isUserLoading, isAuthenticated } = useUser();

  // 2. If there is no authenticated user, redirect to /login
  useEffect(
    function () {
      if (!isAuthenticated && !isUserLoading)
        navigate("/login", { replace: true });
    },
    [isAuthenticated, isUserLoading, navigate]
  );

  // 3. While loading, show a spinner
  if (isUserLoading)
    return (
      <div className="h-screen bg-gray-50 flex justify-center items-center">
        <Spinner />
      </div>
    );

  // 4. If there is a user, render the app
  if (isAuthenticated) return children;
}
