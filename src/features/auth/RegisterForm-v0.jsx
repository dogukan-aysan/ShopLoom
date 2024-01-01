import { useState } from "react";

function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  return (
    <>
      <form className="register__form">
        <h2 className="register__heading">Create Your Account</h2>
        <div className="register__inputs">
          {/* FIRST NAME */}
          <div className="register__inputs--first-name">
            <label htmlFor="first-name">First name: </label>
            <input
              value={firstName}
              type="text"
              id="first-name"
              className="register__text-field"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          {/* LAST NAME */}
          <div className="register__inputs--last-name">
            <label htmlFor="last-name">Last name: </label>
            <input
              value={lastName}
              type="text"
              id="last-name"
              className="register__text-field"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          {/* EMAIL */}
          <div className="register__inputs--email">
            <label htmlFor="email">Email: </label>
            <input
              value={email}
              type="text"
              id="email"
              className="register__text-field"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* ADDRESS */}
          <div className="register__inputs--address">
            <label htmlFor="adress">Adress: </label>
            <input
              value={address}
              type="text"
              id="address"
              className="register__text-field"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          {/* PASSWORD */}
          <div className="register__inputs--password">
            <label htmlFor="password">Password: </label>
            <input
              value={password}
              type="password"
              id="password"
              className="register__text-field"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* CONFIRM PASSWORD */}
          <div className="register__inputs--confirm-password">
            <label htmlFor="confirm">Confirm password: </label>
            <input
              value={confirmedPassword}
              type="password"
              id="confirm"
              className="register__text-field"
              onChange={(e) => setConfirmedPassword(e.target.value)}
            />
          </div>
        </div>
        <button className="register__button">Register</button>
      </form>
    </>
  );
}

export default RegisterPage;
