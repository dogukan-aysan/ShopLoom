import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import HeaderAuth from "./HeaderAuth";
import HiddenLinks from "./HiddenLinks";
import Logo from "./Logo";
import ShoppingCartIcon from "../features/shoppingCart/ShoppingCartIcon";
import useUser from "../features/auth/useUser";
import { useLocation } from "react-router-dom";
import AboutLink from "./AboutLink";
import ContactLink from "./ContactLink";

function Header() {
  const { isAuthenticated } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="header">
        <Logo />
        <div className="header__right-side">
          <div className="header__links">
            <AboutLink />
            <ContactLink />
          </div>
          {isAuthenticated && location.pathname !== "/shopping-cart" && (
            <ShoppingCartIcon />
          )}
          <div className="header__auth">
            <HeaderAuth />
          </div>
          <span className="header__hamburger">
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </span>
        </div>
      </header>
      {isOpen && <HiddenLinks />}
    </>
  );
}

export default Header;
