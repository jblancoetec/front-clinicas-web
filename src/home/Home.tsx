import { Container } from "@mui/material";

import MainSection from "./MainSection";
import HelpSection from "./HelpSection";
import StepsSection from "./StepsSection";
import HowToUseSection from "./HowToUseSection";

const Home = () => {
  return (
    <>
      <Container className="background-light">
        <MainSection />
      </Container>
      <Container maxWidth={false} className="background-light">
        <HowToUseSection />
        <StepsSection />
      </Container>
    </>
  );
};

export default Home;
