import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PurchaseOrderContent from "../components/purchaseOrder/purchaseOrderContent";
import "./purchaseOrderPage.css";

function PurchaseOrderPage() {
  return (
    <div className="purchaseOrder-page-container">
      <Header />
      <Navbar />
      <PurchaseOrderContent />
    </div>
  );
}

export default PurchaseOrderPage;
