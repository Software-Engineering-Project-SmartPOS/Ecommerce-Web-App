import React, { useState } from "react";
import defaultImage from "../../assets/layout/background1.jpg";
import "./photoEdit.css";

const ImageUpload = ({ onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState(defaultImage);
  const storedUserJSON = localStorage.getItem("user");
  const storedUser = storedUserJSON ? JSON.parse(storedUserJSON) : [];
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
      onImageSelect(file);
    }
  };

  const handleEditClick = () => {
    document.getElementById("imageInput").click();
  };

  const handleUploadDefaultImage = () => {
    // You can implement the logic to upload a new default image here
    // For now, let's just reset the selectedImage to null as a placeholder
    setSelectedImage(null);
  };

  return (
    <div className="user-image-container">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        id="imageInput"
      />
      <div className="image-upload-container">
        <div className="rounded-image">
          <img src={selectedImage} alt="Selected" className="rounded-image" />
        </div>
      </div>
      <div className="edit-icon" onClick={handleEditClick}>
        <i className="fa fa-pencil" aria-hidden="true">
          Edit
        </i>
      </div>
      <div className="user-name">
        {storedUser.fname}
        {storedUser.lname}
      </div>
      <button
        className="user-page-remove-image"
        onClick={handleUploadDefaultImage}
      >
        Remove Image
      </button>
    </div>
  );
};

export default ImageUpload;
