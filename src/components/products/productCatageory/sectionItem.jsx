import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sectionItem.css";

function SectionItem(props) {
  const [cartCount, setCartCount] = useState(0);
  let dataToSend = { cart: cartCount, itemData: props };

  function CartIncreaseHandler() {
    setCartCount(cartCount + 1);
  }
  console.log(props);
  function CartDecreaseHandler() {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  }
  return (
    <div className="section-item-card" key={props.id} S>
      <Link
        className="sectiom-item-Link"
        to={{
          pathname: `/products/Item/${props.id}/${cartCount}`,
          state: { data: props },
        }}
      >
        <div className="section-item-upper-part">
          <div className="section-item-discount">10%</div>
          <div className="section-item-image">
            <img className="section-item-image" src={props.thumb} />
          </div>
        </div>
      </Link>
      <div className="section-item-detail">
        <h5 className="section-item-title">{props.product_name}</h5>
        <div className="section-item-price">{props.price}</div>

        <div className="add-cart-section">
          <div className="add-cart-button">
            <button className="add-cart" onClick={CartIncreaseHandler}>
              Add to Cart
            </button>
          </div>
          <div className="cart-decrease-button">
            <button className="cart-decrease" onClick={CartDecreaseHandler}>
              -
            </button>
          </div>
          <div className="product-count">{cartCount}</div>
          <div className="cart-increase-button">
            <button className="cart-increase" onClick={CartIncreaseHandler}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionItem;
