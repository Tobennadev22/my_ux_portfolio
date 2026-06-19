import {
  Box,
  Text,
  Heading,
  Button,
  useColorModeValue,
  Flex,
  Container,
} from "@chakra-ui/react";

import myImage from "../assets/bg-toby2.jpg";
// import { Wave } from "../icons/hands.png";
// import myImage from "../assets/thought.png";
import { Link } from "react-router-dom";

// Main Header component
function Header() {
  return (
    <Container maxW="container.xl">
      <Box
        mb={{ base: "12px", md: "28px" }}
        as="section"
        px={{ base: 2, md: 10 }}
        pt="48px"
      >
        <Flex direction={["column", "column", "row"]} spacing="20px">
          {/* Main content box with background image */}
          <Box
            h={{ base: 800, md: 600 }}
            pt={["18px", "32px", "54px"]}
            px={{ base: "16px", md: "40px" }}
            w={["100%", "100%", 1140]}
            bg="#fbfbfa"
            borderRadius={20}
            // backgroundImage={`url(${myImage})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            mx="auto"
            marginRight={{ base: 0, md: "20px" }}
          >
            <Box
              textAlign={["center", "center", "left"]}
              px={{ base: "8px", md: "24px" }}
            >
              <Heading
                // fontWeight={["medium", "medium", "medium"]}
                // fontSize={["2xl", "3xl", "4xl"]}
                // lineHeight={["24px", "32px", "40px"]}
                // pb={10}
                // mt={10}
                // color="gray.600"
                // color="brandBlue.900"
                fontSize={["2xl", "3xl", "4xl"]}
                fontWeight="semibold"
                color="gray.800"
                mb={2}
              >
                Hey! I'm Tobe, a product designer with 3+ years of professional
                experience.
              </Heading>
              <Text
                fontWeight="sm"
                fontSize={["sm", "md", "md"]}
                w={{ base: "100%", md: 600 }}
                pt="2"
                color={["gray.500"]}
                textAlign={["center", "center", "left"]}
              >
                A user experience designer with over 3+ years of experience. I
                create and design minimalistic, user-centered solutions that are
                usable, equitable, useful, and enjoyable, leveraging intuitive
                solutions that help businesses achieve good ROI.
              </Text>
              <Box mt="48px">
                <Link>
                  <Button
                    href={
                      "https://www.linkedin.com/in/ekwealor-tobechukwu-100113114/"
                    }
                    bgColor="gray.800"
                    color="#ffffff"
                    fontSize="14px"
                    _hover={{ bg: "gray.700" }}
                  >
                    Let's have a chat
                  </Button>
                </Link>
              </Box>

              {/* Content */}
            </Box>
          </Box>
          {/* Placeholder for additional content */}
          <ImageSection />
        </Flex>
      </Box>
    </Container>
  );
}

// ImageSection component
function ImageSection() {
  return (
    <Box
      h={[300, 400, 600]}
      pt={["32px", "32px", "54px"]}
      px={["16px", "16px", "16px"]}
      w={["100%"]}
      display={["none", "none", "block"]}
      bg="primaryColor.200"
      borderRadius={20}
      objectFit="cover"
      backgroundImage={`url(${myImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      // className="ekit-fancy-text-animated"
    >
      {/* Additional content can be added here */}
    </Box>
  );
}

export default Header;
