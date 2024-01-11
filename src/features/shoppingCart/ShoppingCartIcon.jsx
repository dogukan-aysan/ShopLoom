import { useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function ShoppingCartIcon() {
  const navigate = useNavigate();
  const { productCount } = useContext(CartContext);
  const handleCartClick = () => {
    navigate("/app/shopping-cart");
  };
  return (
    <div className="shopping-cart">
      <div className="shopping-cart__icon" onClick={handleCartClick}>
        <BsCart4 />
      </div>
      {productCount > 0 && (
        <span className="shopping-cart__notification">{productCount}</span>
      )}
    </div>
  );
}

export default ShoppingCartIcon;
