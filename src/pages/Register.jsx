import { useNavigate } from "react-router-dom";
import RegisterForm from "../features/auth/RegisterForm";
import useUser from "../features/auth/useUser";
import { useEffect } from "react";

function Register() {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();
  useEffect(() => {
    if (isAuthenticated) navigate("/app/products");
  }, [isAuthenticated, navigate]);
  return (
    <>
      <RegisterForm />
    </>
  );
}

export default Register;
