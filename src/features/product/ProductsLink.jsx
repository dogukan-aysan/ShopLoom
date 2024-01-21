import { useNavigate } from "react-router-dom";

function ProductsLink() {
  const navigate = useNavigate();
  return (
    <span className="header__links--products" onClick={() => navigate("/")}>
      Products
    </span>
  );
}

export default ProductsLink;
