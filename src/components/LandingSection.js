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
      backgroundColor="#2c3e50"
      backgroundImage="linear-gradient(135deg, #2c3e50 0%, #34495e 100%)"
    >
      <Box
        p={10}
        borderRadius="3xl"
        bg="rgba(255, 255, 255, 0.08)"
        backdropFilter="blur(20px)"
        border="1px solid rgba(255, 255, 255, 0.15)"
        boxShadow="0 20px 50px rgba(0, 0, 0, 0.3)"
      >
        <VStack spacing={6}>
          <Avatar
            size="2xl"
            name="Shalee Khalil"
            src="https://media.licdn.com/dms/image/v2/D4D03AQFe7fJazFVxAQ/profile-displayphoto-scale_400_400/B4DZj_UhVKGQAk-/0/1756630227562?e=1778112000&v=beta&t=lnJdAbndOdJlaMbkzC32_5aZ-rtBOajv-QlxxJyJa8o"
            border="4px solid rgba(255, 255, 255, 0.2)"
            boxShadow="xl"
          />
          <VStack spacing={2}>
            <Heading as="h1" size="2xl" color="white" textShadow="0 2px 10px rgba(0,0,0,0.5)">
              Shalee Khalil
            </Heading>
            <Text fontSize="xl" fontWeight="semibold" color="blue.50" textAlign="center">
              {t("hero_subtitle")}
            </Text>
          </VStack>
          <Text fontSize="lg" color="whiteAlpha.900" textAlign="center" maxW="500px" lineHeight="tall">
            {t("card_bio_text")}
          </Text>
        </VStack>
      </Box>
    </FullScreenSection>
  );
};

export default LandingSection;