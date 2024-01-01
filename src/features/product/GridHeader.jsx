import { useContext } from "react";
import SearchBox from "./SearchBox";
import { ProductContext } from "../../contexts/ProductContext";

function GridHeader() {
  const { productCount } = useContext(ProductContext);
  return (
    <div className="catalogue__header">
      <SearchBox />
      <span className="catalogue__total-results">
        Total results: {productCount}
      </span>
    </div>
  );
}

export default GridHeader;
