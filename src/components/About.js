import {
  Box,
  Text,
  Heading,
  Button,
  Flex,
  Container,
  Badge,
} from "@chakra-ui/react";
import { Trophy, Rocket, PenTool, GraduationCap, Users } from "lucide-react";
import SkillBadge from "./Skillbadge";

const funThings = [
  {
    icon: Trophy,
    label: "Watching football",
    caption: "Badly predicting scorelines since forever.",
    bg: "#E0483E",
    tilt: -4,
    shift: 0,
  },
  {
    icon: Rocket,
    label: "Exploring new tech",
    caption: "Poking at AI tools before they're cool.",
    bg: "#1FB6C9",
    tilt: 3,
    shift: 28,
  },
  {
    icon: PenTool,
    label: "Sketching ideas",
    caption: "Notebooks full of half finished interfaces.",
    bg: "accent.500",
    tilt: -2,
    shift: -14,
  },
  {
    icon: GraduationCap,
    label: "Mentoring designers",
    caption: "Passing on the habits nobody taught me early.",
    bg: "#FFC107",
    iconColor: "#1A1A1A",
    tilt: 4,
    shift: 20,
  },
  {
    icon: Users,
    label: "Creative communities",
    caption: "Trading feedback with people who get it.",
    bg: "#FF9F43",
    tilt: -3,
    shift: -8,
  },
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
      {/* Main content box */}
      <Box py={{ base: "32px", lg: "54px" }} bg="#f9f9f9" borderRadius="20px">
        <Box textAlign={{ base: "center", lg: "left" }} px="24px">
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
            mb={4}
          >
            About
          </Badge>
          <Heading
            fontWeight={600}
            fontSize={["3xl", "3xl", "4xl"]}
            pb={8}
            color="gray.800"
          >
            Get to know me
          </Heading>
          <Box>
            <Text
              w="100%"
              color="gray.600"
              textAlign={{ base: "center", lg: "left" }}
              fontFamily="'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
              fontWeight={400}
              fontSize="18px"
              lineHeight="1.8"
            >
              I'm Ekwealor Tobechukwu, a UI/UX Designer passionate about
              creating intuitive, user centered digital experiences. With
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
      <MySkills />
      <FunThings />
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

function FunThings() {
  return (
    <Box mt={{ base: 12, md: 16 }}>
      <Flex
        direction={{ base: "column", lg: "row" }}
        gap={{ base: 8, lg: 12 }}
        align={{ base: "flex-start", lg: "center" }}
      >
        {/* Text side */}
        <Box flex="1" maxW={{ lg: "340px" }} flexShrink={0}>
          <Heading
            fontWeight={600}
            fontSize={["2xl", "3xl", "3xl"]}
            pb={3}
            color="gray.800"
          >
            Fun Things I Do
          </Heading>
          <Text fontSize="sm" color="gray.500" lineHeight="1.8">
            Honestly, there isn't always a clean "beyond design" for me. I'm
            the person who still critiques a food app's checkout flow while
            ordering dinner. But on the days I do unplug, you'll usually find
            me here:
          </Text>
        </Box>

        {/* Floating cards */}
        <Flex
          flex="1.4"
          wrap="wrap"
          align="flex-start"
          gap={{ base: 6, md: 8 }}
          justify={{ base: "center", lg: "flex-start" }}
        >
          {funThings.map(
          ({ icon: Icon, label, caption, bg, iconColor, tilt, shift }) => (
          <Box
            key={label}
            bg="white"
            p="10px"
            pb="18px"
            borderRadius="6px"
            boxShadow="0 10px 24px rgba(0,0,0,0.12)"
            transform={`rotate(${tilt}deg)`}
            transition="transform 0.25s ease"
            _hover={{ transform: "rotate(0deg) scale(1.05)" }}
            w={{ base: "150px", md: "170px" }}
            mt={{ base: 0, md: `${shift}px` }}
          >
            <Flex
              align="center"
              justify="center"
              bg={bg}
              borderRadius="2px"
              h={{ base: "110px", md: "130px" }}
              mb={3}
            >
              <Icon size={34} color={iconColor || "#fff"} />
            </Flex>
            <Text
              fontSize="xs"
              fontWeight={600}
              color="gray.800"
              textAlign="center"
            >
              {label}
            </Text>
            <Text
              fontSize="10px"
              color="gray.500"
              textAlign="center"
              mt={1}
              lineHeight="1.4"
            >
              {caption}
            </Text>
          </Box>
        ))}
        </Flex>
      </Flex>
    </Box>
  );
}

export default About;
