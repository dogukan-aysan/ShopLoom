import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function ClearCartButton() {
  const { dispatch } = useContext(CartContext);
  return (
    <button
      className="button button--clear"
      onClick={() => dispatch({ type: "cart/clear" })}
    >
      Clear Cart
    </button>
  );
}

export default ClearCartButton;
