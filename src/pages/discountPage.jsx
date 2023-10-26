import React, { useEffect, useState } from "react";
// import FruitCard from "../components/dataComponent/fruitData";
import MainContent from "../components/products/productCatageory/mainContent";
import { useParams } from "react-router-dom";
import ProductLayout from "../layout/productLayout";
import axios from "axios";
import "./discount.css";

const apiItem = axios.create({
  baseURL: import.meta.env.VITE_REST_API_URL + "item",
});

function Discounts() {
  let itemList;

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${import.meta.env.VITE_REST_API_URL}/item/getAllItems`;
        const responseProductList = await apiItem.get(apiUrl);
        setProductList(responseProductList.data);

        const filterItemsWithDiscount = (productList) => {
          console.log(item.discount);
          return productList.filter((item) => {
            item.discount.trim() !== "";
          });
        };

        itemList = filterItemsWithDiscount(productList);
        console.log(productList);
      } catch (error) {
        console.log("Error happening in data fetching", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="discount-product-layout-container">
      <div className="discount-product-layout-section">
        <Header />
        <Navbar />
      </div>

      <main className="main-section">
        <MainContent CatageoryList={itemList} />
      </main>
      <Footer className="discount-products-footer" />
    </div>
  );
}

export default Discounts;
