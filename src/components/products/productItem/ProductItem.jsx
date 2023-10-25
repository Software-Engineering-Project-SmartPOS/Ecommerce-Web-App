import { useState } from "react";
import "./ProductItem.css";
import { useParams } from "react-router-dom";
import FruitCard from "../../dataComponent/fruitData";

function ProductItem(props) {
  const Params = useParams();
  let data = FruitCard[Params.itemId - 1];

  const [cartCount, setCartCount] = useState(parseInt(Params.cartCount, 10));

  function CartIncreaseHandler() {
    setCartCount(cartCount + 1);
  }

  function CartDecreaseHandler() {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  }

  return (
    <div className="Card" key={data.id}>
      <div className="product-itemimage-container">
        <img
          className="product-item-image"
          src={data.thumb}
          alt="Responsive Image"
        />
      </div>
      <div className="product-item-detail-container">
        <div className="product-item-title">
          <h3 className="title">{data.product_name}</h3>
        </div>
        <div className="product-item-price">{props.price}</div>
        <div className="product-description">
          <p>{data.description}</p>
        </div>
        <div className="add-cart-section">
          <div className="add-cart-button">
            <button onClick={CartIncreaseHandler}>Add to Cart</button>
          </div>
          <div className="decrease-cart">
            <button onClick={CartDecreaseHandler}>-</button>
          </div>
          <div className="product-count">{cartCount}</div>
          <div className="increase-cart">
            <button onClick={CartIncreaseHandler}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
