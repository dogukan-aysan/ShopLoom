import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../service/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.log(err, "💥💥ERROR💥💥");
      toast.error("Provided email or password was incorrect");
    },
  });
  return { mutate, isPending };
}

export default useLogin;
