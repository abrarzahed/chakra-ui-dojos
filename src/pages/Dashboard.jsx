import { Box, SimpleGrid, Text } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <SimpleGrid spacing={10} minChildWidth="250px" p="1rem">
      <Box bg="white" height="200px" border="1px solid">
        <Text color={{ base: "red", sm: "yellow", md: "orange", lg: "green" }}>
          Hello world
        </Text>
      </Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>

      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>

      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
    </SimpleGrid>
  );
}
