import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";

function Logo() {
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch } = useContext(ProductContext);
  const handleClick = () => {
    if (location.pathname !== "/") {
      dispatch({ type: "reset" });
    }
    navigate("/");
  };
  return (
    <svg className="logo" onClick={handleClick}>
      <use xlinkHref="/img/sprite.svg#icon-opencart"></use>
    </svg>
  );
}

export default Logo;
