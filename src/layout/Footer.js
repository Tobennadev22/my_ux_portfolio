import { Container, Box, Text, Flex, Link } from "@chakra-ui/react";
import { Mail, ExternalLink } from "lucide-react";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/ekwealor-tobechukwu-100113114/";
const EMAIL = "ekwealortobechukwu22@gmail.com";

function Footer() {
  return (
    <Box bgColor="gray.900" py={{ base: 10, md: 12 }}>
      <Container maxW="container.xl" px={{ base: 5, md: 10 }}>
        <Flex
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          align={{ base: "flex-start", sm: "center" }}
          gap={6}
        >
          <Box>
            <Text color="white" fontWeight={600} fontSize="md" mb={1}>
              Ekwealor Tobechukwu
            </Text>
            <Text color="whiteAlpha.600" fontSize="sm">
              UI/UX Designer, based in Lagos, Nigeria
            </Text>
          </Box>

          <Flex gap={6} fontSize="sm">
            <Link
              href={`mailto:${EMAIL}`}
              display="flex"
              alignItems="center"
              gap="6px"
              color="whiteAlpha.800"
              _hover={{ color: "accent.400" }}
            >
              <Mail size={14} />
              Email
            </Link>
            <Link
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              display="flex"
              alignItems="center"
              gap="6px"
              color="whiteAlpha.800"
              _hover={{ color: "accent.400" }}
            >
              <ExternalLink size={14} />
              LinkedIn
            </Link>
          </Flex>
        </Flex>

        <Text color="whiteAlpha.500" fontSize="xs" mt={8}>
          © {new Date().getFullYear()} Ekwealor Tobechukwu. Built with React
          & Chakra UI.
        </Text>
      </Container>
    </Box>
  );
}

export default Footer;
