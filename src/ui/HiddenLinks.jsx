import { useNavigate } from "react-router-dom";
import HeaderAuth from "./HeaderAuth";

function HiddenLinks() {
  const navigate = useNavigate();
  return (
    <ul className="header__hidden-links">
      <li>
        <span className="hidden-links--about">About</span>
      </li>
      <li>
        <span className="hidden-links--contact">Contact</span>
      </li>
      <li onClick={() => navigate("/app/shopping-cart")}>
        <span className="hidden-links--cart">Shopping Cart</span>
      </li>
      <li>
        <div className="hidden-links--auth">
          <HeaderAuth />
        </div>
      </li>
    </ul>
  );
}

export default HiddenLinks;
