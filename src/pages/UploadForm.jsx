// import { useState } from "react";
// import { uploadCarData } from "./uploadImage";

// const UploadForm = () => {
//   const [file, setFile] = useState(null);
//   const [carData, setCarData] = useState({
//     title: "",
//     model: "",
//     manufacturer: "",
//     year: "",
//     mileage: "",
//     price: "",
//   });

//   const handleChange = (e) => {
//     setCarData({ ...carData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!file) {
//       alert("Please select an image");
//       return;
//     }

//     try {
//       const result = await uploadCarData(file, carData);
//       if (result) alert("Car added successfully!");
//     } catch (error) {
//       alert("Error uploading car");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
//       <input type="text" name="model" placeholder="Model" onChange={handleChange} required />
//       <input type="text" name="manufacturer" placeholder="Manufacturer" onChange={handleChange} required />
//       <input type="number" name="year" placeholder="Year" onChange={handleChange} required />
//       <input type="number" name="mileage" placeholder="Mileage (Km/L)" onChange={handleChange} required />
//       <input type="number" name="price" placeholder="Price (₹)" onChange={handleChange} required />
//       <input type="file" onChange={handleFileChange} required />
//       <button type="submit">Upload Car</button>
//     </form>
//   );
// };

// export default UploadForm;


import { useState } from "react";
import { uploadImage } from "./uploadImage";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [carData, setCarData] = useState({
    title: "",
    model: "",
    manufacturer: "",
    year: "",
    mileage: "",
    price: "",
    power: "",
    maxSpeed: "",
  });

  const handleChange = (e) => {
    setCarData({ ...carData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select an image");
      return;
    }

    try {
      const imageUrl = await uploadImage(file, carData);
      alert("Car added successfully with Image!");
    } catch (error) {
      console.error("Error uploading:", error);
      alert("Upload failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
      <input type="text" name="model" placeholder="Model" onChange={handleChange} required />
      <input type="text" name="manufacturer" placeholder="Manufacturer" onChange={handleChange} required />
      <input type="number" name="year" placeholder="Year" onChange={handleChange} required />
      <input type="number" name="mileage" placeholder="Mileage (Km/L)" onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price (₹)" onChange={handleChange} required />
      <input type="number" name="power" placeholder="Power (Kw)" onChange={handleChange} required />
      <input type="number" name="maxSpeed" placeholder="Max Speed (KM/h)" onChange={handleChange} required />
      <input type="file" onChange={handleFileChange} required />
      <button type="submit">Upload Car</button>
    </form>
  );
};

export default UploadForm;
