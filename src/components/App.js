import React from "react";
import { Routes, Route } from "react-router";
import "../styles/App.css";
import NavBar from "./NavBar";
import Account from "./Account";
import Home from "./Home";
import Settings from "./Settings";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/account" element={<Account />} />
        <Route path="/home" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;
