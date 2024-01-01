import { useForm } from "react-hook-form";
import { useRegister } from "./useRegister";
import LoaderButton from "../../ui/buttons/LoaderButton";
import RegisterButton from "../../ui/buttons/RegisterButton";

function RegisterPage() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { mutate: registerUser, isPending } = useRegister();
  const onSubmit = ({ firstName, lastName, email, password, address }) => {
    registerUser(
      { firstName, lastName, email, password, address },
      {
        onSettled: () => reset(),
      }
    );
  };

  return (
    <>
      <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="register__heading">Create Your Account</h2>
        <div className="register__inputs">
          {/* FIRST NAME */}
          <div className="register__inputs--first-name">
            <label className="register__label" htmlFor="firstName">
              First name:{" "}
            </label>
            <span className="error-message">{errors?.firstName?.message}</span>
            <input
              disabled={isPending}
              type="text"
              id="firstName"
              className="register__text-field"
              {...register("firstName", {
                required: "This field is required",
              })}
            />
          </div>
          {/* LAST NAME */}
          <div className="register__inputs--last-name">
            <label className="register__label" htmlFor="lastName">
              Last name:{" "}
            </label>
            <span className="error-message">{errors?.lastName?.message}</span>
            <input
              disabled={isPending}
              type="text"
              id="lastName"
              className="register__text-field"
              {...register("lastName", {
                required: "This field is required",
              })}
            />
          </div>
          {/* EMAIL */}
          <div className="register__inputs--email">
            <label className="register__label" htmlFor="email">
              Email:{" "}
            </label>
            <span className="error-message error-message--email">
              {errors?.email?.message}
            </span>
            <input
              disabled={isPending}
              type="text"
              id="email"
              className="register__text-field"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address.",
                },
              })}
            />
          </div>
          {/* ADDRESS */}
          <div className="register__inputs--address">
            <label className="register__label" htmlFor="address">
              Address:{" "}
            </label>
            <span className="error-message">{errors?.address?.message}</span>
            <input
              disabled={isPending}
              type="text"
              id="address"
              className="register__text-field"
              {...register("address", {
                required: "This field is required",
              })}
            />
          </div>
          {/* PASSWORD */}
          <div className="register__inputs--password">
            <label className="register__label" htmlFor="password">
              Password (min 8 characters):
            </label>
            <span className="error-message error-message--password">
              {errors?.password?.message}
            </span>
            <input
              disabled={isPending}
              type="password"
              id="password"
              className="register__text-field"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password needs a minumum of 8 characters",
                },
              })}
            />
          </div>
          {/* CONFIRM PASSWORD */}
          <div className="register__inputs--confirm-password">
            <label className="register__label" htmlFor="passwordConfirm">
              Confirm password:{" "}
            </label>
            <span className="error-message error-message--confirm-password">
              {errors?.passwordConfirm?.message}
            </span>
            <input
              disabled={isPending}
              type="password"
              id="passwordConfirm"
              className="register__text-field"
              {...register("passwordConfirm", {
                required: "This field is required",
                validate: (val) =>
                  val === getValues().password || "Passwords need to match",
              })}
            />
          </div>
        </div>
        {/* <button className="register__button">Register</button> */}
        {isPending ? <LoaderButton /> : <RegisterButton />}
      </form>
    </>
  );
}

export default RegisterPage;
