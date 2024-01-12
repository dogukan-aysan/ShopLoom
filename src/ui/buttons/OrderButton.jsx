import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

function OrderButton() {
  // const navigate = useNavigate();
  const onOrderClick = () => {
    // navigate("/app/order/new");
    toast.error("Not yet implemented");
  };
  return (
    <button className="button button--order" onClick={onOrderClick}>
      Create Order
    </button>
  );
}

export default OrderButton;
