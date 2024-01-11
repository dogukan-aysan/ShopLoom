import { ImArrowLeft2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div className="shopping-cart__back-button" onClick={handleBackClick}>
      <span>
        <ImArrowLeft2 />
      </span>
    </div>
  );
}

export default BackButton;
