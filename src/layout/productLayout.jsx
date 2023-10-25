import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./productLayout.css";

import React from "react";
import SearchBar from "../components/searchBar";

function ProductLayout(props) {
  const backgroundStyle = {
    backgroundImage: `url(${props.background})`,
  };

  return (
    <div className="product-layout-container">
      <div className="product-layout-section" style={backgroundStyle}>
        <Header />
        <Navbar />
        <SearchBar />
      </div>

      <main className="main-section">{props.children}</main>
      <Footer className="products-footer" />
    </div>
  );
}

export default ProductLayout;
