import { Container, Heading, Box, Flex } from "@chakra-ui/react";
import Gbovo from "../assets/gbovo.png";
import SioTeq from "../assets/Sioteq.png";
import Nutm from "../assets/NUTM.png";
import Wokkah from "../assets/Wokkah.png";
function Clients() {
  return (
    <Container>
      <Heading
        fontWeight={["medium", "medium", "medium"]}
        fontSize={["2xl", "3xl", "3xl"]}
        lineHeight={["16px", "16px", "40px"]}
        pb={10}
        mt={10}
        color="gray.600"
        textAlign={["center"]}
      >
        Some Amazing Clients I've worked with
      </Heading>
      <Flex
        gap={14}
        alignItems="center"
        justifyContent="center"
        mb={{ base: "40px", md: "80px" }}
      >
        <Box w={{ base: 100, md: 120 }}>
          <img src={Gbovo} alt="gbovo_client_logo" />
        </Box>
        <Box w={{ base: 100, md: 120 }}>
          <img src={SioTeq} alt="sioteq_client_logo" />
        </Box>
        <Box w={{ base: 100, md: 120 }}>
          <img src={Nutm} alt="Nutm_client_logo" />
        </Box>

        <Box w={{ base: 100, md: 120 }}>
          <img src={Wokkah} alt="Wokkah_client_logo" />
        </Box>
      </Flex>
    </Container>
  );
}

export default Clients;
