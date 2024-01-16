import { ImArrowLeft2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div className="button button--back" onClick={handleBackClick}>
      <ImArrowLeft2 />
    </div>
  );
}

export default BackButton;
