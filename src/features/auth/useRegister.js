import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../../service/apiAuth";

export function useRegister() {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success("Account succesfully created! Enjoy shopping...");
      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.log(err, "💥💥ERROR💥💥");
      toast.error("Provided email was already in used");
    },
  });
  return { mutate, isPending };
}
