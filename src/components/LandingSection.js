import React from "react";
import { Avatar, Heading, VStack, Text, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useTranslation } from "react-i18next";

const LandingSection = () => {
  const { t } = useTranslation();

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#1a2a6c"
      backgroundImage="linear-gradient(to bottom right, #1a2a6c, #b21f1f, #fdbb2d)"
    >
      <Box
        p={10}
        borderRadius="3xl"
        bg="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(15px)"
        border="1px solid rgba(255, 255, 255, 0.2)"
        boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
      >
        <VStack spacing={6}>
          <Avatar
            size="2xl"
            name="Shalee Khalil"
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Shalee"
            border="4px solid rgba(255, 255, 255, 0.3)"
          />
          <VStack spacing={2}>
            <Heading as="h1" size="2xl" color="white" textShadow="2px 2px 4px rgba(0,0,0,0.3)">
              Shalee Khalil
            </Heading>
            <Text fontSize="xl" fontWeight="semibold" color="blue.100" textAlign="center">
              {t("hero_subtitle")}
            </Text>
          </VStack>
          <Text fontSize="lg" color="whiteAlpha.900" textAlign="center" maxW="500px">
            {t("card_bio_text")}
          </Text>
        </VStack>
      </Box>
    </FullScreenSection>
  );
};

export default LandingSection;