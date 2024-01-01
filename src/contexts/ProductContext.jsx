import { createContext, useReducer } from "react";

const initialState = {
  sortByOptions: ["Trending", "Price (low first)", "Price (high first)"],
  selectedSortBy: "Trending",
  selectedCategory: null,
  searchPattern: "",
  productCount: null,
  categories: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "sort/selected":
      return { ...state, selectedSortBy: action.payload };
    case "search":
      return { ...state, searchPattern: action.payload };
    case "reset":
      return {
        ...state,
        selectedCategory: "",
        searchPattern: "",
        selectedSortBy: "Trending",
      };
    case "count":
      return { ...state, productCount: action.payload };
    case "category/selected":
      return null;
    case "category/added":
      return null;
  }
};

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [
    {
      sortByOptions,
      selectedSortBy,
      categories,
      selectedCategory,
      searchPattern,
      productCount,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  return (
    <ProductContext.Provider
      value={{
        sortByOptions,
        selectedSortBy,
        categories,
        selectedCategory,
        searchPattern,
        productCount,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
