import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Only here!
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react"; // ✅ Only if using Chakra UI
import App from "./App";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter> {/* ✅ Wrap App in BrowserRouter here */}
    <Provider store={store}>
      <ChakraProvider> {/* ✅ If using Chakra UI */}
        <App />
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
);
