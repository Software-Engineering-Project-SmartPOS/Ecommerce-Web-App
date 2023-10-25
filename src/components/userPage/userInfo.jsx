import React, { useState } from "react";
import "./userInfo.css";

const UserInfo = ({ user, onUpdateUser }) => {
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const toggleEditing = () => {
    setEditing(!editing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log("Saving edited user:", editedUser);
    onUpdateUser(editedUser);
    setEditing(false);
  };

  return (
    <div className="user-page-User-details">
      {editing ? (
        <div id="user-page-Edit-section">
          <h2>Edit Profile Details</h2>
          <form>
            <div className="input-box-user-page">
              <input
                type="text"
                id="first-name"
                name="fname"
                value={editedUser.fname}
                onChange={handleInputChange}
                required="required"
              />
              <span>First name</span>
            </div>
            <div className="input-box-user-page">
              <input
                type="text"
                id="last-name"
                name="lname"
                value={editedUser.lname}
                onChange={handleInputChange}
                required="required"
              />
              <span>Last name</span>
            </div>
            <div className="input-box-user-page">
              <input
                type="email"
                id="email"
                name="email"
                value={editedUser.email}
                onChange={handleInputChange}
                required="required"
              />
              <span>Email</span>
            </div>
            <div className="input-box-user-page">
              <input
                type="text"
                id="address"
                name="address"
                value={editedUser.address}
                onChange={handleInputChange}
                required="required"
              />
              <span>Address</span>
            </div>
            <div className="input-box-user-page">
              <input
                type="text"
                id="telephone"
                name="telephone"
                value={editedUser.telephone}
                onChange={handleInputChange}
                required="required"
              />
              <span>Telephone</span>
            </div>

            <div className="select-list-user-page">
              <select
                id="gender"
                name="gender"
                value={editedUser.gender}
                onChange={handleInputChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <span>Gender</span>
            </div>
            <div className="user-info-button">
              <button type="user-info-save-button" onClick={handleSave}>
                Save
              </button>
              <button type="user-info-cancel-button" onClick={toggleEditing}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="user-page-details-section">
          <h2>My Personal Details</h2>
          <p>
            Name: {user.fname} {user.lname}
          </p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
          <p>Telephone: {user.telephone}</p>
          <p>Gender: {user.gender}</p>
          <div className="user-page-details-button">
            <button type="button" onClick={toggleEditing}>
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
