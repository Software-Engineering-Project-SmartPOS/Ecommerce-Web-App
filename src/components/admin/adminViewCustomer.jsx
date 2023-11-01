import React, { useEffect, useState } from "react";
import "./adminViewCustomer.css";
import axios from "axios";

const apiUser = axios.create({
  baseURL: import.meta.env.VITE_REST_API_URL + "/user",
});

const apiOrder = axios.create({
  baseURL: import.meta.env.VITE_REST_API_URL + "/order",
});

function AdminViewCustomer() {
  const [userList, setUserList] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newCustomerResponse = await apiUser.get("/getAllCustomers", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            "Content-Type": "application/json",
          },
        });
        const newCustomerResponseData = newCustomerResponse.data;

        const tempUserList = {};
        newCustomerResponseData.forEach((user) => {
          const userId = user.id;
          tempUserList[userId] = {
            id: userId,
            name: `${user.firstname} ${user.lastname}`,
            email: user.email,
            telephone: user.telephone,
            address: user.address,
            purchasedItems: 0,
            totalAmount: 0,
          };
        });

        const newAllOrderResponse = await apiOrder.get("/getAllOrders", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            "Content-Type": "application/json",
          },
        });
        const newOrderResponseData = newAllOrderResponse.data;

        newOrderResponseData.forEach((order) => {
          const userId = order.user.id;
          const priceString = order.item.price;
          const priceFloat = parseFloat(priceString.replace("Rs.", "").trim());
          const priceInt = Math.round(priceFloat);

          tempUserList[userId].purchasedItems += order.quantity;
          tempUserList[userId].totalAmount += priceInt * order.quantity;
        });

        setUserList(tempUserList);
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredUsers = Object.values(userList).filter((user) => {
    const normalizedQuery = searchQuery.toLowerCase();
    return (
      user.name.toLowerCase().includes(normalizedQuery) ||
      user.email.toLowerCase().includes(normalizedQuery) ||
      user.address.toLowerCase().includes(normalizedQuery)
    );
  });

  return (
    <div className="user-list">
      <h2>User List</h2>
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="Search by user name, email, or address"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Telephone</th>
            <th>Address</th>
            <th>Purchased Items</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.telephone}</td>
              <td>{user.address}</td>
              <td>{user.purchasedItems}</td>
              <td>RS.{user.totalAmount}.00</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminViewCustomer;
