import MainLayout from "../layout/mainlayout";
import "./home.css";
import ShopByCatageory from "../components/home/shopCatageory";
import AboutUs from "../components/home/aboutUs";

function Home() {
  return (
    <div className="home-page">
      <MainLayout>
        <ShopByCatageory />
        <AboutUs id="about-us-section" />
      </MainLayout>

      {/* <NavBarProductItem />
      <ProductItem></ProductItem>
      <SectionItem title="product" price="250" /> */}
    </div>
  );
}

export default Home;
