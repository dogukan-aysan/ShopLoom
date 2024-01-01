import Logo from "./Logo";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import HeaderAuth from "./HeaderAuth";
import HiddenLinks from "./HiddenLinks";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="header">
        <div className="header__company-overview">
          <Logo />
          <span className="header__company-overview--about">About</span>
          <span className="header__company-overview--contact">Contact</span>
        </div>
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
