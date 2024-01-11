import { useContext } from "react";
import Loader from "../../ui/Loader";
import AddCartButton from "../../ui/buttons/AddCartButton";
import { formatCurrency, parseJsonImages } from "../../utils/helpers";
import ProductCardCarousel from "./ProductCardCarousel";
import { CartContext } from "../../contexts/CartContext";

function ProductCard({ product }) {
  const { addProductToCart } = useContext(CartContext);
  const { Product_Name, Price, isLoading, id, Product_Image } = product;
  const filteredPrice = Number(Price.split(" ")[1].replace(",", ""));
  const filteredImages = parseJsonImages(Product_Image);
  if (!filteredImages) return;
  if (isLoading) return <Loader />;
  const handleProductAdd = () => {
    const currentProduct = {
      id: id,
      name: Product_Name,
      price: filteredPrice,
      amount: 1,
    };
    addProductToCart(currentProduct);
  };
  return (
    <div className="product-card">
      <h2 className="product-card__name">{Product_Name}</h2>
      <ProductCardCarousel images={filteredImages} id={id} />
      <div className="product-card__footer">
        <span className="footer__price">{formatCurrency(filteredPrice)}</span>
        <AddCartButton onAdd={handleProductAdd} />
      </div>
    </div>
  );
}

export default ProductCard;
