import React from "react";
import { Box, Flex, Text, Container } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      as="footer" 
      className="glass-card" 
      borderRadius="0" 
      borderBottom="none" 
      borderLeft="none" 
      borderRight="none" 
      py={8}
      mt={10}
    >
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          px={4}
        >
          {/* اسمك وهويتك القانونية */}
          <Text fontSize="sm" fontWeight="bold">
            Shalee Khalil • شعلي خليل © {currentYear}
          </Text>

          {/* رسالتك الاستراتيجية المحدثة */}
          <Text fontSize="sm" fontWeight="bold" mt={{ base: 4, md: 0 }} textAlign="center">
            {isAr 
              ? "أنسنة بيئات العمل الرقمية | تطوير رأس المال النفسي والذكاء الاصطناعي" 
              : "Humanizing Digital Workspaces | Psychology & AI Integration"}
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;