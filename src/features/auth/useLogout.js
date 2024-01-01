import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../service/apiAuth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";

function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { dispatch } = useContext(ProductContext);
  const { mutate, isPending } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.resetQueries({ queryKey: ["user"], exact: true });
      queryClient.removeQueries();

      dispatch({ type: "reset" });
      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.log(err, "💥💥ERROR💥💥");
    },
  });
  return { mutate, isPending };
}

export default useLogout;
