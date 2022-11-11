import { Container, Stack } from "@mui/material";

import MainSection from "./MainSection";
import StepsSection from "./StepsSection";
import HowToUseSection from "./HowToUseSection";
import Advices from "./Advice";

const Home = () => {
  return (
    <>
      <Container className="background-light">
        <MainSection />
      </Container>
      <Container className="background-light">
        <Stack spacing={8} py={8} marginBottom={"100px"}>
          <Advices />
          <HowToUseSection />
          <StepsSection />
        </Stack>
      </Container>
    </>
  );
};

export default Home;
