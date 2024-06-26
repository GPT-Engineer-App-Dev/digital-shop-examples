import { Box, Flex, Link, Spacer, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="teal.500" p={4}>
    <Flex>
      <Heading as="h1" size="lg" color="white">Electronics Store</Heading>
      <Spacer />
      <Link as={RouterLink} to="/" color="white" mr={4}>Home</Link>
      <Link as={RouterLink} to="/products" color="white">Products</Link>
    </Flex>
  </Box>
);

export default Navbar;