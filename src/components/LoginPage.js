import React, { useState } from "react";
import "../styles/LoginPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import Login from "../requests/login";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import Alert from "./Alert";

const LoginPage = ({ setUserInfo }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    Login(
      userName,
      password,
      setAccessToken,
      setUserInfo,
      setMessage,
      setSuccess
    );
  };
  return (
    <div className="account-page">
      {!accessToken ? (
        <>
          <div className="login-wrapper">
            <h2>Login</h2>
            <Alert message={message} success={success} />
            <div className="login-box">
              <form onSubmit={handleLogin}>
                <label htmlFor="username">
                  Username
                  <div className="username-wrapper">
                    <FontAwesomeIcon className="account-icon" icon={faUser} />
                    <input
                      value={userName}
                      onChange={(event) => {
                        setUserName(event.target.value);
                      }}
                      placeholder="Pick a username"
                      name="username"
                      id="username"
                      type="text"
                    />
                  </div>
                </label>
                <label htmlFor="password">
                  Password
                  <div className="username-wrapper">
                    <FontAwesomeIcon className="account-icon" icon={faLock} />
                    <input
                      value={password}
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                      placeholder="Pick a password"
                      name="password"
                      id="password"
                      type="password"
                    />
                  </div>
                </label>
                <button className="login-button" type="submit">
                  Login
                </button>
                <Link to="/register">
                  <button className="register-button">Register</button>
                </Link>
              </form>
            </div>
          </div>
        </>
      ) : (
        <Navigate to="/account" />
      )}
    </div>
  );
};

export default LoginPage;
