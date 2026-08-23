// src/theme/theme.js
import { extendTheme } from "@chakra-ui/react";

const CustomTheme = extendTheme({
  colors: {
    // Neutral scale — the base of the elevated-minimal palette
    primaryColor: {
      50: "#F7F7F8",
      100: "#EDEDEF",
      200: "#D1D1D6",
      300: "#A8A8B0",
      400: "#7A7A85",
      500: "#52525B",
      600: "#3F3F46",
      700: "#27272A",
      800: "#18181B",
      900: "#09090B",
    },
    // Signature accent — a warm clay/terracotta used sparingly across CTAs,
    // badges, and links against the neutral scale above.
    accent: {
      50: "#FBF1EC",
      100: "#F5DFD2",
      200: "#E9BCA0",
      300: "#DB9A72",
      400: "#CC7A4C",
      500: "#B85C38",
      600: "#96472A",
      700: "#753620",
      800: "#552618",
      900: "#37170F",
    },
    // Uniform icon/utility color, used across every icon on the site
    dark: {
      50: "#F7F7F8",
      100: "#EDEDEF",
      200: "#D1D1D6",
      300: "#A8A8B0",
      400: "#7A7A85",
      500: "#52525B",
      600: "#3F3F46",
      700: "#27272A",
      800: "#18181B",
      900: "#09090B",
    },
  },
  fonts: {
    heading: "'Roboto Serif', serif",
    body: "'Inter', sans-serif",
  },
  styles: {
    global: {
      body: {
        color: "gray.800",
      },
      "*::selection": {
        backgroundColor: "accent.100",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "8px",
      },
    },
  },
});

export default CustomTheme;
