import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py={8} mt={10} borderTop="1px solid rgba(3, 105, 161, 0.1)">
      <Flex direction="column" align="center">
        <Text fontSize="sm" fontWeight="800" color="#0369a1">
          Shalee Khalil • شعلي خليل © {new Date().getFullYear()}
        </Text>
        <Text fontSize="xs" fontWeight="600" color="#0c4a6e" mt={2}>
          Hybrid Strategic Leader | Full-Stack Developer
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;