import AboutLink from "./AboutLink";
import ContactLink from "./ContactLink";
import HeaderAuth from "./HeaderAuth";

function HiddenLinks() {
  return (
    <ul className="header__hidden-links">
      <li className="hidden-links__about">
        <AboutLink />
      </li>
      <li className="hidden-links__contact">
        <ContactLink />
      </li>
      <li>
        <div className="hidden-links__auth">
          <HeaderAuth />
        </div>
      </li>
    </ul>
  );
}

export default HiddenLinks;
