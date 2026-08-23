import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import {
  Box,
  Heading,
  Button,
  Text,
  Flex,
  Container,
  SimpleGrid,
  Image,
  Badge,
} from "@chakra-ui/react";
import { CircleAlert, ArrowLeft } from "lucide-react";
import RevealOnScrollFadeDown from "../util/RevealOnScrollFadeDown";

import doctorDashboard from "../assets/medteqprodashboard1.jpg";
import hospitalAdmin from "../assets/medteqprodashboard2.jpg";
import patientDirectory from "../assets/medteqprodashboard-1.png";

function Project2() {
  return (
    <Box>
      <HeadingSection />
      <Overview />
      <Screens />
      <ComingSoon />
    </Box>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function HeadingSection() {
  return (
    <Box w="100%" bg="#ffffff">
      <Container maxW="container.xl" px={[5, 8, 12]}>
        <Box pt={[10, 14, 20]} pb={[8, 10, 12]}>
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

          <Text
            fontSize="xs"
            fontWeight={600}
            letterSpacing="0.12em"
            textTransform="uppercase"
            color="accent.600"
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
            Medteqpro
          </Heading>

          <Text
            fontSize={["md", "lg", "xl"]}
            color="gray.500"
            lineHeight="1.7"
            maxW="620px"
            mb={8}
          >
            A hospital and patient management platform connecting Nigerian
            hospitals and patients — making it stress-free to manage records
            and share data across the Medteqpro ecosystem.
          </Text>

          <Button
            as="a"
            href="https://www.medteqpro.com"
            target="_blank"
            rel="noopener noreferrer"
            bgColor="gray.900"
            color="#fff"
            fontSize="14px"
            _hover={{ bg: "accent.600" }}
          >
            Visit Live Website
          </Button>
        </Box>

        <Box
          borderRadius="2xl"
          overflow="hidden"
          mb={[12, 16, 20]}
          boxShadow="lg"
        >
          <Image
            src={doctorDashboard}
            alt="Medteqpro doctor dashboard showing patient visits, admissions, and diagnosis breakdown"
            w="100%"
          />
        </Box>
      </Container>
    </Box>
  );
}

// ─── Overview ────────────────────────────────────────────────────────────────

function Overview() {
  return (
    <Box bg="#f9f9f9" py={[12, 16, 20]}>
      <Container maxW="container.xl" px={[5, 8, 12]}>
        <RevealOnScrollFadeDown>
          <SimpleGrid columns={{ base: 1, sm: 3 }} gap={5} mb={[10, 12, 14]}>
            <StatCard value="3+" label="User roles — hospital admin, doctor, patient" />
            <StatCard value="Pilot" label="Currently in pilot testing with partner hospitals" />
            <StatCard value="10M+" label="Potential users at national scale" />
          </SimpleGrid>
        </RevealOnScrollFadeDown>

        <RevealOnScrollFadeDown>
          <Flex direction={["column", "column", "row"]} gap={[8, 10, 16]} mb={[8, 10, 14]}>
            <OverviewItem label="The Product">
              Medteqpro is a healthtech platform that gives Nigerian hospitals
              a shared system for managing patient records, staff, and
              day-to-day clinical operations — replacing fragmented,
              paper-heavy workflows.
            </OverviewItem>
            <OverviewItem label="My Role">
              UI/UX Designer — designed the admin, doctor, and patient-facing
              experiences, from information architecture through to
              high-fidelity screens.
            </OverviewItem>
          </Flex>
        </RevealOnScrollFadeDown>

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
          >
            <Box flexShrink={0} mt="2px">
              <CircleAlert size={18} color="var(--chakra-colors-dark-700)" />
            </Box>
            <Box>
              <Text fontSize={["sm", "sm", "md"]} fontWeight={600} color="red.600" mb={2}>
                Disclaimer
              </Text>
              <Text fontSize={["sm", "md", "md"]} color="gray.600" lineHeight="1.7">
                The design work presented here has been modified to protect
                client confidentiality. Any data displayed is not real and
                does not represent actual patients or hospitals.
              </Text>
            </Box>
          </Flex>
        </RevealOnScrollFadeDown>
      </Container>
    </Box>
  );
}

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

function StatCard({ value, label }) {
  return (
    <Box bg="white" border="1px solid" borderColor="gray.100" borderRadius="2xl" px={6} py={6} textAlign="center">
      <Text fontSize={["2xl", "3xl", "3xl"]} fontWeight={600} color="gray.800" mb={2}>
        {value}
      </Text>
      <Text fontSize="sm" color="gray.500" lineHeight="1.5">
        {label}
      </Text>
    </Box>
  );
}

// ─── Screens ─────────────────────────────────────────────────────────────────

function Screens() {
  return (
    <Box bg="#ffffff" py={[12, 16, 24]}>
      <Container maxW="container.xl" px={[5, 8, 12]}>
        <RevealOnScrollFadeDown>
          <Text
            fontSize="xs"
            fontWeight={600}
            letterSpacing="0.12em"
            textTransform="uppercase"
            color="accent.600"
            mb={3}
            textAlign="center"
          >
            The Design
          </Text>
          <Heading
            fontSize={["2xl", "3xl", "4xl"]}
            fontWeight="semibold"
            color="gray.800"
            textAlign="center"
            mb={[10, 12, 16]}
          >
            A shared system for three very different users
          </Heading>
        </RevealOnScrollFadeDown>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          <ScreenCard
            image={hospitalAdmin}
            badge="Hospital Admin"
            title="Managing hospitals at a glance"
            description="A national-level overview for the platform's operators — active hospitals, staff, and subscription status in one dashboard."
          />
          <ScreenCard
            image={patientDirectory}
            badge="Front Desk / Nurse"
            title="A searchable patient directory"
            description="Every registered patient — individual or family — searchable by name or ID, with clear status and registration details for staff on the move."
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function ScreenCard({ image, badge, title, description }) {
  return (
    <RevealOnScrollFadeDown>
      <Box>
        <Box borderRadius="xl" overflow="hidden" mb={5} boxShadow="md">
          <Image src={image} alt={title} w="100%" />
        </Box>
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
          {badge}
        </Badge>
        <Heading as="h3" fontSize="lg" fontWeight={600} color="gray.800" mb={2}>
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.500" lineHeight="1.75" maxW="480px">
          {description}
        </Text>
      </Box>
    </RevealOnScrollFadeDown>
  );
}

// ─── Coming soon ─────────────────────────────────────────────────────────────

function ComingSoon() {
  return (
    <Box bg="#f9f9f9" py={[12, 16, 20]}>
      <Container maxW="container.xl" px={[5, 8, 12]}>
        <Box
          bg="white"
          border="1px solid"
          borderColor="gray.100"
          borderRadius="2xl"
          px={[6, 8, 10]}
          py={[8, 10, 12]}
          textAlign="center"
        >
          <Heading fontSize={["xl", "2xl"]} fontWeight={600} color="gray.800" mb={3}>
            The full write-up — research, wireframes, and iterations — is on its way
          </Heading>
          <Text fontSize={["sm", "md"]} color="gray.500" maxW="560px" mx="auto">
            In the meantime, explore the live product or reach out directly —
            happy to walk through the process.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

export default Project2;
