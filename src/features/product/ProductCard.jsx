// import { faker } from "@faker-js/faker";

import Loader from "../../ui/Loader";
import ProductCardCarousel from "./ProductCardCarousel";

import { formatCurrency } from "../../utils/helpers";
import AddCartButton from "../../ui/buttons/AddCartButton";

function ProductCard({ product }) {
  const {
    product_name,
    discounted_price,
    // product_category_tree: categories,
    image,
    isLoading,
    uniq_id,
  } = product;
  if (isLoading) return <Loader />;
  // const category = categories.split(">>")[0].split('"')[1];
  // const description = faker.lorem.paragraph();
  return (
    <div className="product-card">
      <h2 className="product-card__name">{product_name}</h2>
      {/* <span className="product-card__category">{category}</span> */}
      <ProductCardCarousel images={image} id={uniq_id} />

      {/* <p className="product-card__description">{description}</p> */}
      <div className="product-card__footer">
        <span className="footer__price">
          {formatCurrency(discounted_price)}
        </span>
        <AddCartButton />
      </div>
    </div>
  );
}

export default ProductCard;
