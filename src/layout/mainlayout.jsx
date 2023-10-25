import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import "./mainlayout.css";
import Footer from "../components/footer";
import SearchBar from "../components/searchBar";

function MainLayout({ children }) {
  // const backgroundImages = [
  //   'url("../assets/layout/background1.jpg")',
  //   'url("../assets/layout/background2.jpg")',
  //   'url("../assets/layout/background3.jpg")',
  //   'url("../assets/layout/background6.jpg")',
  //   'url("../assets/layout/background7.jpg")',
  // ];
  // const [currentIndex, setCurrentIndex] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 5000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  // useEffect(() => {
  //   // Set the background image style
  //   document.querySelector(".main-layout-section").style.backgroundImage =
  //     backgroundImages[currentIndex];
  // }, [currentIndex]);
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
