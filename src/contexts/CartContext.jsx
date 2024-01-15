import { createContext, useReducer } from "react";
import toast from "react-hot-toast";

const initialState = {
  cart: [],
  price: 0,
  productCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "cart/update":
      return {
        ...state,
        cart: action.payload,
        productCount:
          action.payload.length === 0
            ? 0
            : state.cart.reduce((acc, curr) => (acc = acc + curr.amount), 0),
        price:
          action.payload.length === 0
            ? 0
            : state.cart.reduce(
                (acc, curr) => (acc = acc + curr.amount * curr.price),
                0
              ),
      };
    case "cart/clear":
      return { ...state, cart: [], price: 0, productCount: 0 };
    default:
      return null;
  }
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [{ cart, price, productCount }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const addProductToCart = (product) => {
    let isExisted = false;
    for (let p of cart) {
      if (p.id === product.id) {
        p.amount++;
        isExisted = true;
      }
    }
    if (!isExisted) cart.push(product);
    toast.success("Successfully added.");
    dispatch({ type: "cart/update", payload: cart });
  };
  const deleteProductFromCart = (id) => {
    const filteredCart = cart.filter((product) => {
      if (product.id === id) {
        if (product.amount === 1) {
          return false;
        } else {
          product.amount--;
        }
      }
      return true;
    });
    dispatch({ type: "cart/update", payload: filteredCart });
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch,
        price,
        productCount,
        addProductToCart,
        deleteProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
