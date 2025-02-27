import {
  Avatar,
  Image,
  Box,
  Button,
  Flex,
  Heading,
  Tooltip,
  Text,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authReducer/authSlice"; // ✅ Correct Import
import logo from "../assets/car.png";
import "../styles/Navbar.css"; // ✅ Import the CSS file

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();

  // ✅ Fix: Ensure auth state is safely extracted
  const { isAuth = false, user = null } = useSelector((store) => store.auth || {});

  // ✅ Retrieve dealer name from Redux state or local storage
  const dealerName = user?.email || localStorage.getItem("dealerName") || "Dealer";

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      dispatch(logout());
      toast({
        title: "Signed Out Successfully!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate("/signin");
    }
  };

  return (
    <Flex className="navbar">
      {/* Logo and Title */}
      <Box className="navbar-logo">
        <Link to="/">
          <Image src={logo} alt="My Logo" className="navbar-logo-img" />
        </Link>
        <Heading className="navbar-heading">DriveAgain</Heading>
        <Text className="navbar-subtitle">
          Let's Buy Your <br /> Second-Hand Cars
        </Text>
      </Box>

      {/* Navigation Buttons */}
      <Flex className="navbar-links">
        <Link to="/getdeal">
          <Button className="navbar-button navbar-button-pink">
            Dealers Page
          </Button>
        </Link>

        {!isAuth ? (
          <>
            <Link to="/signup">
              <Button className="navbar-button navbar-button-pink">Sign Up</Button>
            </Link>
            <Link to="/signin">
              <Button className="navbar-button navbar-button-pink">Sign In</Button>
            </Link>
          </>
        ) : (
          <>
            <Button className="navbar-button navbar-button-blue" onClick={handleLogout}>
              Sign Out
            </Button>
            <Tooltip hasArrow label={dealerName} bg="gray.300" color="black">
              <Avatar name={dealerName} />
            </Tooltip>
          </>
        )}
      </Flex>

      {/* Dark Mode Toggle */}
      <Button className="navbar-theme-button" onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Flex>
  );
};

export default Navbar;
