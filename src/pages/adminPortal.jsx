import React, { useEffect, useState } from "react";
import Sidebar from "../components/admin/sidebar";
import AdminDashboard from "../components/admin/adminDashboard";
import "./adminPortal.css";
import CreateItem from "../components/admin/createItem";
import ViewOrders from "../components/admin/viewOrders";
import AdminCreateUser from "../components/admin/adminCreateUser";
import AdminViewCustomer from "../components/admin/adminViewCustomer";
import Home from "./homePage";
import axios from "axios";

const apiAuth = axios.create({
  baseURL: "http://localhost:8080/auth",
});

function AdminPortal() {
  const [selectedButton, setSelectedButton] = useState("Dashboard");
  const [role, setRole] = useState(null); // Initialize role as a state variable

  useEffect(() => {
    // Fetch user's role
    apiAuth
      .get("/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setRole(response.data.role); // Set the role using the useState hook
      })
      .catch((error) => {
        console.error("Error while fetching user data:", error);
        // Handle the error as needed, e.g., redirect to an error page
      });

    const storedButton = localStorage.getItem("selectedButton");
    if (storedButton) {
      setSelectedButton(storedButton);
    }
  }, []);

  const updateSelectedButton = (buttonName) => {
    setSelectedButton(buttonName);
    localStorage.setItem("selectedButton", buttonName);
  };

  let componentToRender;

  if (selectedButton === "Dashboard") {
    componentToRender = <AdminDashboard />;
  } else if (selectedButton === "Create Products") {
    componentToRender = <CreateItem />;
  } else if (selectedButton === "View Orders") {
    componentToRender = <ViewOrders />;
  } else if (selectedButton === "Create Account") {
    componentToRender = <AdminCreateUser />;
  } else if (selectedButton === "View Customer") {
    componentToRender = <AdminViewCustomer />;
  } else if (selectedButton === "Log Out") {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userLogged");
    componentToRender = <Home />;
  }

  if (String(role) === "admin") {
    return (
      <div className="admin-portal">
        <Sidebar
          selectedButton={selectedButton}
          updateSelectedButton={updateSelectedButton}
        />
        {componentToRender}
      </div>
    );
  } else {
    return <div>You are not authorized to access the admin portal.</div>;
  }
}

export default AdminPortal;
