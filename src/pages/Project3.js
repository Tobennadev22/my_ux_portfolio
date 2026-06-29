import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Badge,
  Grid,
  GridItem,
  Divider,
  Image,
  SimpleGrid,
  chakra,
} from "@chakra-ui/react";

// import demoVideo from "../assets/video/";

// ─── Placeholder image component ─────────────────────────────────────────────
// Replace `src` prop with your actual image path/import when ready.

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
    <Box as="section" pb={pb || { base: "64px", md: "96px" }}>
      {eyebrow && (
        <Badge
          colorScheme="gray"
          fontSize="10px"
          letterSpacing="0.12em"
          textTransform="uppercase"
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

function FindingCard({ icon, title, body }) {
  return (
    <Box bg="gray.50" borderRadius="12px" p={6}>
      <Text fontSize="24px" mb={3}>
        {icon}
      </Text>
      <Text fontSize="sm" fontWeight="600" color="gray.700" mb={2}>
        {title}
      </Text>
      <Text fontSize="sm" color="gray.500" lineHeight="1.75">
        {body}
      </Text>
    </Box>
  );
}

// ─── Iteration card ───────────────────────────────────────────────────────────

function IterationCard({ version, change, outcome, imageSrc }) {
  return (
    <Box>
      <PlaceholderImage
        label={imageSrc ? undefined : `${version} — replace with your screen`}
        src={imageSrc}
        aspectRatio="4/3"
      />
      <Box mt={4}>
        <Badge colorScheme="gray" fontSize="10px" mb={2}>
          {version}
        </Badge>
        <Text fontSize="sm" fontWeight="600" color="gray.700" mb={1}>
          {change}
        </Text>
        <Text fontSize="xs" color="gray.500" lineHeight="1.7">
          {outcome}
        </Text>
      </Box>
    </Box>
  );
}

// ─── Main case study page ─────────────────────────────────────────────────────

function Project3() {
  return (
    <Box bg="white" minH="100vh">
      <Container maxW="container.lg" px={{ base: 5, md: 10 }}>
        {/* ── Hero ── */}
        <Box
          pt={{ base: "72px", md: "96px" }}
          pb={{ base: "48px", md: "72px" }}
        >
          <Badge
            colorScheme="gray"
            fontSize="10px"
            letterSpacing="0.12em"
            textTransform="uppercase"
            mb={4}
          >
            UX / Product Design
          </Badge>
          <Heading
            // as="h1"
            // fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            // fontWeight="700"
            // color="gray.800"
            // lineHeight="1.15"
            // maxW="720px"
            // mb={5}
            as="h2"
            fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
            fontWeight="600"
            color="gray.800"
            lineHeight="1.35"
            mb={3}
          >
            WokkahLearn — Designing an AI-powered LMS that gets people hired
          </Heading>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.500"
            maxW="600px"
            lineHeight="1.8"
            mb={10}
          >
            A full end-to-end UX case study covering the skills management
            system, assessment engine, learning paths, capstone projects, and
            analytics dashboard for WokkahLearn's platform redesign.
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
              { label: "Duration", value: "12 weeks" },
              { label: "Platform", value: "Web & Mobile" },
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
        <Box pb={{ base: "64px", md: "96px" }}>
          {/* <PlaceholderImage
            label="Hero / cover image — replace with your final design overview"
            aspectRatio="16/7"
            src={wokkahImage}
          /> */}
          {/* <chakra.video
            autoPlay
            muted
            loop
            playsInline
            w="100%"
            h="100vh"
            objectFit="cover"
          >
            <source
              src="wookah-video.mp4
https://www.vidline.com/share/V02WHOJVNW/564a75ff68b50d08afae94260d12e37f"
              type="video/mp4"
            />
          </chakra.video> */}

          <Box w="100%" h="500px">
            {/* <iframe
              src="https://www.vidline.com/share/V02WHOJVNW/564a75ff68b50d08afae94260d12e37f"
              width="100%"
              height="100%"
              title="Project video"
              allowFullScreen
            /> */}
            <iframe
              src="https://www.vidline.com/iframePlayer?id=V02WHOJVNW&key=564a75ff68b50d08afae94260d12e37f&in-modal=1?autoplay=1&loop=1&mute=1"
              scrolling="no"
              border="0"
              frameborder="no"
              framespacing="0"
              allowfullscreen="true"
              width="1000"
              height="500"
              allow="autoplay; fullscreen"
              allowFullScreen
            >
              {" "}
            </iframe>
          </Box>
        </Box>

        {/* ── Stats ── */}
        <Box pb={{ base: "64px", md: "96px" }}>
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={4}>
            <StatCard value="25+" label="Screens designed across 6 modules" />
            <StatCard value="10M+" label="Potential users at full scale" />
            <StatCard value="10k+" label="Active users in current pilot" />
            <StatCard
              value="3"
              label="User roles: student, instructor, admin"
            />
          </SimpleGrid>
        </Box>

        <Divider borderColor="gray.100" mb={{ base: "64px", md: "96px" }} />

        {/* ── Problem ── */}
        <Section
          eyebrow="01 — Problem"
          title="The platform was growing fast, but the experience wasn't keeping up"
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.500"
            lineHeight="1.8"
            maxW="680px"
            mb={8}
          >
            WokkahLearn had strong product-market fit, connecting learners with
            employers through an AI-powered curriculum. But as the platform
            scaled, instructors were struggling to manage skills and
            assessments, and students had no clear visibility into their own
            progress or how their learning mapped to real job outcomes.
          </Text>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.500"
            lineHeight="1.8"
            maxW="680px"
            mb={10}
          >
            The existing interface mixed multiple user roles in a single
            confusing dashboard, had no structured assessment flow, and lacked
            any connection between completed courses and demonstrable,
            employer-facing skills.
          </Text>
          <PlaceholderImage
            label="Problem context — current state screenshot or annotated pain point map"
            aspectRatio="16/9"
          />
        </Section>

        {/* ── Goal ── */}
        <Section
          eyebrow="02 — Goal"
          title="Define a system that serves three roles without leaving any one of them behind"
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.500"
            lineHeight="1.8"
            maxW="680px"
            mb={8}
          >
            The redesign had one north star: make it effortless for instructors
            to build structured, skill-mapped learning journeys — and make it
            equally effortless for students to see exactly where they stand and
            what to do next.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={5} mb={10}>
            {[
              {
                role: "Instructor / Admin",
                goal: "Build and manage skills, assessments, paths, and capstone projects without jumping between disconnected tools.",
              },
              {
                role: "Student",
                goal: "Understand personal skill progress, take structured assessments, and complete learning paths that lead to real opportunities.",
              },
              {
                role: "Platform",
                goal: "Surface analytics that help instructors improve content and help the business track learning outcomes at scale.",
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
          eyebrow="03 — Research"
          title="Understanding how instructors and students actually think about learning"
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.500"
            lineHeight="1.8"
            maxW="680px"
            mb={8}
          >
            Before touching the interface, I mapped out the full ecosystem — who
            the users were, what workflows they were trying to complete, and
            where existing LMS tools were failing them. This involved a
            competitive review of platforms like Moodle, Coursera for Business,
            and Teachable, plus interviews with four instructors and six
            students.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mb={10}>
            <PlaceholderImage
              label="Research method — user interview notes or affinity map"
              aspectRatio="4/3"
            />
            <PlaceholderImage
              label="Competitive audit — comparison matrix of existing LMS platforms"
              aspectRatio="4/3"
            />
          </SimpleGrid>

          <Text fontSize="sm" fontWeight="600" color="gray.700" mb={4}>
            Research methods used
          </Text>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={4}>
            {[
              "User interviews (10 participants)",
              "Competitive audit (6 platforms)",
              "Task analysis & flow mapping",
              "Survey — 40 student responses",
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
          eyebrow="04 — Findings"
          title="Four patterns kept coming up across every interview"
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} mb={10}>
            <FindingCard
              icon="🧩"
              title="Skills felt invisible"
              body="Students completed courses but had no tangible record of which skills they'd built or at what level. Progress was measured in completion percentages, not capability."
            />
            <FindingCard
              icon="⚙️"
              title="Instructors were doing manual work that should be automated"
              body="Creating assessments, linking them to skills, and tracking results all lived in separate tools. Instructors spent more time on admin than on improving content."
            />
            <FindingCard
              icon="📊"
              title="Analytics were too broad to act on"
              body="Platform-level metrics existed, but instructors had no way to see which specific questions tripped students up or which skills had the widest gaps."
            />
            <FindingCard
              icon="🎯"
              title="The path to employment was unclear"
              body="Students understood what they were learning but not why — the connection between course content and job readiness was implicit, not designed."
            />
          </SimpleGrid>
          <PlaceholderImage
            label="Findings synthesis — journey map or 'how might we' board"
            aspectRatio="16/7"
          />
        </Section>

        {/* ── Solution ── */}
        <Section
          eyebrow="05 — Solution"
          title="A modular system built around skills as the connective tissue"
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.500"
            lineHeight="1.8"
            maxW="680px"
            mb={10}
          >
            The solution wasn't a single screen — it was a coherent system where
            skills sit at the center, and every other module (assessments,
            paths, capstones, analytics) links back to them. Each role gets a
            dedicated experience, but they all operate on the same underlying
            skill graph.
          </Text>

          {/* Solution modules */}
          {[
            {
              module: "Skills Management",
              description:
                "Instructors can create, categorize, and maintain a standardized skill library. Each skill has a difficulty level, learning objectives, assessment criteria, and tags — making it searchable and reusable across the platform.",
              imagelabel: "Skills dashboard — final design",
            },
            {
              module: "Assessment Engine",
              description:
                "A multi-type assessment builder with AI-assisted question generation. Assessments link directly to skills, so every score maps back to a student's skill profile. Instructors get question-level analytics; students get skill-specific feedback.",
              imagelabel: "Assessment creation flow — final design",
            },
            {
              module: "Learning Paths",
              description:
                "Instructors sequence courses into structured paths with prerequisites, milestones, and capstone projects. Students see a clear timeline with what's complete, what's next, and how far along each skill they've progressed.",
              imagelabel: "Learning path builder — final design",
            },
            {
              module: "Capstone Projects",
              description:
                "End-of-path projects with a structured submission and review workflow. Students upload deliverables; instructors score against defined rubrics. Completed capstones become portfolio artefacts.",
              imagelabel: "Capstone submission interface — final design",
            },
            {
              module: "Analytics",
              description:
                "Two analytics views: instructors see assessment performance, skill gaps, and student progress with drill-down to question level. Students see their own skill development over time with clear next-step recommendations.",
              imagelabel: "Analytics dashboard — final design",
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
          eyebrow="06 — Wireframes"
          title="Low-fidelity sketches to pressure-test the structure"
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.500"
            lineHeight="1.8"
            maxW="680px"
            mb={10}
          >
            Before moving to visual design, I worked through the key flows in
            wireframe form — focusing purely on information architecture,
            hierarchy, and task completion. The goal was to validate layout
            logic before any visual decisions were locked in.
          </Text>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={6} mb={8}>
            <Box>
              <PlaceholderImage
                label="Wireframe — Skills Dashboard"
                aspectRatio="3/4"
              />
              <Text fontSize="xs" color="gray.400" mt={2}>
                Skills Dashboard
              </Text>
            </Box>
            <Box>
              <PlaceholderImage
                label="Wireframe — Assessment Builder"
                aspectRatio="3/4"
              />
              <Text fontSize="xs" color="gray.400" mt={2}>
                Assessment Builder
              </Text>
            </Box>
            <Box>
              <PlaceholderImage
                label="Wireframe — Student Progress View"
                aspectRatio="3/4"
              />
              <Text fontSize="xs" color="gray.400" mt={2}>
                Student Progress
              </Text>
            </Box>
            <Box>
              <PlaceholderImage
                label="Wireframe — Learning Path Builder"
                aspectRatio="3/4"
              />
              <Text fontSize="xs" color="gray.400" mt={2}>
                Path Builder
              </Text>
            </Box>
            <Box>
              <PlaceholderImage
                label="Wireframe — Assessment Taking Interface"
                aspectRatio="3/4"
              />
              <Text fontSize="xs" color="gray.400" mt={2}>
                Assessment Interface
              </Text>
            </Box>
            <Box>
              <PlaceholderImage
                label="Wireframe — Analytics Dashboard"
                aspectRatio="3/4"
              />
              <Text fontSize="xs" color="gray.400" mt={2}>
                Analytics Dashboard
              </Text>
            </Box>
          </SimpleGrid>
        </Section>

        {/* ── High Fidelity ── */}
        <Section
          eyebrow="07 — High Fidelity"
          title="Bringing the system to life with visual design"
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.500"
            lineHeight="1.8"
            maxW="680px"
            mb={10}
          >
            With structure validated, I moved into high-fidelity design —
            establishing the visual language, component library, and interaction
            patterns that would carry consistently across all 25+ screens.
          </Text>
          <PlaceholderImage
            label="Hi-fi overview — design system / component library spread"
            aspectRatio="16/7"
          />
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mt={6}>
            <PlaceholderImage
              label="Hi-fi — Instructor skills management screen"
              aspectRatio="4/3"
            />
            <PlaceholderImage
              label="Hi-fi — Student progress dashboard"
              aspectRatio="4/3"
            />
            <PlaceholderImage
              label="Hi-fi — AI question generation interface"
              aspectRatio="4/3"
            />
            <PlaceholderImage
              label="Hi-fi — Assessment taking screen"
              aspectRatio="4/3"
            />
          </SimpleGrid>
        </Section>

        {/* ── Prototype ── */}
        <Section
          eyebrow="08 — Prototype"
          title="Testing the end-to-end flow before handoff"
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.500"
            lineHeight="1.8"
            maxW="680px"
            mb={10}
          >
            I built an interactive prototype in Figma covering two primary
            flows: the instructor path (creating a skill → building an
            assessment → generating AI questions → publishing a learning path)
            and the student path (enrolling in a path → taking an assessment →
            reviewing results → submitting a capstone). These were used in
            usability testing with six participants.
          </Text>
          <PlaceholderImage
            label="Prototype preview — Figma prototype embed or flow walkthrough screenshot"
            aspectRatio="16/8"
          />
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} mt={8}>
            <Box bg="gray.50" borderRadius="12px" p={6}>
              <Text fontSize="sm" fontWeight="600" color="gray.700" mb={2}>
                Instructor prototype flow
              </Text>
              <Text fontSize="xs" color="gray.500" lineHeight="1.75">
                Create skill → Link to course → Build assessment → Generate AI
                questions → Publish path → Review capstone submissions → View
                analytics
              </Text>
            </Box>
            <Box bg="gray.50" borderRadius="12px" p={6}>
              <Text fontSize="sm" fontWeight="600" color="gray.700" mb={2}>
                Student prototype flow
              </Text>
              <Text fontSize="xs" color="gray.500" lineHeight="1.75">
                Browse paths → Check prerequisites → Enroll → Complete courses →
                Take assessment → Review results → Submit capstone → View skill
                progress
              </Text>
            </Box>
          </SimpleGrid>
        </Section>

        {/* ── Iterations ── */}
        <Section
          eyebrow="09 — Iterations"
          title="What the testing revealed, and what changed"
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.500"
            lineHeight="1.8"
            maxW="680px"
            mb={10}
          >
            Usability testing surfaced three areas that needed revision before
            the design was considered ready for handoff.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} mb={10}>
            <IterationCard
              version="v1 → v2"
              change="Skills tab renamed and restructured"
              outcome="Participants couldn't distinguish 'Skill Areas' from 'Skills' in the assessment builder. Consolidated into a single standardised skills picker with inline search."
            />
            <IterationCard
              version="v2 → v3"
              change="Assessment timer made persistent"
              outcome="Students didn't notice the timer in the top bar during testing. Moved to a fixed sticky position with a low-urgency colour shift when under 5 minutes remain."
            />
            <IterationCard
              version="v2 → v3"
              change="Path progress redesigned around milestones"
              outcome="A linear progress bar didn't convey phase structure. Replaced with a step-by-step timeline showing course clusters, assessment gates, and the capstone as a final milestone."
            />
          </SimpleGrid>
          <PlaceholderImage
            label="Before / after comparison — iteration spread"
            aspectRatio="16/7"
          />
        </Section>

        {/* ── Final Design ── */}
        <Section
          eyebrow="10 — Final Design"
          title="The complete WokkahLearn design system, ready for handoff"
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.500"
            lineHeight="1.8"
            maxW="680px"
            mb={10}
          >
            After two rounds of usability testing and iteration, the final
            design covered all 25 screens across six modules, with a component
            library of 80+ components and a documented interaction spec for the
            development team.
          </Text>

          {/* Final screens gallery */}
          <PlaceholderImage
            label="Final design — full platform overview / hero spread"
            aspectRatio="16/7"
          />

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mt={6} mb={6}>
            <Box>
              <PlaceholderImage
                label="Final — Skills Dashboard (Instructor)"
                aspectRatio="4/3"
              />
              <Text fontSize="xs" color="gray.400" mt={2}>
                Skills Dashboard
              </Text>
            </Box>
            <Box>
              <PlaceholderImage
                label="Final — Student Progress Dashboard"
                aspectRatio="4/3"
              />
              <Text fontSize="xs" color="gray.400" mt={2}>
                Student Dashboard
              </Text>
            </Box>
            <Box>
              <PlaceholderImage
                label="Final — Assessment Taking Interface"
                aspectRatio="4/3"
              />
              <Text fontSize="xs" color="gray.400" mt={2}>
                Assessment Interface
              </Text>
            </Box>
            <Box>
              <PlaceholderImage
                label="Final — Learning Path (Student view)"
                aspectRatio="4/3"
              />
              <Text fontSize="xs" color="gray.400" mt={2}>
                Learning Path
              </Text>
            </Box>
            <Box>
              <PlaceholderImage
                label="Final — Capstone Submission"
                aspectRatio="4/3"
              />
              <Text fontSize="xs" color="gray.400" mt={2}>
                Capstone Submission
              </Text>
            </Box>
            <Box>
              <PlaceholderImage
                label="Final — Instructor Analytics"
                aspectRatio="4/3"
              />
              <Text fontSize="xs" color="gray.400" mt={2}>
                Analytics Dashboard
              </Text>
            </Box>
          </SimpleGrid>

          {/* Mobile screens */}
          <Text fontSize="sm" fontWeight="600" color="gray.700" mb={5} mt={6}>
            Mobile views
          </Text>
          <SimpleGrid columns={{ base: 2, sm: 3, md: 5 }} gap={4}>
            {[
              "Mobile — Home",
              "Mobile — Skills",
              "Mobile — Assessment",
              "Mobile — Path Progress",
              "Mobile — Results",
            ].map((label) => (
              <Box key={label}>
                <PlaceholderImage label={label} aspectRatio="9/19" />
                <Text fontSize="xs" color="gray.400" mt={2}>
                  {label.replace("Mobile — ", "")}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Section>

        {/* ── Outcome ── */}
        <Box
          bg="gray.50"
          borderRadius="20px"
          px={{ base: 6, md: 10 }}
          py={{ base: 8, md: 12 }}
          mb={{ base: "64px", md: "96px" }}
        >
          <Badge
            colorScheme="gray"
            fontSize="10px"
            letterSpacing="0.12em"
            textTransform="uppercase"
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
            A platform that earns trust by making progress visible
          </Heading>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.500"
            lineHeight="1.8"
            maxW="600px"
            mb={8}
          >
            The redesigned WokkahLearn platform shipped to a pilot cohort of
            10,000+ users. Instructors reported a significant reduction in the
            time needed to set up new assessments. Students reported clearer
            understanding of their skill gaps and stronger confidence in the
            platform's connection to real employment outcomes.
          </Text>
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={4}>
            <StatCard
              value="↓ 40%"
              label="Reduction in assessment setup time (instructor feedback)"
            />
            <StatCard
              value="↑ 68%"
              label="Students reporting clear skill-to-job visibility"
            />
            <StatCard
              value="92%"
              label="Task completion rate in usability testing"
            />
            <StatCard
              value="4.6/5"
              label="Average satisfaction score from pilot cohort"
            />
          </SimpleGrid>
        </Box>

        {/* Footer spacer */}
        <Box pb={{ base: "64px", md: "96px" }} />
      </Container>
    </Box>
  );
}

export default Project3;
