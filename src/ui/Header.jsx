import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import HeaderAuth from "./HeaderAuth";
import HiddenLinks from "./HiddenLinks";
import Logo from "./Logo";
import ShoppingCartIcon from "../features/shoppingCart/ShoppingCartIcon";
import useUser from "../features/auth/useUser";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

function Header() {
  const { isAuthenticated } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="header">
        <div className="header__company-overview">
          <Logo />
          <span
            className="header__company-overview--about"
            onClick={() => toast.error("Not yet implemented")}
          >
            About
          </span>
          <span
            className="header__company-overview--contact"
            onClick={() => toast.error("Not yet implemented")}
          >
            Contact
          </span>
        </div>
        {isAuthenticated && location.pathname !== "/app/shopping-cart" && (
          <ShoppingCartIcon />
        )}
        <div className="header__auth">
          <HeaderAuth />
        </div>
        <span className="header__hamburger">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </span>
      </header>
      {isOpen && <HiddenLinks />}
    </>
  );
}

export default Header;
