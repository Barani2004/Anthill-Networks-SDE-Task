// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { NavLink, useParams } from "react-router-dom";
// import {
//   Box,
//   Button,
//   Center,
//   Container,
//   Flex,
//   Heading,
//   Image,
//   SimpleGrid,
//   Stack,
//   Text,
//   useColorModeValue,
// } from "@chakra-ui/react";

// const SingleDeal = () => {
//   const { id } = useParams();
//   const [data, setData] = useState();

//   const { marketData } = useSelector((store) => store.marketplaceReducer);

//   const color1 = useColorModeValue("brand.light", "brand.dark");
//   const color2 = useColorModeValue("gray.900", "white");
//   const color3 = useColorModeValue("white", "gray.900");

//   useEffect(() => {
//     let data = marketData.filter((el) => {
//       return el._id == id;
//     });
//     setData(data[0]);
//   }, [id, marketData]);

//   return (
//     <Container maxW={"6xl"}>
//       <SimpleGrid
//         columns={{ base: 1, lg: 2 }}
//         spacing={{ base: 8, md: 10 }}
//         py={{ base: 20, md: 24 }}


//       >
//         <Flex>
//           <Image
//             rounded={"md"}
//             borderRadius="200px"
//             alt={"product image"}
//             src={data?.imageURL}
//             align={"center"}
//             w={"100%"}
//             h={{ base: "100%", sm: "400px", lg: "450px" }}
//           />
//         </Flex>
//         <Stack spacing={{ base: 6, md: 10 }} bg="pink.500" borderRadius="30px" p="30px">
//           <Box as={"header"}>
//           <Heading
//               lineHeight={1.1}
//               fontWeight={500}
//               fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
//               color={color1}
//             >
//               {data?.manufacturer}
//             </Heading>

//             <Text
//               color={color2}
//               fontWeight={600}
//               fontSize={"3xl"}
//               textAlign="center"
//             >
//               {data?.title}
//             </Text>
//             <Text
//               color={color2}
//               fontWeight={600}
//               fontSize={"3xl"}
//               textAlign="center"
//             >
//               Model : {data?.model}
//             </Text>
//             <Text
//               color={color2}
//               fontWeight={600}
//               fontSize={"2xl"}
//               textAlign="center"
//             >
//               Year : {data?.year}
//             </Text>
//             <Text
//               color={color2}
//               fontWeight={600}
//               fontSize={"2xl"}
//               textAlign="center"
//             >
//               Mileage : {data?.mileage} Km/L
//             </Text>
//             <Text
//               color={color2}
//               fontWeight={600}
//               fontSize={"2xl"}
//               textAlign="center"
//               textTransform={"capitalize"}
//             >
//               Color : {data?.color}
//             </Text>
//             <Text
//               color={color2}
//               fontWeight={600}
//               fontSize={"2xl"}
//               textAlign="center"
//             >
//               Price : ₹ {data?.price} /-
//             </Text>
//             <Text
//               color={color2}
//               fontWeight={600}
//               fontSize={"2xl"}
//               textAlign="center"
//             >
//               Previous Buys : {data?.prevBuyers}
//             </Text>
//             <Text
//               color={color2}
//               fontWeight={600}
//               fontSize={"2xl"}
//               textAlign="center"
//             >
//               No. of Accidents : {data?.accidents}
//             </Text>

//             <Text
//               color={color2}
//               fontWeight={600}
//               fontSize={"2xl"}
//               textAlign="center"
//             >
//               Registration Place : {data?.registrationPlace}
//             </Text>
//           </Box>
//           <Center>
//             <Button
//               w={"full"}
//               mt={8}
//               width="350px"
//               size={"lg"}
//               py={"7"}
//               bg={color2}
//               color={color3}
//               textTransform={"uppercase"}
//               _hover={{
//                 transform: "translateY(2px)",
//                 boxShadow: "lg",
//               }}
//               onClick={() => alert("This Functionality Not Added Yet")}
//             >
//               &nbsp; BUY NOW
//             </Button>
//           </Center>
//           <Center>
//             <NavLink to={`/`}>
//               <Button
//                 size={"md"}
//                 width="150px"
//                 py={"7"}
//                 bg={color2}
//                 color={color3}
//                 textTransform={"uppercase"}
//                 _hover={{
//                   transform: "translateY(2px)",
//                   boxShadow: "lg",
//                 }}
//               >
//                 Go Back
//               </Button>
//             </NavLink>
//           </Center>
//         </Stack>
//       </SimpleGrid>
//     </Container>
//   );
// };

// export default SingleDeal;


// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { NavLink, useParams } from "react-router-dom";
// import { supabase } from "../supabaseClient"; // Ensure correct import
// import {
//   Box,
//   Button,
//   Center,
//   Container,
//   Flex,
//   Heading,
//   Image,
//   SimpleGrid,
//   Stack,
//   Text,
//   useColorModeValue,
//   Input,
// } from "@chakra-ui/react";
// import { fetchDeals } from "../redux/marketplaceReducer/action"; // Your existing fetch action

// const SingleDeal = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const [data, setData] = useState({});
//   const [formData, setFormData] = useState({});

//   const { marketData } = useSelector((store) => store.marketplaceReducer);

//   const color1 = useColorModeValue("brand.light", "brand.dark");
//   const color2 = useColorModeValue("gray.900", "white");
//   const color3 = useColorModeValue("white", "gray.900");

//   useEffect(() => {
//     const deal = marketData.find((el) => el._id === id);
//     setData(deal || {});
//     setFormData(deal || {});
//   }, [id, marketData]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = async () => {
//     try {
//       const { error } = await supabase
//         .from("deals")
//         .update(formData)
//         .eq("_id", id);

//       if (error) throw error;

//       alert("Deal updated successfully!");
//       dispatch(fetchDeals()); // Refresh data in Home and Get Deal pages
//     } catch (err) {
//       console.error(err.message);
//       alert("Failed to update the deal.");
//     }
//   };

//   return (
//     <Container maxW={"6xl"}>
//       <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} py={20}>
//         <Flex>
//           <Image
//             rounded={"md"}
//             borderRadius="200px"
//             alt="product image"
//             src={data?.imageURL}
//             w={"100%"}
//             h={"450px"}
//           />
//         </Flex>
//         <Stack bg="pink.500" borderRadius="30px" p="30px">
//           <Heading fontSize="4xl" color={color1}>
//             {data?.manufacturer}
//           </Heading>

//           <Input
//             placeholder="Title"
//             name="title"
//             value={formData.title || ""}
//             onChange={handleChange}
//           />
//           <Input
//             placeholder="Model"
//             name="model"
//             value={formData.model || ""}
//             onChange={handleChange}
//           />
//           <Input
//             placeholder="Price"
//             name="price"
//             type="number"
//             value={formData.price || ""}
//             onChange={handleChange}
//           />

//           <Button bg={color2} color={color3} onClick={handleUpdate}>
//             Update Deal
//           </Button>

//           <NavLink to={`/`}>
//             <Button bg={color2} color={color3}>
//               Go Back
//             </Button>
//           </NavLink>
//         </Stack>
//       </SimpleGrid>
//     </Container>
//   );
// };

// export default SingleDeal;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { db, doc, getDoc, updateDoc } from "../firebaseConfig"; // ✅ Corrected Import
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Input,
} from "@chakra-ui/react";
import { fetchDeals } from "../redux/marketplaceReducer/action";

const SingleDeal = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [formData, setFormData] = useState({});

  // ✅ Fetch Car Details from Firestore
  useEffect(() => {
    const fetchCar = async () => {
      try {
        const carRef = doc(db, "cars", id);
        const carSnap = await getDoc(carRef);

        if (carSnap.exists()) {
          setData(carSnap.data());
          setFormData(carSnap.data());
        } else {
          console.log("No such car found!");
        }
      } catch (error) {
        console.error("Error fetching car:", error);
      }
    };

    fetchCar();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const carRef = doc(db, "cars", id);
      await updateDoc(carRef, formData);
      alert("Deal updated successfully!");
      dispatch(fetchDeals()); // Refresh data
    } catch (err) {
      console.error(err);
      alert("Failed to update the deal.");
    }
  };

  return (
    <Container maxW={"6xl"}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} py={20}>
        <Flex>
          <Image
            rounded={"md"}
            alt="car image"
            src={data.imageURL}
            w={"100%"}
            h={"450px"}
          />
        </Flex>
        <Stack bg="pink.500" borderRadius="30px" p="30px">
          <Heading fontSize="4xl">{data?.manufacturer}</Heading>

          <Input placeholder="Title" name="title" value={formData.title || ""} onChange={handleChange} />
          <Input placeholder="Model" name="model" value={formData.model || ""} onChange={handleChange} />
          <Input placeholder="Price" name="price" type="number" value={formData.price || ""} onChange={handleChange} />

          <Button colorScheme="blue" onClick={handleUpdate}>
            Update Deal
          </Button>

          <NavLink to="/">
            <Button colorScheme="red">Go Back</Button>
          </NavLink>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default SingleDeal;

