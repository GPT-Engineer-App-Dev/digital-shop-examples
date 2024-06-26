import { Box, Flex, Link, Spacer, Heading, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/products?search=${searchQuery}`);
  };

  return (
    <Box bg="teal.500" p={4}>
      <Flex>
        <Heading as="h1" size="lg" color="white">Electronics Store</Heading>
        <form onSubmit={handleSearchSubmit}>
          <InputGroup width="300px" mr={4}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input type="text" placeholder="Search products" value={searchQuery} onChange={handleSearchChange} />
          </InputGroup>
        </form>
        <Spacer />
        <Link as={RouterLink} to="/" color="white" mr={4}>Home</Link>
        <Link as={RouterLink} to="/products" color="white">Products</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;