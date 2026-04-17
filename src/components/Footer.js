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
      borderRadius="0 !important" 
      borderBottom="none !important" 
      borderLeft="none !important" 
      borderRight="none !important" 
      borderTop="1px solid rgba(255, 255, 255, 0.3) !important"
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
          <Text fontSize="md" fontWeight="800">
            Shalee Khalil • شعلي خليل © {currentYear}
          </Text>

          <Text fontSize="md" fontWeight="800" mt={{ base: 4, md: 0 }} textAlign="center">
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