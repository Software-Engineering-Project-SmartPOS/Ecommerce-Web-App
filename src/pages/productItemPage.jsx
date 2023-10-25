import React from "react";
import FruitCard from "../components/dataComponent/fruitData";
import ProductItem from "../components/products/productItem/ProductItem";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Header from "../components/header";

function ProductItemPage() {
  const itemlist = [...FruitCard, ...FruitCard, ...FruitCard];
  return (
    <div className="product-page-container">
      <Header />
      <Navbar />
      <ProductItem />
      <Footer />
    </div>
  );
}

export default ProductItemPage;
