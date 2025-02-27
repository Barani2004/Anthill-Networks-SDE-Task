import React, { useState, useEffect } from "react";
import { Box, Center, Text, Link, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowFooter(isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showFooter && (
      <Box bg="white" p={4} position="fixed" bottom={0} width="100%" boxShadow="md">
        <Center>
          <IconButton as={Link} href="https://twitter.com" target="_blank" aria-label="Twitter" icon={<FaTwitter />} mr={2} />
          <IconButton as={Link} href="https://facebook.com" target="_blank" aria-label="Facebook" icon={<FaFacebook />} mr={2} />
          <IconButton as={Link} href="https://instagram.com" target="_blank" aria-label="Instagram" icon={<FaInstagram />} mr={2} />
          <IconButton as={Link} href="https://linkedin.com" target="_blank" aria-label="LinkedIn" icon={<FaLinkedin />} />
        </Center>
        <Center mt={2}>
          <Text fontSize="sm">© 2024 Your Company. All rights reserved.</Text>
        </Center>
      </Box>
    )
  );
};

export default Footer;
