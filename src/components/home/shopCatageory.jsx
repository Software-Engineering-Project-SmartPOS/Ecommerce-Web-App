import CarouselSection from "./carouselSection";
import FruitCard from "../dataComponent/fruitData";
import VegetableCard from "../dataComponent/vegetablesData";
import GroceryCard from "../dataComponent/groceryData";
import "./shopCatageory.css";

function ShopByCatageory() {
  return (
    <div className="shop-by-catageory-container">
      <h3 className="shop-by-catageory-title">Shopping By Catageory</h3>
      <CarouselSection title="Fruits" data={FruitCard} />
      <CarouselSection title="Grocery" data={GroceryCard} />
      <CarouselSection title="Vegetables" data={VegetableCard} />
    </div>
  );
}

export default ShopByCatageory;
