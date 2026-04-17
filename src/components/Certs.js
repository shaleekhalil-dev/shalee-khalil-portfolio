import React from "react";
import { Box, Heading, SimpleGrid, Text, VStack, Container, Divider, Tag, GridItem } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Certs = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  // المسار التعليمي الأكاديمي
  const academicPath = [
    { 
      degree: isAr ? "ماجستير إدارة الموارد البشرية التطبيقية" : "Master of Applied Human Resource Management", 
      status: isAr ? "قيد الدراسة حالياً" : "Currently Pursuing",
      goal: isAr ? "الهدف القادم: دكتوراه في إدارة الأعمال (DBA)" : "Next Milestone: PhD in Business Administration (DBA)"
    },
    { 
      degree: isAr ? "الدبلوم المهني للدراسات العليا في تصميم التعليم وتأهيل المعلم" : "Professional Graduate Diploma in Instructional Design & Teacher Qualification", 
      org: "2023" 
    },
    { 
      degree: isAr ? "بكالوريوس التعليم الأساسي" : "Bachelor of Basic Education", 
      org: isAr ? "جامعة القدس المفتوحة" : "Al-Quds Open University" 
    }
  ];

  // الشهادات التقنية (تم إضافة Meta وGoogle Data Analytics)
  const techCerts = [
    { name: "Meta Full Stack Engineer", level: "Professional" },
    { name: "Google Data Analytics", level: "Professional" },
    { name: "AI Professional", level: "Google" },
    { name: "Cybersecurity", level: "Google" },
    { name: "Project Management", level: "Google" },
    { name: "UX Design", level: "Google" }
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

          {/* القسم الأول: المسار الأكاديمي الشامل */}
          <Box>
            <Heading as="h2" size="xl" mb={8} textAlign="center">
              {isAr ? "المسار الأكاديمي" : "Academic Journey"}
            </Heading>
            <VStack spacing={6}>
              {academicPath.map((item, i) => (
                <Box key={i} className="glass-card" p={8} w="full" borderLeft={isAr ? "none" : "4px solid black"} borderRight={isAr ? "4px solid black" : "none"}>
                  <VStack align="start" spacing={2}>
                    <Tag size="md" colorScheme="purple" variant="solid">{item.org || item.status}</Tag>
                    <Text fontSize="xl" fontWeight="bold">{item.degree}</Text>
                    {item.goal && <Text color="blue.600" fontWeight="bold" fontSize="sm">✦ {item.goal}</Text>}
                  </VStack>
                </Box>
              ))}
            </VStack>
          </Box>

          <Divider borderColor="blackAlpha.400" />

          {/* القسم الثاني: الشهادات التقنية والمهنية */}
          <Box>
            <Heading as="h2" size="xl" mb={8} textAlign="center">
              {isAr ? "الاحتراف التقني والبيانات" : "Technical & Data Expertise"}
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} spacing={6}>
              {techCerts.map((cert, i) => (
                <GridItem key={i} className="glass-card" p={6} textAlign="center">
                  <VStack>
                    <Tag size="sm" variant="outline" colorScheme="orange">{cert.level}</Tag>
                    <Text fontSize="lg" fontWeight="bold">{cert.name}</Text>
                  </VStack>
                </GridItem>
              ))}
            </SimpleGrid>
          </Box>

          <Divider borderColor="blackAlpha.400" />

          {/* القسم الثالث: علم النفس والقيادة */}
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

          {/* الملخص النهائي الاستراتيجي */}
          <Box className="glass-card" p={10} textAlign="center" border="2px solid black">
            <Heading size="md" mb={4}>
              {isAr ? "الرؤية الاستراتيجية" : "Strategic Vision"}
            </Heading>
            <Text fontSize="xl" fontWeight="bold">
              {isAr 
                ? "دمج تكنولوجيا Full-Stack وتحليل البيانات مع إدارة الموارد البشرية وأنسنة بيئات العمل الرقمية." 
                : "Integrating Full-Stack technology & Data Analytics with HRM to humanize digital work environments."}
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Certs;