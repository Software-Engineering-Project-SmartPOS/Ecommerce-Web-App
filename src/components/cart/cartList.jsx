import { useState } from "react";
import CartItem from "./cartItem";

function CartList(props) {
  const [itemList, setItemList] = useState(props.itemList);

  function removeItemHandler(indexToRemove) {
    const updatedList = itemList.filter((item) => item.id !== indexToRemove);
    setItemList(updatedList);
  }

  const cartItemList = itemList.map((item) => (
    <CartItem
      item={item}
      closeButtonHandler={removeItemHandler}
      itemsAmount={props.totalAmount}
      setItemAmount={props.setTotalAmount}
      key={item.id}
    />
  ));

  // Apply CSS styles for scrolling container
  const scrollContainerStyle = {
    maxHeight: "80vh",
    overflowY: "auto",
  };

  return (
    <div className="cart-item-list-container" style={scrollContainerStyle}>
      {cartItemList}
    </div>
  );
}

export default CartList;
