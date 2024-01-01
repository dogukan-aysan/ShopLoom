import { useState } from "react";
import useLogin from "./useLogin";
import LoginButton from "../../ui/buttons/LoginButton";
import LoaderButton from "../../ui/buttons/LoaderButton";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: login, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  };

  return (
    <>
      <form className="login__form">
        <h2 className="login__heading">Log Into Your Account</h2>
        <label className="login__label" htmlFor="email">
          Email:
        </label>
        <input
          disabled={isPending}
          type="text"
          value={email}
          id="email"
          className="login__input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="login__label" htmlFor="password">
          Password:
        </label>
        <input
          disabled={isPending}
          type="password"
          value={password}
          id="password"
          className="login__input"
          onChange={(e) => setPassword(e.target.value)}
        />
        {isPending ? <LoaderButton /> : <LoginButton onClick={handleSubmit} />}
      </form>
    </>
  );
}

export default LoginForm;
