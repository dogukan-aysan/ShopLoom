import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../service/apiAuth";

function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  return { isLoading, isAuthenticated: user?.role === "authenticated" };
}

export default useUser;
