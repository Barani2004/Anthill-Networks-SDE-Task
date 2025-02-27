import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { editMyDealFun, deleteMyDealFun } from "../Redux/marketplaceReducer/action";
import logo3 from "../assets/arrow.png";
import "../styles/EditDeal.css"; // ✅ Import the CSS file

const EditDeal = () => {
  const toast = useToast();
  const { editID } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const { myData } = useSelector((store) => store.marketplaceReducer);

  const handleFormChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.type === "number" ? Number(e.target.value) : e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    delete data._id;
    delete data.dealerID;
    dispatch(editMyDealFun(editID, data)).then(() => {
      toast({
        title: "Deal updated successfully.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    });
  };

  const handleDelete = () => {
    dispatch(deleteMyDealFun(editID)).then(() => {
      toast({
        title: "Deal deleted successfully.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      navigate("/getdeal"); // Redirect after deletion
    });
  };

  useEffect(() => {
    const newData = myData.find((el) => el._id === editID);
    setData(newData || {});
  }, [editID, myData]);

  return (
    <Box className="edit-deal-container">
      <form onSubmit={handleFormSubmit} className="edit-deal-form">
        <HStack className="edit-deal-header">
          <Image src={logo3} className="edit-deal-logo" />
          <Heading className="edit-deal-heading">Edit Your Deal</Heading>
        </HStack>

        <HStack className="edit-deal-form-sections">
          <Box className="edit-deal-section">
            <FormControl className="edit-deal-form-control">
              <FormLabel>Title</FormLabel>
              <Input name="title" type="text" value={data?.title || ""} onChange={handleFormChange} className="edit-deal-input" />
            </FormControl>
            <FormControl className="edit-deal-form-control">
              <FormLabel>Manufacturer</FormLabel>
              <Input name="manufacturer" type="text" value={data?.manufacturer || ""} onChange={handleFormChange} className="edit-deal-input" />
            </FormControl>
            <FormControl className="edit-deal-form-control">
              <FormLabel>Model No.</FormLabel>
              <Input name="model" type="text" value={data?.model || ""} onChange={handleFormChange} className="edit-deal-input" />
            </FormControl>
            <FormControl className="edit-deal-form-control">
              <FormLabel>Year</FormLabel>
              <Input name="year" type="number" value={data?.year || ""} onChange={handleFormChange} className="edit-deal-input" />
            </FormControl>
            <FormControl className="edit-deal-form-control">
              <FormLabel>Image URL</FormLabel>
              <Input name="imageURL" type="url" value={data?.imageURL || ""} onChange={handleFormChange} className="edit-deal-input" />
            </FormControl>
            <FormControl className="edit-deal-form-control">
              <FormLabel>Price</FormLabel>
              <Input name="price" type="number" value={data?.price || ""} onChange={handleFormChange} className="edit-deal-input" />
            </FormControl>
          </Box>

          <Box className="edit-deal-section">
            <FormControl className="edit-deal-form-control">
              <FormLabel>Mileage</FormLabel>
              <Input name="mileage" type="number" value={data?.mileage || ""} onChange={handleFormChange} className="edit-deal-input" />
            </FormControl>
            <FormControl className="edit-deal-form-control">
              <FormLabel>Color</FormLabel>
              <Input name="color" type="text" value={data?.color || ""} onChange={handleFormChange} className="edit-deal-input" />
            </FormControl>
            <FormControl className="edit-deal-form-control">
              <FormLabel>Accidents</FormLabel>
              <Input name="accidents" type="number" value={data?.accidents || ""} onChange={handleFormChange} className="edit-deal-input" />
            </FormControl>
            <FormControl className="edit-deal-form-control">
              <FormLabel>Previous Buyers</FormLabel>
              <Input name="prevBuyers" type="number" value={data?.prevBuyers || ""} onChange={handleFormChange} className="edit-deal-input" />
            </FormControl>
            <FormControl className="edit-deal-form-control">
              <FormLabel>Registration Place</FormLabel>
              <Input name="registrationPlace" type="text" value={data?.registrationPlace || ""} onChange={handleFormChange} className="edit-deal-input" />
            </FormControl>
            
            {/* Buttons Section */}
            <HStack spacing={4}>
              <Button type="submit" className="edit-deal-button">
                EDIT DEAL
              </Button>
              <Button onClick={handleDelete} className="delete-deal-button" colorScheme="red">
                DELETE DEAL
              </Button>
            </HStack>
          </Box>
        </HStack>
      </form>

      <Link to="/getdeal">
        <Button className="edit-deal-back-button">Go Back</Button>
      </Link>
    </Box>
  );
};

export default EditDeal;
