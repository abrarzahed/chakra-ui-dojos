import { UnlockIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";

export default function Navbar() {
  const toast = useToast();
  const showToast = () => {
    toast({
      title: "Logged out",
      description: "Successfully logged out",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
      icon: <UnlockIcon />,
    });
  };
  return (
    <Flex as="nav" p="10px" alignItems="center" mb="2.5rem">
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Avatar name="Mario" bg="gray.200" src="/img/mario.png">
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">
              4
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>mario.net@com</Text>
        <Button colorScheme="purple" onClick={showToast}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}
