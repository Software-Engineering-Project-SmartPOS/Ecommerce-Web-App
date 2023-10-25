import { useState } from "react";
import OrderList from "./oderList";
import CurrentOrderCard from "../dataComponent/currentOrderData";
import OrderedCard from "../dataComponent/orderedData";
import "./purchaseOrderContent.css";

function PurchaseOrderContent() {
  const [showContent, setShowContent] = useState(true);

  function handleCurrentTab() {
    setShowContent(true);
  }

  function handleHistoryTab() {
    setShowContent(false);
  }
  console.log(showContent);
  return (
    <div className="main-content-container">
      <div className="tab-links-container">
        <button className="tab-links" onClick={handleCurrentTab}>
          Current Orders
        </button>
        <button className="tablinks" onClick={handleHistoryTab}>
          Order History
        </button>
      </div>
      <div className="tab-content">
        {showContent ? (
          <OrderList ListItems={CurrentOrderCard} />
        ) : (
          <OrderList ListItems={OrderedCard} />
        )}
      </div>
    </div>
  );
}

export default PurchaseOrderContent;
