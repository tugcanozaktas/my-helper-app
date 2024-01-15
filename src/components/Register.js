import React, { useState } from "react";
import RegisterUser from "../requests/register";
import "../styles/Register.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleRegister = (event) => {
    event.preventDefault();
    RegisterUser(firstName, lastName, email, password);
  };
  return (
    <div className="registration-page">
      <form onSubmit={handleRegister}>
        <label className="label-name" htmlFor="firstName">
          First Name
          <input
            required
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value)
            }}
            id="firstName"
            name="firstName"
            type="text"
          />
        </label>
        <label className="label-name" htmlFor="lastName">
          Last Name
          <input
            required
            value={lastName}
            onChange={(event) => {
                event.preventDefault()
                setLastName(event.target.value)
            }}
            id="lastName"
            name="lastName"
            type="text"
          />
        </label>
        <label className="label-email" htmlFor="email">
          Email
          <input
            required
            value={email}
            onChange={(event) => {
                setEmail(event.target.value)
            }}
            id="email"
            name="email"
            type="email"
          />
        </label>
        <label className="label-password" htmlFor="password">
          Password
          <input
            required
            value={password}
            onChange={(event) => {
              setPassword(event.target.value)
            }}
            id="password"
            name="password"
            type="password"
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
