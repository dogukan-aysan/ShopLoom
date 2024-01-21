import { useNavigate } from "react-router-dom";
import LoginForm from "../features/auth/LoginForm";
import { useEffect } from "react";
import useUser from "../features/auth/useUser";

function Login() {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();
  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);
  return (
    <div className="login-page">
      <LoginForm />
    </div>
  );
}

export default Login;
