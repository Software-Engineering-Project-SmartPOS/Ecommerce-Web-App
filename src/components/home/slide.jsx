import React from "react";
import "./slide.css";

function Slide(props) {
  return (
    <div className="slide-container">
      <img src={props.thumb} alt="" className="image-container" />
      <div className="text-overlay">
        <h4 className="product-name">{props.product_name}</h4>
        <h4 className="product-price">RS.{props.price}</h4>
      </div>
    </div>
  );
}
export default Slide;
