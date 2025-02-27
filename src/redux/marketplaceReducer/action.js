import { db, collection, addDoc, getDocs } from "../../firebaseConfig";
import {
  fetchMarketStart,
  fetchMarketSuccess,
  fetchMarketFailure,
  addNewDeal,
} from "./marketplaceSlice";

// ✅ Fetch Deals from Firestore
export const fetchDeals = () => async (dispatch) => {
  dispatch(fetchMarketStart());
  try {
    const querySnapshot = await getDocs(collection(db, "cars"));
    const cars = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    console.log("Fetched Car Deals:", cars);
    dispatch(fetchMarketSuccess(cars));
  } catch (error) {
    console.error("Error fetching car deals:", error.message);
    dispatch(fetchMarketFailure());
  }
};

export const addDealFun = (dealData) => async (dispatch) => {
  try {
    const response = await fetch("YOUR_BACKEND_API_URL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dealData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Response:", data);

    dispatch({ type: "ADD_DEAL_SUCCESS", payload: data });
    return { payload: data }; // Return response data
  } catch (error) {
    console.error("Error in addDealFun:", error);
    dispatch({ type: "ADD_DEAL_FAILURE" });
    return null;
  }
};


  
  // ✅ Sort by Price
  export const sortByPrice = (order) => (dispatch, getState) => {
    const { marketData } = getState().marketplace;
    const sortedDeals = [...marketData].sort((a, b) =>
      order === "asc" ? a.price - b.price : b.price - a.price
    );
    dispatch(fetchMarketSuccess(sortedDeals));
  };
  
  // ✅ Sort by Mileage
  export const sortByMileage = (order) => (dispatch, getState) => {
    const { marketData } = getState().marketplace;
    const sortedDeals = [...marketData].sort((a, b) =>
      order === "asc" ? a.mileage - b.mileage : b.mileage - a.mileage
    );
    dispatch(fetchMarketSuccess(sortedDeals));
  };
  
  // ✅ Filter by Color
  export const filterByColor = (color) => (dispatch, getState) => {
    const { marketData } = getState().marketplace;
    const filteredDeals = marketData.filter(
      (deal) => deal.color.toLowerCase() === color.toLowerCase()
    );
    dispatch(fetchMarketSuccess(filteredDeals));
  };
  
  // ✅ Search Deals
  export const searchDeals = (query) => (dispatch, getState) => {
    const { marketData } = getState().marketplace;
    const searchResults = marketData.filter((deal) =>
      deal.title.toLowerCase().includes(query.toLowerCase())
    );
    dispatch(fetchMarketSuccess(searchResults));
  };
  // ✅ DELETE A DEAL (Fixing your error)
export const deleteMyDealFun = (id) => (dispatch, getState) => {
    const { marketData } = getState().marketplace;
    const updatedDeals = marketData.filter((deal) => deal._id !== id);
    dispatch(fetchMarketSuccess(updatedDeals));
  };

  // ✅ **EDIT A DEAL** (Fixing your error)
export const editMyDealFun = (id, updatedData) => (dispatch, getState) => {
    const { marketData } = getState().marketplace;
    const updatedDeals = marketData.map((deal) =>
      deal._id === id ? { ...deal, ...updatedData } : deal
    );
    dispatch(fetchMarketSuccess(updatedDeals));
  };
  