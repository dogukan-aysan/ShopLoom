import useLogout from "../../features/auth/useLogout";
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
          Logout
        </button>
      )}
    </>
  );
}

export default LogoutButton;
