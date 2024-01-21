import toast from "react-hot-toast";

function ContactLink() {
  return (
    <span
      className="header__links--contact"
      onClick={() => toast.error("Not yet implemented")}
    >
      Contact
    </span>
  );
}

export default ContactLink;
