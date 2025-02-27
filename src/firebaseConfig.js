// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = "https://tpqntzraksicdcgujidy.supabase.co"; 
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwcW50enJha3NpY2RjZ3VqaWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMTI2OTIsImV4cCI6MjA1NTg4ODY5Mn0.H9jaRaiAPQF73mfRMqsd1v_mbfh0XB5acAUS9A6d63Y"; // ✅ Added quotes

// if (!supabaseUrl || !supabaseKey) {
//   console.error('Supabase URL or Key is missing:', { supabaseUrl, supabaseKey });
// }

// export const supabase = createClient(supabaseUrl, supabaseKey);




//FIREBASE






// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCuk1Ut8J9NUuT3S_1y8r-Rt9Obme1ma9A",
//   authDomain: "second-hand-car-76781.firebaseapp.com",
//   projectId: "second-hand-car-76781",
//   storageBucket: "second-hand-car-76781.firebasestorage.app",
//   messagingSenderId: "862322482476",
//   appId: "1:862322482476:web:c6a3099761e3d019366089",
//   measurementId: "G-SCSKPH0X2R"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



// firebaseConfig.js


// Import Firebase dependencies
// Import Firebase dependencies
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, updateDoc } from "firebase/firestore"; // ✅ Import necessary Firestore functions
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuk1Ut8J9NUuT3S_1y8r-Rt9Obme1ma9A",
  authDomain: "second-hand-car-76781.firebaseapp.com",
  projectId: "second-hand-car-76781",
  storageBucket: "second-hand-car-76781.appspot.com",
  messagingSenderId: "862322482476",
  appId: "1:862322482476:web:c6a3099761e3d019366089",
  measurementId: "G-SCSKPH0X2R"
};

// Initialize Firebase App & Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // ✅ Firestore Database
const auth = getAuth(app);

// ✅ Export Firestore Utilities
export { db, collection, addDoc, getDocs, doc, getDoc, updateDoc,auth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut }; // ✅ Export Firestore functions
