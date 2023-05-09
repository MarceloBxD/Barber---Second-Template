import {
  HeaderContainer,
  Text,
  Apresentation,
  ScheduleArea,
  ScheduleItem,
  BiggerText,
} from "./styles";
import img from "../../assets/images/header.jpg";
import Navbar from "../Navbar";
import Button from "../Button";
import { HamburgerMenu } from "../Navbar/styles";

export default () => {
  return (
    <HeaderContainer
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          width: "100%",
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Text>El Bigodon</Text>
        <Navbar />
        <HamburgerMenu />
      </div>
      <Apresentation>
        <Text>Fazemos sua barba de maneira clássica:</Text>
        <BiggerText>com navalha e toalha quente</BiggerText>
        <Button />
      </Apresentation>
      <Apresentation>
        <ScheduleArea>
          <ScheduleItem>
            Horário de Funcionamento
            <Button />
          </ScheduleItem>
          <ScheduleItem>
            Preços
            <Button />
          </ScheduleItem>
          <ScheduleItem>
            Item
            <Button />
          </ScheduleItem>
        </ScheduleArea>
      </Apresentation>
    </HeaderContainer>
  );
};
