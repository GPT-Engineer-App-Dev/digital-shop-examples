import { Box, SimpleGrid, Image, Text, Button, VStack, Select, HStack } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const products = [
  { id: 1, name: "Smartphone", price: "$699", category: "Electronics", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", category: "Electronics", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", category: "Accessories", image: "/images/headphones.jpg" },
];

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("");
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("search") || "";
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) &&
        (selectedCategory === "" || product.category === selectedCategory)
      )
    );
  }, [location.search, selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <Box p={4}>
      <HStack mb={4}>
        <Select placeholder="Filter by category" onChange={handleCategoryChange}>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
        </Select>
      </HStack>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map(product => (
        <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={product.image} alt={product.name} />
          <VStack p={4}>
            <Text fontWeight="bold">{product.name}</Text>
            <Text>{product.price}</Text>
            <Button as={Link} to={`/products/${product.id}`} colorScheme="teal">View Details</Button>
          </VStack>
        </Box>
      ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;