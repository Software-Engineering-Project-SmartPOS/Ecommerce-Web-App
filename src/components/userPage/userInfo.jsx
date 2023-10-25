import React, { useState } from "react";
import "./userInfo.css";
const apiUser = axios.create({
  baseURL: import.meta.env.VITE_REST_API_URL + "/user",
});

const UserInfo = ({ onUpdateUser }) => {
  let localUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState({
    firstname: localUser.firstname,
    lastname: localUser.lastname,
    email: localUser.email,
    address: localUser.address,
    telephone: localUser.telephone,
    gender: "Male",
  });

  const [editing, setEditing] = useState(false);

  const toggleEditing = () => {
    setEditing(!editing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSave = async () => {
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
                value={user.firstname}
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
                value={user.lastname}
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
                value={user.email}
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
                value={user.address}
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
                value={user.telephone}
                onChange={handleInputChange}
                required="required"
              />
              <span>Telephone</span>
            </div>

            <div className="select-list-user-page">
              <select
                id="gender"
                name="gender"
                value={user.gender}
                onChange={handleInputChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <span>Gender</span>
            </div>
            <div className="user-info-button">
              <button type="submit" onClick={handleSave}>
                Save
              </button>
              <button onClick={toggleEditing}>Cancel</button>
            </div>
          </form>
        </div>
      ) : (
        <div className="user-page-details-section">
          <h2>My Personal Details</h2>
          <p>
            Name: {user.firstname} {user.lastname}
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
