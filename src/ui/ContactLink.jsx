import toast from "react-hot-toast";

function ContactLink() {
  return (
    <span
      className="contact-link"
      onClick={() => toast.error("Not yet implemented")}
    >
      Contact
    </span>
  );
}

export default ContactLink;
