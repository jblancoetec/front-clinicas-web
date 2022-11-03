import { Container } from "@mui/material";

import MainSection from "./MainSection";
import HelpSection from "./HelpSection";
import StepsSection from "./StepsSection";
import Advices from "../components/Advices/advice"

const Home = () => {
  return (
    <>
      <Container className="background-light">
        <MainSection />
      </Container>
      {/* <Container className="background-light">
        <HelpSection />
      </Container> */}
      <Container maxWidth={false} className="background-light">
        <StepsSection />
      </Container>
      <Container maxWidth={false} className="background-light">
        <Advices />
      </Container>
      
    </>
  );
};

export default Home;
