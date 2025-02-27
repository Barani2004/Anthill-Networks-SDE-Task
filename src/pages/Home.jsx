// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchDeals,
//   sortByMileage,
//   sortByPrice,
//   filterByColor,
//   searchDeals,
// } from "../redux/marketplaceReducer/action";

// import {
//   Box,
//   Button,
//   FormLabel,
//   Select,
//   Input,
//   Image,
//   Heading,
//   Text,
//   Center,
// } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import "../styles/Home.css"; // ✅ Import the CSS file

// const Home = () => {
//   const dispatch = useDispatch();

//   // ✅ Extract Redux state safely with default values
//   const { marketData = [], isLoading, isError } = useSelector(
//     (store) => store.marketplaceReducer || {}
//   );

//   // ✅ Fetch car deals on page load
//   useEffect(() => {
//     dispatch(fetchDeals());
//   }, [dispatch]);

//   // ✅ Sorting handlers
//   const handleSortByPrice = (event) => {
//     dispatch(sortByPrice(event.target.value));
//   };

//   const handleSortByMileage = (event) => {
//     dispatch(sortByMileage(event.target.value));
//   };

//   // ✅ Filter handler
//   const handleFilterByColor = (event) => {
//     dispatch(filterByColor(event.target.value));
//   };

//   // ✅ Search handler
//   const handleSearch = (event) => {
//     dispatch(searchDeals(event.target.value));
//   };

//   // ✅ Reset all filters
//   const handleResetFilters = () => {
//     dispatch(fetchDeals());
//   };

//   return (
//     <>
//       <Heading mt="120px" textAlign="center">
//         HomePage
//       </Heading>
//       <Box width="100%">
//         {/* Filters and Sorting */}
//         <Box
//           padding="50px"
//           display="grid"
//           gridTemplateColumns="repeat(4, 1fr)"
//           gap="20px"
//           borderRadius="10px"
//           align="center"
//         >
//           <Box>
//             <FormLabel>Sort by Price:</FormLabel>
//             <Select onChange={handleSortByPrice}>
//               <option value="">Sort by Price</option>
//               <option value="asc">Low to High</option>
//               <option value="desc">High to Low</option>
//             </Select>
//           </Box>

//           <Box>
//             <FormLabel>Sort by Mileage:</FormLabel>
//             <Select onChange={handleSortByMileage}>
//               <option value="">Sort by Mileage</option>
//               <option value="asc">Low to High</option>
//               <option value="desc">High to Low</option>
//             </Select>
//           </Box>

//           <Box>
//             <FormLabel>Filter by Color:</FormLabel>
//             <Select onChange={handleFilterByColor}>
//               <option value="">Select Color</option>
//               <option value="red">Red</option>
//               <option value="black">Black</option>
//               <option value="silver">Silver</option>
//               <option value="blue">Blue</option>
//               <option value="white">White</option>
//             </Select>
//           </Box>

//           <Box>
//             <FormLabel>Search Car:</FormLabel>
//             <Input
//               type="text"
//               onChange={handleSearch}
//               placeholder="Search Car🚗"
//             />
//           </Box>
//         </Box>

//         {/* Reset Button */}
//         <Center>
//           <Button marginTop="20px" colorScheme="red" onClick={handleResetFilters}>
//             Reset All Filters 📝
//           </Button>
//         </Center>

//         {/* Loading & Error Handling */}
//         {isLoading && <Text>Loading...</Text>}
//         {isError && <Text>Error fetching data!</Text>}

//         {/* Display Car Listings */}
//         <Box
//           display="grid"
//           gridTemplateColumns="repeat(3, 1fr)"
//           gap="30px"
//           width="90%"
//           margin="auto"
//           paddingBottom="50px"
//         >
//           {marketData.length > 0 ? (
//             marketData.map((el) => (
//               <Box
//                 key={el._id}
//                 textAlign="left"
//                 borderRadius="10px"
//                 boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
//                 paddingBottom="10px"
//               >
//                 <Image
//                   src={el.imageURL}
//                   alt={el.title}
//                   width="100%"
//                   height="250px"
//                   borderTopLeftRadius="10px"
//                   borderTopRightRadius="10px"
//                   marginBottom="10px"
//                 />
//                 <Text marginLeft="20px" fontWeight="bold">
//                   Title: {el.title}
//                 </Text>
//                 <Text marginLeft="20px">Model: {el.model}</Text>
//                 <Text marginLeft="20px">Manufacturer: {el.manufacturer}</Text>
//                 <Text marginLeft="20px">Year: {el.year}</Text>
//                 <Text marginLeft="20px">Mileage: {el.mileage} Km/L</Text>
//                 <Text marginLeft="20px">Price: ₹{el.price} /-</Text>
//                 <Center>
//                   <Button
//                     colorScheme="yellow"
//                     w="50%"
//                     marginTop="10px"
//                     as={Link}
//                     to={`/deal/${el._id}`}
//                   >
//                     View Details ⬇️
//                   </Button>
//                 </Center>
//               </Box>
//             ))
//           ) : (
//             <Center>
//               <Image
//                 src="https://cdni.iconscout.com/illustration/premium/thumb/no-search-found-2511608-2133696.png"
//                 alt="No results"
//                 width="45%"
//               />
//             </Center>
//           )}
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default Home;

// import React, { useEffect, useMemo } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchDeals,
//   sortByMileage,
//   sortByPrice,
//   filterByColor,
//   searchDeals,
// } from "../redux/marketplaceReducer/action";

// import {
//   Box,
//   Button,
//   FormLabel,
//   Select,
//   Input,
//   Image,
//   Heading,
//   Text,
//   Center,
// } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import "../styles/Home.css"; // ✅ Import the CSS file

// const Home = () => {
//   const dispatch = useDispatch();

//   // ✅ Safely extract Redux state & useMemo to avoid unnecessary re-renders
//   const { marketData = [], isLoading, isError } = useSelector(
//     (store) => store.marketplaceReducer || {}
//   );

//   const memoizedMarketData = useMemo(() => marketData, [marketData]);

//   // ✅ Fetch car deals on page load
//   useEffect(() => {
//     dispatch(fetchDeals());
//   }, [dispatch]);

//   // ✅ Sorting handlers
//   const handleSortByPrice = (event) => {
//     dispatch(sortByPrice(event.target.value));
//   };

//   const handleSortByMileage = (event) => {
//     dispatch(sortByMileage(event.target.value));
//   };

//   // ✅ Filter handler
//   const handleFilterByColor = (event) => {
//     dispatch(filterByColor(event.target.value));
//   };

//   // ✅ Search handler
//   const handleSearch = (event) => {
//     dispatch(searchDeals(event.target.value));
//   };

//   // ✅ Reset all filters
//   const handleResetFilters = () => {
//     dispatch(fetchDeals());
//   };

//   return (
//     <>
//       <Heading mt="120px" textAlign="center">
//         HomePage
//       </Heading>

//       {/* Show loading message */}
//       {isLoading && (
//         <Center>
//           <Image
//             src="https://cdn140.picsart.com/301568770156201.gif?to=min&r=640"
//             alt="loading"
//             margin="auto"
//             paddingTop="90px"
//             marginBottom="360px"
//           />
//         </Center>
//       )}

//       {/* Show error message */}
//       {isError && (
//         <Center>
//           <Text color="red.500">Error fetching data!</Text>
//         </Center>
//       )}

//       {/* Show filters only when data is available */}
//       {!isLoading && !isError && (
//         <Box width="100%">
//           {/* Filters and Sorting */}
//           <Box
//             padding="50px"
//             display="grid"
//             gridTemplateColumns="repeat(4, 1fr)"
//             gap="20px"
//             borderRadius="10px"
//             align="center"
//           >
//             <Box>
//               <FormLabel>Sort by Price:</FormLabel>
//               <Select onChange={handleSortByPrice}>
//                 <option value="">Sort by Price</option>
//                 <option value="asc">Low to High</option>
//                 <option value="desc">High to Low</option>
//               </Select>
//             </Box>

//             <Box>
//               <FormLabel>Sort by Mileage:</FormLabel>
//               <Select onChange={handleSortByMileage}>
//                 <option value="">Sort by Mileage</option>
//                 <option value="asc">Low to High</option>
//                 <option value="desc">High to Low</option>
//               </Select>
//             </Box>

//             <Box>
//               <FormLabel>Filter by Color:</FormLabel>
//               <Select onChange={handleFilterByColor}>
//                 <option value="">Select Color</option>
//                 <option value="red">Red</option>
//                 <option value="black">Black</option>
//                 <option value="silver">Silver</option>
//                 <option value="blue">Blue</option>
//                 <option value="white">White</option>
//               </Select>
//             </Box>

//             <Box>
//               <FormLabel>Search Car:</FormLabel>
//               <Input
//                 type="text"
//                 onChange={handleSearch}
//                 placeholder="Search Car🚗"
//               />
//             </Box>
//           </Box>

//           {/* Reset Button */}
//           <Center>
//             <Button marginTop="20px" colorScheme="red" onClick={handleResetFilters}>
//               Reset All Filters 📝
//             </Button>
//           </Center>

//           {/* Display Car Listings */}
//           <Box
//             display="grid"
//             gridTemplateColumns="repeat(3, 1fr)"
//             gap="30px"
//             width="90%"
//             margin="auto"
//             paddingBottom="50px"
//           >
//             {memoizedMarketData.length > 0 ? (
//               memoizedMarketData.map((el) => (
//                 <Box
//                   key={el._id}
//                   textAlign="left"
//                   borderRadius="10px"
//                   boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
//                   paddingBottom="10px"
//                 >
//                   <Image
//                     src={el.imageURL}
//                     alt={el.title}
//                     width="100%"
//                     height="250px"
//                     borderTopLeftRadius="10px"
//                     borderTopRightRadius="10px"
//                     marginBottom="10px"
//                   />
//                   <Text marginLeft="20px" fontWeight="bold">
//                     Title: {el.title}
//                   </Text>
//                   <Text marginLeft="20px">Model: {el.model}</Text>
//                   <Text marginLeft="20px">Manufacturer: {el.manufacturer}</Text>
//                   <Text marginLeft="20px">Year: {el.year}</Text>
//                   <Text marginLeft="20px">Mileage: {el.mileage} Km/L</Text>
//                   <Text marginLeft="20px">Price: ₹{el.price} /-</Text>
//                   <Center>
//                     <Button
//                       colorScheme="yellow"
//                       w="50%"
//                       marginTop="10px"
//                       as={Link}
//                       to={`/deal/${el._id}`}
//                     >
//                       View Details ⬇️
//                     </Button>
//                   </Center>
//                 </Box>
//               ))
//             ) : (
//               <Center>
//                 <Image
//                   src="https://cdni.iconscout.com/illustration/premium/thumb/no-search-found-2511608-2133696.png"
//                   alt="No results"
//                   width="45%"
//                 />
//               </Center>
//             )}
//           </Box>
//         </Box>
//       )}
//     </>
//   );
// };

// export default Home;


// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchDeals } from "../redux/marketplaceReducer/action";
// import { Box, Button, Image, Text, Heading, Center } from "@chakra-ui/react";

// const Home = () => {
//   const dispatch = useDispatch();
//   const { marketData, isLoading, isError } = useSelector((store) => store.marketplace);

//   useEffect(() => {
//     dispatch(fetchDeals());
//   }, [dispatch]);

//   return (
//     <Box>
//       <Heading>Car Listings</Heading>
//       {isLoading && <Text>Loading...</Text>}
//       {isError && <Text>Error fetching data!</Text>}
//       <Box>
//         {marketData.map((el) => (
//           <Box key={el.id}>
//             <Image src={el.imageURL} alt={el.title} width="200px" />
//             <Text>Title: {el.title}</Text>
//             <Text>Price: ₹{el.price}</Text>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Home;


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDeals,
  sortByMileage,
  sortByPrice,
  filterByColor,
  searchDeals,
} from "../redux/marketplaceReducer/action";

import {
  Box,
  Button,
  FormLabel,
  Select,
  Input,
  Image,
  Heading,
  Text,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // ✅ Keep your CSS

const Home = () => {
  const dispatch = useDispatch();

  // ✅ Extract Redux state safely
  const { marketData = [], isLoading, isError } = useSelector(
    (store) => store.marketplace || {} // ✅ Correct store path
  );

  // ✅ Fetch car deals on page load
  useEffect(() => {
    dispatch(fetchDeals());
  }, [dispatch]);

  // ✅ Sorting handlers
  const handleSortByPrice = (event) => {
    dispatch(sortByPrice(event.target.value));
  };

  const handleSortByMileage = (event) => {
    dispatch(sortByMileage(event.target.value));
  };

  // ✅ Filter handler
  const handleFilterByColor = (event) => {
    dispatch(filterByColor(event.target.value));
  };

  // ✅ Search handler
  const handleSearch = (event) => {
    dispatch(searchDeals(event.target.value));
  };

  // ✅ Reset all filters
  const handleResetFilters = () => {
    dispatch(fetchDeals());
  };

  return (
    <>
      <Heading mt="120px" textAlign="center">
        HomePage
      </Heading>

      {/* Show loading message */}
      {isLoading && (
        <Center>
          <Image
            src="https://cdn140.picsart.com/301568770156201.gif?to=min&r=640"
            alt="loading"
            margin="auto"
            paddingTop="90px"
            marginBottom="360px"
          />
        </Center>
      )}

      {/* Show error message */}
      {isError && (
        <Center>
          <Text color="red.500">Error fetching data!</Text>
        </Center>
      )}

      {/* Show filters only when data is available */}
      {!isLoading && !isError && (
        <Box width="100%">
          {/* Filters and Sorting */}
          <Box
            padding="50px"
            display="grid"
            gridTemplateColumns="repeat(4, 1fr)"
            gap="20px"
            borderRadius="10px"
            align="center"
          >
            <Box>
              <FormLabel>Sort by Price:</FormLabel>
              <Select onChange={handleSortByPrice}>
                <option value="">Sort by Price</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </Select>
            </Box>

            <Box>
              <FormLabel>Sort by Mileage:</FormLabel>
              <Select onChange={handleSortByMileage}>
                <option value="">Sort by Mileage</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </Select>
            </Box>

            <Box>
              <FormLabel>Filter by Color:</FormLabel>
              <Select onChange={handleFilterByColor}>
                <option value="">Select Color</option>
                <option value="red">Red</option>
                <option value="black">Black</option>
                <option value="silver">Silver</option>
                <option value="blue">Blue</option>
                <option value="white">White</option>
              </Select>
            </Box>

            <Box>
              <FormLabel>Search Car:</FormLabel>
              <Input
                type="text"
                onChange={handleSearch}
                placeholder="Search Car🚗"
              />
            </Box>
          </Box>

          {/* Reset Button */}
          <Center>
            <Button marginTop="20px" colorScheme="red" onClick={handleResetFilters}>
              Reset All Filters 📝
            </Button>
          </Center>

          {/* Display Car Listings */}
          <Box
            display="grid"
            gridTemplateColumns="repeat(3, 1fr)"
            gap="30px"
            width="90%"
            margin="auto"
            paddingBottom="50px"
          >
            {marketData.length > 0 ? (
              marketData.map((el) => (
                <Box
                  key={el.id} // ✅ Firestore key
                  textAlign="left"
                  borderRadius="10px"
                  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  paddingBottom="10px"
                >
                  <Image
                    src={el.imageURL} // ✅ Ensure correct Firestore field
                    alt={el.title}
                    width="100%"
                    height="250px"
                    borderTopLeftRadius="10px"
                    borderTopRightRadius="10px"
                    marginBottom="10px"
                  />
                  <Text marginLeft="20px" fontWeight="bold">
                    Title: {el.title}
                  </Text>
                  <Text marginLeft="20px">Model: {el.model}</Text>
                  <Text marginLeft="20px">Manufacturer: {el.manufacturer}</Text>
                  <Text marginLeft="20px">Year: {el.year}</Text>
                  <Text marginLeft="20px">Mileage: {el.mileage} Km/L</Text>
                  <Text marginLeft="20px">Price: ₹{el.price} /-</Text>
                  <Center>
                    <Button
                      colorScheme="yellow"
                      w="50%"
                      marginTop="10px"
                      as={Link}
                      to={`/deal/${el.id}`} // ✅ Firestore key
                    >
                      View Details ⬇️
                    </Button>
                  </Center>
                </Box>
              ))
            ) : (
              <Center>
                <Image
                  src="https://cdni.iconscout.com/illustration/premium/thumb/no-search-found-2511608-2133696.png"
                  alt="No results"
                  width="45%"
                />
              </Center>
            )}
          </Box>
        </Box>
      )}
    </>
  );
};

export default Home;
