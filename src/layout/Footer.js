import React from "react";
import { Container, Box, Text, Flex } from "@chakra-ui/react";
import LinkedIn from "../icons/linkedin.png";

function Footer() {
  return (
    <Box bgColor="primaryColor.900" py="20px">
      <Container>
        <Flex gap="150px">
          <Box color="#fff">
            <Text>With ❤️ from my frontend skills</Text>
          </Box>
          <Flex color="#fff" gap={2}>
            <Box>
              <img as="span" src={LinkedIn} alt="linkedInIcon" width="24px" />
            </Box>
            <Box>
              <Text>LinkedIn</Text>
            </Box>
          </Flex>
          {/* <Box color="#fff">ekwealortobechukwu22@gmail.com</Box> */}
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
