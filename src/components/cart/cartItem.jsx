import "./cartItem.css";
import React, { useState } from "react";
import CloseIcon from "../../assets/cartPage/closeIcon.jpg";

function CartItem(props) {
  const storedListJSON = localStorage.getItem("cartItem");
  const storedList = storedListJSON ? JSON.parse(storedListJSON) : [];
  const foundObject = storedList.find(
    (item) => item.id === props.item.id && item.name === props.item.product_name
  );
  // try {
  //   const storedList = JSON.parse(storedListJSON);
  // } catch (error) {
  //   console.error("Error parsing JSON:", error);
  // }
  const [cartCount, setCartCount] = useState(foundObject.count);

  function closeHandler() {
    props.closeButtonHandler(props.item.id);
  }

  function CartIncreaseHandler() {
    setCartCount(cartCount + 1);

    if (foundObject) {
      foundObject.count = cartCount + 1;
      foundObject.amount = (cartCount + 1) * props.item.price;

      props.setItemAmount(props.itemsAmount + parseInt(props.item.price, 10));
      localStorage.setItem("cartItem", JSON.stringify(storedList));
    } else {
      storedList.push({
        id: props.item.id,
        name: props.product_name,
        amount: cartCount * props.item.price,
        thumb: props.item.thumb,
        count: cartCount,
      });

      localStorage.setItem("cartItem", JSON.stringify(storedList));
    }
  }

  function CartDecreaseHandler() {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
      localStorage.setItem("CartItem", {
        name: props.item.product_name,
        amount: cartCount * props.item.price,
      });
    }
  }

  return (
    <div className="cart-item-container" key={props.item.id}>
      <div className="cart-item-image">
        <img src={props.item.thumb} />
      </div>
      <div className="cart-item-details">{props.item.product_name}</div>
      <div className="item-quantity">
        <button className="decrease-cart-button" onClick={CartDecreaseHandler}>
          -
        </button>
        <div className="cart-count">{cartCount}</div>
        <button className="increase-cart-button" onClick={CartIncreaseHandler}>
          +
        </button>
      </div>
      <div className="items-total-price">
        RS.{cartCount * props.item.price}.00
      </div>
      <div className="remove-cart-item">
        <button onClick={closeHandler}>
          <img src={CloseIcon} />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
