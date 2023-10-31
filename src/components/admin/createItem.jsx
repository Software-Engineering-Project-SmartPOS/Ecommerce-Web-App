import React, { useState } from "react";
import "./createItem.css";

function CreateItem() {
  const [item, setItem] = useState({
    name: "",
    brand: "",
    price: "",
    discount: "",
    category: "",
    image: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setItem({
      ...item,
      image: imageFile,
    });
  };

  const handleSubmit = async () => {
    console.log(item);

    // You can proceed with the submission logic here.
  };

  return (
    <div className="create-item-container">
      <h2>Create Item</h2>
      <form>
        <div className="create-item-container-input">
          <div className="text-input">
            <div className="form-field">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Name" value={item.name} onChange={handleInputChange} />
            </div>
            <div className="form-field">
              <label htmlFor="brand">Brand:</label>
              <input type="text" id="brand" name="brand" placeholder="Brand" value={item.brand} onChange={handleInputChange} />
            </div>
            <div className="form-field">
              <label htmlFor="price">Price:</label>
              <input type="number" id="price" name="price" placeholder="Price" value={item.price} onChange={handleInputChange} />
            </div>
            <div className="form-field">
              <label htmlFor="discount">Discount:</label>
              <input type="number" id="discount" name="discount" placeholder="Discount" value={item.discount} onChange={handleInputChange} />
            </div>
            <div className="form-field">
              <label htmlFor="category">Category:</label>
              <input type="text" id="category" name="category" placeholder="Category" value={item.category} onChange={handleInputChange} />
            </div>
          </div>
          <div className="image-input">
            <div className="form-field">
              <label htmlFor="image">Image:</label>
              <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} />
              <div className="create-item-image">
                {item.image && <img src={URL.createObjectURL(item.image)} alt="Image Preview" className="image-preview" width="200" height="150" />}
              </div>
            </div>
          </div>
        </div>

        <button type="button" onClick={handleSubmit} className="submit-button">
          Create Item
        </button>
      </form>
    </div>
  );
}

export default CreateItem;
