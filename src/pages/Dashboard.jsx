import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {
  const boxStyles = {
    padding: "10px",
    background: "purple.400",
    color: "white",
    margin: "10px",
    textAlign: "center",
    filter: "blur(2px)",
    ":hover": {
      background: "red.400",
      filter: "blur(0px)",
    },
  };
  return (
    <Container as="section" maxWidth="4xl" paddingBlock="2rem">
      <Heading marginBlock="30px" padding="10px">
        Chakra ui components
      </Heading>
      <Text marginLeft="30px">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
        impedit consectetur maxime sapiente
      </Text>
      <Text marginLeft="30px" color="blue.400" fontWeight="bold">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
        impedit consectetur maxime sapiente
      </Text>
      <Box marginBlock="30px" padding="20px" background="orange">
        <Text color="white">This is a simple box</Text>
      </Box>

      <Box sx={boxStyles}>Hello Ninjas</Box>
    </Container>
  );
}
