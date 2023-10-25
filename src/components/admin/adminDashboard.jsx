import React, { useEffect, useState } from "react";
import "./adminDashboard.css";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const [newCustomers, setNewCustomers] = useState(0);
  const [purchaseOrders, setPurchaseOrders] = useState(0);
  const [mostOrderedProducts, setMostOrderedProducts] = useState([]);
  const [todayTransactions, setTodayTransactions] = useState([]);

  useEffect(() => {
    // Simulate fetching data from your backend API
    // Replace this with actual API calls
    fetchDataFromAPI()
      .then((data) => {
        setNewCustomers(data.newCustomers);
        setPurchaseOrders(data.purchaseOrders);
        setMostOrderedProducts(data.mostOrderedProducts);
        setTodayTransactions(data.todayTransactions);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const fetchDataFromAPI = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          newCustomers: 12,
          purchaseOrders: 35,
          mostOrderedProducts: [
            { product: "Product A", count: 25 },
            { product: "Product B", count: 18 },
            { product: "Product C", count: 12 },
          ],
          todayTransactions: [
            { product: "Product A", count: 7 },
            { product: "Product B", count: 12 },
            { product: "Product C", count: 5 },
          ],
        });
      }, 1000);
    });
  };

  return (
    <div className="admindashoard">
      <h2>Admin Dashboard</h2>
      <div className="user-edit-section">
        <Link to="/user-details-or-edit-section">
          <i className="fas fa-user" style={{ fontSize: "24px" }}></i>
        </Link>
      </div>
      <div className="dashboard-stats">
        <div className="stat-box">
          <h3>
            <i className="fas fa-users"></i> New Customer Registrations
          </h3>
          <p>{newCustomers}</p>
        </div>
        <div className="stat-box">
          <h3>
            <i className="fas fa-shopping-cart"></i> Purchase Orders Today
          </h3>
          <p>{purchaseOrders}</p>
        </div>
      </div>

      <div className="most-ordered-products">
        <h3>Most Ordered Products</h3>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {mostOrderedProducts.map((product, index) => (
              <tr key={index}>
                <td>{product.product}</td>
                <td>{product.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="today-transactions">
        <h3>Today's Transactions</h3>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {todayTransactions.map((product, index) => (
              <tr key={index}>
                <td>{product.product}</td>
                <td>{product.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
