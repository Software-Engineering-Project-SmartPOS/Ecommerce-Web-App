import React from "react";
import FruitCard from "../components/dataComponent/fruitData";
import MainContent from "../components/products/productCatageory/mainContent";
import NavBarProductItem from "../components/products/productItem/navbarProductItem";
import SidebarCatageory from "../components/products/productCatageory/sidebarcatageory";
import { useParams } from "react-router-dom";
import VegetablesCard from "../components/dataComponent/vegetablesData";
import GroceryCard from "../components/dataComponent/groceryData";
import ProductLayout from "../layout/productLayout";

function Products() {
  const Params = useParams();
  let itemList = FruitCard;
  let imageTitle;

  function getList() {
    if (Params.catageory === "Vegetables") {
      imageTitle = "../assets/layout/background2.jpg";
      return VegetablesCard;
    } else if (Params.catageory === "Fruits") {
      imageTitle = "../assets/layout/background7.jpg";
      return FruitCard;
    } else if (Params.catageory === "Groceries") {
      return GroceryCard;
    } else {
      return FruitCard;
    }
  }
  if (Params.key === undefined) {
    itemList = getList();
  } else {
    itemList = getList().filter((item) =>
      item.product_name.toLowerCase().includes(Params.key.toLowerCase())
    );
  }

  console.log(itemList);
  return (
    <ProductLayout
      children={<MainContent CatageoryList={itemList} />}
      background={imageTitle}
    />
  );
}

export default Products;
