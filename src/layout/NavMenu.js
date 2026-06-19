import { Link as ReactRouterLink } from "react-router-dom";
import { useState } from "react";
// import { NavLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../icons/tobelogo.png";
import "../styles/Global.css";
import {
  Box,
  Container,
  Flex,
  Link,
  useDisclosure,
  Stack,
  IconButton,
  HStack,
  useColorModeValue,
  CloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      // bg: useColorModeValue("primaryColor.400", "gray.900"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function NavMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isActive, setIsActive] = useState(false);

  return (
    <Box
      // bg={useColorModeValue("black.900")}
      // px={20}
      bg="#fff"
      position="sticky"
      top="0"
      zIndex="1000"
      // p={2}
      // px={10}
      boxShadow="md"
      blur={10}
      opacity={[0.9]}
    >
      <Container maxW={["container.sm", "container.xl"]}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          color="gray.600"
        >
          <Flex direction={["column", "column", "row"]}>
            <ChakraLink as={ReactRouterLink} to="/" textDecoration="none">
              <img src={Logo} alt="Tobechukwu's Logo" width="150px" />
              {/* <Text fontWeight={[700]}>Tobenna Miles</Text> */}
            </ChakraLink>
          </Flex>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", sm: "flex" }}
              fontWeight={[500]}
            >
              <ChakraLink
                as={ReactRouterLink}
                to="/"
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("primaryColor.50", "gray.200"),
                }}
                px={2}
                py={1}
                rounded={"md"}
                className={({ isActive }) =>
                  !isActive ? "active-link" : undefined
                }
                // sx={{
                //   "&.active-link": {
                //     bg: "primaryColor.400",
                //     color: "gray.100",
                //     textDecoration: "none",
                //   },
                // }}
              >
                Home
              </ChakraLink>
              <ChakraLink
                as={ReactRouterLink}
                to="/about"
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("primaryColor.50", "gray.200"),
                }}
                px={2}
                py={1}
                rounded={"md"}
                className={({ isActive }) =>
                  !isActive ? "active-link" : undefined
                }
              >
                About Me
              </ChakraLink>
              <ChakraLink
                as={ScrollLink}
                to="#"
                smooth="true"
                duration={800}
                cursor="pointer"
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("primaryColor.50", "gray.200"),
                }}
                _active={{
                  bg: useColorModeValue("primaryColor.400", "gray.100"),
                }}
                px={2}
                py={1}
                rounded={"md"}
                className={({ isActive }) =>
                  !isActive ? "active-link" : undefined
                }
              >
                My Resume
              </ChakraLink>
              <NavLink>Contact</NavLink>
            </HStack>
          </HStack>
          <IconButton
            size={"sm"}
            icon={isOpen ? <CloseButton /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            // mx={2}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <ChakraLink
                as={ReactRouterLink}
                to="/"
                px={2}
                py={1}
                rounded={"md"}
              >
                Home
              </ChakraLink>
              <ChakraLink
                as={ReactRouterLink}
                to="/about"
                px={2}
                py={1}
                rounded={"md"}
              >
                About Me
              </ChakraLink>
              <ChakraLink
                as={ScrollLink}
                to="project-section"
                smooth="true"
                duration={500}
                cursor="pointer"
                px={2}
                py={1}
                rounded={"md"}
              >
                Projects
              </ChakraLink>
              <NavLink>Contact</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
}
