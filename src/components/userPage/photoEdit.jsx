import React, { useEffect, useState } from "react";
import defaultImage from "../../assets/layout/background1.jpg";
import "./photoEdit.css";
import axios from "axios";

const apiImage = axios.create({
  baseURL: import.meta.env.VITE_REST_API_URL + "/image",
});

const ImageUpload = ({ onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const storedUserJSON = localStorage.getItem("user");
  const storedUser = storedUserJSON ? JSON.parse(storedUserJSON) : [];

  console.log(storedUser.fileData.name);

  useEffect(() => {
    const fetchProfilePhoto = async () => {
      try {
        setSelectedImage(
          `http://localhost:8080/image/fileSystem/${storedUser.fileData.id}`
        );
      } catch (error) {
        console.error("Error fetching profile photo:", error);
      }
    };

    fetchProfilePhoto();
  }, []);

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
        {storedUser.firstname}
        {storedUser.lastname}
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
