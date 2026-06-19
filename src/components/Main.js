// import {
//   Box,
//   Flex,
//   Heading,
//   Text,
//   Link as ChakraLink,
//   Container,
//   Button,
// } from "@chakra-ui/react";
// import { Users } from "lucide-react";
// import project1 from "../assets/monibag-mobile.jpg";
// import project2 from "../assets/medteqprodashboard.jpg";
// import project3 from "../assets/wokkah-1.jpg";
// import { Link as ReactRouterLink } from "react-router-dom";
// import RevealOnScrollFadeDown from "../util/RevealOnScrollFadeDown";
// // import Project1Link from "../pages/Project1.js";
// // import project3 from "../assets/Naiyanew.png";
// // import project4 from "../assets/Wakacarrynew.png";

// function Main() {
//   return (
//     <Container maxW="container.xl">
//       <RevealOnScrollFadeDown>
//         <Box
//           mb={["16px", "16px", "28px"]}
//           as="section"
//           px={{ base: 2, md: 10 }}
//           pt="80px"
//           id="project-section"
//           // mx="auto"
//         >
//           <Box pb="56px" textAlign={["center"]}>
//             <Heading
//               fontSize={["2xl", "3xl", "3xl"]}
//               pb="18px"
//               color="gray.600"
//               // color="brandBlue.900"
//               // fontWeight={[300, 300, 600]}
//               fontWeight={["medium", "medium", "medium"]}
//             >
//               How about you check out<br></br> my amazing works?😊
//             </Heading>
//             <Text fontSize={["12px", "14px", "18px"]} color={["gray.500"]}>
//               These projects include their own case studies to showcase my
//               thought process.
//             </Text>
//           </Box>
//           <Flex
//             direction={["column"]}
//             spacing="20px"
//             alignContent={["center"]}
//             justifyContent={["center"]}
//           >
//             {/* Placeholder for additional content */}
//             <ProjectSection3 />
//             <ProjectSection2 />
//             <ProjectSection1 />
//           </Flex>
//           <Flex
//             direction={["column", "column", "row"]}
//             spacing="20px"
//             pt="20px"
//             mx={"auto"}
//           >
//             {/* Placeholder for additional content */}
//             {/* <ProjectSection3 />
//         <ProjectSection4 /> */}
//           </Flex>
//         </Box>
//       </RevealOnScrollFadeDown>
//     </Container>
//   );
// }

// // Project components

// function ProjectSection1() {
//   return (
//     <RevealOnScrollFadeDown>
//       <Box pb={["60px", "60px", "120px"]}>
//         <Flex
//           direction={["column", "column", "row"]}
//           gap="10"
//           // textAlign={["center", "center", "left"]}
//         >
//           <ChakraLink
//             position="relative"
//             // as={Project1Link}
//             as={ReactRouterLink}
//             to="/project1"
//             h={[600, 500, 500]}
//             pt={["32px", "32px", "54px"]}
//             // pb={["16px", "16px", "54px"]}
//             pb={["40px", "40px", "60px"]}
//             px={["12px", "16px", "40px"]}
//             w={["100%", "100%", "50%"]}
//             objectFit="fill"
//             bg="gray.100"
//             borderRadius={20}
//             backgroundImage={`url(${project1})`}
//             backgroundSize="cover"
//             backgroundPosition="center"
//             backgroundRepeat="no-repeat"
//             marginBottom={["20px", "20px", "0px"]}
//           >
//             <Box
//               position="absolute"
//               top="0"
//               left="0"
//               width="100%"
//               height="100%"
//               backgroundColor="rgba(0, 0, 0, 0.6)"
//               opacity="0"
//               transition="opacity 0.6s ease"
//               _hover={{ opacity: 1 }}
//               display="flex"
//               justifyContent="center"
//               alignItems="center"
//               color="white"
//               borderRadius="20px"
//             >
//               <Box px="10px" mt="60px" width={[300, 300, 500]}>
//                 <Text
//                   fontSize="3xl"
//                   fontWeight="bold"
//                   color="#fff"
//                   textAlign={["center"]}
//                 >
//                   Explore
//                 </Text>
//                 <Text textAlign={["center"]}>Case Study</Text>
//               </Box>
//             </Box>
//           </ChakraLink>
//           <Box mt={["60px", "60px", "150px"]} width={["100%", "100%", "50%"]}>
//             <Heading
//               fontSize="3xl"
//               fontWeight={["medium", "medium", "medium"]}
//               color="gray.600"
//               pb="10px"
//               // color="brandBlue.900"
//             >
//               Monibag
//             </Heading>
//             <Text fontSize={["12px", "14px", "14px"]} color={["gray.500"]}>
//               Monibag is a remittance app for Nigerians in diaspora to send
//               money to their loved ones in nigeria fast and easy{" "}
//             </Text>
//             <Box>
//               <Box pt="50px" width={[300, 400, 600]} gap="12">
//                 {" "}
//                 <Box fontSize="18px" fontWeight={[600]}>
//                   <span width="24px">
//                     {" "}
//                     <Users size={24} color="green" />
//                   </span>{" "}
//                   Over 500k Users
//                 </Box>
//                 <Text fontSize="12px" color={["gray.500"]}>
//                   A major adjustment on the look and fill of the web app showed
//                   a significant increase in user base.
//                 </Text>
//               </Box>
//               {/* <Box pt="50px" width={[200]}>
//                   {" "}
//                   <Box fontSize="18px" fontWeight={[600]}>
//                     <span width="24px">♥️</span> Over 500k Users
//                   </Box>
//                   <Text fontSize="12px" color={["gray.500"]}>
//                     A major adjustment on the look and fill of the web app
//                     showed a significant increase in user base.
//                   </Text>
//                 </Box> */}
//             </Box>
//           </Box>
//         </Flex>
//       </Box>
//     </RevealOnScrollFadeDown>
//   );
// }

// function ProjectSection2() {
//   return (
//     <RevealOnScrollFadeDown>
//       <Box pb={["40px", "40px", "120px"]}>
//         <Flex
//           direction={["column", "column", "row"]}
//           // textAlign={["center", "center", "left"]}
//         >
//           <Box
//             pb={["40px", "40px", "60px"]}
//             mt={["60px", "60px", "150px"]}
//             width={["100%", "100%", "50%"]}
//           >
//             <Heading
//               fontSize="3xl"
//               fontWeight={["medium", "medium", "medium"]}
//               color="gray.600"
//               pb="10px"
//               // color="brandBlue.900"
//             >
//               Medteqpro
//             </Heading>
//             <Text fontSize={["12px", "14px", "14px"]} color={["gray.500"]}>
//               MedteqPro is a medical application for nigerian hospitals and
//               patients to easily connect, making it stress-free to manage data
//               and also share data within hospitals in the medteqpro ecosystem.
//               <Text />
//               <Flex gap={4} mt={4}>
//                 <Button
//                   as="a"
//                   bgColor="gray.200"
//                   fontSize="14px"
//                   color="gray.900"
//                   href="https://www.medteqpro.com"
//                   _hover={{ bg: "gray.100", color: "gray.900" }}
//                 >
//                   Live Website
//                 </Button>

//                 <Button
//                   as="a"
//                   href="/Project3"
//                   bgColor="gray.800"
//                   color="#ffffff"
//                   fontSize="14px"
//                   _hover={{ bg: "gray.700" }}
//                 >
//                   View Case Study
//                 </Button>
//               </Flex>
//               <Flex direction={["row"]}>
//                 <Box pt="50px" width={[200]} gap="12">
//                   {" "}
//                   <Box fontSize="18px" fontWeight={[600]}>
//                     <span width="24px">
//                       {" "}
//                       <Users size={24} color="green" />
//                     </span>{" "}
//                     Pilot Testing Stage
//                   </Box>
//                   <Text fontSize="12px" color={["gray.500"]}>
//                     This will potentially service over 10million users.
//                   </Text>
//                 </Box>
//               </Flex>
//             </Text>
//           </Box>
//           <ChakraLink
//             position="relative"
//             // as={Project1Link}
//             as={ReactRouterLink}
//             to="/project2"
//             h={[600, 500, 500]}
//             pt={["32px", "32px", "54px"]}
//             pb={["32px", "32px", "54px"]}
//             px={["16px", "16px", "40px"]}
//             w={["100%", "100%", "50%"]}
//             bg="gray.100"
//             objectFit="fill"
//             borderRadius={20}
//             backgroundImage={`url(${project2})`}
//             backgroundSize="cover"
//             backgroundPosition="center"
//             backgroundRepeat="no-repeat"
//             marginRight="20px"
//             marginBottom={["20px", "20px", "0px"]}
//           >
//             <Box
//               position="absolute"
//               top="0"
//               left="0"
//               width="100%"
//               height="100%"
//               backgroundColor="rgba(0, 0, 0, 0.6)"
//               opacity="0"
//               transition="opacity 0.6s ease"
//               _hover={{ opacity: 1 }}
//               display="flex"
//               justifyContent="center"
//               alignItems="center"
//               color="white"
//               borderRadius="20px"
//             >
//               <Box px="10px" mt="60px" width={[300, 300, 500]}>
//                 <Text
//                   fontSize="3xl"
//                   fontWeight="bold"
//                   color="#fff"
//                   textAlign={["center"]}
//                 >
//                   Explore
//                 </Text>
//                 <Text textAlign={["center"]}>Case Study</Text>
//               </Box>
//             </Box>
//           </ChakraLink>
//         </Flex>
//       </Box>
//     </RevealOnScrollFadeDown>
//   );
// }

// function ProjectSection3() {
//   return (
//     <RevealOnScrollFadeDown>
//       <Box pb={["40px", "40px", "120px"]}>
//         <Flex
//           direction={["column", "column", "row"]}
//           gap="10"
//           // textAlign={["center", "center", "left"]}
//         >
//           <ChakraLink
//             position="relative"
//             // as={Project1Link}
//             as={ReactRouterLink}
//             to="/project3"
//             h={[600, 500, 500]}
//             pt={["32px", "32px", "54px"]}
//             pb={["32px", "32px", "54px"]}
//             px={["16px", "16px", "40px"]}
//             w={["100%", "100%", "50%"]}
//             bg="gray.100"
//             objectFit="fill"
//             borderRadius={20}
//             backgroundImage={`url(${project3})`}
//             backgroundSize="cover"
//             backgroundPosition="center"
//             backgroundRepeat="no-repeat"
//             marginRight="20px"
//             marginBottom={["20px", "20px", "0px"]}
//           >
//             <Box
//               position="absolute"
//               top="0"
//               left="0"
//               width="100%"
//               height="100%"
//               backgroundColor="rgba(0, 0, 0, 0.6)"
//               opacity="0"
//               transition="opacity 0.6s ease"
//               _hover={{ opacity: 1 }}
//               display="flex"
//               justifyContent="center"
//               alignItems="center"
//               color="white"
//               borderRadius="20px"
//             >
//               <Box px="10px" mt="60px" width={[300, 300, 500]}>
//                 <Text
//                   fontSize="3xl"
//                   fontWeight="bold"
//                   color="#fff"
//                   textAlign={["center"]}
//                 >
//                   Explore
//                 </Text>
//                 <Text textAlign={["center"]}>Case Study</Text>
//               </Box>
//             </Box>
//           </ChakraLink>
//           <Box
//             pb={["40px", "40px", "60px"]}
//             mt={["60px", "60px", "150px"]}
//             width={["100%", "100%", "50%"]}
//           >
//             <Heading
//               fontSize="3xl"
//               fontWeight={["medium", "medium", "medium"]}
//               color="gray.600"
//               pb="10px"
//               // color="brandBlue.900"
//             >
//               WokkahLearn
//             </Heading>
//             <Text
//               fontSize={["12px", "14px", "14px"]}
//               // fontWeight={300}
//               color={["gray.500"]}
//             >
//               WokkahLearn is an LMS AI powered application that consist of
//               learning, and proctored interview process that matches users with
//               potential employers.
//               <Text />
//               <Flex gap={4} mt={4}>
//                 <Button
//                   as="a"
//                   bgColor="gray.200"
//                   fontSize="14px"
//                   color="gray.900"
//                   href="https://learn.wokkah.com"
//                   _hover={{ bg: "gray.100", color: "gray.900" }}
//                 >
//                   Live Website
//                 </Button>

//                 <Button
//                   as="a"
//                   href="/Project3"
//                   bgColor="gray.800"
//                   color="#ffffff"
//                   fontSize="14px"
//                   _hover={{ bg: "gray.700" }}
//                 >
//                   View Case Study
//                 </Button>
//               </Flex>
//               <Flex direction={["row"]}>
//                 <Box pt="50px" width={[200]} gap="12">
//                   {" "}
//                   <Box fontSize="18px" fontWeight={[600]}>
//                     <span width="24px">
//                       {" "}
//                       <Users size={24} color="green" />
//                     </span>{" "}
//                     Over 10k Users
//                   </Box>
//                   <Text fontSize="12px" color={["gray.500"]}>
//                     A major adjustment on the look and fill of the web app
//                     showed a significant increase in user base.
//                   </Text>
//                 </Box>
//                 {/* <Box pt="50px" width={[200]}>
//                   {" "}
//                   <Box fontSize="18px" fontWeight={[600]}>
//                     <span width="24px">♥️</span> Over 500k Users
//                   </Box>
//                   <Text fontSize="12px" color={["gray.500"]}>
//                     A major adjustment on the look and fill of the web app
//                     showed a significant increase in user base.
//                   </Text>
//                 </Box> */}
//               </Flex>
//             </Text>
//           </Box>
//         </Flex>
//       </Box>
//     </RevealOnScrollFadeDown>
//   );
// }

// // function ProjectSection3() {
// //   return (
// //     <Box
// //       h={[600, 500, 800]}
// //       pt={["32px", "32px", "54px"]}
// //       pb={["32px", "32px", "54px"]}
// //       px={["16px", "16px", "40px"]}
// //       w={["100%", "100%", "100%"]}
// //       bg="gray.100"
// //       borderRadius={20}
// //       backgroundImage={`url(${project3})`}
// //       backgroundSize="cover"
// //       backgroundPosition="center"
// //       backgroundRepeat="no-repeat"
// //       marginRight="20px"
// //       marginBottom={["20px", "20px", "0px"]}
// //       objectFit="cover"
// //     ></Box>
// //   );
// // }

// // function ProjectSection4() {
// //   return (
// //     <Box
// //       h={[300, 400, 800]}
// //       pt={["32px", "32px", "54px"]}
// //       px={["16px", "16px"]}
// //       w={["100%", "100%", "100%"]}
// //       bg="yellow.100"
// //       borderRadius={20}
// //       backgroundImage={`url(${project4})`}
// //       backgroundSize="cover"
// //       backgroundPosition="left"
// //       backgroundRepeat="no-repeat"
// //       objectFit="cover"
// //     ></Box>
// //   );
// // }

// export default Main;

import {
  Box,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  Container,
  Button,
  Badge,
} from "@chakra-ui/react";
import { Users } from "lucide-react";
import project1 from "../assets/monibag-mobile.jpg";
import project2 from "../assets/medteqprodashboard.jpg";
import project3 from "../assets/wokkah-1.jpg";
import { Link as ReactRouterLink } from "react-router-dom";
import RevealOnScrollFadeDown from "../util/RevealOnScrollFadeDown";

// ─── Data ────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: "project3",
    image: project3,
    title: "WokkahLearn",
    description:
      "An AI-powered LMS with a built-in proctored interview flow that matches learners with potential employers.",
    stat: "Over 10k Users",
    statCaption:
      "A design overhaul of the web app drove a significant lift in active users.",
    liveUrl: "https://learn.wokkah.com",
    caseStudyHref: "/Project3",
  },
  {
    id: "project2",
    image: project2,
    title: "Medteqpro",
    description:
      "A medical platform connecting Nigerian hospitals and patients — streamlining data management and cross-hospital sharing within the Medteqpro ecosystem.",
    stat: "Pilot Testing Stage",
    statCaption: "Designed to eventually serve over 10 million users.",
    liveUrl: "https://www.medteqpro.com",
    caseStudyHref: "/Project3",
  },
  {
    id: "project1",
    image: project1,
    title: "Monibag",
    description:
      "A remittance app that helps Nigerians in the diaspora send money home quickly and easily.",
    stat: "Over 500k Users",
    statCaption:
      "A design refresh of the web app drove a significant increase in the user base.",
    liveUrl: null,
    caseStudyHref: "/project1",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ImageCard({ image, to }) {
  return (
    <ChakraLink
      as={ReactRouterLink}
      to={to}
      position="relative"
      display="block"
      flex={{ base: "none", md: "0 0 48%" }}
      w={{ base: "100%", md: "100%" }}
      h={{ base: "280px", sm: "360px", md: "460px" }}
      borderRadius="20px"
      overflow="hidden"
      backgroundImage={`url(${image})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      flexShrink={0}
      _focusVisible={{
        outline: "3px solid",
        outlineColor: "gray.600",
        outlineOffset: "3px",
      }}
    >
      {/* Hover overlay */}
      <Box
        position="absolute"
        inset="0"
        bg="rgba(0,0,0,0.6)"
        borderRadius="20px"
        opacity={0}
        transition="opacity 0.4s ease"
        _hover={{ opacity: 1 }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={1}
      >
        <Text fontSize="2xl" fontWeight="700" color="white">
          Explore
        </Text>
        <Text fontSize="sm" color="whiteAlpha.800" letterSpacing="0.08em">
          Case Study
        </Text>
      </Box>
    </ChakraLink>
  );
}

function ProjectMeta({ stat, statCaption }) {
  return (
    <Box mt={8}>
      <Flex align="center" gap={2} mb={1}>
        <Users size={18} color="#38A169" />
        <Text fontSize="md" fontWeight="600" color="gray.700">
          {stat}
        </Text>
      </Flex>
      <Text fontSize="xs" color="gray.500" lineHeight="1.6" maxW="320px">
        {statCaption}
      </Text>
    </Box>
  );
}

function ProjectActions({ liveUrl, caseStudyHref }) {
  return (
    <Flex gap={3} mt={5} flexWrap="wrap">
      {liveUrl && (
        <Button
          as="a"
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          bg="gray.100"
          color="gray.800"
          fontWeight="500"
          borderRadius="8px"
          _hover={{ bg: "gray.200" }}
        >
          Live Website
        </Button>
      )}
      <Button
        as="a"
        href={caseStudyHref}
        size="sm"
        bg="gray.800"
        color="white"
        fontWeight="500"
        borderRadius="8px"
        _hover={{ bg: "gray.700" }}
      >
        View Case Study
      </Button>
    </Flex>
  );
}

// ─── ProjectCard ──────────────────────────────────────────────────────────────
// imagePosition: "left" | "right" — controls desktop layout direction

function ProjectCard({ project, imagePosition = "left" }) {
  const {
    id,
    image,
    title,
    description,
    stat,
    statCaption,
    liveUrl,
    caseStudyHref,
  } = project;

  const isImageLeft = imagePosition === "left";

  return (
    <RevealOnScrollFadeDown>
      <Box as="article" pb={{ base: "64px", md: "100px" }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "flex-start" }}
          gap={{ base: 8, md: 12 }}
        >
          {/* Image — always on top on mobile; desktop position controlled by order */}
          <Box
            order={{ base: 0, md: isImageLeft ? 0 : 1 }}
            w={{ base: "100%", md: "100%" }}
          >
            <ImageCard image={image} to={`/${id}`} />
          </Box>

          {/* Text block */}
          <Flex
            direction="column"
            justify="center"
            order={{ base: 1, md: isImageLeft ? 1 : 0 }}
            w={{ base: "100%", md: "100%" }}
            pt={{ base: 0, md: "80px" }}
          >
            <Badge
              colorScheme="gray"
              fontSize="10px"
              letterSpacing="0.1em"
              textTransform="uppercase"
              mb={3}
              w="fit-content"
            >
              Case Study
            </Badge>

            <Heading
              as="h3"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="600"
              color="gray.700"
              lineHeight="1.2"
              mb={3}
            >
              {title}
            </Heading>

            <Text
              fontSize={{ base: "sm", md: "md" }}
              color="gray.500"
              lineHeight="1.75"
              maxW="420px"
            >
              {description}
            </Text>

            <ProjectActions liveUrl={liveUrl} caseStudyHref={caseStudyHref} />
            <ProjectMeta stat={stat} statCaption={statCaption} />
          </Flex>
        </Flex>
      </Box>
    </RevealOnScrollFadeDown>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function Main() {
  return (
    <Container maxW="container.xl" px={{ base: 4, md: 10 }}>
      <Box
        as="section"
        pt={{ base: "64px", md: "80px" }}
        pb={{ base: "16px", md: "28px" }}
        id="project-section"
      >
        {/* Section header */}
        <RevealOnScrollFadeDown>
          <Box textAlign="center" mb={{ base: 10, md: 14 }}>
            <Heading
              as="h2"
              fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
              fontWeight="600"
              color="gray.600"
              lineHeight="1.35"
              mb={3}
            >
              How about you check out
              <br />
              my amazing works? 😊
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              color="gray.400"
              maxW="480px"
              mx="auto"
              lineHeight="1.7"
            >
              Each project includes a case study that walks through my thinking
              and design process.
            </Text>
          </Box>
        </RevealOnScrollFadeDown>

        {/* Project list — alternating image position */}
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </Box>
    </Container>
  );
}

export default Main;
