import { useEffect, useState } from "react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import "../styles/Global.css";
import {
  Box,
  Text,
  Container,
  Flex,
  Link,
  Button,
  useDisclosure,
  Stack,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { Menu, X, ExternalLink, Download } from "lucide-react";
import logo from "../assets/Tobelogo.png";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/ekwealor-tobechukwu-100113114/";

const linkStyles = {
  fontSize: "14px",
  fontWeight: 500,
  px: 3,
  py: 1,
  rounded: "md",
  color: "gray.600",
  _hover: { color: "accent.600", textDecoration: "none" },
};

function NavItem({ to, children, onClick }) {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <ChakraLink
      as={ReactRouterLink}
      to={to}
      onClick={onClick}
      {...linkStyles}
      color={isActive ? "accent.600" : "gray.600"}
      fontWeight={isActive ? 600 : 500}
    >
      {children}
    </ChakraLink>
  );
}

export default function NavMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      bg={scrolled ? "rgba(255, 255, 255, 0.7)" : "#fff"}
      position="sticky"
      top="0"
      zIndex="1000"
      borderBottom="1px"
      borderBottomColor={scrolled ? "rgba(238, 238, 238, 0.7)" : "#eee"}
      transition="background-color 0.25s ease, backdrop-filter 0.25s ease, box-shadow 0.25s ease"
      boxShadow={scrolled ? "0 8px 24px rgba(0,0,0,0.06)" : "none"}
      sx={{
        backdropFilter: scrolled ? "blur(12px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px) saturate(180%)" : "none",
      }}
    >
      <Container maxW={["container.sm", "container.xl"]}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <ChakraLink
            as={ReactRouterLink}
            to="/"
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
          >
            <Box
              as="img"
              src={logo}
              alt="Ekwealor Tobechukwu logo"
              h="36px"
              w="36px"
              borderRadius="8px"
            />
          </ChakraLink>

          <HStack spacing={6} alignItems="center">
            <HStack
              as="nav"
              spacing={1}
              display={{ base: "none", md: "flex" }}
            >
              <NavItem to="/">Home</NavItem>
              <NavItem to="/about">About</NavItem>
            </HStack>

            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              display={{ base: "none", md: "flex" }}
              alignItems="center"
              gap="6px"
              fontSize="14px"
              fontWeight={500}
              color="dark.700"
              _hover={{ color: "accent.600", textDecoration: "none" }}
            >
              <Download size={14} />
              Resume
            </Link>

            <Button
              as="a"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<ExternalLink size={14} />}
              bgColor="dark.900"
              color="#ffffff"
              fontSize="14px"
              size="sm"
              px={5}
              _hover={{ bg: "accent.600" }}
              display={{ base: "none", sm: "inline-flex" }}
            >
              Let's connect
            </Button>
          </HStack>

          <IconButton
            size="sm"
            icon={
              isOpen ? (
                <X size={18} color="var(--chakra-colors-dark-700)" />
              ) : (
                <Menu size={18} color="var(--chakra-colors-dark-700)" />
              )
            }
            aria-label={isOpen ? "Close menu" : "Open menu"}
            variant="ghost"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={3}>
              <NavItem to="/" onClick={onClose}>
                Home
              </NavItem>
              <NavItem to="/about" onClick={onClose}>
                About
              </NavItem>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                display="flex"
                alignItems="center"
                gap="8px"
                {...linkStyles}
              >
                <Download size={14} />
                Resume
              </Link>
              <Link
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                display="flex"
                alignItems="center"
                gap="8px"
                {...linkStyles}
              >
                <ExternalLink size={14} />
                Let's connect
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
}
