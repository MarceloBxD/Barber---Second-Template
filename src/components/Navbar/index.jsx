import { NavbarContainer, Text, HamburgerMenu } from "./styles";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  Flex,
} from "@chakra-ui/react";
export default () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <NavbarContainer>
      <Text>Home</Text>
      <Text>Serviços</Text>
      <Text>Atendimentos</Text>
      <Text onClick={onOpen}>Agende</Text>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="#000">
          <ModalHeader color="#fff">Agendamento</ModalHeader>
          <ModalCloseButton
            _focus={{ outline: "none", border: "none" }}
            textColor="#ff0"
          />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              Marque aqui seu agendamento!
            </Text>
            <Flex flexDir="column" mt="10px" gap="15px">
              <Input
                focusBorderColor="#ff0"
                color="#fff"
                placeholder="Nome Completo"
                variant="flushed"
              />
              <Input
                focusBorderColor="#ff0"
                color="#fff"
                placeholder="Celular"
                variant="flushed"
              />
              <Input
                focusBorderColor="#ff0"
                color="#fff"
                type="datetime-local"
              />
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              variant={"unstyled"}
              color={"#fff"}
              mr={3}
              onClick={onClose}
            >
              Fechar
            </Button>
            <Button variant="solid" colorScheme="yellow">
              Agendar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </NavbarContainer>
  );
};
