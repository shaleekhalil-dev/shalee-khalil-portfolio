import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <Box as="footer" py={8} mt={10} borderTop="1px solid rgba(3, 105, 161, 0.1)">
      <Flex direction="column" align="center">
        <Text fontSize="sm" fontWeight="800" color="#0369a1">
          Shalee Khalil • شعلي خليل © {new Date().getFullYear()}
        </Text>
        <Text fontSize="xs" fontWeight="600" color="#0c4a6e" mt={2} textAlign="center">
          {isAr 
            ? "قائد استراتيجي هجين | مطور ويب متكامل (Full-Stack)" 
            : "Hybrid Strategic Leader | Full-Stack Developer"}
        </Text>
        <Text fontSize="xs" fontWeight="500" color="#0c4a6e" mt={1} opacity={0.8}>
          {isAr 
            ? "أنسنة بيئات العمل الرقمية باستخدام الذكاء الاصطناعي" 
            : "Humanizing Digital Work Environments using AI"}
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;