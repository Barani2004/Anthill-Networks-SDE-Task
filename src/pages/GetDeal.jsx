import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMyDealFun, fetchDeals } from "../redux/marketplaceReducer/action";
import {
  Box,
  Button,
  HStack,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
  DarkMode,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import logo from "../assets/sammy.gif";
import "../styles/GetDeal.css"; // ✅ Import the CSS file

const GetDeal = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const { marketData, isLoading, isError } = useSelector(
    (store) => store.marketplace
  );

  const handleDelete = (id) => {
    dispatch(deleteMyDealFun(id));
    toast({
      title: "Data Deleted Successfully",
      description: "",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  useEffect(() => {
    dispatch(fetchDeals());
  }, []);

  return (
    <DarkMode>
      <Box className="get-deal-container">
        {/* Header Section */}
        <HStack className="get-deal-header">
          <Box width="50%">
            <Image src={logo} className="get-deal-logo" />
          </Box>
          <Link to="/adddeal">
            <Button colorScheme="yellow" size="md">
              Add New Deal
            </Button>
          </Link>
          <Link to="/oem">
            <Button colorScheme="yellow" size="md">
              OEM Details
            </Button>
          </Link>
        </HStack>

        {/* Table Section */}
        <TableContainer className="get-deal-table-container">
          <Table variant="simple" size="sm" className="get-deal-table">
            <Thead>
              <Tr>
                <Th>S.No.</Th>
                <Th>Product Image</Th>
                <Th>Product Details</Th>
                <Th>Edit Product Details</Th>
                <Th>Remove Product</Th>
              </Tr>
            </Thead>
            <Tbody>
              {marketData?.map((el, i) => (
                <Tr key={el._id}>
                  <Td>{i + 1}.</Td>
                  <Td>
                    <Image
                      src={el.imageURL}
                      alt={el.title}
                      className="get-deal-product-image"
                    />
                  </Td>
                  <Td>
                    <Text>Manufacturer: {el.manufacturer}</Text>
                    <Text>Title: {el.title}</Text>
                    <Text>Model: {el.model}</Text>
                  </Td>
                  <Td>
                    <Link to={`/editDeal/${el._id}`}>
                      <Button className="get-deal-button get-deal-edit">
                        <EditIcon />
                      </Button>
                    </Link>
                  </Td>
                  <Td>
                    <Button
                      className="get-deal-button get-deal-delete"
                      onClick={() => handleDelete(el._id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </DarkMode>
  );
};

export default GetDeal;
