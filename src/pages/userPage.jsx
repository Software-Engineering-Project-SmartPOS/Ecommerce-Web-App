import { useState } from "react";
import ImageUpload from "../components/userPage/photoEdit";
import UserInfo from "../components/userPage/userInfo";
import "./userPage.css";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";

function UserPage() {
  const [user, setUser] = useState({
    fname: "John",
    lname: " Doe",
    email: "johndoe@example.com",
    address: "Colombo",
    telephone: "+9472 ",
    gender: "Male",
  });

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <div className="user-page-container">
      <Header className="user-page-header" />
      <Navbar className="user-page-navbar" />
      <div className="user-page-image-container">
        <ImageUpload />
      </div>

      <div className="user-page-details-container">
        <UserInfo user={user} onUpdateUser={updateUser} />
      </div>
      <div className="user-page-footer-container">
        {" "}
        <Footer
          className="user-page-footer"
          style={{ background: "rgb(14, 4, 11)" }}
        />
      </div>
    </div>
  );
}

export default UserPage;
