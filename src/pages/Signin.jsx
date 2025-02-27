// import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, Text, useToast } from "@chakra-ui/react";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "../redux/authReducer/authSlice";
// import { Link } from "react-router-dom";

// const Signin = () => {
//   const toast = useToast();
//   const dispatch = useDispatch();
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleSignin = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleFormSubmission = (e) => {
//     e.preventDefault();
//     dispatch(login(form));
//     toast({
//       title: "Signed In Successfully!",
//       status: "success",
//       duration: 2000,
//       isClosable: true,
//     });
//   };

//   return (
//     <Box width="100%" mt="30px" mb="100px">
//       <form
//         onSubmit={handleFormSubmission}
//         style={{
//           width: "30%",
//           margin: "auto",
//           padding: "40px",
//           boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
//           marginTop: "100px",
//           borderRadius: "20px",
//         }}
//       >
//         <Heading>Sign In</Heading>
//         <br />
//         <FormControl>
//           <FormLabel>Email</FormLabel>
//           <Input name="email" type="email" value={form.email} onChange={handleSignin} placeholder="Your Email" />
//         </FormControl>
//         <br />
//         <FormControl>
//           <FormLabel>Password</FormLabel>
//           <Input name="password" type="password" value={form.password} onChange={handleSignin} placeholder="Your Password" />
//         </FormControl>
//         <br />
//         <Button mt={4} colorScheme="blue" type="submit" width="full">
//           Sign In
//         </Button>
//         <Stack pt={6}>
//           <Text align={"center"}>
//             New user?{" "}
//             <Button variant={"link"} color={"blue.400"}>
//               <Link to="/signup">Sign Up</Link>
//             </Button>
//           </Text>
//         </Stack>
//       </form>
//     </Box>
//   );
// };

// export default Signin;


import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authReducer/action"; // ✅ Fix Import
import { Link, useNavigate } from "react-router-dom";
import "../styles/Signin.css"; // ✅ Import the CSS file

const Signin = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  // ✅ Fix: Correctly get authentication state from Redux
  const { isAuth = false } = useSelector((state) => state.auth || {});

  const handleSignin = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    dispatch(loginUser(form))
      .then(() => {
        toast({
          title: "Signin Successful!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        navigate("/"); // ✅ Redirect to Home after signin
      })
      .catch((error) => {
        toast({
          title: "Signin Failed!",
          description: error.message,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  return (
    <Box className="signin-container">
      {isAuth ? (
        <Text fontSize="xl" color="green.500">
          You are already signed in!
        </Text>
      ) : (
        <form onSubmit={handleFormSubmission} className="signin-form">
          <Heading className="signin-heading">Sign In</Heading>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input name="email" type="email" value={form.email} onChange={handleSignin} required />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input name="password" type="password" value={form.password} onChange={handleSignin} required />
          </FormControl>
          <Button type="submit" className="signin-button">
            Sign In
          </Button>
          <Stack pt={6}>
            <Text align={"center"} className="signin-text">
              New user? <Link to="/signup">Sign Up</Link>
            </Text>
          </Stack>
        </form>
      )}
    </Box>
  );
};

export default Signin;
