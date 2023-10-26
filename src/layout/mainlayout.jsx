import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import "./mainlayout.css";
import Footer from "../components/footer";
import SearchBar from "../components/searchBar";

function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <div className="main-layout-section">
        <div className="header-navbar">
          <Header />
          <Navbar />
        </div>
        <SearchBar />
        <div className="space"></div>
      </div>
      <main>
        {children}
        <Footer className="main-layout-footer" />
      </main>
    </div>
  );
}

export default MainLayout;
