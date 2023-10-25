import "./payment.css";

function PaymentSection(props) {
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
        <form>
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
              <h5 id="delivery-charges-value">value</h5>
            </div>
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default PaymentSection;
