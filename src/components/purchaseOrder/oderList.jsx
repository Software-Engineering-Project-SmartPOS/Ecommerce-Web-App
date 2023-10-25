import OrderedItem from "./orderedItem";
import { useState } from "react";
import "./orderList.css";

function OrderList(props) {
  const [oderListItem, setOrderListItem] = useState(props.ListItems);
  function removeItemHandler(indexToRemove) {
    const updatedList = oderListItem.filter(
      (item) => item.id !== indexToRemove
    );
    setOrderListItem(updatedList);
  }
  const ListItem = oderListItem.map((item) => (
    <div className="order-list-container" key={item.id}>
      <OrderedItem data={item} closeButtonHandler={removeItemHandler} />
    </div>
  ));
  return <div className="user-order-list">{ListItem}</div>;
}

export default OrderList;
