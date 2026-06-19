import {
  Box,
  Text,
  Heading,
  Button,
  Container,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import SkillBadge from "./Skillbadge";
// import myImage from "../assets/bg-toby.png";

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
  "REACT",
  "NextJS",
  "Chakra UI",
  "Google Stitch",
  "ChatGPT",
  "Claude MCP",
  "Figma MCP",
];

// Main Header component
function About() {
  return (
    <Container as="section" py="48px" maxWidth={["sm", "md", "1200px"]}>
      <Flex direction={["column", "column", "row"]} spacing="20px" mx={"auto"}>
        {/* Main content box with background image */}
        <Box
          // h={[800, 500, 600]}
          py={["32px", "32px", "54px"]}
          // px={["16px", "16px", "40px"]}
          // w={["100%", "100%", "100%"]}
          bg="gray.100"
          borderRadius={20}
          // backgroundImage={`url(${myImage})`}
          backgroundColor="#f9f9f9"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          // marginRight="20px"
        >
          <Box textAlign={["center", "center", "left"]} px="24px">
            <Heading
              fontWeight={["medium", "medium", "medium"]}
              fontSize={["3xl", "3xl", "4xl"]}
              pb={10}
              color="gray.600"
            >
              Get to know me <span>😎</span>
            </Heading>
            <Box fontSize={["sm", "md", "md"]}>
              <Text
                fontWeight="sm"
                // fontSize={["sm", "md", "md"]}
                w={["100%", "100%", "100%"]}
                pt="2"
                color={["gray.500"]}
                textAlign={["center", "center", "left"]}
                lineHeight={["24px"]}
              >
                I'm Ekwealor Tobechukwu, a UI/UX Designer passionate about
                creating intuitive, user-centered digital experiences. With over
                4 years of experience, I specialize in turning complex ideas
                into beautiful, functional interfaces across web and mobile
                platforms. I believe great design is a balance between
                aesthetics, functionality, and empathy. My approach always
                starts with understanding the user's needs and business goals to
                create impactful solutions. I'm highly skilled in tools like
                Figma, Adobe Illustrator, Photoshop, and also have a strong
                foundation in HTML and CSS, which helps me design with
                developers in mind. When I’m not designing, you’ll find me
                watching a football game, exploring new tech trends, sketching
                ideas, mentoring young designers or collaborating with creative
                communities.
              </Text>
              {/* <Text
                fontWeight="sm"
                // fontSize={["sm", "md", "md"]}
                w={["100%", "100%", "100%"]}
                pt="2"
                color={["gray.500"]}
                textAlign={["center", "center", "left"]}
              >
                After a couple of years working on various engineering teams as
                a UI Designer/Front End Developer, I decided to focus more on
                design because I believe I can help reduce development time for
                engineering teams by producing high-fidelity prototypes that can
                easily translate to code with my frontend experience. I have
                been lucky to have worked with talented individuals across
                different cross-functional teams on exciting projects where I
                have made valuable contributions. I have designed complex
                interfaces that have increased efficiencies and improved
                companies' revenue. I am constantly improving my skill because I
                believe in the say "Learning never stops".
              </Text> */}
              {/* <Text
                fontWeight="sm"
                // fontSize={["sm", "md", "md"]}
                w={["100%", "100%", "100%"]}
                pt="2"
                color={["gray.500"]}
                textAlign={["center", "center", "left"]}
              >
                When I’m not designing, you can find me watching a football
                game, mentoring young designers, or streaming useful videos on
                youtube. I am based in the industrious city of Lagos, Nigeria.
              </Text> */}
            </Box>
            <Box mt="48px">
              <Button
                _hover={{
                  bg: useColorModeValue("gray.800", "gray.700"),
                  color: "gray.50",
                }}
                bgColor="gray.700"
                color="gray.200"
              >
                Let’s build something amazing together.
              </Button>
            </Box>
          </Box>
        </Box>
        {/* Placeholder for additional content */}

        {/* <ImageSection /> */}
      </Flex>
      <MySkills />
    </Container>
  );
}

function MySkills() {
  return (
    <Box>
      <Heading
        fontWeight={["medium", "medium", "medium"]}
        fontSize={["2xl", "3xl", "3xl"]}
        py={10}
        color="gray.600"
      >
        My Skill Set
      </Heading>
      <Box>
        <Flex direction={["row"]} gap={4} wrap="wrap">
          {skills.map((skill, index) => (
            <SkillBadge
              key={index}
              name={skill}
              className={`opacity-0 animate-slide-up delay-${index * 100}`}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default About;
