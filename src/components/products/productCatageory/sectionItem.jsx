import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./sectionItem.css";
import axios from "axios";

const apiOrder = axios.create({
  baseURL: import.meta.env.VITE_REST_API_URL + "/order",
});

const apiItem = axios.create({
  baseURL: import.meta.env.VITE_REST_API_URL + "/item",
});

function SectionItem(props) {
  const UserStatus = JSON.parse(localStorage.getItem("userLogged"));
  const [selectedImage, setSelectedImage] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  let dataToSend = { cart: cartCount, itemData: props };

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    for (let i = 0; i < props.user.length; i++) {
      let localUser = JSON.parse(localStorage.getItem("user"));
      if (props.user[i].id == localUser.id) {
        setIsFavorite(true);
      }
    }

    const fetchImage = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_REST_API_URL +
            `/image/productFileSystem/${props.thumb.id}`
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

  const AddCartHandler = async (product) => {
    let order = {
      quantity: cartCount,
      item: product,
      status: "Ordered",
    };
    if (cartCount >= 1) {
      try {
        const orderResponse = await apiOrder.post("/createOrder", order, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            "Content-Type": "application/json",
          },
        });
        setCartCount(0);
        console.log(orderResponse);

        console.log(cartCount);
      } catch (error) {
        console.log("Error When Creating Order", error);
      }
    } else {
      console.log("You have to select at least one item");
    }
  };

  function CartIncreaseHandler() {
    setCartCount(cartCount + 1);
  }

  function CartDecreaseHandler() {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  }

  const handleToggleFavorite = async (e) => {
    const itemBody = {
      id: props.id,
      name: props.product_name,
      price: props.price,
      discount: props.discount,
    };

    if (isFavorite) {
      try {
        const responseCreateItem = await apiItem.put(
          "/deleteSavedItem",
          itemBody,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (responseCreateItem.status === 200) {
          console.log(responseCreateItem);
        } else {
          console.log("deleting Saved Item failed");
        }
      } catch (error) {
        console.error("Error deleting Saved Item:", error);
      }
      setIsFavorite(false);
    } else {
      try {
        const responseCreateItem = await apiItem.put(
          "/createSavedItem",
          itemBody,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (responseCreateItem.status === 200) {
          console.log(responseCreateItem);
        } else {
          console.log("Creating Saved Item failed");
        }
      } catch (error) {
        console.error("Error Creating Saved Item:", error);
      }

      setIsFavorite(true);
    }
  };

  return (
    <div className="section-item-card" key={props.id}>
      <div className="favorite-button">
        <i
          className={`fa fa-heart ${isFavorite ? "is-favorite" : ""}`}
          onClick={handleToggleFavorite}
        ></i>
      </div>
      <Link
        className="section-item-Link" // Fixed typo here, should be "section-item-Link"
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
              <button
                className="add-cart"
                onClick={() => AddCartHandler(props)}
              >
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
