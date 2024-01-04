import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";

function Categories() {
  const { dispatch, categories, selectedCategory } = useContext(ProductContext);
  const handleClick = (cat) => {
    if (selectedCategory !== cat)
      dispatch({ type: "category/selected", payload: cat });
  };
  return (
    <div className="aside__categories">
      {categories?.map((category, index) => (
        <span
          className={`categories__item${
            category === selectedCategory ? " categories__item--active" : ""
          }`}
          onClick={() => handleClick(category)}
          key={index}
        >
          {category}
        </span>
      ))}
    </div>
  );
}

export default Categories;
