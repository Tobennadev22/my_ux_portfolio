import { Box, VStack, Text, Container } from "@chakra-ui/react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import myImage from "../assets/bg-toby.png";

const steps = [
  "Oh! I forgot to mention to you",
  "Something I don't want to keep as a secret 🗝️",
  "I know you want to know",
  "I wrote my portfolio with react. My first frontend project😊",
];

export default function StickyScroller() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!containerRef.current) return;

    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;

    const scrollPosition = latest - containerTop;

    if (scrollPosition >= 0 && scrollPosition <= containerHeight) {
      const sectionHeight = containerHeight / steps.length;
      const index = Math.min(
        steps.length - 1,
        Math.floor(scrollPosition / sectionHeight),
      );
      setActiveIndex(index);
    }
  });

  return (
    <Container
      maxW={{ base: "100%", md: "1200px" }}
      borderRadius="20px"
      ref={containerRef}
      h={`${steps.length * 110}vh`}
      backgroundImage="linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)"
      color="#29292A"
      position="relative"
      // backgroundImage={`url(${myImage})`}
      // backgroundColor="#f9f9f9"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Box
        as={motion.div}
        position="sticky"
        top="0"
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
      >
        <VStack
          spacing={0}
          w="100%"
          h="100%"
          justify="center"
          alignItems="center"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              animate={{ opacity: index === activeIndex ? 1 : 0 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100%",
                textAlign: "center",
              }}
            >
              <Text fontSize="4xl" fontWeight="light">
                {step}
              </Text>
            </motion.div>
          ))}
        </VStack>
      </Box>
    </Container>
  );
}
