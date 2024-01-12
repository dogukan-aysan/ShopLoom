import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import SearchBox from "./SearchBox";
import Categories from "./Categories";

function GridHeader() {
  const { productCount } = useContext(ProductContext);
  return (
    <div className="catalogue__header">
      <SearchBox />
      <span className="catalogue__total-results">
        Total results: {productCount}
      </span>
      <div className="catalogue__categories">
        <Categories />
      </div>
    </div>
  );
}

export default GridHeader;
