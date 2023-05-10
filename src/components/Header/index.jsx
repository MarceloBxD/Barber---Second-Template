import { HeaderContainer, Text, Apresentation, BiggerText } from "./styles";
import img from "../../assets/images/header.jpg";
import Navbar from "../Navbar";
import Button from "../Button";
import { HamburgerMenu } from "../Navbar/styles";
// import Animation from "../Animation";
import Schedules from "../Schedules";
import ImpressionsSlider from "../ImpressionsSlider";

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
        <BiggerText>Fazemos sua barba de maneira clássica:</BiggerText>
        <Text>com navalha e toalha quente</Text>
        <Button />
      </Apresentation>
      <Apresentation>
        <Text>Impressões</Text>
        <ImpressionsSlider />
      </Apresentation>
      {/* <Animation /> */}
      <Schedules />
    </HeaderContainer>
  );
};
