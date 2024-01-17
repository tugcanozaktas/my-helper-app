import React from "react";
import "../styles/Alert.css"

function Alert({ message, success }) {
  if (!message) return null;

  return (
    <div className={`Alert alert-${success ? "success" : "error"}`}>
      {message}
    </div>
  );
}

export default Alert;

