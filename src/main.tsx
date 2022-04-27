import React from "react";
import * as ReactDOM from "react-dom";
import {
  ChakraProvider,
  withDefaultColorScheme,
  extendTheme,
  theme as baseTheme,
} from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import { Button } from "./Button/theme";

const colors = {
  brand: {
    900: "#4C1D95",
    800: "#5B21B6",
    700: "#6D28D9",
    600: "#7C3AED",
    500: "#8B5CF6",
    400: "#A78BFA",
    300: "#C4B5FD",
    200: "#DDD6FE",
    100: "#EDE9FE",
  },
};

const theme = extendTheme(
  {
    components: {
      Button,
    },
    colors,
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components: [
      "Button",
    ] /* this applies the `brand` scheme as default for `Button` only.*/,
  })
);

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
