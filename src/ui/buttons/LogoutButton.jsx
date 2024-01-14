import useLogout from "../../features/auth/useLogout";
import { TbLogout } from "react-icons/tb";
import Loader from "../Loader";

function LogoutButton() {
  const { mutate: logout, isPending } = useLogout();
  return (
    <>
      {isPending ? (
        <div className="loader--logout">
          <Loader />
        </div>
      ) : (
        <button onClick={logout} className="button button--logout">
          <TbLogout />
        </button>
      )}
    </>
  );
}

export default LogoutButton;
