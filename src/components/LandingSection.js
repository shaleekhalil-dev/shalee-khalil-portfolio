import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useTranslation } from "react-i18next";

const LandingSection = () => {
  const { t } = useTranslation();

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <VStack spacing={4}>
        <Avatar
          size="2xl"
          name="Shalee Khalil"
          src="https://i.pravatar.cc/150?u=shaleekhalil" // استبدلها برابط صورتك الشخصية لاحقاً
        />
        <Heading as="h1" size="xl" noOfLines={1}>
          Shalee Khalil
        </Heading>
        <Text fontSize="lg" fontWeight="bold" textAlign="center">
          {t("hero_subtitle")}
        </Text>
        <Text fontSize="md" textAlign="center" maxW="600px">
          {t("card_bio_text")}
        </Text>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;