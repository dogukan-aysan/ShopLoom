import { useForm } from "react-hook-form";
import { useRegister } from "./useRegister";
import LoaderButton from "../../ui/buttons/LoaderButton";
import Button from "../../ui/buttons/Button";

function RegisterForm() {
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
            <label className="register__label form-label" htmlFor="firstName">
              First name:{" "}
            </label>
            <input
              disabled={isPending}
              type="text"
              id="firstName"
              className={`form-control register__text-field ${
                errors.firstName ? "is-invalid" : ""
              }`}
              {...register("firstName", {
                required: "This field is required",
              })}
            />
            <div className="invalid-feedback register__feedback">
              {errors?.firstName?.message}
            </div>
          </div>
          {/* LAST NAME */}
          <div className="register__inputs--last-name">
            <label className="register__label form-label" htmlFor="lastName">
              Last name:{" "}
            </label>
            <input
              disabled={isPending}
              type="text"
              id="lastName"
              className={`form-control register__text-field ${
                errors.lastName ? "is-invalid" : ""
              }`}
              {...register("lastName", {
                required: "This field is required",
              })}
            />
            <div className="invalid-feedback register__feedback">
              {errors?.lastName?.message}
            </div>
          </div>
          {/* EMAIL */}
          <div className="register__inputs--email">
            <label className="register__label form-label" htmlFor="email">
              Email:
            </label>
            <input
              disabled={isPending}
              type="text"
              id="email"
              className={`form-control register__text-field ${
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
            <div className="invalid-feedback register__feedback">
              {errors?.email?.message}
            </div>
          </div>
          {/* ADDRESS */}
          <div className="register__inputs--address">
            <label className="register__label form-label" htmlFor="address">
              Address:
            </label>
            <input
              disabled={isPending}
              type="text"
              id="address"
              className={`form-control register__text-field ${
                errors.address ? "is-invalid" : ""
              }`}
              {...register("address", {
                required: "This field is required",
              })}
            />
            <div className="invalid-feedback register__feedback">
              {errors?.address?.message}
            </div>
          </div>
          {/* PASSWORD */}
          <div className="register__inputs--password">
            <label
              className="register__label form-label register__label--pasword"
              htmlFor="password"
            >
              Password (min 8 characters):
            </label>
            <input
              disabled={isPending}
              type="password"
              id="password"
              className={`form-control register__text-field ${
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
            <div className="invalid-feedback register__feedback">
              {errors?.password?.message}
            </div>
          </div>
          {/* CONFIRM PASSWORD */}
          <div className="register__inputs--confirm-password">
            <label
              className="register__label form-label"
              htmlFor="passwordConfirm"
            >
              Confirm password:
            </label>
            <input
              disabled={isPending}
              type="password"
              id="passwordConfirm"
              className={`form-control register__text-field ${
                errors.passwordConfirm ? "is-invalid" : ""
              }`}
              {...register("passwordConfirm", {
                required: "This field is required",
                validate: (val) =>
                  val === getValues().password || "Passwords need to match",
              })}
            />
            <div className="invalid-feedback register__feedback">
              {errors?.passwordConfirm?.message}
            </div>
          </div>
        </div>
        {isPending ? <LoaderButton /> : <Button>Register</Button>}
      </form>
    </>
  );
}

export default RegisterForm;
