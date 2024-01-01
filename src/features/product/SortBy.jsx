import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";

function SortBy() {
  const { sortByOptions, selectedSortBy, dispatch } =
    useContext(ProductContext);
  return (
    <div className="dropdown">
      <button
        className="btn btn-lg dropdown-toggle text-white"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      ></button>
      <ul className="dropdown-menu dropdown-menu-dark">
        {sortByOptions.map((option, index) => {
          return (
            <li
              key={index}
              onClick={() =>
                dispatch({ type: "sort/selected", payload: option })
              }
            >
              <a
                className={`dropdown-item ${
                  selectedSortBy === option ||
                  (option === "Trending" && selectedSortBy === "Trending")
                    ? "active"
                    : ""
                }`}
                href="#"
              >
                {option}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SortBy;
