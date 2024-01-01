import { useForm } from "react-hook-form";
import LoginButton from "../../ui/buttons/LoginButton";
import useLogin from "./useLogin";
import LoaderButton from "../../ui/buttons/LoaderButton";

function LoginForm() {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { mutate, isPending } = useLogin();
  const myHandleSubmit = ({ email, password }) => {
    mutate({ email, password }, { onSettled: () => reset() });
  };

  return (
    <form className="login__form" onSubmit={handleSubmit(myHandleSubmit)}>
      <h2 className="login__heading">Log Into Your Account</h2>
      <div className="login__input">
        <label htmlFor="email" className="form-label login__label">
          Email Address
        </label>
        <input
          id="email"
          type="text"
          className={`form-control login__input--email ${
            errors.email ? "is-invalid" : ""
          }`}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address.",
            },
          })}
        />
        <div className="invalid-feedback login__feedback">
          {errors?.email?.message}
        </div>
      </div>
      <div className="login__input">
        <label htmlFor="password" className="form-label login__label">
          Password
        </label>
        <input
          id="password"
          type="password"
          className={`form-control login__input--password ${
            errors.password ? "is-invalid" : ""
          }`}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minumum of 8 characters",
            },
          })}
        />
        <div className="invalid-feedback login__feedback">
          {errors?.password?.message}
        </div>
      </div>
      <div className="form-check login__checkbox">
        <input
          id="remember"
          type="checkbox"
          className="form-check-input login__checkbox--input"
          checked
          readOnly
        />
        <label className="form-check-label" htmlFor="remember">
          Remember Me
        </label>
      </div>
      {isPending ? <LoaderButton /> : <LoginButton />}
    </form>
  );
}

export default LoginForm;
