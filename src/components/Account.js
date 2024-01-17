import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "../styles/Account.css";

const Account = ({ userInfo }) => {
  console.log(userInfo)
  const [profilePicUrl, setProfilePicUrl] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setProfilePicUrl("");
    }
  };

  return (
    <div className="account-info">
      {userInfo && (
        <div className="user-info">
          <div className="pfp-section">
            <div className="pf-pic">
              <img
              className="pf-pic-img"
                alt="Profile"
                src={profilePicUrl || "/pfp.png"}
              />
            </div>
            <input
              onChange={handleFileChange}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              id="profilePicInput"
            />
            <label htmlFor="profilePicInput" className="edit-icon">
              <FontAwesomeIcon icon={faPen} />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
