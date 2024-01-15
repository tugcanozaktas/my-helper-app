import React, { useState } from "react";
import { Routes, Route } from "react-router";
import "../styles/App.css";
import NavBar from "./NavBar";
import LoginPage from "./LoginPage";
import Home from "./Home";
import Settings from "./Settings";
import Account from "./Account";
import Register from "./Register";

function App() {
  const [userInfo, setUserInfo] = useState();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage setUserInfo={setUserInfo} />} />
        <Route path="/account" element={<Account userInfo={userInfo} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;
