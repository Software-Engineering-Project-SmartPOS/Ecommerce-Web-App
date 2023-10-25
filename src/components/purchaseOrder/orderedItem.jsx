import "./orderedItem.css";
import CloseIcon from "../../assets/cartPage/closeIcon.jpg";

function OrderedItem(props) {
  function closeHandler() {
    props.closeButtonHandler(props.data.id);
  }

  return (
    <div className="ordered-item-container" key={props.id}>
      <div className="ordered-item-image">
        <img src={props.data.thumb} />
      </div>
      <div className="ordered-item-details">
        <h3>{props.data.product_name}</h3>
        <h4>{props.data.price}</h4>
      </div>
      <div className="ordered-item-status">
        <h3></h3>
      </div>
      <div className="ordered-date">Ordered date</div>
      <div className="delivered-date">Date</div>
      <div className="remove-cart-item">
        <button onClick={closeHandler}>
          <img src={CloseIcon} />
        </button>
      </div>
    </div>
  );
}

export default OrderedItem;
