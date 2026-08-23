import { Box, Text, Heading, Button, Flex, Container } from "@chakra-ui/react";
import SkillBadge from "./Skillbadge";

const focusAreas = [
  { label: "Fintech", detail: "Monibag — remittance for the diaspora" },
  { label: "Healthtech", detail: "Medteqpro — hospital & patient records" },
  { label: "Edtech", detail: "WokkahLearn — AI-powered learning & hiring" },
];

const skills = [
  "UI Design",
  "UX Research",
  "User Testing",
  "Wireframing",
  "Prototyping",
  "Visual Design",
  "Information Architecture",
  "Design Systems",
  "Web Design",
  "Mobile Design",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Chakra UI",
  "Figma",
  "Google Stitch",
];

function About() {
  return (
    <Container as="section" py={{ base: "40px", md: "64px" }} maxWidth="1200px">
      <Flex direction={{ base: "column", lg: "row" }} gap={10} mx="auto">
        {/* Main content box */}
        <Box
          py={{ base: "32px", lg: "54px" }}
          bg="#f9f9f9"
          borderRadius="20px"
          flex="1.4"
        >
          <Box textAlign={{ base: "center", lg: "left" }} px="24px">
            <Text
              fontSize="xs"
              fontWeight={600}
              letterSpacing="0.14em"
              textTransform="uppercase"
              color="accent.600"
              mb={4}
            >
              About
            </Text>
            <Heading
              fontWeight={600}
              fontSize={["3xl", "3xl", "4xl"]}
              pb={8}
              color="gray.800"
            >
              Get to know me
            </Heading>
            <Box fontSize={["sm", "md", "md"]}>
              <Text
                w="100%"
                color="gray.600"
                textAlign={{ base: "center", lg: "left" }}
                lineHeight="1.8"
              >
                I'm Ekwealor Tobechukwu, a UI/UX Designer passionate about
                creating intuitive, user-centered digital experiences. With
                over 4 years of experience, I specialize in turning complex
                ideas into beautiful, functional interfaces across web and
                mobile platforms. I believe great design is a balance between
                aesthetics, functionality, and empathy. My approach always
                starts with understanding the user's needs and business goals
                to create impactful solutions. I'm highly skilled in tools
                like Figma, Adobe Illustrator, and Photoshop, and have a
                strong foundation in HTML and CSS, which helps me design with
                developers in mind. When I'm not designing, you'll find me
                watching a football game, exploring new tech trends,
                sketching ideas, mentoring young designers, or collaborating
                with creative communities.
              </Text>
            </Box>
            <Box mt="40px">
              <Button
                as="a"
                href="https://www.linkedin.com/in/ekwealor-tobechukwu-100113114/"
                target="_blank"
                rel="noopener noreferrer"
                bgColor="gray.900"
                color="#fff"
                _hover={{ bg: "accent.600" }}
              >
                Let's build something amazing together
              </Button>
            </Box>
          </Box>
        </Box>

        <FocusAreas />
      </Flex>
      <MySkills />
    </Container>
  );
}

function MySkills() {
  return (
    <Box mt={{ base: 12, md: 16 }}>
      <Heading fontWeight={600} fontSize={["2xl", "3xl", "3xl"]} pb={6} color="gray.800">
        My Skill Set
      </Heading>
      <Flex direction="row" gap={3} wrap="wrap">
        {skills.map((skill) => (
          <SkillBadge key={skill} name={skill} />
        ))}
      </Flex>
    </Box>
  );
}

function FocusAreas() {
  return (
    <Box
      flex="1"
      bg="gray.900"
      borderRadius="20px"
      px={8}
      py={{ base: 8, lg: 10 }}
      display={{ base: "none", lg: "flex" }}
      flexDirection="column"
      justifyContent="center"
      gap={7}
    >
      <Text
        fontSize="xs"
        fontWeight={600}
        letterSpacing="0.14em"
        textTransform="uppercase"
        color="accent.400"
      >
        Where I design
      </Text>
      {focusAreas.map(({ label, detail }) => (
        <Box key={label} borderTop="1px solid" borderColor="whiteAlpha.200" pt={5}>
          <Text fontSize="lg" fontWeight="600" color="white" mb={1}>
            {label}
          </Text>
          <Text fontSize="sm" color="whiteAlpha.700" lineHeight="1.6">
            {detail}
          </Text>
        </Box>
      ))}
    </Box>
  );
}

export default About;
