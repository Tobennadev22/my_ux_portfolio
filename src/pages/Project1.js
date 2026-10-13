import { useEffect, useRef, useState } from "react";
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
  SimpleGrid,
  Badge,
} from "@chakra-ui/react";
import "../styles/Global.css";
import project1 from "../assets/monibag-mobile-hand.png";
import {
  CircleAlert,
  ArrowLeft,
  ArrowDown,
  MoveHorizontal,
  Banknote,
  CreditCard,
  Wallet,
  Coins,
  ArrowLeftRight,
  PiggyBank,
  Users,
  ClipboardList,
  BarChart3,
} from "lucide-react";

import ukUsers from "../assets/allukusers.png";
import monibagSketch from "../assets/Monibag-sketch.jpeg";
import monibagHome from "../assets/monibag-mobile-2.jpg";
import monibagConvert from "../assets/monibag-mobile-1.jpg";
import monibagFlow from "../assets/Monibagproduct.png";
import monibagCloseup from "../assets/monibag-mobile-bold.jpg";
import monibagAddMoney from "../assets/Add Money-High-fi.png";
import monibagAdd2 from "../assets/Add-2.png";
import monibagAdd3 from "../assets/Add-3.png";
import monibagAdd4 from "../assets/Add-4.png";
import monibagAdd5 from "../assets/Add-5.png";
import monibagAdd6 from "../assets/Add-6.png";
import monibagAdd7 from "../assets/Add-7.png";
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
    <Box w="100%" bg="#ffffff" position="relative" overflow="hidden">
      {/* Subtle blurred gradient wash — yellow + orange */}
      <Box
        position="absolute"
        top="-140px"
        left="-120px"
        w="420px"
        h="420px"
        borderRadius="full"
        bg="#FFC107"
        opacity={0.2}
        sx={{ filter: "blur(110px)" }}
        zIndex={0}
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-160px"
        right="-120px"
        w="460px"
        h="460px"
        borderRadius="full"
        bg="#FF9F43"
        opacity={0.18}
        sx={{ filter: "blur(120px)" }}
        zIndex={0}
        pointerEvents="none"
      />

      {/* Subtle polka dot texture */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.7}
        zIndex={0}
        pointerEvents="none"
        sx={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.18) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />

      <Container
        maxW="container.xl"
        px={[5, 8, 12]}
        position="relative"
        zIndex={1}
      >
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
              mb={3}
            >
              UX Case Study
            </Badge>

            <Heading
              fontSize="42px"
              lineHeight="1.1"
              fontWeight="semibold"
              color="gray.800"
              mb={4}
            >
              Monibag
            </Heading>

            <Text
              fontSize="16px"
              color="gray.500"
              lineHeight="18px"
              maxW="480px"
            >
              A remittance app for Nigerians in the diaspora, sending money to
              loved ones in Nigeria, fast and easy.
            </Text>
          </Box>

          {/* Image side */}
          <Flex flex={1} w="100%" justify="center" align="center">
            <Box
              as="img"
              src={project1}
              alt="Monibag app screens showing the home dashboard and currency conversion flow"
              w="100%"
              maxH={[260, 400, 560]}
              objectFit="contain"
              sx={{ mixBlendMode: "multiply" }}
              filter="drop-shadow(0 24px 34px rgba(0,0,0,0.22))"
            />
          </Flex>
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
          <Box textAlign="center" mb={3}>
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
              About the project
            </Badge>
          </Box>
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
              Helping UK based users add money to their Monibag wallets, set up
              beneficiaries, and send money to Nigeria, or order an agent to
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
              Lead UI/UX Designer who designed the Monibag app alongside a
              Junior Designer from conception to delivery.
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
            gap={4}
            bg="gray.50"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="xl"
            p={[5, 6, 8]}
            mt={2}
          >
            <Flex
              flexShrink={0}
              align="center"
              justify="center"
              w="36px"
              h="36px"
              borderRadius="full"
              bg="accent.50"
            >
              <CircleAlert size={16} color="var(--chakra-colors-accent-600)" />
            </Flex>
            <Box>
              <Text
                fontSize="xs"
                fontWeight={600}
                letterSpacing="0.1em"
                textTransform="uppercase"
                color="accent.600"
                mb={2}
              >
                Disclaimer
              </Text>
              <Text
                fontSize={["sm", "md", "md"]}
                color="gray.600"
                lineHeight="1.75"
              >
                The design work presented here has been modified to protect the
                Non Disclosure Agreement. Any data displayed is not real. This
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
                alt="UK based Nigerian users"
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
            position="relative"
            overflow="hidden"
            bg="accent.50"
            border="1px solid"
            borderColor="accent.100"
            borderRadius="2xl"
            px={[6, 8, 16]}
            py={[8, 10, 14]}
            textAlign="center"
          >
            {/* Line-doodle finance icons scattered behind the copy */}
            {[
              { Icon: Banknote, top: "6%", left: "6%", size: 34, rotate: -16 },
              { Icon: Coins, top: "12%", right: "8%", size: 30, rotate: 12 },
              { Icon: Wallet, bottom: "10%", left: "10%", size: 32, rotate: 10 },
              {
                Icon: ArrowLeftRight,
                bottom: "14%",
                right: "12%",
                size: 28,
                rotate: -8,
              },
              {
                Icon: CreditCard,
                top: "48%",
                left: "2%",
                size: 30,
                rotate: -22,
              },
              {
                Icon: PiggyBank,
                top: "44%",
                right: "3%",
                size: 32,
                rotate: 18,
              },
            ].map(({ Icon, size, rotate, ...position }, i) => (
              <Box
                key={i}
                position="absolute"
                zIndex={0}
                display={{ base: "none", md: "block" }}
                opacity={0.25}
                transform={`rotate(${rotate}deg)`}
                {...position}
              >
                <Icon size={size} color="var(--chakra-colors-accent-600)" strokeWidth={1.5} />
              </Box>
            ))}

            <Box position="relative" zIndex={1}>
              <Badge
                bg="white"
                color="accent.700"
                fontSize="10px"
                fontWeight={600}
                letterSpacing="0.1em"
                textTransform="uppercase"
                px="8px"
                py="3px"
                borderRadius="full"
                mb={3}
              >
                The Goal
              </Badge>
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
                Enable UK users to send money to Nigeria quickly and securely
                with as little friction as possible.
              </Text>
            </Box>
          </Box>
        </RevealOnScrollFadeDown>
      </Container>
    </Box>
  );
}

// ─── User Research ───────────────────────────────────────────────────────────

const RESEARCH_STATS = [
  { icon: Users, number: 10, label: "User Interviews" },
  { icon: ClipboardList, number: 30, label: "Survey Responses" },
  { icon: BarChart3, number: 3, label: "Competitive Analyses" },
];

function UserResearch() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      backgroundImage="linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)"
      py={[12, 16, 24]}
    >
      <Container maxW="container.xl" px={[5, 8, 12]}>
        <RevealOnScrollFadeDown>
          <Box textAlign="center" mb={3}>
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
              Research
            </Badge>
          </Box>
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
            ref={sectionRef}
            direction={["column", "column", "row"]}
            gap={[4, 5, 6]}
            align="stretch"
          >
            {RESEARCH_STATS.map((stat, i) => (
              <StatCard key={stat.label} {...stat} inView={inView} delay={i * 0.15} />
            ))}
          </Flex>
        </RevealOnScrollFadeDown>
      </Container>
    </Box>
  );
}

function StatCard({ icon: Icon, number, label, inView, delay = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    let frameId;
    const duration = 1200;

    const timeoutId = setTimeout(() => {
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(number * eased));
        if (progress < 1) frameId = requestAnimationFrame(step);
      };
      frameId = requestAnimationFrame(step);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [inView, number, delay]);

  return (
    <Box
      flex={1}
      bg="white"
      borderRadius="2xl"
      py={[8, 10, 12]}
      px={[6, 8, 10]}
      textAlign="center"
      border="1px solid"
      borderColor="gray.100"
    >
      <Flex
        align="center"
        justify="center"
        w="48px"
        h="48px"
        borderRadius="full"
        bg="accent.50"
        mx="auto"
        mb={4}
      >
        <Icon size={22} color="var(--chakra-colors-accent-600)" />
      </Flex>
      <Text
        fontSize={["5xl", "6xl", "7xl"]}
        fontWeight={100}
        color="gray.800"
        lineHeight={1}
        mb={3}
      >
        {count}
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
          <Box textAlign="center" mb={3}>
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
              Insights
            </Badge>
          </Box>
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
              Of survey respondents shared the same wish: an easy app, minimal
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

// ─── Solution ─────────────────────────────────────────────────────────────────

const PROCESS_STEPS = [
  { id: "sketch", label: "The Sketch" },
  { id: "low-fidelity", label: "Low Fidelity" },
  { id: "high-fidelity", label: "High Fidelity" },
  { id: "prototype", label: "Prototype" },
  { id: "iteration", label: "Iteration" },
  { id: "final-result", label: "Final Result" },
];

function Solution() {
  const [activeId, setActiveId] = useState(PROCESS_STEPS[0].id);

  useEffect(() => {
    const sections = PROCESS_STEPS.map(({ id }) =>
      document.getElementById(id),
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-160px 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <Box bg="#f9f9f9" py={[12, 16, 24]}>
      <Container maxW="container.xl" px={[5, 8, 12]}>
        {/* Intro */}
        <RevealOnScrollFadeDown>
          <Box textAlign="center" mb={3}>
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
              Design process
            </Badge>
          </Box>
          <Heading
            fontSize={["2xl", "3xl", "4xl"]}
            fontWeight="semibold"
            color="gray.800"
            textAlign="center"
            mb={5}
          >
            Solution
          </Heading>
          <Text
            fontSize={["sm", "md", "lg"]}
            color="gray.500"
            textAlign="center"
            maxW="640px"
            mx="auto"
            lineHeight="1.8"
            mb={[10, 12, 16]}
          >
            Six stages, one question running through all of them: what does
            someone need to see, in what order, to trust an app with money meant
            for their family?
          </Text>
        </RevealOnScrollFadeDown>

        {/* Roadmap — sticky pill nav, jumps to each stage below */}
        <Box
          position="sticky"
          top="64px"
          zIndex={5}
          bg="#f9f9f9"
          py={4}
          mb={[10, 12, 16]}
        >
          <Flex
            direction={["column", "column", "row"]}
            gap={[3, 4, 4]}
            justify="center"
            flexWrap="wrap"
          >
            {PROCESS_STEPS.map(({ id, label }, i) => {
              const isActive = activeId === id;
              return (
                <ChakraLink
                  key={id}
                  href={`#${id}`}
                  textDecoration="none"
                  _hover={{ textDecoration: "none" }}
                >
                  <Flex
                    align="center"
                    gap={3}
                    bg={isActive ? "accent.600" : "white"}
                    border="1px solid"
                    borderColor={isActive ? "accent.600" : "gray.200"}
                    borderRadius="full"
                    px={[5, 6]}
                    py={[3, 4]}
                    transition="border-color 0.2s ease, background 0.2s ease"
                    _hover={
                      isActive
                        ? undefined
                        : { borderColor: "accent.400", bg: "accent.50" }
                    }
                  >
                    <Text
                      fontSize="xs"
                      fontWeight={700}
                      color={isActive ? "whiteAlpha.700" : "gray.300"}
                      minW="20px"
                      textAlign="right"
                    >
                      0{i + 1}
                    </Text>
                    <Text
                      fontSize={["sm", "md"]}
                      fontWeight={500}
                      color={isActive ? "white" : "gray.700"}
                    >
                      {label}
                    </Text>
                  </Flex>
                </ChakraLink>
              );
            })}
          </Flex>
        </Box>

        {/* 01 — The Sketch */}
        <ProcessStage
          id="sketch"
          number="01"
          label="The Sketch"
          heading="Where does someone's thumb go first when they're anxious about money?"
          image={{
            src: monibagSketch,
            alt: "Hand drawn pen sketches mapping the home, currency conversion, and transaction list screens",
          }}
        >
          <Text mb={5}>
            Before I opened Figma, I sketched the journey by hand: a UK based
            user waking up to a message from home, needing to send money fast.
            Every sketch started from that moment of urgency, not from a feature
            list. I wasn't drawing screens yet, I was drawing the decisions
            someone has to make in the ninety seconds between opening the app
            and hitting send.
          </Text>
          <Text>
            Those early sketches were rough: arrows connecting a home screen to
            an amount field to a confirmation, nothing more. But they forced one
            decision early that shaped everything after: currency conversion
            couldn't be a separate errand tucked away in a menu. It had to sit
            right next to "send."
          </Text>
        </ProcessStage>

        {/* 02 — Low Fidelity */}
        <ProcessStage
          id="low-fidelity"
          number="02"
          label="Low Fidelity"
          heading="Stripping away colour to see if the flow actually held up"
          reverse
          visual={<PhoneSlider grayscale items={LOW_FIDELITY_ITEMS} />}
        >
          <Text mb={5}>
            With the shape of the journey agreed, I moved into low fidelity,
            greyscale screens (home, add money, convert, send, confirm) and
            walked people through them on paper before touching any visual
            design. No colour, no branding, just the flow.
          </Text>
          <Text>
            Watching where people hesitated told me more than any survey could.
            Most paused right before "Convert," unsure whether the number in
            front of them was pounds or naira. That single hesitation fed into a
            redesign that put both currencies on screen at once, side by side,
            before anyone had to tap a thing.
          </Text>
        </ProcessStage>

        {/* 03 — High Fidelity */}
        <ProcessStage
          id="high-fidelity"
          number="03"
          label="High Fidelity"
          heading="Giving the app a colour language that says this is safe"
          visual={
            <PhoneSlider
              items={[
                {
                  src: monibagAddMoney,
                  alt: "Monibag add money screen with currency conversion in high fidelity",
                },
                {
                  src: monibagAdd3,
                  alt: "Monibag onboarding screen: Send Money across Borders",
                },
                {
                  src: monibagAdd4,
                  alt: "Monibag onboarding screen: Best Exchange Rates Guaranteed",
                },
                {
                  src: monibagAdd2,
                  alt: "Monibag onboarding screen: Instant Money No Waiting",
                },
                {
                  src: monibagAdd7,
                  alt: "Monibag add money method selection screen",
                },
                {
                  src: monibagAdd6,
                  alt: "Monibag bank transfer account details screen",
                },
                {
                  src: monibagAdd5,
                  alt: "Monibag profile settings screen",
                },
              ]}
            />
          }
        >
          <Text mb={5}>
            Once the structure was proven, I could think about how the app
            should feel. I leaned on warm gold against black, with a touch of
            green as a nod to home, without being literal about it, and let the
            numbers do the talking. Balances and amounts are the largest,
            boldest thing on every screen, because these are read in a hurry,
            not admired.
          </Text>
          <Text>
            Trust showed up in small decisions too: the account number stays
            visible even when the balance is hidden, because a masked account
            feels like something's wrong, not like privacy.
          </Text>
        </ProcessStage>

        {/* Visual language — colour, type, and style used to build the UI */}
        <StyleGuide />

        {/* 04 — Prototype */}
        <ProcessStage
          id="prototype"
          number="04"
          label="Prototype"
          heading="Connecting every screen so it could be tested like the real thing"
          reverse
          image={{
            src: monibagFlow,
            alt: "Connected Monibag screens forming the full send money prototype",
          }}
        >
          <Text mb={5}>
            High fidelity screens don't tell you much on their own. You have to
            link them up and let someone move through them the way they actually
            would. I wired home, add money, payment method, convert, and send
            into one interactive Figma prototype and ran it past the same people
            from the low fidelity round.
          </Text>
          <Text>
            The goal wasn't to show off the visuals. It was to see whether the
            flow I'd been defending on paper still made sense once it looked and
            felt like a real app.
          </Text>
        </ProcessStage>

        {/* 05 — Iteration */}
        <ProcessStage
          id="iteration"
          number="05"
          label="Iteration"
          heading="What testing told me I'd gotten wrong"
        >
          <Text mb={5}>
            Two things didn't survive contact with real users. Hiding the
            balance by default, my "privacy first" instinct, read as broken to
            first time users, who assumed the app had failed to load their
            account. I flipped the default to visible, with a one tap toggle for
            the people who did want it hidden.
          </Text>
          <Text>
            The second was the fee. Burying the exchange rate and charge below
            the "Convert" button meant people committed to a transfer before
            they'd properly seen what it cost them, and that's exactly the kind
            of thing that erodes trust in a remittance app. I moved the full
            breakdown (rate, fee, total) above the button, not below it.
          </Text>
        </ProcessStage>

        {/* 06 — Final Result */}
        <ProcessStage
          id="final-result"
          number="06"
          label="Final Result"
          heading="An app that gets out of the way of sending money home"
          reverse
          image={{
            src: monibagCloseup,
            alt: "Close up of the finished Monibag currency conversion screen",
          }}
        >
          <Text mb={5}>
            What shipped kept the sketch's original instinct intact: never make
            someone leave the send flow to go figure out an exchange rate
            somewhere else. Everything from the account dashboard to the
            confirmation screen was built to answer one question as fast as
            possible: how much is this going to cost, and how much will
            actually land.
          </Text>
          <Text>
            It's a small app doing something people care about deeply. That was
            always the actual brief, even when the task on paper just said
            "design a low fidelity screen."
          </Text>
        </ProcessStage>
      </Container>
    </Box>
  );
}

// ─── Low Fidelity — the same screens shown in the High Fidelity slider,
// rendered in grayscale via the `grayscale` prop on PhoneSlider ────────────

const LOW_FIDELITY_ITEMS = [
  {
    src: monibagAddMoney,
    alt: "Monibag add money screen with currency conversion in low fidelity",
  },
  {
    src: monibagAdd3,
    alt: "Monibag onboarding screen in low fidelity: Send Money across Borders",
  },
  {
    src: monibagAdd4,
    alt: "Monibag onboarding screen in low fidelity: Best Exchange Rates Guaranteed",
  },
  {
    src: monibagAdd2,
    alt: "Monibag onboarding screen in low fidelity: Instant Money No Waiting",
  },
  {
    src: monibagAdd7,
    alt: "Monibag add money method selection screen in low fidelity",
  },
  {
    src: monibagAdd6,
    alt: "Monibag bank transfer account details screen in low fidelity",
  },
  {
    src: monibagAdd5,
    alt: "Monibag profile settings screen in low fidelity",
  },
];

// Reusable process-stage block: numbered label, storytelling heading, copy,
// and an optional image (or pair of images) alternating sides per stage.
function ProcessStage({
  id,
  number,
  label,
  heading,
  children,
  image,
  images,
  visual,
  reverse = false,
}) {
  const hasVisual = Boolean(image || images || visual);

  return (
    <Box id={id} scrollMarginTop="150px">
      <RevealOnScrollFadeDown>
        <Flex
          direction={[
            "column",
            "column",
            hasVisual ? (reverse ? "row-reverse" : "row") : "column",
          ]}
          gap={[8, 10, 16]}
          align={hasVisual ? "center" : "flex-start"}
          mt={[14, 16, 20]}
        >
          <Box w={hasVisual ? ["100%", "100%", "45%"] : "100%"} flexShrink={0}>
            <Flex
              align="center"
              gap={2}
              display="inline-flex"
              bg="accent.50"
              borderRadius="full"
              px="10px"
              py="4px"
              mb={4}
            >
              <Text fontSize="10px" fontWeight={700} color="accent.400">
                {number}
              </Text>
              <Text
                fontSize="10px"
                fontWeight={600}
                letterSpacing="0.1em"
                textTransform="uppercase"
                color="accent.700"
              >
                {label}
              </Text>
            </Flex>
            <Heading
              fontSize={["xl", "2xl", "3xl"]}
              fontWeight="semibold"
              color="gray.800"
              mb={5}
              lineHeight="1.3"
              maxW={hasVisual ? "560px" : "720px"}
            >
              {heading}
            </Heading>
            <Box
              fontSize={["sm", "md", "md"]}
              color="gray.500"
              lineHeight="1.8"
              maxW={hasVisual ? "560px" : "720px"}
            >
              {children}
            </Box>
          </Box>

          {hasVisual && (
            <Box flex={1} w="100%">
              {visual ? (
                visual
              ) : images ? (
                <Flex gap={[4, 5, 6]} direction={["column", "row"]}>
                  {images.map((img) => (
                    <Box
                      key={img.src}
                      flex={1}
                      borderRadius="xl"
                      overflow="hidden"
                      boxShadow="md"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                        }}
                      />
                    </Box>
                  ))}
                </Flex>
              ) : (
                <Box borderRadius="xl" overflow="hidden" boxShadow="md">
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </Box>
              )}
            </Box>
          )}
        </Flex>
      </RevealOnScrollFadeDown>
    </Box>
  );
}

// Continuously auto-scrolling strip of phone screens — drifts on its own,
// pauses on hover, and can be dragged with the cursor (or swiped on touch).
function PhoneSlider({ items, grayscale = false }) {
  const trackRef = useRef(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0 });
  const paused = useRef(false);
  const loopItems = [...items, ...items];

  const beginDrag = (pageX) => {
    const track = trackRef.current;
    if (!track) return;
    paused.current = true;
    drag.current = {
      active: true,
      startX: pageX,
      startScroll: track.scrollLeft,
    };
  };

  const moveDrag = (pageX) => {
    const track = trackRef.current;
    if (!track || !drag.current.active) return;
    track.scrollLeft = drag.current.startScroll - (pageX - drag.current.startX);
  };

  const endDrag = () => {
    drag.current.active = false;
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const SPEED = 1; // px per frame — a slow, deliberate drift
    let frameId;

    const step = () => {
      if (!paused.current) {
        const loopWidth = track.scrollWidth / 2;
        track.scrollLeft += SPEED;
        if (track.scrollLeft >= loopWidth) {
          track.scrollLeft -= loopWidth;
        }
      }
      frameId = requestAnimationFrame(step);
    };
    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <Box>
      <Box
        ref={trackRef}
        onMouseEnter={() => {
          paused.current = true;
        }}
        onMouseLeave={() => {
          paused.current = false;
          endDrag();
        }}
        onMouseDown={(e) => beginDrag(e.pageX)}
        onMouseMove={(e) => {
          if (!drag.current.active) return;
          e.preventDefault();
          moveDrag(e.pageX);
        }}
        onMouseUp={endDrag}
        onTouchStart={(e) => {
          paused.current = true;
          beginDrag(e.touches[0].pageX);
        }}
        onTouchMove={(e) => moveDrag(e.touches[0].pageX)}
        onTouchEnd={() => {
          paused.current = false;
          endDrag();
        }}
        display="flex"
        gap={[4, 5, 6]}
        overflowX="auto"
        cursor="grab"
        _active={{ cursor: "grabbing" }}
        userSelect="none"
        pb={2}
        sx={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {loopItems.map((item, i) => (
          <Box
            key={`${item.key || item.src}-${i}`}
            flex="0 0 auto"
            w={["78%", "62%", "50%"]}
            borderRadius="xl"
            overflow="hidden"
            boxShadow="md"
          >
            {item.node ? (
              item.node
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                draggable={false}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  pointerEvents: "none",
                  filter: grayscale ? "grayscale(100%)" : undefined,
                }}
              />
            )}
          </Box>
        ))}
      </Box>
      <Flex align="center" gap={2} mt={3} color="gray.400">
        <MoveHorizontal size={14} />
        <Text fontSize="xs">Hover to pause, drag to explore</Text>
      </Flex>
    </Box>
  );
}

// ─── Visual language — colour, type, and style ────────────────────────────────

const COLOR_FAMILIES = [
  {
    name: "Ink",
    role: "Primary text & buttons",
    scale: {
      50: "#F7F6F4",
      100: "#EDEAE5",
      200: "#D5D0C7",
      300: "#B0A897",
      400: "#857A65",
      500: "#5C5343",
      600: "#413A2D",
      700: "#2E2820",
      800: "#1F1B13",
      900: "#121009",
    },
  },
  {
    name: "Gold",
    role: "Balance cards & highlights",
    scale: {
      50: "#FFFCF3",
      100: "#FCF3DC",
      200: "#F5DA8B",
      300: "#EFC85C",
      400: "#E4B02F",
      500: "#CF9A1B",
      600: "#A87A12",
      700: "#805C0D",
      800: "#594009",
      900: "#332505",
    },
  },
  {
    name: "Amber",
    role: "Primary calls to action",
    scale: {
      50: "#FFF7EB",
      100: "#FEE8C7",
      200: "#FBCE86",
      300: "#F7B860",
      400: "#F2A93B",
      500: "#DC8E1E",
      600: "#B37217",
      700: "#895711",
      800: "#613C0C",
      900: "#3A2407",
    },
  },
  {
    name: "Leaf",
    role: "Success states & profile accents",
    scale: {
      50: "#F3FAEE",
      100: "#E1F3D6",
      200: "#C4E7AE",
      300: "#A6D988",
      400: "#8FCB6B",
      500: "#6FAE4B",
      600: "#568B39",
      700: "#416A2B",
      800: "#2C481D",
      900: "#192A10",
    },
  },
  {
    name: "Paper",
    role: "App background",
    scale: {
      50: "#FFFFFF",
      100: "#FDFDFC",
      200: "#FAFAF8",
      300: "#F0F0EC",
      400: "#DFDFD8",
      500: "#C4C4B9",
      600: "#A0A090",
      700: "#78786A",
      800: "#4E4E43",
      900: "#27271F",
    },
  },
  {
    name: "Slate",
    role: "Secondary text",
    scale: {
      50: "#F8F9FA",
      100: "#EEF0F2",
      200: "#D8DCE1",
      300: "#B7BEC7",
      400: "#929BA8",
      500: "#6B7280",
      600: "#545B67",
      700: "#3F444D",
      800: "#2A2E34",
      900: "#17191C",
    },
  },
];

function StyleGuide() {
  return (
    <RevealOnScrollFadeDown>
      <Box
        mt={[10, 12, 14]}
        bg="white"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="2xl"
        p={[6, 8, 10]}
      >
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
          mb={2}
        >
          Visual Language
        </Badge>
        <Heading
          fontSize={["lg", "xl", "2xl"]}
          fontWeight="semibold"
          color="gray.800"
          mb={8}
          lineHeight="1.3"
        >
          The style, colour, and type that carry it all
        </Heading>

        {/* Colour */}
        <Box mb={[10, 10, 14]}>
          <Text fontSize="sm" fontWeight={600} color="gray.700" mb={5}>
            Colour
          </Text>
          <Flex direction="column" gap={6}>
            {COLOR_FAMILIES.map(({ name, role, scale }) => (
              <Box key={name}>
                <Flex
                  align="baseline"
                  justify="space-between"
                  flexWrap="wrap"
                  gap={1}
                  mb={2}
                >
                  <Text fontSize="sm" fontWeight={600} color="gray.800">
                    {name}
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    {role}
                  </Text>
                </Flex>
                <SimpleGrid columns={{ base: 5, sm: 9 }} gap={1}>
                  {Object.entries(scale).map(([step, hex]) => (
                    <Box key={step} textAlign="center">
                      <Box
                        h={["32px", "40px"]}
                        borderRadius="6px"
                        bg={hex}
                        border="1px solid"
                        borderColor="blackAlpha.100"
                        mb={1}
                      />
                      <Text fontSize="9px" color="gray.400">
                        {step}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </Box>
            ))}
          </Flex>
        </Box>

        {/* Typography */}
        <Box>
          <Text fontSize="sm" fontWeight={600} color="gray.700" mb={4}>
            Typography
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
            <Box
              bg="gray.50"
              borderRadius="lg"
              p={5}
              display="flex"
              alignItems="center"
              gap={5}
            >
              <Text fontSize="4xl" fontWeight="700" color="gray.800">
                Aa
              </Text>
              <Box>
                <Text fontSize="sm" fontWeight={600} color="gray.800">
                  Amounts & balances
                </Text>
                <Text fontSize="xs" color="gray.500" lineHeight="1.5">
                  Bold, oversized numerals: the one thing every screen needs to
                  be readable at a glance.
                </Text>
              </Box>
            </Box>
            <Box
              bg="gray.50"
              borderRadius="lg"
              p={5}
              display="flex"
              alignItems="center"
              gap={5}
            >
              <Text fontSize="4xl" fontWeight="400" color="gray.800">
                Aa
              </Text>
              <Box>
                <Text fontSize="sm" fontWeight={600} color="gray.800">
                  Labels & body copy
                </Text>
                <Text fontSize="xs" color="gray.500" lineHeight="1.5">
                  Regular weight, smaller scale: present for context, never
                  competing with the numbers.
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Style principles */}
        <Box mt={8} pt={8} borderTop="1px solid" borderColor="gray.100">
          <Text fontSize="sm" fontWeight={600} color="gray.700" mb={4}>
            Style principles
          </Text>
          <SimpleGrid columns={{ base: 1, sm: 3 }} gap={4}>
            {[
              "Rounded corners and soft shadows throughout: nothing sharp or clinical for an app handling family money.",
              "Colour used sparingly and with intent: gold marks value, amber marks action, everything else stays neutral.",
              "Generous white space between actions, so the next tap is never in doubt.",
            ].map((item) => (
              <Box key={item} bg="gray.50" borderRadius="lg" px={4} py={3}>
                <Text fontSize="xs" color="gray.600" lineHeight="1.6">
                  {item}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </RevealOnScrollFadeDown>
  );
}
