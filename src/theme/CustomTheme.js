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
    // Signature accent — a lemon-green used sparingly across CTAs, badges,
    // and links against the neutral scale above.
    accent: {
      50: "#F5F9E3",
      100: "#E9F2C2",
      200: "#D3E495",
      300: "#BBD667",
      400: "#9EC53E",
      500: "#7FA61A",
      600: "#5A7A00",
      700: "#486300",
      800: "#364A00",
      900: "#253300",
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
    heading: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    body: "'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
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
