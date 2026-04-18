import React from "react";
import { Box, Heading, SimpleGrid, Text, VStack, Container, Divider, Tag, GridItem } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Certs = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const academicPath = [
    { 
      degree: isAr ? "ماجستير إدارة الموارد البشرية التطبيقية" : "Master of Applied Human Resource Management", 
      status: isAr ? "قيد الدراسة حالياً" : "Currently Pursuing",
      goal: isAr ? "الهدف القادم: دكتوراه في إدارة الأعمال (DBA) في إدارة المشاريع" : "Next Milestone: PhD in Business Administration (DBA) in Project Management"
    },
    { 
      degree: isAr ? "الدبلوم البريطاني (2024): ممارس كوتشينج فعال و NLP" : "British Diploma (2024): Effective Coaching & NLP Practitioner", 
      org: "Auspicium (UK)" 
    },
    { 
      degree: isAr ? "الدبلوم المهني العالي (2023): تأهيل المعلم (مرتكز على الكفايات)" : "Professional Graduate Diploma (2023): Teacher Qualification", 
      org: "2023" 
    },
    { 
      degree: isAr ? "الدبلوم المهني (2021): تصميم التعليم وإنتاج الوسائط التعليمية" : "Professional Diploma (2021): Instructional Design & Media Production", 
      org: "2021" 
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
      name: isAr ? "محرك الحجوزات الرقمي" : "Digital Reservation Engine", 
      desc: isAr ? "تطوير واجهة برمجية متقدمة باستخدام Django REST Framework ونظام RBAC" : "Advanced API development using Django REST Framework & RBAC" 
    }
  ];

  const psychCerts = [
    { name: isAr ? "علم النفس غير الطبيعي والفصام" : "Abnormal Psychology & Schizophrenia", org: "Wesleyan" },
    { name: isAr ? "سيكولوجية اضطرابات الصدمة والقلق" : "Trauma & Anxiety Psychology", org: "APA" },
    { name: isAr ? "الإسعافات الأولية النفسية" : "Psychological First Aid", org: "Johns Hopkins" },
    { name: isAr ? "الطب النفسي الإيجابي" : "Positive Psychiatry", org: "Sydney" },
    { name: isAr ? "محادثات التوجيه الصحي" : "Health Coaching Conversations", org: "Imperial College" },
    { name: isAr ? "القيادة بالتأثير والتنوع" : "Leadership & Diversity", org: "Coursera / IBM" }
  ];

  return (
    <Box minH="100vh" py="120px">
      <Container maxW="container.xl">
        <VStack spacing={16} align="stretch">
          <Heading as="h1" textAlign="center" fontSize="4xl" color="#0c4a6e">
            {isAr ? "المسار الأكاديمي والاحترافي" : "Academic & Professional Journey"}
          </Heading>

          {/* المسار الأكاديمي */}
          <Box>
            <Heading as="h2" size="xl" mb={8} textAlign="center" color="#0369a1">
              {isAr ? "المسار الأكاديمي" : "Academic Path"}
            </Heading>
            <VStack spacing={6}>
              {academicPath.map((item, i) => (
                <Box key={i} className="glass-card" p={8} w="full" borderLeft={isAr ? "none" : "6px solid #0c4a6e"} borderRight={isAr ? "6px solid #0c4a6e" : "none"}>
                  <VStack align="start" spacing={2}>
                    <Tag size="md" colorScheme="blue" variant="solid" borderRadius="full">{item.org || item.status}</Tag>
                    <Text fontSize="xl" fontWeight="800" color="#0c4a6e">{item.degree}</Text>
                    {item.goal && <Text color="#0369a1" fontWeight="bold" fontSize="md">✦ {item.goal}</Text>}
                  </VStack>
                </Box>
              ))}
            </VStack>
          </Box>

          {/* شهادات Google */}
          <Box>
            <Heading as="h2" size="xl" mb={8} textAlign="center" color="#0369a1">
              {isAr ? "الاحتراف التقني (Google)" : "Google Professional Certifications"}
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} spacing={6}>
              {techCerts.map((cert, i) => (
                <GridItem key={i} className="glass-card" p={6} textAlign="center">
                  <VStack spacing={3}>
                    <Tag size="sm" variant="subtle" colorScheme="cyan">{cert.level}</Tag>
                    <Text fontSize="lg" fontWeight="800" color="#0c4a6e">{cert.name}</Text>
                  </VStack>
                </GridItem>
              ))}
            </SimpleGrid>
          </Box>

          {/* مسار Meta */}
          <Box>
            <Heading as="h2" size="xl" mb={8} textAlign="center" color="#0369a1">
              {isAr ? "مسار التطوير البرمجي (Meta)" : "Software Development (Meta)"}
            </Heading>
            <SimpleGrid columns={[1, 2]} spacing={8}>
              {metaPath.map((item, i) => (
                <Box key={i} className="glass-card" p={8} borderTop="4px solid #0c4a6e">
                  <VStack align="start" spacing={3}>
                    <Text fontSize="xl" fontWeight="800" color="#0c4a6e">{item.name}</Text>
                    <Text fontSize="md" fontWeight="600">{item.desc}</Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          {/* علم النفس والقيادة */}
          <Box>
            <Heading as="h2" size="xl" mb={8} textAlign="center" color="#0369a1">
              {isAr ? "اعتمادات القيادة وعلم النفس" : "Leadership & Psychology Credentials"}
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} spacing={6}>
              {psychCerts.map((cert, i) => (
                <Box key={i} className="glass-card" p={6} borderTop="4px solid #0c4a6e">
                  <VStack align="start" spacing={3}>
                    <Tag size="md" colorScheme="facebook" variant="solid">{cert.org}</Tag>
                    <Text fontSize="md" fontWeight="800" color="#0c4a6e">{cert.name}</Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Box className="glass-card" p={10} textAlign="center" border="3px solid #0c4a6e">
            <Heading size="md" mb={4} color="#0c4a6e">
              {isAr ? "الرؤية الاستراتيجية وأنسنة العمل الرقمي" : "Strategic Vision & Humanizing Digital Work"}
            </Heading>
            <Text fontSize="xl" fontWeight="800" color="#0369a1">
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