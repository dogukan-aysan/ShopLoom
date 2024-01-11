import { useContext } from "react";
import { IoTrashOutline } from "react-icons/io5";

import { CartContext } from "../../contexts/CartContext";
import { formatCurrency } from "../../utils/helpers";

import BackButton from "../../ui/buttons/BackButton";
import ClearCartButton from "../../ui/buttons/ClearCartButton";
import OrderButton from "../../ui/buttons/OrderButton";

function ShoppingCartOverview() {
  const {
    cart,
    price: totalPrice,
    deleteProductFromCart,
  } = useContext(CartContext);

  const handleTrashClick = (id) => {
    deleteProductFromCart(id);
  };

  return (
    <div className="shopping-cart__overview">
      <BackButton />
      {
        <>
          {cart.length === 0 ? (
            <span className="shopping-cart__empty-message">
              Your cart is empty. Lets go back to shopping
            </span>
          ) : (
            <>
              <h2 className="shopping-cart__heading">Your Cart</h2>
              <table className="shopping-cart__table">
                <thead className="shopping-cart__table-header">
                  <tr className="shopping-cart__header-row">
                    <td className="shopping-cart__header-cell">Name</td>
                    <td className="shopping-cart__header-cell">Amount</td>
                    <td className="shopping-cart__header-cell">Price</td>
                  </tr>
                </thead>
                <tbody className="shopping-cart__table-body">
                  {cart.map((product, index) => (
                    <tr className="shopping-cart__row" key={index}>
                      <td className="shopping-cart__cell">
                        {product.name.toLowerCase()}
                      </td>
                      <td className="shopping-cart__cell">{product.amount}</td>
                      <td className="shopping-cart__cell">
                        {formatCurrency(product.price)}
                      </td>
                      <td
                        className="shopping-cart__cell shopping-cart__trash"
                        onClick={() => {
                          handleTrashClick(product.id);
                        }}
                      >
                        <IoTrashOutline />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="shopping-cart__divider"></div>
              <div className="shopping-cart__total-price">
                <span className="shopping-cart__price-field">Total Price:</span>
                <span className="shopping-cart__price-value">
                  {formatCurrency(totalPrice)}
                </span>
              </div>
              <div className="shopping-cart__buttons">
                <ClearCartButton />
                <OrderButton />
              </div>
            </>
          )}
        </>
      }
    </div>
  );
}

export default ShoppingCartOverview;
