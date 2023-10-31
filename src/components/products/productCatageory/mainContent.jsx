import SectionItem from "./sectionItem";
import "./mainContent.css";

function MainContent(props) {
  const SectionItems = props.CatageoryList.map((sectionItem) => (
    <div>
      {" "}
      <SectionItem
        id={sectionItem.id}
        thumb={sectionItem.fileData}
        product_name={sectionItem.name}
        price={sectionItem.price}
        discount={sectionItem.discount}
        user={sectionItem.savedByUsers}
      />
    </div>
  ));
  return <div className="section-item-container">{SectionItems}</div>;
}

export default MainContent;
