// export const getOemFun = () => async (dispatch) => {
//   dispatch(fetchOemStart());
//   try {
//     const response = await fetch("https://tpqntzraksicdcgujidy.supabase.co"); // ✅ Replace with correct API URL
//     const data = await response.json();
//     console.log("Fetched OEM Data:", data); // ✅ Debugging: Check if data is fetched
//     dispatch(fetchOemSuccess(data));
//   } catch (error) {
//     console.error("Error fetching OEM data:", error);
//     dispatch(fetchOemFailure());
//   }
// };

// src/redux/oem/action.js



// src/redux/oem/action.js


import { fetchOemStart, fetchOemSuccess, fetchOemFailure } from "./oemSlice";
import { db } from "../../firebaseConfig"; // ✅ Import Firestore database
import { collection, getDocs } from "firebase/firestore"; // ✅ Firestore functions

// ✅ Fetch OEM Data from Firestore
export const getOemFun = () => async (dispatch) => {
  dispatch(fetchOemStart());
  try {
    // 🔹 Fetch all documents from the "cars" collection in Firestore
    const querySnapshot = await getDocs(collection(db, "cars"));
    const cars = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    console.log("Fetched OEM Data:", cars);
    dispatch(fetchOemSuccess(cars)); // ✅ Store in Redux
  } catch (error) {
    console.error("Error fetching OEM data:", error.message);
    dispatch(fetchOemFailure());
  }
};
