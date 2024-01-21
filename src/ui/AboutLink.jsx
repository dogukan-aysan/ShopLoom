import toast from "react-hot-toast";

function AboutLink() {
  return (
    <span
      className="header__links--about"
      onClick={() => toast.error("Not yet implemented")}
    >
      About
    </span>
  );
}

export default AboutLink;
