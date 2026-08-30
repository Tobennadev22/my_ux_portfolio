import {
  Box,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  Container,
  Badge,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import RevealOnScrollFadeDown from "../util/RevealOnScrollFadeDown";

import project1 from "../assets/monibag-mobile.jpg";
import project2 from "../assets/medteqpro-admin-fixed.png";
import project3 from "../assets/wokkah-Thumbnail.png";

// ─── Data ─────────────────────────────────────────────────

const PROJECTS = [
  {
    id: "project3",
    image: project3,
    title: "WokkahLearn",
    description:
      "An AI-powered LMS with a built-in proctored interview flow that matches learners with potential employers.",
  },
  {
    id: "project2",
    image: project2,
    title: "Medteqpro",
    description:
      "A medical platform connecting Nigerian hospitals and patients, streamlining data management and cross-hospital sharing within the Medteqpro ecosystem.",
  },
  {
    id: "project1",
    image: project1,
    title: "Monibag",
    description:
      "A remittance app that helps Nigerians in the diaspora send money home quickly and easily.",
  },
];

// ─── Image Card ───────────────────────────────────────────

function ImageCard({ image, to }) {
  return (
    <ChakraLink
      as={ReactRouterLink}
      to={to}
      position="relative"
      display="block"
      w="100%"
      h={{ base: "250px", md: "320px" }}
      overflow="hidden"
      borderRadius="16px"
      backgroundImage={`url(${image})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      transition="transform 0.4s ease"
      _hover={{ transform: "scale(1.02)" }}
      _focusVisible={{
        outline: "3px solid",
        outlineColor: "accent.500",
        outlineOffset: "3px",
      }}
    >
      <Flex
        position="absolute"
        inset="0"
        bg="rgba(20,15,12,0.55)"
        opacity={0}
        transition="0.35s ease"
        justify="center"
        align="center"
        direction="column"
        _hover={{ opacity: 1 }}
      >
        <Text fontSize="2xl" fontWeight="700" color="white">
          Explore
        </Text>
        <Text fontSize="sm" color="whiteAlpha.800" letterSpacing="0.08em">
          Case Study
        </Text>
      </Flex>
    </ChakraLink>
  );
}

// ─── Project Card ─────────────────────────────────────────

function ProjectCard({ project }) {
  const { id, image, title, description } = project;

  return (
    <RevealOnScrollFadeDown>
      <Box as="article">
        <Flex direction="column" gap={5}>
          <ImageCard image={image} to={`/${id}`} />

          <Box>
            <Badge
              bg="accent.50"
              color="accent.700"
              fontSize="10px"
              letterSpacing="0.1em"
              textTransform="uppercase"
              px="8px"
              py="3px"
              borderRadius="full"
              mb={3}
            >
              Case Study
            </Badge>

            <Heading
              as="h3"
              fontSize={{ base: "xl", md: "xl" }}
              fontWeight="600"
              color="gray.800"
              mb={3}
            >
              {title}
            </Heading>

            <Text
              fontSize={{ base: "sm", md: "sm" }}
              color="gray.500"
              maxW="500px"
            >
              {description}
            </Text>
          </Box>
        </Flex>
      </Box>
    </RevealOnScrollFadeDown>
  );
}

// ─── Main Component ───────────────────────────────────────

function Main() {
  return (
    <Container maxW="container.xl" px={{ base: 4, md: 10 }}>
      <Box
        as="section"
        pt={{ base: "64px", md: "80px" }}
        pb={{ base: "40px", md: "60px" }}
        id="project-section"
      >
        {/* Header */}
        <RevealOnScrollFadeDown>
          <Box textAlign="center" mb={{ base: 10, md: 14 }}>
            <Text
              fontSize="xs"
              fontWeight={600}
              letterSpacing="0.14em"
              textTransform="uppercase"
              color="accent.600"
              mb={3}
            >
              Selected Work
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
              fontWeight="600"
              color="gray.800"
              lineHeight="1.35"
              mb={3}
            >
              A few of the products I've helped bring to life
            </Heading>

            <Text
              fontSize={{ base: "sm", md: "md" }}
              color="gray.500"
              maxW="480px"
              mx="auto"
            >
              Each project includes a case study that walks through my thinking
              and design process.
            </Text>
          </Box>
        </RevealOnScrollFadeDown>

        {/* Project Grid */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 12, md: 10 }}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
}

export default Main;
