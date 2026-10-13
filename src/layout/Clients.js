import { Container, Heading, Box, Flex, Badge } from "@chakra-ui/react";
import Gbovo from "../assets/gbovo.png";
import SioTeq from "../assets/Sioteq.png";
import Nutm from "../assets/NUTM.png";
import Wokkah from "../assets/Wokkah.png";
function Clients() {
  return (
    <Container maxW="container.xl" px={{ base: 4, md: 10 }}>
      <Box textAlign="center" mt={10} mb={3}>
        <Badge
          bg="accent.50"
          color="accent.700"
          fontSize="10px"
          fontWeight={600}
          letterSpacing="0.1em"
          textTransform="uppercase"
          px="8px"
          py="3px"
          borderRadius="full"
        >
          Trusted by
        </Badge>
      </Box>
      <Heading
        fontWeight={600}
        fontSize={["xl", "2xl", "2xl"]}
        pb={10}
        color="gray.700"
        textAlign="center"
      >
        Companies I've designed for
      </Heading>
      <Flex
        gap={{ base: 8, md: 14 }}
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        mb={{ base: "40px", md: "80px" }}
      >
        <Box
          w={{ base: 90, md: 120 }}
          filter="grayscale(1)"
          opacity={0.7}
          transition="0.3s ease"
          _hover={{ filter: "grayscale(0)", opacity: 1 }}
        >
          <img src={Gbovo} alt="gbovo_client_logo" />
        </Box>
        <Box
          w={{ base: 90, md: 120 }}
          filter="grayscale(1)"
          opacity={0.7}
          transition="0.3s ease"
          _hover={{ filter: "grayscale(0)", opacity: 1 }}
        >
          <img src={SioTeq} alt="sioteq_client_logo" />
        </Box>
        <Box
          w={{ base: 90, md: 120 }}
          filter="grayscale(1)"
          opacity={0.7}
          transition="0.3s ease"
          _hover={{ filter: "grayscale(0)", opacity: 1 }}
        >
          <img src={Nutm} alt="Nutm_client_logo" />
        </Box>
        <Box
          w={{ base: 90, md: 120 }}
          filter="grayscale(1)"
          opacity={0.7}
          transition="0.3s ease"
          _hover={{ filter: "grayscale(0)", opacity: 1 }}
        >
          <img src={Wokkah} alt="Wokkah_client_logo" />
        </Box>
      </Flex>
    </Container>
  );
}

export default Clients;
