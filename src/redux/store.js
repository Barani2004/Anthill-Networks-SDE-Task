import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer/authSlice"; // ✅ Ensure this is the correct import
import marketplaceReducer from "./marketplaceReducer/marketplaceSlice";
import oemReducer from "./oemReducer/oemSlice";

const store = configureStore({
  reducer: {
    auth: authReducer, // ✅ Make sure it's 'auth' and NOT 'authReducer'
    oem: oemReducer,
    marketplace: marketplaceReducer,
  },
});

export default store;
