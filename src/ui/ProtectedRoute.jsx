import { useNavigate } from "react-router-dom";
import useUser from "../features/auth/useUser";
import Loader from "./Loader";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) return navigate("/auth/login");
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) return <Loader />;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
