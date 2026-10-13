import { useState } from "react";
import {
  Box,
  Text,
  Heading,
  Button,
  Flex,
  Container,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { ArrowDown, Download, Send } from "lucide-react";
import portrait from "../assets/Tobechukwu-headshot.png";

const MotionBox = motion(Box);
const MotionImg = motion.img;
const MotionFlex = motion(Flex);

const FLOATING_BADGES = [
  {
    label: "UX Designer",
    bg: "#E0483E",
    rotate: 135,
    top: "-44px",
    left: "-36px",
    tilt: -8,
    delay: 0,
  },
  {
    label: "Product Designer",
    bg: "#1FB6C9",
    rotate: 225,
    top: "16px",
    right: "-52px",
    tilt: 6,
    delay: 0.6,
  },
  {
    label: "Figma MCP to frontend code",
    bg: "#FFC107",
    color: "#1A1A1A",
    rotate: 315,
    bottom: "-28px",
    left: "-16px",
    tilt: -4,
    delay: 1.2,
  },
];

function FloatingBadge({
  label,
  bg,
  color = "#fff",
  rotate,
  tilt,
  delay,
  ...position
}) {
  return (
    <Box
      display={{ base: "none", lg: "block" }}
      position="absolute"
      zIndex={2}
      {...position}
    >
      <MotionFlex
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        align="center"
        gap={2}
        bg={bg}
        px="14px"
        py="8px"
        borderRadius="full"
        boxShadow="0 8px 20px rgba(0,0,0,0.18)"
        transform={`rotate(${tilt}deg)`}
        whiteSpace="nowrap"
      >
        <Send size={13} color={color} style={{ transform: `rotate(${rotate}deg)` }} />
        <Text fontSize="12px" fontWeight={600} color={color}>
          {label}
        </Text>
      </MotionFlex>
    </Box>
  );
}

function AvatarWithPopover() {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      as="span"
      position="relative"
      display="inline-block"
      verticalAlign="middle"
      mx="4px"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <MotionImg
        src={portrait}
        alt=""
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 9, delay: 0.4 }}
        whileHover={{ rotate: -10, transition: { duration: 0.15 } }}
        style={{
          display: "block",
          width: "40px",
          height: "40px",
          borderRadius: "8px",
          objectFit: "cover",
          objectPosition: "top center",
          boxShadow: "0 0 0 3px #f9f9f9",
          cursor: "pointer",
        }}
      />
      <AnimatePresence>
        {hovered && (
          <Box
            position="absolute"
            top="52px"
            left="50%"
            transform="translateX(-50%)"
            zIndex={20}
          >
            <MotionBox
              as={ReactRouterLink}
              to="/about"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ delay: 0.12, duration: 0.2 }}
              display="block"
              bg="white"
              color="gray.800"
              fontSize="12px"
              fontWeight={600}
              px={4}
              py={2}
              borderRadius="full"
              boxShadow="0 10px 24px rgba(0,0,0,0.16)"
              whiteSpace="nowrap"
              _hover={{ bg: "gray.50" }}
            >
              About me →
            </MotionBox>
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
}

function Header() {
  return (
    <Box
      as="section"
      bg="#fff"
      pt={{ base: "72px", md: "112px" }}
      position="relative"
      overflow="hidden"
    >
      {/* Subtle blurred background wash — lemon green + orange */}
      <Box
        position="absolute"
        top="-160px"
        left="-140px"
        w="440px"
        h="440px"
        borderRadius="full"
        bg="accent.400"
        opacity={0.22}
        sx={{ filter: "blur(110px)" }}
        zIndex={0}
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-180px"
        right="-140px"
        w="480px"
        h="480px"
        borderRadius="full"
        bg="#FF9F43"
        opacity={0.2}
        sx={{ filter: "blur(120px)" }}
        zIndex={0}
        pointerEvents="none"
      />

      <Container
        maxW="container.xl"
        px={{ base: 5, md: 10 }}
        position="relative"
        zIndex={1}
      >
        <Flex justify="center" pb={{ base: "56px", md: "88px" }}>
          {/* Text side */}
          <MotionBox
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            maxW="720px"
            w="100%"
            textAlign="center"
            position="relative"
          >
            {FLOATING_BADGES.map((badge) => (
              <FloatingBadge key={badge.label} {...badge} />
            ))}

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
              UI/UX Designer
            </Badge>

            <Heading
              fontSize="42px"
              lineHeight="1.12"
              fontWeight="600"
              color="gray.800"
              letterSpacing="-1px"
              mb={5}
            >
              Hey,{" "}
              <Text
                as="span"
                fontFamily="'Instrumental Serif', serif"
                fontStyle="italic"
              >
                I'm Ekwealor.
              </Text>{" "}
              <AvatarWithPopover />{" "}
              I design digital products that solve real problems.
            </Heading>

            <Text
              fontSize="16px"
              color="gray.500"
              lineHeight="18px"
              maxW="520px"
              mx="auto"
              mb={8}
            >
              A UI/UX designer with 4+ years of experience creating
              minimalistic, user centered solutions across fintech, healthtech,
              and edtech usable, equitable, and built to move the metrics that
              matter.
            </Text>

            <HStack spacing={4} justify="center" flexWrap="wrap">
              <Button
                as={ScrollLink}
                to="project-section"
                smooth={true}
                duration={600}
                offset={-80}
                cursor="pointer"
                rightIcon={<ArrowDown size={16} />}
                bgColor="dark.900"
                color="#fff"
                fontSize="14px"
                px={6}
                _hover={{ bg: "accent.600" }}
              >
                View my work
              </Button>
              <Button
                as="a"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={
                  <Download size={16} color="var(--chakra-colors-dark-700)" />
                }
                variant="outline"
                borderColor="gray.300"
                color="dark.700"
                fontSize="14px"
                px={6}
                _hover={{ bg: "gray.50", borderColor: "gray.400" }}
              >
                Download resume
              </Button>
            </HStack>
          </MotionBox>
        </Flex>

        {/* Trust strip */}
        <Flex
          direction={{ base: "column", sm: "row" }}
          align="center"
          justify="center"
          gap={{ base: 3, sm: 10 }}
          borderTop="1px solid"
          borderColor="gray.100"
          py={6}
        >
          <HeroStat value="4+" label="Years of experience" />
          <HeroStat value="500k+" label="Users impacted" />
          <HeroStat
            value="3"
            label="Industries: fintech, healthtech, edtech"
          />
        </Flex>
      </Container>
    </Box>
  );
}

function HeroStat({ value, label }) {
  return (
    <HStack spacing={2}>
      <Text fontSize="lg" fontWeight="700" color="gray.800">
        {value}
      </Text>
      <Text fontSize="sm" color="gray.500">
        {label}
      </Text>
    </HStack>
  );
}

export default Header;
