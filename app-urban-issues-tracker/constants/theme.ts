import { DefaultTheme } from "react-native-paper";

export const textColors = {
  default: {
    default: "#1E1E1E",
    secondary: "#757575",
    tertiary: "#B3B3B3",
  },
  brand: {
    onBrand: "#F5F5F5",
  },
  neutral: {
    default: "#303030",
  },
  positive: {
    default: "#02542D",
    secondary: "#EBFFEE",
  },
  warning: {
    deafult: "#",
    secondary: "#975102",
  },
};

export const iconColors = textColors;

export const backgroundColors = {
  default: {
    default: "#FFFFFF",
    secondary: "#F5F5F5",
  },
  brand: {
    default: "#2C2C2C",
    secondary: "#E6E6E6",
  },
  neutral: {
    tertiary: "#E3E3E3",
  },
  positive: {
    default: "#14AE5C",
    secondary: "#CFF7D3",
  },
  warning: {
    secondary: "#FFF1C2",
  },
};

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#2C2C2C",
    accent: "#f1c40f",
  },
};
