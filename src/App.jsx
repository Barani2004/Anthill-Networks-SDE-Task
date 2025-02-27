import React from "react";
import { Routes, Route } from "react-router-dom"; // No BrowserRouter here
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import GetDeal from "./pages/GetDeal";
import AddDeal from "./pages/AddDeal";
import EditDeal from "./pages/EditDeal";
import Oem from "./pages/Oem";
import SingleDeal from "./pages/SingleDeal";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/getdeal" element={<GetDeal />} />
        <Route path="/adddeal" element={<AddDeal />} />
        <Route path="/deal/:id" element={<SingleDeal />} />
        <Route path="/editdeal/:id" element={<EditDeal />} />
        <Route path="/oem" element={<Oem />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
