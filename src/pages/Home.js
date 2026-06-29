import Header from "../components/Header";
import Main from "../components/Main";

import { Box } from "@chakra-ui/react";
import Clients from "../layout/Clients";
import Motion from "../layout/Motion";

function Home() {
  return (
    <Box>
      <Header />
      <Main />
      <Clients />
      <Motion />
    </Box>
  );
}

export default Home;
