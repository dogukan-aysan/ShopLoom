import { createContext, useReducer } from "react";

const initialState = {
  sortByOptions: ["Trending", "Price (low first)", "Price (high first)"],
  selectedSortBy: "Trending",
  searchPattern: "",
  productCount: null,
  selectedCategory: "All",
  categories: [
    "All",
    "Bag",
    "Blazer",
    "Dressy Jumpsuit",
    "Jacket",
    "Knitwear",
    "Loungewear",
    "Shirt",
    "Shoe",
    "Waistcoat & Gilet",
    "Workwear",
  ],
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
        searchPattern: "",
        selectedSortBy: "Trending",
      };
    case "count":
      return { ...state, productCount: action.payload };
    case "category/selected":
      return {
        ...state,
        selectedCategory: action.payload,
      };
  }
};

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [
    {
      sortByOptions,
      selectedSortBy,
      searchPattern,
      productCount,
      selectedCategory,
      categories,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  return (
    <ProductContext.Provider
      value={{
        sortByOptions,
        selectedSortBy,
        searchPattern,
        productCount,
        selectedCategory,
        categories,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
