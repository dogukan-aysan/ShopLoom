import { useNavigate } from "react-router-dom";
import useUser from "../features/auth/useUser";
import LogoutButton from "./buttons/LogoutButton";

function HeaderAuth() {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/auth/login");
  };
  const handleRegisterClick = () => {
    navigate("/auth/register");
  };
  return (
    <>
      {isAuthenticated ? (
        <LogoutButton />
      ) : (
        <>
          <span onClick={handleLoginClick} className="header__auth--login">
            Login
          </span>
          <span
            onClick={handleRegisterClick}
            className="header__auth--register"
          >
            Register
          </span>
        </>
      )}
    </>
  );
}

export default HeaderAuth;
