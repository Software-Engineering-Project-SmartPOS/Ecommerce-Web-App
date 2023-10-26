import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./sectionItem.css";

function SectionItem(props) {
  const UserStatus = JSON.parse(localStorage.getItem("userLogged"));
  const [selectedImage, setSelectedImage] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  let dataToSend = { cart: cartCount, itemData: props };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/image/productFileSystem/${props.thumb.id}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);

        setSelectedImage(objectUrl);
      } catch (error) {
        console.error("Error fetching image:", error);
        setSelectedImage(defaultImage);
      }
    };

    fetchImage();
  }, [props.thumb.id]);

  function CartIncreaseHandler() {
    setCartCount(cartCount + 1);
  }

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
          <div className="section-item-discount">{props.discount}</div>
          <div className="section-item-image">
            <img className="section-item-image" src={selectedImage} />
          </div>
        </div>
      </Link>
      <div className="section-item-detail">
        <h5 className="section-item-title">{props.product_name}</h5>
        <div className="section-item-price">{props.price}</div>
        {UserStatus ? (
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
        ) : (
          <div className="inactive-section">
            <Link to="/LoginPage">
              <button className="buy-now">Buy Now</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default SectionItem;
