import React from "react";
import { Box, Heading, SimpleGrid, Text, VStack, Container, Divider, Tag, GridItem } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Certs = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const academicPath = [
    { 
      degree: isAr ? "ماجستير إدارة الموارد البشرية التطبيقية" : "Master of Applied Human Resource Management", 
      status: isAr ? "قيد الدراسة حالياً" : "Currently Pursuing",
      goal: isAr ? "الهدف القادم: دكتوراه في إدارة الأعمال (DBA) في إدارة المشاريع" : "Next Milestone: PhD in Business Administration (DBA) in Project Management"
    },
    { 
      degree: isAr ? "الدبلوم المهني الثاني (2023): تأهيل المعلم (مرتكز على الكفايات)" : "Professional Graduate Diploma: Teacher Qualification (Competency-based)", 
      org: "2023" 
    },
    { 
      degree: isAr ? "الدبلوم المهني الأول (2022): تصميم التعليم وإنتاج الوسائط التعليمية" : "Professional Graduate Diploma: Instructional Design & Media Production", 
      org: "2022" 
    },
    { 
      degree: isAr ? "بكالوريوس التعليم الأساسي" : "Bachelor of Basic Education", 
      org: isAr ? "جامعة القدس المفتوحة" : "Al-Quds Open University" 
    }
  ];

  const techCerts = [
    { name: isAr ? "تحليل البيانات من Google" : "Google Data Analytics", level: "Professional" },
    { name: isAr ? "احتراف الذكاء الاصطناعي" : "Google AI Professional", level: "Google" },
    { name: isAr ? "أساسيات الذكاء الاصطناعي" : "Google AI Essentials", level: "Google" },
    { name: isAr ? "هندسة الأوامر البرمجية" : "Google Prompting Essentials", level: "Google" },
    { name: isAr ? "الأمن السيبراني" : "Google Cybersecurity", level: "Google" },
    { name: isAr ? "إدارة المشاريع" : "Google Project Management", level: "Google" },
    { name: isAr ? "تصميم تجربة المستخدم" : "Google UX Design", level: "Google" },
    { name: isAr ? "الدعم الفني لتكنولوجيا المعلومات" : "Google IT Support", level: "Google" },
    { name: isAr ? "التسويق الرقمي والتجارة الإلكترونية" : "Google Digital Marketing & E-commerce", level: "Google" }
  ];

  const metaPath = [
    { 
      name: isAr ? "مطور الويب المتكامل من Meta" : "Meta Full-Stack Developer", 
      desc: isAr ? "تطوير تطبيقات الويب (Frontend & Backend)" : "Full-Stack Web Development Specialization" 
    },
    { 
      name: "Little Lemon API", 
      desc: isAr ? "تطوير واجهة برمجية باستخدام Django REST Framework ونظام RBAC" : "Advanced API development using Django REST Framework & RBAC" 
    }
  ];

  const psychCerts = [
    { name: isAr ? "سيكولوجية اضطرابات الصدمة والقلق" : "Trauma & Anxiety Psychology", org: "APA" },
    { name: isAr ? "الإسعافات الأولية النفسية" : "Psychological First Aid", org: "Johns Hopkins" },
    { name: isAr ? "الطب النفسي الإيجابي" : "Positive Psychiatry", org: "Sydney" },
    { name: isAr ? "دبلوم كوتشينج فعال وممارس NLP" : "Effective Coaching & NLP Practitioner", org: "Auspicium" }
  ];

  return (
    <Box minH="100vh" py="120px">
      <Container maxW="container.xl">
        <VStack spacing={16} align="stretch">
          <Heading as="h1" textAlign="center" fontSize="4xl">
            {isAr ? "المسار الأكاديمي والاحترافي" : "Academic & Professional Journey"}
          </Heading>

          <Box>
            <Heading as="h2" size="xl" mb={8} textAlign="center">
              {isAr ? "المسار الأكاديمي" : "Academic Path"}
            </Heading>
            <VStack spacing={6}>
              {academicPath.map((item, i) => (
                <Box key={i} className="glass-card" p={8} w="full" borderLeft={isAr ? "none" : "6px solid #0c4a6e"} borderRight={isAr ? "6px solid #0c4a6e" : "none"}>
                  <VStack align="start" spacing={2}>
                    <Tag size="md" colorScheme="blue" variant="solid" borderRadius="full">{item.org || item.status}</Tag>
                    <Text fontSize="xl" fontWeight="800">{item.degree}</Text>
                    {item.goal && <Text color="#0c4a6e" fontWeight="bold" fontSize="md">✦ {item.goal}</Text>}
                  </VStack>
                </Box>
              ))}
            </VStack>
          </Box>

          <Divider borderColor="blackAlpha.400" />

          <Box>
            <Heading as="h2" size="xl" mb={8} textAlign="center">
              {isAr ? "الاحتراف التقني (شهادات Google التسعة)" : "Google Professional Certifications (9 Certs)"}
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} spacing={6}>
              {techCerts.map((cert, i) => (
                <GridItem key={i} className="glass-card" p={6} textAlign="center">
                  <VStack spacing={3}>
                    <Tag size="sm" variant="subtle" colorScheme="cyan">{cert.level}</Tag>
                    <Text fontSize="lg" fontWeight="800">{cert.name}</Text>
                  </VStack>
                </GridItem>
              ))}
            </SimpleGrid>
          </Box>

          <Divider borderColor="blackAlpha.400" />

          <Box>
            <Heading as="h2" size="xl" mb={8} textAlign="center">
              {isAr ? "مسار التطوير البرمجي (Meta)" : "Software Development (Meta)"}
            </Heading>
            <SimpleGrid columns={[1, 2]} spacing={8}>
              {metaPath.map((item, i) => (
                <Box key={i} className="glass-card" p={8} borderTop="4px solid #0c4a6e">
                  <VStack align="start" spacing={3}>
                    <Text fontSize="xl" fontWeight="800">{item.name}</Text>
                    <Text fontSize="md">{item.desc}</Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Divider borderColor="blackAlpha.400" />

          <Box>
            <Heading as="h2" size="xl" mb={8} textAlign="center">
              {isAr ? "اعتمادات القيادة وعلم النفس" : "Leadership & Psychology Credentials"}
            </Heading>
            <SimpleGrid columns={[1, 2]} spacing={8}>
              {psychCerts.map((cert, i) => (
                <Box key={i} className="glass-card" p={8} borderTop="4px solid #0c4a6e">
                  <VStack align="start" spacing={3}>
                    <Tag size="lg" colorScheme="facebook" variant="solid">{cert.org}</Tag>
                    <Text fontSize="xl" fontWeight="800">{cert.name}</Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Box className="glass-card" p={10} textAlign="center" border="3px solid #0c4a6e">
            <Heading size="md" mb={4}>
              {isAr ? "الرؤية الاستراتيجية وأنسنة العمل الرقمي" : "Strategic Vision & Humanizing Digital Work"}
            </Heading>
            <Text fontSize="xl" fontWeight="800">
              {isAr 
                ? "دمج تكنولوجيا Full-Stack وتحليل البيانات مع إدارة الموارد البشرية لتطوير رأس المال النفسي في البيئات الرقمية." 
                : "Integrating Full-Stack technology & Data Analytics with HRM to develop psychological capital in digital environments."}
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Certs;