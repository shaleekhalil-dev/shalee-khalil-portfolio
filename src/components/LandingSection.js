import React from "react";
import { Avatar, Heading, VStack, Box, Text, Container, SimpleGrid, HStack, Link, Icon } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt } from "react-icons/fa";

const LandingSection = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  // استخدام الرابط السحابي لضمان استقرار الموقع عند الرفع
  const profileImageUrl = "https://lh3.googleusercontent.com/d/18B6gq5r6kbxn2-6j_XJaJi2LT5BZvvMO";

  return (
    <Box as="section" id="landing-section" minH="100vh" py="120px" display="flex" alignItems="center">
      <Container maxW="container.lg">
        <VStack spacing={10} w="full">
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

          <SimpleGrid columns={[1, null, 2]} spacing={8} w="full">
            <Box className="glass-card" p={8} border="1px solid #bae6fd">
              <Heading size="md" mb={4} color="#0c4a6e" borderBottom="2px solid #7dd3fc" pb={2}>
                {isAr ? "الرؤية والهدف" : "Vision & Mission"}
              </Heading>
              <Text fontSize="md" fontWeight="700" color="#0c4a6e" lineHeight="tall">
                {isAr 
                  ? "أسعى لأنسنة بيئات العمل الرقمية باستخدام الذكاء الاصطناعي لتطوير رأس المال النفسي، ودمج أدوات البرمجة في أتمتة العمليات الإدارية وتحليل البيانات لتحقيق التميز التشغيلي." 
                  : "I aim to humanize digital work environments using AI to develop psychological capital, integrating programming tools to automate administrative processes and analyze data for operational excellence."}
              </Text>
            </Box>

            <Box className="glass-card" p={8} border="1px solid #bae6fd">
              <Heading size="md" mb={4} color="#0c4a6e" borderBottom="2px solid #7dd3fc" pb={2}>
                {isAr ? "المنصات والهويات الرقمية" : "Digital Identities & Hubs"}
              </Heading>
              <VStack spacing={4} align="stretch">
                <Link href="https://canva.link/uucyyzdna28977l" isExternal _hover={{ transform: "translateX(5px)" }} transition="0.3s">
                  <HStack color="#0369a1" fontWeight="800">
                    <Icon as={FaExternalLinkAlt} />
                    <Text>{isAr ? "مركز الهوية الرقمية الموحد" : "Unified Digital Identity Hub"}</Text>
                  </HStack>
                </Link>
                <Link href="https://sites.google.com/view/shaleekh" isExternal _hover={{ transform: "translateX(5px)" }} transition="0.3s">
                  <HStack color="#0369a1" fontWeight="800">
                    <Icon as={FaExternalLinkAlt} />
                    <Text>{isAr ? "ملف التميز التعليمي" : "Educational Excellence Portfolio"}</Text>
                  </HStack>
                </Link>
                <Link href="https://sites.google.com/view/shaaleekhalil" isExternal _hover={{ transform: "translateX(5px)" }} transition="0.3s">
                  <HStack color="#0369a1" fontWeight="800">
                    <Icon as={FaExternalLinkAlt} />
                    <Text>{isAr ? "ملف رأس المال البشري والتوجيه" : "Human Capital & Coaching Profile"}</Text>
                  </HStack>
                </Link>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default LandingSection;