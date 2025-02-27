import {
    Box,
    Button,
    FormControl,
    FormLabel,
    HStack,
    Heading,
    Image,
    Input,
    useDisclosure,
    useToast,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { useDispatch } from "react-redux";
  import { addDealFun } from "../Redux/marketplaceReducer/action";
  import { Link } from "react-router-dom";
  import OemModal from "./OemModal";
  import logo2 from "../assets/polar.gif";
  import "../styles/AddDeal.css"; // ✅ Import the CSS file
  
  const initialState = {
    title: "",
    manufacturer: "",
    model: "",
    imageURL: "",
    year: "",
    price: "",
    mileage: "",
    color: "",
    accidents: "",
    prevBuyers: "",
    registrationPlace: "",
  };
  
  const AddDeal = () => {
    const { onOpen, onClose, isOpen } = useDisclosure();
    const toast = useToast();
    const dispatch = useDispatch();
    const [dealForm, setDealForm] = useState(initialState);
  
    const handleFormChange = (e) => {
      setDealForm({
        ...dealForm,
        [e.target.name]: e.target.type === "number" ? Number(e.target.value) : e.target.value,
      });
    };
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      try {
        await dispatch(addDealFun(dealForm));
        const msg = localStorage.getItem("marketmsg");
        toast({
          title: msg,
          status: msg === "New Data has been added" ? "success" : "error",
          duration: 2000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: "Error adding deal",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    };
    
    return (
      <Box className="add-deal-container">
        <form onSubmit={handleFormSubmit} className="add-deal-form">
          <HStack className="add-deal-header">
            <Image src={logo2} className="add-deal-logo" />
            <Heading className="add-deal-heading">Add New Deal</Heading>
          </HStack>
          <OemModal />
  
          <HStack className="add-deal-form-sections">
            <Box className="add-deal-section">
              <FormControl className="add-deal-form-control">
                <FormLabel>Title</FormLabel>
                <Input name="title" type="text" value={dealForm.title} onChange={handleFormChange} className="add-deal-input" />
              </FormControl>
              <FormControl className="add-deal-form-control">
                <FormLabel>Manufacturer</FormLabel>
                <Input name="manufacturer" type="text" value={dealForm.manufacturer} onChange={handleFormChange} className="add-deal-input" />
              </FormControl>
              <FormControl className="add-deal-form-control">
                <FormLabel>Model No.</FormLabel>
                <Input name="model" type="text" value={dealForm.model} onChange={handleFormChange} className="add-deal-input" />
              </FormControl>
              <FormControl className="add-deal-form-control">
                <FormLabel>Year</FormLabel>
                <Input name="year" type="number" value={dealForm.year} onChange={handleFormChange} className="add-deal-input" />
              </FormControl>
              <FormControl className="add-deal-form-control">
                <FormLabel>Image URL</FormLabel>
                <Input name="imageURL" type="url" value={dealForm.imageURL} onChange={handleFormChange} className="add-deal-input" />
              </FormControl>
              <FormControl className="add-deal-form-control">
                <FormLabel>Price</FormLabel>
                <Input name="price" type="number" value={dealForm.price} onChange={handleFormChange} className="add-deal-input" />
              </FormControl>
            </Box>
  
            <Box className="add-deal-section">
              <FormControl className="add-deal-form-control">
                <FormLabel>Mileage</FormLabel>
                <Input name="mileage" type="number" value={dealForm.mileage} onChange={handleFormChange} className="add-deal-input" />
              </FormControl>
              <FormControl className="add-deal-form-control">
                <FormLabel>Color</FormLabel>
                <Input name="color" type="text" value={dealForm.color} onChange={handleFormChange} className="add-deal-input" />
              </FormControl>
              <FormControl className="add-deal-form-control">
                <FormLabel>Accidents</FormLabel>
                <Input name="accidents" type="number" value={dealForm.accidents} onChange={handleFormChange} className="add-deal-input" />
              </FormControl>
              <FormControl className="add-deal-form-control">
                <FormLabel>Previous Buyers</FormLabel>
                <Input name="prevBuyers" type="number" value={dealForm.prevBuyers} onChange={handleFormChange} className="add-deal-input" />
              </FormControl>
              <FormControl className="add-deal-form-control">
                <FormLabel>Registration Place</FormLabel>
                <Input name="registrationPlace" type="text" value={dealForm.registrationPlace} onChange={handleFormChange} className="add-deal-input" />
              </FormControl>
              <Button type="submit" className="add-deal-button">
                ADD DEAL
              </Button>
            </Box>
          </HStack>
        </form>
  
        <Link to="/getdeal">
          <Button className="add-deal-back-button">Go Back</Button>
        </Link>
      </Box>
    );
  };
  
  export default AddDeal;
  