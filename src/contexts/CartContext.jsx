import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "user/authenticated":
      return { ...state, userName: action.payload, isAuthenticated: true };
    case "user/logout":
      return { ...state, userName: "", isAuthenticated: false };
    case "cart/loaded":
      return { ...state, cart: (oldCart) => oldCart.push(action.payload) };
    default:
      return null;
  }
};

const CartProvider = ({ children }) => {
  const [{ cart }, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={(cart, dispatch)}>
      {children}
    </CartContext.Provider>
  );
};

function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("💥Context was used outside of the Provider💥");
  return context;
}

export { CartProvider, useCart };
