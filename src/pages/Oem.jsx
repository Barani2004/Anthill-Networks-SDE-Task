import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOemFun } from "../redux/oemReducer/action";
import {
  Box,
  Button,
  Heading,
  Image,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../styles/Oem.css"; // ✅ Import the CSS file

const Oem = () => {
  const dispatch = useDispatch();
  
  // ✅ Ensure `oemData` has a default value to prevent crashes
  const { oemData = [], isLoading, isError } = useSelector(
    (store) => store.oemReducer || {}
  );

  useEffect(() => {
    dispatch(getOemFun());
  }, [dispatch]);

  return (
    <>
      <Box className="oem-container">
        <Heading className="oem-heading">OEM Details</Heading>
        <ChakraLink as={Link} to="/getdeal">
          <Box className="oem-back-container">
            <Button className="oem-back-button">Go Back</Button>
          </Box>
        </ChakraLink>
      </Box>

      {isLoading ? (
        <Image
          src="https://i.stack.imgur.com/hzk6C.gif"
          alt="loading"
          className="oem-loading"
        />
      ) : isError ? (
        <Image
          src="https://cdn.dribbble.com/users/774806/screenshots/3823110/something-went-wrong.gif"
          alt="error"
          className="oem-error"
        />
      ) : (
        <Table className="oem-table">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Image</Th>
              <Th>Model</Th>
              <Th>Manufacturer</Th>
              <Th>Year</Th>
              <Th>Mileage (Km/L)</Th>
              <Th>Price (₹)</Th>
              <Th>Power (Kw)</Th>
              <Th>Max Speed (KM/h)</Th>
              <Th>Available Colors</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            {oemData.map((el) => (
              <Tr key={el._id}>
                <Td>{el.title}</Td>
                <Td>
                  <Image src={el.imageURL} alt={el.title} className="oem-image" />
                </Td>
                <Td>{el.model}</Td>
                <Td>{el.manufacturer}</Td>
                <Td>{el.year}</Td>
                <Td>{el.mileage}</Td>
                <Td>{el.originalPrice}</Td>
                <Td>{el.power}</Td>
                <Td>{el.maxSpeed}</Td>
                <Td>
                  <ul className="oem-color-list">
                    {el.availableColors?.map((color, i) => (
                      <li key={i} className="oem-color-dot" style={{ backgroundColor: color }}></li>
                    ))}
                  </ul>
                </Td>
                <Td>{el.description}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </>
  );
};

export default Oem;
