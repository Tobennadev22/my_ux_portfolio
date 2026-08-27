import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

import {
  Box,
  Heading,
  Text,
  Flex,
  Container,
  UnorderedList,
  ListItem,
  Divider,
} from "@chakra-ui/react";
import "../styles/Global.css";
import project1 from "../assets/monibag-mobile-hand.png";
import { CircleAlert, ArrowLeft, ArrowDown } from "lucide-react";

import ukUsers from "../assets/allukusers.png";
import RevealOnScrollFadeDown from "../util/RevealOnScrollFadeDown";
import RevealOnScrollFadeRight from "../util/RevealOnStrollFadeRight";

function Project1() {
  return (
    <Box>
      <HeadingSection />
      <Section1 />
      <WalkThrough />
      <UserResearch />
      <MonibagFindings />
      <Solution />
    </Box>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function HeadingSection() {
  return (
    <Box w="100%" bg="#ffffff">
      <Container maxW="container.xl" px={[5, 8, 12]}>
        <Flex
          direction={["column", "column", "row"]}
          alignItems={["flex-start", "flex-start", "center"]}
          gap={[8, 10, 16]}
          py={[10, 14, 20]}
        >
          {/* Text side */}
          <Box w={["100%", "100%", "45%"]} flexShrink={0}>
            {/* Back link */}
            <Flex alignItems="center" gap={1} mb={6}>
              <ArrowLeft size={16} color="var(--chakra-colors-dark-700)" />
              <ChakraLink
                as={ReactRouterLink}
                to="/"
                textDecoration="none"
                color="gray.500"
                fontSize="sm"
                fontWeight={500}
                _hover={{ color: "gray.800" }}
              >
                Back to Home
              </ChakraLink>
            </Flex>

            {/* Label */}
            <Text
              fontSize="xs"
              fontWeight={600}
              letterSpacing="0.12em"
              textTransform="uppercase"
              color="gray.400"
              mb={3}
            >
              UX Case Study
            </Text>

            <Heading
              fontSize={["3xl", "4xl", "5xl"]}
              lineHeight="1.1"
              fontWeight="semibold"
              color="gray.800"
              mb={4}
            >
              Monibag
            </Heading>

            <Text
              fontSize={["md", "lg", "xl"]}
              color="gray.500"
              lineHeight="1.7"
              maxW="480px"
            >
              A remittance app for Nigerians in the diaspora — sending money to
              loved ones in Nigeria, fast and easy.
            </Text>
          </Box>

          {/* Image side */}
          <Box
            flex={1}
            h={[260, 400, 560]}
            borderRadius="2xl"
            overflow="hidden"
            backgroundImage={`url(${project1})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            w="100%"
          />
        </Flex>
      </Container>
    </Box>
  );
}

// ─── Project Overview ────────────────────────────────────────────────────────

function Section1() {
  return (
    <Box bg="#f9f9f9" py={[12, 16, 24]}>
      <Container maxW="container.xl" px={[5, 8, 12]}>
        <RevealOnScrollFadeDown>
          <Text
            fontSize="xs"
            fontWeight={600}
            letterSpacing="0.12em"
            textTransform="uppercase"
            color="gray.400"
            mb={3}
            textAlign="center"
          >
            About the project
          </Text>
          <Heading
            fontSize={["2xl", "3xl", "4xl"]}
            color="gray.800"
            fontWeight="semibold"
            textAlign="center"
            mb={[10, 12, 16]}
          >
            Project Overview
          </Heading>
        </RevealOnScrollFadeDown>

        {/* Row 1: Product + Scope */}
        <RevealOnScrollFadeDown>
          <Flex
            direction={["column", "column", "row"]}
            gap={[8, 10, 16]}
            mb={[8, 10, 14]}
          >
            <OverviewItem label="The Product">
              Monibag is an IMTO product that bridges the gap in remittance for
              faster and easier transfer of money from the United Kingdom to
              Nigeria.
            </OverviewItem>
            <OverviewItem label="Project Scope">
              Helping UK-based users add money to their Monibag wallets, set up
              beneficiaries, and send money to Nigeria — or order an agent to
              top up an account.
            </OverviewItem>
          </Flex>
        </RevealOnScrollFadeDown>

        {/* Divider */}
        <Divider borderColor="gray.200" mb={[8, 10, 14]} />

        {/* Row 2: Team + Duration */}
        <RevealOnScrollFadeDown>
          <Flex
            direction={["column", "column", "row"]}
            gap={[8, 10, 16]}
            mb={[8, 10, 14]}
          >
            <OverviewItem label="Team">
              Product Owner, 1 Scrum Master, 2 Software Engineers, 2 Designers,
              1 QA Engineer.
            </OverviewItem>
            <OverviewItem label="Duration">1 month</OverviewItem>
          </Flex>
        </RevealOnScrollFadeDown>

        <Divider borderColor="gray.200" mb={[8, 10, 14]} />

        {/* Row 3: Role + Responsibilities */}
        <RevealOnScrollFadeDown>
          <Flex
            direction={["column", "column", "row"]}
            gap={[8, 10, 16]}
            mb={[8, 10, 14]}
          >
            <OverviewItem label="My Role">
              Lead UI/UX Designer — designed the Monibag app alongside a Junior
              Designer from conception to delivery.
            </OverviewItem>
            <Box w={["100%", "100%", "50%"]}>
              <Text
                fontSize={["xs", "xs", "sm"]}
                fontWeight={600}
                letterSpacing="0.1em"
                textTransform="uppercase"
                color="gray.400"
                mb={3}
              >
                Responsibilities
              </Text>
              <UnorderedList
                spacing={3}
                color="gray.600"
                fontSize={["sm", "md", "md"]}
              >
                <ListItem>
                  Conducting user research to understand the needs and pain
                  points of Nigerian expats.
                </ListItem>
                <ListItem>
                  Designing wireframes and interactive prototypes.
                </ListItem>
                <ListItem>
                  Creating a clean, trustworthy, and intuitive visual UI.
                </ListItem>
                <ListItem>
                  Collaborating with developers to ensure seamless
                  implementation.
                </ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </RevealOnScrollFadeDown>

        {/* Disclaimer */}
        <RevealOnScrollFadeDown>
          <Flex
            align="flex-start"
            gap={3}
            bg="white"
            border="1px solid"
            borderColor="red.100"
            borderLeft="3px solid"
            borderLeftColor="red.400"
            borderRadius="lg"
            p={[5, 6, 8]}
            mt={2}
          >
            <Box flexShrink={0} mt="2px">
              <CircleAlert size={18} color="var(--chakra-colors-dark-700)" />
            </Box>
            <Box>
              <Text
                fontSize={["sm", "sm", "md"]}
                fontWeight={600}
                color="red.600"
                mb={2}
              >
                Disclaimer
              </Text>
              <Text
                fontSize={["sm", "md", "md"]}
                color="gray.600"
                lineHeight="1.7"
              >
                The design work presented here has been modified to protect the
                Non-Disclosure Agreement. Any data displayed is not real. This
                presentation does not fully represent the products from my
                employer in their entirety.
              </Text>
            </Box>
          </Flex>
        </RevealOnScrollFadeDown>
      </Container>
    </Box>
  );
}

// Reusable overview cell
function OverviewItem({ label, children }) {
  return (
    <Box w={["100%", "100%", "50%"]}>
      <Text
        fontSize={["xs", "xs", "sm"]}
        fontWeight={600}
        letterSpacing="0.1em"
        textTransform="uppercase"
        color="gray.400"
        mb={3}
      >
        {label}
      </Text>
      <Text fontSize={["sm", "md", "md"]} color="gray.600" lineHeight="1.8">
        {children}
      </Text>
    </Box>
  );
}

export default Project1;

// ─── Walk-through / Problem + Goal ──────────────────────────────────────────

function WalkThrough() {
  return (
    <Box bg="#ffffff" py={[12, 16, 24]}>
      <Container maxW="container.xl" px={[5, 8, 12]}>
        {/* Section intro */}
        <RevealOnScrollFadeDown>
          <Heading
            fontSize={["2xl", "3xl", "4xl"]}
            fontWeight="semibold"
            color="gray.800"
            mb={2}
          >
            I know you're curious.
          </Heading>
          <Text fontSize={["lg", "xl", "2xl"]} color="gray.400" mb={[6, 8, 10]}>
            Come with me.
          </Text>
        </RevealOnScrollFadeDown>

        <RevealOnScrollFadeRight>
          <Box mb={[8, 10, 12]}>
            <ArrowDown
              size={32}
              color="var(--chakra-colors-dark-700)"
              aria-label="Scroll down"
            />
          </Box>
        </RevealOnScrollFadeRight>

        {/* Problem */}
        <RevealOnScrollFadeDown>
          <Flex
            direction={["column", "column", "row"]}
            gap={[8, 10, 16]}
            align="flex-start"
            mb={[12, 16, 20]}
          >
            <Box w={["100%", "100%", "45%"]} flexShrink={0}>
              <Text
                fontSize="xs"
                fontWeight={600}
                letterSpacing="0.12em"
                textTransform="uppercase"
                color="gray.400"
                mb={3}
              >
                The Problem
              </Text>
              <Heading
                fontSize={["xl", "2xl", "3xl"]}
                fontWeight="semibold"
                color="gray.800"
                mb={4}
                lineHeight="1.2"
              >
                Sending money home shouldn't be this hard.
              </Heading>
              <Text
                fontSize={["sm", "md", "md"]}
                color="gray.500"
                lineHeight="1.8"
              >
                Nigerians in the UK often need to send money to friends and
                family in Nigeria. Traditional remittance options can be costly,
                slow, and complicated. There was a clear need for a streamlined,
                reliable, and secure solution.
              </Text>
            </Box>
            <Box flex={1} borderRadius="xl" overflow="hidden" w="100%">
              <img
                src={ukUsers}
                alt="UK-based Nigerian users"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "12px",
                }}
              />
            </Box>
          </Flex>
        </RevealOnScrollFadeDown>

        {/* Goal */}
        <RevealOnScrollFadeDown>
          <Box
            backgroundImage="linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)"
            borderRadius="2xl"
            px={[6, 8, 16]}
            py={[8, 10, 14]}
            textAlign="center"
          >
            <Text
              fontSize="xs"
              fontWeight={600}
              letterSpacing="0.12em"
              textTransform="uppercase"
              color="gray.400"
              mb={3}
            >
              The Goal
            </Text>
            <Heading
              fontSize={["xl", "2xl", "3xl"]}
              fontWeight="semibold"
              color="gray.800"
              mb={4}
              maxW="640px"
              mx="auto"
              lineHeight="1.25"
            >
              Design a remittance app that feels effortless to use.
            </Heading>
            <Text
              fontSize={["sm", "md", "lg"]}
              color="gray.500"
              maxW="560px"
              mx="auto"
              lineHeight="1.8"
            >
              Enable UK users to send money to Nigeria quickly and securely —
              with as little friction as possible.
            </Text>
          </Box>
        </RevealOnScrollFadeDown>
      </Container>
    </Box>
  );
}

// ─── User Research ───────────────────────────────────────────────────────────

function UserResearch() {
  return (
    <Box
      backgroundImage="linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)"
      py={[12, 16, 24]}
    >
      <Container maxW="container.xl" px={[5, 8, 12]}>
        <RevealOnScrollFadeDown>
          <Text
            fontSize="xs"
            fontWeight={600}
            letterSpacing="0.12em"
            textTransform="uppercase"
            color="gray.400"
            mb={3}
            textAlign="center"
          >
            Research
          </Text>
          <Heading
            fontSize={["2xl", "3xl", "4xl"]}
            fontWeight="semibold"
            color="gray.800"
            textAlign="center"
            mb={[10, 12, 16]}
          >
            User Research Summary
          </Heading>
          <Flex
            direction={["column", "column", "row"]}
            gap={[4, 5, 6]}
            align="stretch"
          >
            <StatCard number="10" label="User Interviews" bg="#ffffff" />
            <StatCard number="30" label="Survey Responses" bg="#ffffff" />
            <StatCard number="3" label="Competitive Analyses" bg="white" />
          </Flex>
        </RevealOnScrollFadeDown>
      </Container>
    </Box>
  );
}

function StatCard({ number, label, bg }) {
  return (
    <Box
      flex={1}
      bg={bg}
      borderRadius="2xl"
      py={[8, 10, 12]}
      px={[6, 8, 10]}
      textAlign="center"
      border="1px solid"
      borderColor="gray.100"
    >
      <Text
        fontSize={["5xl", "6xl", "7xl"]}
        fontWeight={100}
        color="gray.800"
        lineHeight={1}
        mb={3}
      >
        {number}
      </Text>
      <Text fontSize={["sm", "md", "md"]} fontWeight={500} color="gray.500">
        {label}
      </Text>
    </Box>
  );
}

// ─── Findings ────────────────────────────────────────────────────────────────

function MonibagFindings() {
  return (
    <Box bg="#ffffff" py={[12, 16, 24]}>
      <Container maxW="container.xl" px={[5, 8, 12]}>
        <RevealOnScrollFadeDown>
          <Text
            fontSize="xs"
            fontWeight={600}
            letterSpacing="0.12em"
            textTransform="uppercase"
            color="gray.400"
            mb={3}
            textAlign="center"
          >
            Insights
          </Text>
          <Heading
            fontSize={["2xl", "3xl", "4xl"]}
            fontWeight="semibold"
            color="gray.800"
            textAlign="center"
            mb={[10, 12, 16]}
          >
            My Findings
          </Heading>
          <Flex
            direction={["column", "column", "row"]}
            gap={[5, 6, 8]}
            align="stretch"
          >
            <FindingCard
              stat="80%"
              color="#f9f9f9"
              statColor="primaryColor.800"
            >
              Of interview participants complained about high processing fees
              and a UX that felt confusing to new users.
            </FindingCard>
            <FindingCard
              stat="75%"
              color="#f9f9f9"
              statColor="primaryColor.800"
            >
              Of survey respondents shared the same wish — an easy app, minimal
              onboarding, frictionless transfers, and fair fees.
            </FindingCard>
          </Flex>
        </RevealOnScrollFadeDown>
      </Container>
    </Box>
  );
}

function FindingCard({ stat, color, statColor, children }) {
  return (
    <Box
      flex={1}
      bg={color}
      borderRadius="2xl"
      p={[6, 8, 10]}
      border="1px solid"
      borderColor="gray.100"
    >
      <Text
        fontSize={["4xl", "5xl", "6xl"]}
        fontWeight={100}
        color={statColor}
        lineHeight={1}
        mb={4}
      >
        {stat}
      </Text>
      <Text fontSize={["sm", "md", "md"]} color="gray.600" lineHeight="1.8">
        {children}
      </Text>
    </Box>
  );
}

// ─── Solution (placeholder) ──────────────────────────────────────────────────

function Solution() {
  const steps = [
    "The Sketch",
    "Wireframe",
    "High Fidelity",
    "Prototype",
    "Iteration",
    "Final Result",
  ];
  return (
    <Box bg="#f9f9f9" py={[12, 16, 24]}>
      <Container maxW="container.xl" px={[5, 8, 12]}>
        <RevealOnScrollFadeDown>
        <Text
          fontSize="xs"
          fontWeight={600}
          letterSpacing="0.12em"
          textTransform="uppercase"
          color="gray.400"
          mb={3}
          textAlign="center"
        >
          Design process
        </Text>
        <Heading
          fontSize={["2xl", "3xl", "4xl"]}
          fontWeight="semibold"
          color="gray.800"
          textAlign="center"
          mb={[10, 12, 16]}
        >
          Solution
        </Heading>
        <Flex
          direction={["column", "column", "row"]}
          gap={[3, 4, 4]}
          justify="center"
          flexWrap="wrap"
        >
          {steps.map((step, i) => (
            <Flex
              key={step}
              align="center"
              gap={3}
              bg="white"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="full"
              px={[5, 6]}
              py={[3, 4]}
            >
              <Text
                fontSize="xs"
                fontWeight={700}
                color="gray.300"
                minW="20px"
                textAlign="right"
              >
                0{i + 1}
              </Text>
              <Text fontSize={["sm", "md"]} fontWeight={500} color="gray.700">
                {step}
              </Text>
            </Flex>
          ))}
        </Flex>
        </RevealOnScrollFadeDown>
      </Container>
    </Box>
  );
}
