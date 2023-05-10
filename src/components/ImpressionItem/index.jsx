import { Avatar, Flex, Text } from "@chakra-ui/react";

export default ({ name, impression }) => {
  return (
    <Flex
      justify="center"
      flexDir={"column"}
      gap="5px"
      align="center"
      color={"#fff"}
      w="100%"
      h="180px"
    >
      <Flex align="center" justify="center" gap="10px">
        <Avatar size="sm" name={name} />
        <Text>{name}</Text>
      </Flex>
      <Text mt="5px">{impression}</Text>
    </Flex>
  );
};
