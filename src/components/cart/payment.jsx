import "./payment.css";
import axios from "axios";

console.log(import.meta.env.VITE_REST_API_URL);
const apiOrder = axios.create({
  baseURL: import.meta.env.VITE_REST_API_URL + "/order",
});

function PaymentSection(props) {
  const paymentHandle = async (e) => {
    e.preventDefault();

    const orderBodies = [];

    props.cartList.map((item) => {
      const orderToDelete = {
        id: item.id,
        quantity: item.quantity,
        item: item.item,
        status: item.status,
      };

      orderBodies.push(orderToDelete);
    });

    try {
      const paymentOrderResponse = await apiOrder.put(
        "/changeAllStatus",
        orderBodies,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log("Error happenig changing Order data", error);
    }
  };

  return (
    <div className="payment-section-container">
      <div className="card-type">
        <label htmlFor="paymentOption">Payment Option</label>
        <select id="PaymentOption" name="PaymentOption">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
      <div className="card-detail-form">
        <form onSubmit={paymentHandle}>
          <input
            type="text"
            id="name"
            name="cardHoulderName"
            placeholder="Cardhoulder's Name"
          />

          <input
            type="number"
            id="number"
            name="cardNumber"
            placeholder="Card Number"
          />
          <div className="amount-section">
            <div id="subtotal" className="total-amount">
              <h5>Sub Total</h5>
              <h5 id="subtotal-value">{props.totalAmount}</h5>
            </div>
            <div id="delivery-charges" className="delivery-charges">
              <h5>Delivery Charges</h5>
              <h5 id="delivery-charges-value"></h5>
            </div>
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default PaymentSection;
