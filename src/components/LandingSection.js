import React from "react";
import { Avatar, Heading, VStack, Box, Text, Container } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const LandingSection = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  // الرابط السحابي للصورة
  const profileImageUrl = "https://lh3.googleusercontent.com/d/18B6gq5r6kbxn2-6j_XJaJi2LT5BZvvMO";

  return (
    <Box as="section" id="landing-section" minH="100vh" py="120px" display="flex" alignItems="center">
      <Container maxW="container.lg">
        <VStack spacing={10} w="full">
          
          {/* قسم التعريف الشخصي الرئيسي */}
          <VStack spacing={6} textAlign="center" className="glass-card" p={10} w="full" borderBottom="5px solid #7dd3fc">
            <Avatar 
              src={profileImageUrl} 
              size="2xl" 
              border="4px solid #bae6fd"
              name="Shalee Khalil"
            />
            <VStack spacing={2}>
              <Heading as="h1" size="2xl" color="#0c4a6e" fontWeight="900">
                {isAr ? "شعلي خليل | Shalee Khalil" : "Shalee Khalil | شعلي خليل"}
              </Heading>
              <Text fontSize="xl" fontWeight="800" color="#0369a1">
                {isAr 
                  ? "قائد استراتيجي هجين | إدارة الموارد البشرية، علم النفس، والتقنيات الرقمية" 
                  : "Hybrid Strategic Leader | HRM, Psychology, and Digital Technologies"}
              </Text>
            </VStack>
          </VStack>

          {/* قسم الرؤية والهدف الاستراتيجي - مستطيل أصغر وأنيق */}
          <Box 
            className="glass-card" 
            p={6} 
            maxW="850px" 
            w="full"
            mx="auto" 
            textAlign="center" 
            border="2px solid #0c4a6e"
            boxShadow="lg"
          >
            <Heading size="md" mb={3} color="#0c4a6e">
              {isAr ? "الرؤية والهدف الاستراتيجي" : "Vision & Strategic Goal"}
            </Heading>
            <Text fontSize="lg" fontWeight="700" color="#0369a1" lineHeight="tall">
              {isAr 
                ? "أنسنة بيئات العمل الرقمية باستخدام الذكاء الاصطناعي لتطوير رأس المال النفسي وتحقيق التميز التشغيلي." 
                : "Humanizing digital work environments using AI to develop psychological capital and operational excellence."}
            </Text>
          </Box>

        </VStack>
      </Container>
    </Box>
  );
};

export default LandingSection;