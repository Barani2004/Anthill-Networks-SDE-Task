// import { useEffect, useState } from "react";
// import { supabase } from "../supabaseClient"; // ✅ Move one folder up


// const CarList = () => {
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     const fetchCars = async () => {
//       const { data, error } = await supabase.from("cars").select("*");

//       if (error) {
//         console.error("Error fetching cars:", error);
//       } else {
//         setCars(data);
//       }
//     };

//     fetchCars();
//   }, []);

//   return (
//     <div className="car-container">
//       {cars.map((car) => (
//         <div key={car.id} className="car-card">
//           <img src={car.image_url} alt={car.title} className="car-image" />
//           <h3>{car.title}</h3>
//           <p>Model: {car.model}</p>
//           <p>Manufacturer: {car.manufacturer}</p>
//           <p>Year: {car.year}</p>
//           <p>Mileage: {car.mileage} Km/L</p>
//           <p>Price: ₹{car.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CarList;

// src/components/CarList.jsx
// import React from 'react';
// import { CARS } from '../data/car';
// import "../styles/CarList.css";

// const CarList = () => {
//   return (
//     <div>
//       <h1>Available Cars</h1>
//       <ul>
//         {CARS.map((car) => (
//           <li key={car._id}>
//             <h2>{car.title}</h2>
//             <p>Model: {car.model}</p>
//             <p>Manufacturer: {car.manufacturer}</p>
//             <p>Year: {car.year}</p>
//             <p>Mileage: {car.mileage} km/l</p>
//             <p>Price: ${car.price}</p>
//             <p>Color: {car.color}</p>
//             <img src={car.imageURL} alt={car.title} width="200" />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CarList;


import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const querySnapshot = await getDocs(collection(db, "cars"));
      const carList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCars(carList);
    };

    fetchCars();
  }, []);

  return (
    <div className="car-container">
      {cars.map((car) => (
        <div key={car.id} className="car-card">
          <img src={car.imageUrl} alt={car.title} className="car-image" />
          <h3>Title: {car.title}</h3>
          <p>Model: {car.model}</p>
          <p>Manufacturer: {car.manufacturer}</p>
          <p>Year: {car.year}</p>
          <p>Mileage: {car.mileage} Km/L</p>
          <p>Price: ₹ {car.price}</p>
          <p>Power: {car.power} kW</p>
          <p>Max Speed: {car.maxSpeed} KM/h</p>
        </div>
      ))}
    </div>
  );
};

export default CarList;
