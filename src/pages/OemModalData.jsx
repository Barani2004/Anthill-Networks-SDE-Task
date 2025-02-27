import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOemFun } from "../Redux/oemReducer/action";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import "../styles/OemModalData.css"; // ✅ Import the CSS file

const OemModalData = () => {
  const dispatch = useDispatch();
  const { oemData, isLoading, isError } = useSelector(
    (store) => store.oemReducer
  );

  useEffect(() => {
    dispatch(getOemFun());
  }, []);

  return (
    <Box className="oem-modal-container">
      {oemData &&
        oemData.map((el) => (
          <Box key={el._id} className="oem-modal-card">
            <HStack>
              <Image src={el.imageURL} alt={el.title} className="oem-modal-image" />
              <Box className="oem-modal-content">
                <Text className="oem-modal-text">Title: {el.title}</Text>
                <Text className="oem-modal-text">Model: {el.model}</Text>
                <Text className="oem-modal-text">Manufacturer: {el.manufacturer}</Text>
                <Text className="oem-modal-text">Year: {el.year}</Text>
                <Text className="oem-modal-text">Mileage: {el.mileage} Km/L</Text>
                <Text className="oem-modal-text">Price: ₹ {el.originalPrice} /-</Text>
                <Text className="oem-modal-text">Power: {el.power} Kw</Text>
                <Text className="oem-modal-text">Max Speed: {el.maxSpeed} KM/h</Text>
                <Text className="oem-modal-text">
                  Available Colors:
                  <ul className="oem-color-list">
                    {el.availableColors?.map((color, i) => (
                      <li key={i} className="oem-color-dot" style={{ backgroundColor: color }}></li>
                    ))}
                  </ul>
                </Text>
                <Text className="oem-modal-text">Description: {el.description}</Text>
              </Box>
            </HStack>
          </Box>
        ))}
    </Box>
  );
};

export default OemModalData;
