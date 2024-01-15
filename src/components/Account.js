import React from "react";
import { Navigate } from "react-router";

const Account = ({ userInfo }) => {
  return (
    <div className="account-info">
      {userInfo ? <h2>{userInfo.firstName}</h2> : <Navigate to="/" />}
    </div>
    );
};

export default Account;
