import React, { useState, useEffect } from "react";
import "./viewOrders.css";

function ViewOrders() {
  const [orders, setOrders] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [editRow, setEditRow] = useState(null); // Track the row being edited
  const [editedStatus, setEditedStatus] = useState(""); // Track the edited status

  useEffect(() => {
    // Simulate fetching orders from an API
    fetchOrders()
      .then((data) => {
        setOrders(data);
        setFilteredOrders(data); // Initially, set filtered orders to all orders
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  useEffect(() => {
    // Update the filteredOrders whenever searchText changes
    const filtered = orders.filter((order) => {
      return (
        order.status.toLowerCase().includes(searchText.toLowerCase()) ||
        order.name.toLowerCase().includes(searchText.toLowerCase()) ||
        order.brand.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setFilteredOrders(filtered);
  }, [searchText, orders]);

  const fetchOrders = () => {
    // Simulate an API call to fetch orders (replace with your actual API call)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: "Product 1",
            brand: "Brand A",
            status: "Shipped",
            customerName: "Customer A",
            quantity: 3,
            unitPrice: 25.0,
          },
          {
            id: 2,
            name: "Product 2",
            brand: "Brand B",
            status: "Pending",
            customerName: "Customer B",
            quantity: 2,
            unitPrice: 15.5,
          },
          {
            id: 3,
            name: "Product 3",
            brand: "Brand C",
            status: "Delivered",
            customerName: "Customer C",
            quantity: 1,
            unitPrice: 10.0,
          },
          // Add more orders here
        ]);
      }, 1000); // Simulating a 1-second API call
    });
  };

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handleEditRow = (rowId) => {
    setEditRow(rowId);
  };

  const handleSaveStatus = (order) => {
    // Simulate an API call to update the order's status
    // Replace this with the actual API call to update the status in your system
    const updatedOrders = orders.map((o) =>
      o.id === order.id ? { ...o, status: editedStatus } : o
    );
    setOrders(updatedOrders);
    setEditRow(null); // Reset the edited row
  };

  const handleStatusChange = (event) => {
    setEditedStatus(event.target.value);
  };

  return (
    <div className="admin-order-view">
      <div className="order-list-container">
        <h2 className="order-list-title">Order List</h2>
        <div className="search-bar">
          <label htmlFor="search">Search: </label>
          <input
            type="text"
            id="search"
            className="search-input"
            placeholder="Search by order status, item name, or brand"
            value={searchText}
            onChange={handleSearch}
          />
        </div>
        <table className="order-table">
          <thead>
            <tr>
              <th className="order-header">Order Name</th>
              <th className="order-header">Brand</th>
              <th className="order-header">Status</th>
              <th className="order-header">Customer Name</th>
              <th className="order-header">Quantity</th>
              <th className="order-header">Unit Price</th>
              <th className="order-header">Total Price</th>
              <th className="order-header">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order, index) => (
              <tr key={index} className="order-row">
                <td className="order-data">{order.name}</td>
                <td className="order-data">{order.brand}</td>
                <td className="order-data">
                  {editRow === order.id ? (
                    <select value={editedStatus} onChange={handleStatusChange}>
                      <option value="Shipped">Shipped</option>
                      <option value="Pending">Pending</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  ) : (
                    order.status
                  )}
                </td>
                <td className="order-data">{order.customerName}</td>
                <td className="order-data">{order.quantity}</td>
                <td className="order-data">{order.unitPrice}</td>
                <td className="order-data">
                  {order.unitPrice * order.quantity}
                </td>
                <div className="order-data">
                  {editRow === order.id ? (
                    <button onClick={() => handleSaveStatus(order)}>
                      Save
                    </button>
                  ) : (
                    <button onClick={() => handleEditRow(order.id)}>
                      Edit
                    </button>
                  )}
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewOrders;
