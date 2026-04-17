import * as React from "react";
import { VStack } from "@chakra-ui/react";

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor="transparent"
      color="black"
      w="full"
    >
      <VStack 
        maxWidth="1280px" 
        minHeight="100vh" 
        w="full"
        justifyContent="center"
        px={4}
        {...boxProps}
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;