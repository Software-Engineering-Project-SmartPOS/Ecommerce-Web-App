import React, { useState } from "react";
import "./adminViewCustomer.css";

function AdminViewCustomer() {
  let userlist = [];
  for (let i = 1; i <= 100; i++) {
    const user = {
      id: i,
      name: `User ${i}`,
      email: `user${i}@example.com`,
      telephone: `987-654-32${i}`,
      address: `${i} Elm St, Town`,
      purchasedItems: Math.floor(Math.random() * 10) + 1, // Random number of purchased items between 1 and 10
      totalAmount: (Math.random() * 500).toFixed(2), // Random total amount between 0 and 500
    };

    userlist.push(user);
  }
  const [users, setUsers] = useState(userlist);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter users based on the search query
  const filteredUsers = users.filter((user) => {
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
              <td>${user.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminViewCustomer;
