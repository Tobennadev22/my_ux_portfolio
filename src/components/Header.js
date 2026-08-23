import {
  Box,
  Text,
  Heading,
  Button,
  Flex,
  Container,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ArrowDown, Download } from "lucide-react";
import portrait from "../assets/Tobechukwu-headshot.png";

const MotionBox = motion(Box);

function Header() {
  return (
    <Box as="section" bg="#fff" pt={{ base: "40px", md: "56px" }}>
      <Container maxW="container.xl" px={{ base: 5, md: 10 }}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          gap={{ base: 10, lg: 16 }}
          pb={{ base: "56px", md: "88px" }}
        >
          {/* Text side */}
          <MotionBox
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            flex="1.1"
            textAlign={{ base: "center", lg: "left" }}
          >
            <Text
              fontSize="xs"
              fontWeight={600}
              letterSpacing="0.14em"
              textTransform="uppercase"
              color="accent.600"
              mb={4}
            >
              UI/UX Designer
            </Text>

            <Heading
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
              lineHeight="1.12"
              fontWeight="600"
              color="gray.800"
              mb={5}
            >
              Hey, I'm Ekwealor. I design digital products that solve real
              problems.
            </Heading>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.500"
              lineHeight="1.75"
              maxW="520px"
              mx={{ base: "auto", lg: "0" }}
              mb={8}
            >
              A UI/UX designer with 4+ years of experience creating
              minimalistic, user-centered solutions across fintech,
              healthtech, and edtech — usable, equitable, and built to move
              the metrics that matter.
            </Text>

            <HStack
              spacing={4}
              justify={{ base: "center", lg: "flex-start" }}
              flexWrap="wrap"
            >
              <Button
                as={ScrollLink}
                to="project-section"
                smooth={true}
                duration={600}
                offset={-80}
                cursor="pointer"
                rightIcon={<ArrowDown size={16} />}
                bgColor="dark.900"
                color="#fff"
                fontSize="14px"
                px={6}
                _hover={{ bg: "accent.600" }}
              >
                View my work
              </Button>
              <Button
                as="a"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<Download size={16} color="var(--chakra-colors-dark-700)" />}
                variant="outline"
                borderColor="gray.300"
                color="dark.700"
                fontSize="14px"
                px={6}
                _hover={{ bg: "gray.50", borderColor: "gray.400" }}
              >
                Download resume
              </Button>
            </HStack>
          </MotionBox>

          {/* Portrait */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            flex="1"
            w="100%"
            maxW={{ base: "360px", lg: "420px" }}
          >
            <Box
              position="relative"
              borderRadius="24px"
              overflow="hidden"
              aspectRatio="4/5"
              bg="dark.900"
            >
              <Box
                as="img"
                src={portrait}
                alt="Portrait of Ekwealor Tobechukwu"
                w="100%"
                h="100%"
                objectFit="cover"
                objectPosition="top center"
              />
            </Box>
          </MotionBox>
        </Flex>

        {/* Trust strip */}
        <Flex
          direction={{ base: "column", sm: "row" }}
          align="center"
          justify="center"
          gap={{ base: 3, sm: 10 }}
          borderTop="1px solid"
          borderColor="gray.100"
          py={6}
        >
          <HeroStat value="4+" label="Years of experience" />
          <HeroStat value="500k+" label="Users impacted" />
          <HeroStat value="3" label="Industries — fintech, healthtech, edtech" />
        </Flex>
      </Container>
    </Box>
  );
}

function HeroStat({ value, label }) {
  return (
    <HStack spacing={2}>
      <Text fontSize="lg" fontWeight="700" color="gray.800">
        {value}
      </Text>
      <Text fontSize="sm" color="gray.500">
        {label}
      </Text>
    </HStack>
  );
}

export default Header;
