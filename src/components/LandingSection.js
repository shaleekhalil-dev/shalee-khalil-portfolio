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
      backgroundColor="#e1f5fe"
      backgroundImage="linear-gradient(180deg, #e1f5fe 0%, #b3e5fc 100%)"
    >
      <Box
        p={10}
        borderRadius="2xl"
        bg="rgba(255, 255, 255, 0.9)"
        boxShadow="0 10px 30px rgba(0, 0, 0, 0.1)"
      >
        <VStack spacing={6}>
          <Avatar
            size="2xl"
            name="Shalee Khalil"
            src="https://media.licdn.com/dms/image/v2/D4D03AQFe7fJazFVxAQ/profile-displayphoto-scale_400_400/B4DZj_UhVKGQAk-/0/1756630227562?e=1778112000&v=beta&t=lnJdAbndOdJlaMbkzC32_5aZ-rtBOajv-QlxxJyJa8o"
            border="2px solid white"
            boxShadow="md"
          />
          <VStack spacing={2}>
            <Heading as="h1" size="2xl" color="#1a2a6c">
              Shalee Khalil
            </Heading>
            <Text fontSize="xl" fontWeight="medium" color="#2c3e50">
              {t("hero_subtitle")}
            </Text>
          </VStack>
          <Text fontSize="lg" color="#4a5568" textAlign="center" maxW="500px">
            {t("card_bio_text")}
          </Text>
        </VStack>
      </Box>
    </FullScreenSection>
  );
};

export default LandingSection;