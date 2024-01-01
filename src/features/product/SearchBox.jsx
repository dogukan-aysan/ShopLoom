import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { HiMagnifyingGlass } from "react-icons/hi2";
import SortBy from "./SortBy";

function SearchBox() {
  const { dispatch, searchPattern } = useContext(ProductContext);
  return (
    <div className="search-box">
      <span className="search-box__magnifying-glass">
        <HiMagnifyingGlass />
      </span>
      <input
        className="search-box__input"
        type="text"
        placeholder="Search products"
        value={searchPattern}
        onChange={(e) => dispatch({ type: "search", payload: e.target.value })}
      />
      <span className="search-box__sort">
        <SortBy />
      </span>
    </div>
  );
}

export default SearchBox;
