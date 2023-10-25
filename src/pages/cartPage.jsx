import CartList from "../components/cart/cartList";
import PaymentSection from "../components/cart/payment";
import FruitCard from "../components/dataComponent/fruitData";
import Footer from "../components/home/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import "./cartPage.css";

function CartPage() {
  const cartFoods = [...FruitCard];
  let total = 0;
  useEffect(() => {
    const cartItem = cartFoods.map((item) => {
      return {
        id: item.id,
        name: item.product_name,
        amount: 1 * item.price,
        thumb: item.thumb,
        count: 1,
      };
    });
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
    return () => {};
  }, []);
  const storedListJSON = localStorage.getItem("cartItem");
  const storedList = storedListJSON ? JSON.parse(storedListJSON) : [];
  for (let i = 0; i < storedList.length; i++) {
    total = total + storedList[i].amount;
  }
  console.log(total);
  const [subTotal, setSubTotal] = useState(total);

  const navbarStyle = {
    color: "white",
  };
  function totalAmount(Amount) {
    setSubTotal(Amount);
  }
  return (
    <div className="cart-page-contennt">
      <div className="cart-page-header-section">
        <Header />
        <Navbar style={navbarStyle} className="cart-page-navbar" />
      </div>

      <div className="cart-page-main-section">
        <div className="cart-item-list">
          <div className="cart-list-header">
            <h4 className="cart-title-header">Product</h4>
            <h4 className="cart-name-header">Name</h4>
            <h4 className="cart-count-header">Number of</h4>
            <h4 className="cart-price-header">Price</h4>
          </div>
          <div>
            
            <CartList
              itemList={cartFoods}
              setTotalAmount={totalAmount}
              totalAmount={subTotal}
            />
          </div>
        </div>
        <div className="payment-section">
          <PaymentSection totalAmount={subTotal} />
        </div>
      </div>

      <div className="cart-page-footer-section">
        <Footer />
      </div>
    </div>
  );
}

export default CartPage;
