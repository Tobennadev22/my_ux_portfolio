import { Link as ReactRouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Badge,
  Divider,
  Image,
  Link as ChakraLink,
  SimpleGrid,
} from "@chakra-ui/react";

import {
  Landmark,
  ShieldCheck,
  FileBarChart,
  ClipboardCheck,
  ArrowLeft,
} from "lucide-react";
import RevealOnScrollFadeDown from "../util/RevealOnScrollFadeDown";
import tmrasHero from "../assets/tmras-laptop.png";

// ─── Placeholder image component ─────────────────────────────────────────────
// Replace `src` prop with real product screens when available.

function PlaceholderImage({ label, aspectRatio = "16/9", src, alt }) {
  return (
    <Box
      w="100%"
      aspectRatio={aspectRatio}
      borderRadius="16px"
      overflow="hidden"
      bg="gray.100"
      position="relative"
    >
      {src ? (
        <Image
          src={src}
          alt={alt || label}
          w="100%"
          h="100%"
          objectFit="cover"
        />
      ) : (
        <Flex
          w="100%"
          h="100%"
          minH="200px"
          align="center"
          justify="center"
          direction="column"
          gap={2}
          border="2px dashed"
          borderColor="gray.300"
          borderRadius="16px"
          bg="gray.50"
        >
          <Box fontSize="28px">🖼️</Box>
          <Text fontSize="xs" color="gray.400" textAlign="center" px={4}>
            {label}
          </Text>
        </Flex>
      )}
    </Box>
  );
}

// ─── Section wrapper ──────────────────────────────────────────────────────────

function Section({ eyebrow, title, children, pb }) {
  return (
    <RevealOnScrollFadeDown>
      <Box as="section" pb={pb || { base: "64px", md: "96px" }}>
        {eyebrow && (
          <Badge
            bg="accent.50"
            color="accent.700"
            fontSize="10px"
            letterSpacing="0.12em"
            textTransform="uppercase"
            borderRadius="full"
            px="8px"
            py="3px"
            mb={3}
          >
            {eyebrow}
          </Badge>
        )}
        {title && (
          <Heading
            as="h2"
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="600"
            color="gray.700"
            mb={6}
            lineHeight="1.3"
          >
            {title}
          </Heading>
        )}
        {children}
      </Box>
    </RevealOnScrollFadeDown>
  );
}

// ─── Stat card ────────────────────────────────────────────────────────────────

function StatCard({ value, label }) {
  return (
    <Box bg="gray.50" borderRadius="12px" px={6} py={5}>
      <Text
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="400"
        color="gray.800"
        lineHeight="1"
      >
        {value}
      </Text>
      <Text fontSize="xs" color="gray.500" mt={1} lineHeight="1.5">
        {label}
      </Text>
    </Box>
  );
}

// ─── Finding card ─────────────────────────────────────────────────────────────

function FindingCard({ icon: Icon, title, body }) {
  return (
    <Box bg="gray.50" borderRadius="12px" p={6}>
      <Box mb={3}>
        <Icon size={24} color="var(--chakra-colors-dark-700)" />
      </Box>
      <Text fontSize="sm" fontWeight="600" color="gray.700" mb={2}>
        {title}
      </Text>
      <Text fontSize="sm" color="gray.500" lineHeight="1.75">
        {body}
      </Text>
    </Box>
  );
}

// ─── Main case study page ─────────────────────────────────────────────────────

function Project4() {
  return (
    <Box bg="white" minH="100vh">
      <Container maxW="container.lg" px={{ base: 5, md: 10 }}>
        {/* ── Hero ── */}
        <Box
          pt={{ base: "72px", md: "96px" }}
          pb={{ base: "48px", md: "72px" }}
        >
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

          <Badge
            bg="accent.50"
            color="accent.700"
            fontSize="10px"
            letterSpacing="0.12em"
            textTransform="uppercase"
            borderRadius="full"
            px="8px"
            py="3px"
            mb={4}
          >
            UX / Product Design · GovTech
          </Badge>
          <Heading
            as="h2"
            fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
            fontWeight="600"
            color="gray.800"
            lineHeight="1.35"
            mb={3}
          >
            TMRAS: Designing a treasury management system for Nigeria's
            Federal Government
          </Heading>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.500"
            maxW="600px"
            lineHeight="1.5"
            mb={10}
          >
            A UX case study on TMRAS, a treasury management platform built to
            give federal agencies real-time visibility into budgets,
            disbursements, and financial reporting, with the audit trail
            oversight that public funds demand.
          </Text>

          {/* Meta row */}
          <Flex
            direction={{ base: "column", sm: "row" }}
            gap={{ base: 6, sm: 10 }}
            pb={10}
            borderBottom="1px solid"
            borderColor="gray.100"
          >
            {[
              { label: "Role", value: "Product Designer" },
              { label: "Sector", value: "Government / Public Finance" },
              { label: "Platform", value: "Web" },
              { label: "Tools", value: "Figma, FigJam" },
            ].map(({ label, value }) => (
              <Box key={label}>
                <Text
                  fontSize="10px"
                  color="gray.400"
                  textTransform="uppercase"
                  letterSpacing="0.1em"
                  mb={1}
                >
                  {label}
                </Text>
                <Text fontSize="sm" fontWeight="600" color="gray.700">
                  {value}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>

        {/* Hero image */}
        <RevealOnScrollFadeDown>
          <Box pb={{ base: "48px", md: "64px" }}>
            <Box borderRadius="2xl" overflow="hidden" boxShadow="lg">
              <Image
                src={tmrasHero}
                alt="TMRAS treasury dashboard shown on a laptop, displaying budget and disbursement data"
                w="100%"
              />
            </Box>
          </Box>
        </RevealOnScrollFadeDown>

        {/* ── Stats ── */}
        <RevealOnScrollFadeDown>
          <Box pb={{ base: "64px", md: "96px" }}>
            <SimpleGrid columns={{ base: 2, md: 4 }} gap={4}>
              <StatCard value="MDAs" label="Ministries, departments & agencies onboarded" />
              <StatCard value="4" label="Core modules: budgeting, disbursement, reporting, audit" />
              <StatCard value="3" label="User roles: officer, approver, auditor" />
              <StatCard value="100%" label="Actions logged for audit and compliance" />
            </SimpleGrid>
          </Box>
        </RevealOnScrollFadeDown>

        <Divider borderColor="gray.100" mb={{ base: "64px", md: "96px" }} />

        {/* ── Problem ── */}
        <Section
          eyebrow="01: Problem"
          title="Public funds were being tracked across spreadsheets and paper trails"
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.500"
            lineHeight="1.8"
            maxW="680px"
            mb={8}
          >
            Before TMRAS, budget allocations, disbursements, and expenditure
            reports moved between agencies through disconnected spreadsheets
            and manual sign-offs. There was no single source of truth for how
            much a ministry, department, or agency (MDA) had been allocated,
            what had been spent, and what remained, which made oversight slow
            and reconciliation error prone.
          </Text>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.500"
            lineHeight="1.8"
            maxW="680px"
            mb={10}
          >
            Auditors had no consistent trail to follow, approvers had limited
            visibility into requests waiting on them, and finance officers
            spent more time chasing status updates than managing budgets.
          </Text>
          <PlaceholderImage
            label="Problem context: legacy workflow / pain point map"
            aspectRatio="16/9"
          />
        </Section>

        {/* ── Goal ── */}
        <Section
          eyebrow="02: Goal"
          title="Give every stakeholder (from finance officer to auditor) one trusted system"
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.500"
            lineHeight="1.8"
            maxW="680px"
            mb={8}
          >
            The goal was to design a system that made budget requests,
            approvals, and disbursements transparent and traceable end to end,
            without adding friction to the day to day work of the people
            who use it.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={5} mb={10}>
            {[
              {
                role: "Finance Officer",
                goal: "Submit and track budget requests and disbursements without needing to follow up by phone or email to know where a request stands.",
              },
              {
                role: "Approver",
                goal: "See exactly what's waiting on their decision, with enough context to approve or reject confidently and quickly.",
              },
              {
                role: "Auditor / Oversight",
                goal: "Trace any transaction back through its full approval and disbursement history without requesting records from another agency.",
              },
            ].map(({ role, goal }) => (
              <Box key={role} bg="gray.50" borderRadius="12px" p={6}>
                <Badge colorScheme="gray" fontSize="10px" mb={3}>
                  {role}
                </Badge>
                <Text fontSize="sm" color="gray.600" lineHeight="1.75">
                  {goal}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Section>

        {/* ── Research ── */}
        <Section
          eyebrow="03: Research"
          title="Understanding how budgets actually move through government agencies"
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.500"
            lineHeight="1.8"
            maxW="680px"
            mb={8}
          >
            I worked closely with finance officers, budget approvers, and
            audit staff to map the existing request to disbursement workflow:
            where approvals stalled, which records were hardest to retrieve,
            and what "trust" looked like to people responsible for public
            money.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mb={10}>
            <PlaceholderImage
              label="Research method: stakeholder interview notes"
              aspectRatio="4/3"
            />
            <PlaceholderImage
              label="Process mapping: budget request to disbursement flow"
              aspectRatio="4/3"
            />
          </SimpleGrid>

          <Text fontSize="sm" fontWeight="600" color="gray.700" mb={4}>
            Research methods used
          </Text>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={4}>
            {[
              "Stakeholder interviews (finance & audit staff)",
              "Workflow & process mapping",
              "Review of existing reporting templates",
              "Compliance & audit requirement review",
            ].map((item) => (
              <Box key={item} bg="gray.50" borderRadius="10px" px={4} py={3}>
                <Text fontSize="xs" color="gray.600" lineHeight="1.6">
                  {item}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Section>

        {/* ── Findings ── */}
        <Section
          eyebrow="04: Findings"
          title="Four patterns shaped the direction of the design"
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} mb={10}>
            <FindingCard
              icon={Landmark}
              title="Budget status was invisible across agencies"
              body="Officers couldn't see remaining balances or the status of a request without contacting another department directly, causing constant back and forth."
            />
            <FindingCard
              icon={ClipboardCheck}
              title="Approvals lacked context"
              body="Approvers were asked to sign off on requests with little supporting detail, which either stalled decisions or led to approvals without real scrutiny."
            />
            <FindingCard
              icon={ShieldCheck}
              title="Audit trails were assembled after the fact"
              body="Reconstructing a transaction's history for audit meant pulling records from multiple sources instead of reading a single, always-current trail."
            />
            <FindingCard
              icon={FileBarChart}
              title="Reporting was a manual, periodic exercise"
              body="Expenditure reports were compiled by hand at reporting intervals rather than reflecting real-time spend, delaying oversight decisions."
            />
          </SimpleGrid>
          <PlaceholderImage
            label="Findings synthesis: journey map or 'how might we' board"
            aspectRatio="16/7"
          />
        </Section>

        {/* ── Solution ── */}
        <Section
          eyebrow="05: Solution"
          title="A single system spanning budgeting, disbursement, and audit"
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.500"
            lineHeight="1.8"
            maxW="680px"
            mb={10}
          >
            TMRAS is built around four connected modules, so a naira allocated
            in a budget can be followed all the way through approval,
            disbursement, and reporting, with a complete audit trail at
            every step.
          </Text>

          {[
            {
              module: "Budget Planning & Allocation",
              description:
                "Agencies submit and track budget allocations against approved ceilings, with real-time visibility into what's been committed and what remains available.",
              imagelabel: "Budget allocation dashboard: final design",
            },
            {
              module: "Disbursement & Payment Tracking",
              description:
                "A structured request to payment workflow with role-based approvals, so every disbursement is authorized, logged, and traceable back to its source budget line.",
              imagelabel: "Disbursement request flow: final design",
            },
            {
              module: "Multi-Agency Reporting",
              description:
                "Real-time expenditure and balance reporting across MDAs, replacing periodic manual compilation with dashboards that reflect current spend.",
              imagelabel: "Reporting dashboard: final design",
            },
            {
              module: "Audit & Compliance Trail",
              description:
                "Every request, approval, and disbursement is logged automatically, giving auditors a complete, always-available trail without needing to request records manually.",
              imagelabel: "Audit trail view: final design",
            },
          ].map(({ module, description, imagelabel }, i) => (
            <Box key={module} mb={{ base: "56px", md: "80px" }}>
              <Flex
                direction={{
                  base: "column",
                  md: i % 2 === 0 ? "row" : "row-reverse",
                }}
                gap={{ base: 8, md: 14 }}
                align={{ base: "flex-start", md: "center" }}
              >
                <Box flex="1">
                  <Badge colorScheme="gray" fontSize="10px" mb={3}>
                    {module}
                  </Badge>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    fontWeight="600"
                    color="gray.700"
                    mb={3}
                    lineHeight="1.4"
                  >
                    {module}
                  </Text>
                  <Text fontSize="sm" color="gray.500" lineHeight="1.8">
                    {description}
                  </Text>
                </Box>
                <Box flex="1.4" w={{ base: "100%", md: "auto" }}>
                  <PlaceholderImage label={imagelabel} aspectRatio="4/3" />
                </Box>
              </Flex>
            </Box>
          ))}
        </Section>

        <Divider borderColor="gray.100" mb={{ base: "64px", md: "96px" }} />

        {/* ── Wireframes ── */}
        <Section
          eyebrow="06: Wireframes"
          title="Validating structure before visual design"
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.500"
            lineHeight="1.8"
            maxW="680px"
            mb={10}
          >
            Given how sensitive the underlying data was, I worked through
            wireframes with stakeholders early (focused on information
            hierarchy and approval logic) before committing to any visual
            direction.
          </Text>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={6} mb={8}>
            {[
              "Wireframe: Budget Dashboard",
              "Wireframe: Disbursement Request",
              "Wireframe: Approval Queue",
              "Wireframe: Reporting View",
              "Wireframe: Audit Trail",
              "Wireframe: Agency Overview",
            ].map((label) => (
              <Box key={label}>
                <PlaceholderImage label={label} aspectRatio="3/4" />
                <Text fontSize="xs" color="gray.400" mt={2}>
                  {label.replace("Wireframe: ", "")}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Section>

        {/* ── Final Design ── */}
        <Section
          eyebrow="07: Final Design"
          title="A trusted system for handling public funds"
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.500"
            lineHeight="1.8"
            maxW="680px"
            mb={10}
          >
            The final design balances the strict process requirements of
            government finance with an interface that's fast to use day to
            day: clear status at a glance, minimal steps to act, and a
            complete record of everything that happened.
          </Text>

          <PlaceholderImage
            label="Final design: platform overview / hero spread"
            aspectRatio="16/7"
          />

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mt={6}>
            <Box>
              <PlaceholderImage
                label="Final: Budget Dashboard"
                aspectRatio="4/3"
              />
              <Text fontSize="xs" color="gray.400" mt={2}>
                Budget Dashboard
              </Text>
            </Box>
            <Box>
              <PlaceholderImage
                label="Final: Disbursement Approval Queue"
                aspectRatio="4/3"
              />
              <Text fontSize="xs" color="gray.400" mt={2}>
                Approval Queue
              </Text>
            </Box>
            <Box>
              <PlaceholderImage
                label="Final: Multi-Agency Reporting"
                aspectRatio="4/3"
              />
              <Text fontSize="xs" color="gray.400" mt={2}>
                Reporting Dashboard
              </Text>
            </Box>
            <Box>
              <PlaceholderImage
                label="Final: Audit Trail Detail"
                aspectRatio="4/3"
              />
              <Text fontSize="xs" color="gray.400" mt={2}>
                Audit Trail
              </Text>
            </Box>
          </SimpleGrid>
        </Section>

        {/* ── Outcome ── */}
        <RevealOnScrollFadeDown>
          <Box
            bg="gray.50"
            borderRadius="20px"
            px={{ base: 6, md: 10 }}
            py={{ base: 8, md: 12 }}
            mb={{ base: "64px", md: "96px" }}
          >
            <Badge
              bg="accent.50"
              color="accent.700"
              fontSize="10px"
              letterSpacing="0.12em"
              textTransform="uppercase"
              borderRadius="full"
              px="8px"
              py="3px"
              mb={4}
            >
              Outcome
            </Badge>
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="600"
              color="gray.700"
              mb={5}
              maxW="560px"
              lineHeight="1.35"
            >
              Replacing spreadsheets with a single, auditable source of truth
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              color="gray.500"
              lineHeight="1.8"
              maxW="600px"
            >
              TMRAS gives finance officers, approvers, and auditors a shared
              view of how public funds move (from budget allocation through
              disbursement to reporting), cutting down the manual
              reconciliation and record chasing that slowed the previous
              process.
            </Text>
          </Box>
        </RevealOnScrollFadeDown>

        {/* Footer spacer */}
        <Box pb={{ base: "64px", md: "96px" }} />
      </Container>
    </Box>
  );
}

export default Project4;
