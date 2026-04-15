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
      isDarkBackground={false}
      backgroundColor="#F0F9FF"
      backgroundImage="linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 100%)"
    >
      <Box
        p={10}
        borderRadius="3xl"
        bg="rgba(255, 255, 255, 0.7)"
        backdropFilter="blur(10px)"
        border="1px solid rgba(255, 255, 255, 0.5)"
        boxShadow="0 10px 30px rgba(0, 0, 0, 0.05)"
      >
        <VStack spacing={6}>
          <Avatar
            size="2xl"
            name="Shalee Khalil"
            src="https://media.licdn.com/dms/image/v2/D4D03AQFe7fJazFVxAQ/profile-displayphoto-scale_400_400/B4DZj_UhVKGQAk-/0/1756630227562?e=1778112000&v=beta&t=lnJdAbndOdJlaMbkzC32_5aZ-rtBOajv-QlxxJyJa8o"
            border="4px solid white"
            boxShadow="lg"
          />
          <VStack spacing={2}>
            <Heading as="h1" size="2xl" color="#0369A1" fontWeight="bold">
              Shalee Khalil
            </Heading>
            {/* تم تعديل النص هنا لإزالة رقم 28 بوضوح */}
            <Text fontSize="xl" fontWeight="semibold" color="#0C4A6E" textAlign="center">
              Teacher, Author, Full Stack Developer, Coach & Strategic Consultant
            </Text>
          </VStack>
          <Text fontSize="lg" color="#334155" textAlign="center" maxW="500px" lineHeight="tall">
            {t("card_bio_text")}
          </Text>
        </VStack>
      </Box>
    </FullScreenSection>
  );
};

export default LandingSection;