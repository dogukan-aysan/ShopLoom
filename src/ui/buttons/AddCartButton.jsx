function AddCartButton({ onAdd }) {
  return (
    <button onClick={onAdd} className="button button--add-cart">
      ADD CART
    </button>
  );
}

export default AddCartButton;
