// src/theme/theme.js
import { extendTheme } from "@chakra-ui/react";

const CustomTheme = extendTheme({
  colors: {
    brandBlue: {
      50: "#EAEFFD",
      100: "#BDCEFA",
      200: "#9DB6F7",
      300: "#7195F4",
      400: "#5581F1",
      500: "#2B61EE",
      600: "#2758D9",
      700: "#1F45A9",
      800: "#183583",
      900: "#122964",
    },

    // primaryColor: {
    //   50: "#fffff8",
    //   100: "#fffeeb",
    //   200: "#fffde1",
    //   300: "#fefcd3",
    //   400: "#fefcca",
    //   500: "#fefbbd",
    //   600: "#e7e4ac",
    //   700: "#b4b286",
    //   800: "#8c8a68",
    //   900: "#6b694f",
    // },

    // primaryColor: {
    //   50: "#d8f3dc",
    //   100: "#b7e4c7",
    //   200: "#95d5b2",
    //   300: "#74c69d",
    //   400: "#52b788",
    //   500: "#40916c",
    //   600: "#2d6a4f",
    //   700: "#1b4332",
    //   800: "#123024",
    //   900: "#081c15",
    // },

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
  },
  fonts: {
    // Heading: "rubik",
    Heading: "Roboto Serif",
    body: "inter",
  },
});

export default CustomTheme;
