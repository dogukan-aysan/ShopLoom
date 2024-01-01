import HeaderAuth from "./HeaderAuth";

function HiddenLinks() {
  return (
    <ul className="header__hidden-links">
      <li>
        <span className="hidden-links--about">About</span>
      </li>
      <li>
        <span className="hidden-links--contact">Contact</span>
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
