import React from "react";
import { Box, Heading, SimpleGrid, Text, VStack, Container, Divider, Tag, GridItem } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Certs = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const googleCerts = [
    "Data Analytics", "AI Professional", "AI Essentials", "Prompting Essentials",
    "Cybersecurity", "Project Management", "UX Design", "IT Support", "Digital Marketing"
  ];

  const psychCerts = [
    { name: "Trauma & Anxiety Psychology", org: "APA" },
    { name: "Psychological First Aid", org: "Johns Hopkins" },
    { name: "Abnormal Psychology", org: "Wesleyan" },
    { name: "Positive Psychiatry", org: "Sydney" },
    { name: "Health Coaching", org: "Imperial College" }
  ];

  return (
    <Box minH="100vh" py="120px">
      <Container maxW="container.xl">
        <VStack spacing={16} align="stretch">
          <Heading as="h1" textAlign="center" fontSize="4xl">
            {t('learning_journey_title')}
          </Heading>

          <Box>
            <Heading as="h2" size="xl" mb={8} textAlign="center">
              {isAr ? "الشهادات المهنية من Google" : "Google Professional Certifications"}
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} spacing={6}>
              {googleCerts.map((cert, i) => (
                <GridItem key={i} className="glass-card" p={6} textAlign="center" display="flex" alignItems="center" justifyContent="center">
                  <Text fontSize="lg" fontWeight="bold">{cert}</Text>
                </GridItem>
              ))}
            </SimpleGrid>
          </Box>

          <Divider borderColor="blackAlpha.400" />

          <Box>
            <Heading as="h2" size="xl" mb={8} textAlign="center">
              {isAr ? "اعتمادات علم النفس والقيادة" : "Psychology & Leadership Credentials"}
            </Heading>
            <SimpleGrid columns={[1, 2]} spacing={8}>
              {psychCerts.map((cert, i) => (
                <Box key={i} className="glass-card" p={8}>
                  <VStack align="start" spacing={3}>
                    <Tag size="lg" colorScheme="blue" variant="solid">{cert.org}</Tag>
                    <Text fontSize="xl" fontWeight="bold">{cert.name}</Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Box className="glass-card" p={10} textAlign="center" border="2px solid black">
            <Heading size="md">
              {isAr ? "ملخص المحفظة الأكاديمية" : "Academic Portfolio Summary"}
            </Heading>
            <Text fontSize="2xl" mt={4}>
              {isAr 
                ? "أكثر من 64 ساعة معتمدة | 9 شهادات تخصصية من Google | قيادة استراتيجية هجينة" 
                : "64+ Credit Hours | 9 Google Certifications | Hybrid Strategic Leadership"}
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Certs;