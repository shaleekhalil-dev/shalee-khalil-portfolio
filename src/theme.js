import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
    },
  },
  fonts: {
    heading: "'Cairo', sans-serif",
    body: "'Cairo', sans-serif",
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        bg: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)",
        color: "brand.900",
        minH: "100vh",
        backgroundAttachment: "fixed",
        overflowX: "hidden",
      },
      ".glass-card": {
        bg: "rgba(255, 255, 255, 0.72)",
        backdropFilter: "blur(14px)",
        borderRadius: "2xl",
        border: "1px solid",
        borderColor: "whiteAlpha.800",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.08)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      "::-webkit-scrollbar": {
        width: "8px",
      },
      "::-webkit-scrollbar-track": {
        background: "#f0f9ff",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#0284c7",
        borderRadius: "full",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#0c4a6e",
      },
    },
  },
});

export default theme;