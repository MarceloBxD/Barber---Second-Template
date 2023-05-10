import React from "react";
import { Box, Text as Txt, Flex, Highlight } from "@chakra-ui/react";
export default () => {
  const clients = [
    {
      name: "João Vinícius",
      phone: "(21) 9999-9999",
      date: "05/09 - 10:30",
    },
    {
      name: "Marcelo",
      phone: "(21) 9999-9999",
      date: "05/09 - 10:30",
    },
    {
      name: "Carlos Augusto",
      phone: "(21) 9999-9999",
      date: "05/09 - 10:30",
    },
    {
      name: "Nícolas",
      phone: "(21) 9999-9999",
      date: "05/09 - 10:30",
    },
    {
      name: "Marcos Vinícius",
      phone: "(21) 9999-9999",
      date: "05/09 - 10:30",
    },
  ];

  return (
    <Box
      px="20px"
      mb="50px"
      w="100%"
      maxW={"100vw"}
      __css={{
        "&::-webkit-scrollbar": {
          width: "8px",
          borderRadius: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "#f1f1f1",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#f7c843",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
      }}
      overflowY={"scroll"}
      overflowX={"hidden"}
      maxH="480px"
      mt="80px"
    >
      <Highlight
        query="Clientes agendados"
        styles={{ px: "1", py: "1", bg: "yellow.300" }}
      >
        Clientes agendados
      </Highlight>

      {clients.map((client, index) => (
        <Flex
          w="500px"
          bgColor="transparent"
          mb="10px"
          p="10px"
          flexDir="column"
          key={index}
        >
          <Txt color="#fff" fontSize="21px">
            {client.name}
          </Txt>
          <Txt color="#fff">{client.phone}</Txt>
          <Txt color="#fff">{client.date}</Txt>
        </Flex>
      ))}
    </Box>
  );
};
