import SectionItem from "./sectionItem";
import "./mainContent.css";

function MainContent(props) {
  const SectionItems = props.CatageoryList.map((sectionItem) => (
    <SectionItem
      id={sectionItem.id}
      thumb={sectionItem.thumb}
      product_name={sectionItem.product_name}
      price={sectionItem.price}
    />
  ));
  return <div className="section-item-container">{SectionItems}</div>;
}

export default MainContent;
