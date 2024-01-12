import { useLocation } from "react-router-dom";
import Categories from "../features/product/Categories";

function Aside() {
  const location = useLocation();
  return (
    <div
      className={`aside${
        location.pathname !== "/app/products" ? " hidden" : ""
      }`}
    >
      <h2 className="aside__heading">Categories</h2>
      <div className="aside__categories">
        <Categories />
      </div>
    </div>
  );
}

export default Aside;
