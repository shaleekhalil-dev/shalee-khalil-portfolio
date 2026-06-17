import React from "react";
import { 
  Box, Container, Heading, SimpleGrid, VStack, Text, 
  HStack, Button, Link, Badge, Icon, Divider, Flex 
} from "@chakra-ui/react";
import { 
  FaGraduationCap, FaExternalLinkAlt, FaAward, 
  FaBrain, FaRobot, FaUserTie, FaArrowRight, FaArrowLeft, FaSearch 
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Certifications = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const ArrowIcon = isAr ? FaArrowLeft : FaArrowRight;

  // 1. فرع التقنية، البرمجة والذكاء الاصطناعي
  const techSection = {
    title: isAr ? "التقنية، البرمجة والذكاء الاصطناعي" : "Technology, Programming & AI",
    icon: FaRobot, color: "purple.500",
    linkedCerts: [ // تم التصحيح هنا إلى نقطتين رأسييتين
      { name: "IBM Full Stack Software Developer", issuer: "IBM", link: "https://www.coursera.org/account/accomplishments/specialization/W9D3R7395EI3" },
      { name: "IBM DevOps and Software Engineering", issuer: "IBM", link: "https://www.coursera.org/account/accomplishments/specialization/W1WKC25AHWRG" },
      { name: "IBM Data Engineering", issuer: "IBM", link: "https://www.coursera.org/account/accomplishments/specialization/SUZKGITATZYZ" },
      { name: "IBM Data Science", issuer: "IBM", link: "https://www.coursera.org/account/accomplishments/specialization/GY6EPUG345Z0" },
      { name: "Meta Android Developer", issuer: "Meta", link: "https://www.coursera.org/account/accomplishments/specialization/2X77NJKU8C79" },
      { name: "Meta Full Stack Developer", issuer: "Meta", link: "https://coursera.org/verify/specialization/UGELP6MYNCJY" },
      { name: "Google Cybersecurity", issuer: "Google", link: "https://coursera.org/verify/professional-cert/POZZEBOLKA6J" },
      { name: "Google AI (Professional)", issuer: "Google", link: "https://coursera.org/verify/professional-cert/45TUGH9Y16XU" },
      { name: "Digital Marketing & E-commerce", issuer: "Google", link: "https://coursera.org/verify/professional-cert/BY0X1SSEOYMJ" },
      { name: "Microsoft 365 Fundamentals", issuer: "Microsoft", link: "https://coursera.org/verify/specialization/1212LH1EP2PV" }
    ],
    skills: [
      { name: "Python Specialist", color: "blue", issuer: "IBM" },
      { name: "AI Essentials", color: "purple", issuer: "Google" },
      { name: "Data Analytics", color: "teal", issuer: "Google" },
      { name: "UX Design", color: "pink", issuer: "Google" },
      { name: "Prompt Engineering", color: "orange", issuer: "Google" },
      { name: "Cloud Native App", color: "blue", issuer: "IBM" },
      { name: "Applied AI", color: "purple", issuer: "IBM" },
      { name: "iOS Developer", color: "blue", issuer: "Meta" },
      { name: "IT Support", color: "gray", issuer: "Google" },
      { name: "ICDL Base", color: "teal", issuer: "ICDL" }
    ]
  };

  // 2. فرع العلوم النفسية، الطب النفسي والتدريب
  const psychSection = {
    title: isAr ? "العلوم النفسية، الطب النفسي والتدريب" : "Psychology, Psychiatry & Coaching",
    icon: FaBrain, color: "green.500",
    linkedCerts: [
      { name: "Psychology of Trauma & Anxiety", issuer: "APA", link: "https://coursera.org/verify/specialization/Z6Z4S3WW7V1K" },
      { name: "Psychological First Aid", issuer: "Johns Hopkins", link: "https://coursera.org/verify/9NAPCRKIBFB8" },
      { name: "Positive Psychiatry", issuer: "Uni Sydney", link: "https://coursera.org/verify/UEL4DAW0DNN4" },
      { name: "Abnormal Psychology", issuer: "Wesleyan", link: "https://www.coursera.org/account/accomplishments/specialization/TZ0E4I1PHRE6" },
      { name: "Schizophrenia", issuer: "Wesleyan", link: "https://coursera.org/verify/BYAC43NN429C" }
    ],
    skills: [
      { name: "NLP Practitioner", color: "purple", issuer: "Auspicium UK" },
      { name: "Life Coaching", color: "green", issuer: "Auspicium UK" },
      { name: "Emotional Intelligence", color: "pink", issuer: "IBM" },
      { name: "Counseling Skills", color: "blue", issuer: "Alison" },
      { name: "Health Coaching", color: "teal", issuer: "Imperial" },
      { name: "First Aid", color: "red", issuer: "Edraak" }
    ]
  };

  // 3. فرع القيادة، الإدارة الاستراتيجية والمشاريع
  const leadershipSection = {
    title: isAr ? "القيادة، الإدارة الاستراتيجية والمشاريع" : "Leadership & Strategic Management",
    icon: FaUserTie, color: "orange.500",
    linkedCerts: [
      { name: "Google Project Management", issuer: "Google", link: "https://coursera.org/verify/professional-cert/A1CTHFP66S19" },
      { name: "Leading with Impact", issuer: "IBM/Coursera", link: "https://coursera.org/verify/specialization/UCT93G46AFBT" }
    ],
    skills: [
      { name: "People Management", color: "red", issuer: "Google" },
      { name: "Soft Skills", color: "orange", issuer: "IBM" },
      { name: "Strategic HRM", color: "red", issuer: "M.A. Applied" },
      { name: "Data Marketing", color: "blue", issuer: "Google AI" },
      { name: "Agile Management", color: "orange", issuer: "Google" },
      { name: "Field Research", color: "gray", issuer: "PCBS" }
    ]
  };

  const education = [
    { 
      year: "Future", 
      titleAr: "دكتوراه DBA", 
      titleEn: "Doctorate DBA", 
      descAr: "دمج الذكاء الاصطناعي في أنسنة بيئات العمل وتطوير رأس المال النفسي.", 
      isFuture: true 
    },
    { 
      year: "2026", 
      titleAr: "ماجستير إدارة الموارد البشرية التطبيقية", 
      titleEn: "Master's in Applied HRM", 
      descAr: "دراسة عميقة في إدارة الكفاءات وتطوير الأنظمة المؤسسية الحديثة.", 
      badge: "In Progress",
      archiveUrl: "https://academic-research-archive.vercel.app/"
    },
    { 
      year: "2023", 
      titleAr: "الدبلوم المهني العالي (معلم يصنع المعاني وطلبة ينتجون المعرفة)", 
      titleEn: "Higher Professional Diploma (Teachers Create Meaning & Students Produce Knowledge)", 
      descAr: "تطوير المهارات البيداغوجية والتعامل النفسي مع الفئات العمرية المختلفة من جامعة بيرزيت." 
    },
    { 
      year: "2021", 
      titleAr: "دبلوم عالي في التأهيل التربوي", 
      titleEn: "Higher Diploma in Educational Qualification", 
      descAr: "الكفايات الميدانية والتربوية المتقدمة من المعهد الوطني للتدريب التربوي." 
    },
    { 
      year: "2015", 
      titleAr: "بكالوريوس التعليم الأساسي", 
      titleEn: "Bachelor's in Basic Education", 
      descAr: "القاعدة المعرفية والتربوية لبناء المسارات التعليمية من جامعة القدس المفتوحة." 
    }
  ];

  return (
    <Box py="100px" minH="100vh">
      <Container maxW="container.xl">
        <VStack spacing={16} align="stretch">
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color="brand.900" fontWeight="900">{isAr ? "الاعتمادات والمحراب العلمي" : "Accreditations & Sanctuary"}</Heading>
            <Box w="100px" h="5px" bg="brand.500" borderRadius="full" />
          </VStack>

          {/* المسار الأكاديمي */}
          <Box>
            <Heading size="lg" mb={8} display="flex" alignItems="center"><Icon as={FaGraduationCap} mr={3} color="brand.500"/> {isAr ? "المسار الأكاديمي" : "Academic Path"}</Heading>
            <VStack align="stretch" spacing={4}>
              {education.map((edu, i) => (
                <MotionBox key={i} className="glass-card" p={5} bg="whiteAlpha.200" backdropFilter="blur(10px)" borderLeft={edu.isFuture ? "6px solid #805AD5" : "none"} whileHover={{ scale: 1.02, x: isAr ? -10 : 10 }}>
                  <HStack justify="space-between" align="start">
                    <VStack align="start" spacing={1}>
                      <Badge colorScheme={edu.isFuture ? "purple" : "teal"}>{edu.year}</Badge>
                      <Text fontWeight="bold" fontSize="lg">{isAr ? edu.titleAr : edu.titleEn}</Text>
                      <Text fontSize="xs" opacity={0.8}>{edu.descAr}</Text>
                      
                      {edu.archiveUrl && (
                        <Button 
                          as={Link} 
                          href={edu.archiveUrl} 
                          isExternal 
                          size="xs" 
                          colorScheme="purple" 
                          leftIcon={<FaSearch />} 
                          mt={2}
                        >
                          {isAr ? "تصفح أرشيف البحوث العلمية" : "Browse Research Archive"}
                        </Button>
                      )}
                    </VStack>
                    {edu.badge && <Badge colorScheme="orange">{edu.badge}</Badge>}
                  </HStack>
                </MotionBox>
              ))}
            </VStack>
          </Box>

          {/* مصفوفة الكفايات التخصصية الشاملة */}
          <Box>
            <Heading size="lg" mb={8} display="flex" alignItems="center"><Icon as={FaAward} mr={3} color="brand.500"/> {isAr ? "مصفوفة الكفايات التخصصية الشاملة" : "Comprehensive Competency Matrix"}</Heading>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
              {[techSection, psychSection, leadershipSection].map((sec, idx) => (
                <MotionBox key={idx} p={6} bg="whiteAlpha.200" backdropFilter="blur(10px)" borderRadius="xl" border="1px solid white" whileHover={{ y: -10, boxShadow: "2xl" }}>
                  <HStack mb={4} justify="space-between">
                    <HStack><Icon as={sec.icon} color={sec.color} boxSize={6} /><Heading size="md">{sec.title}</Heading></HStack>
                  </HStack>
                  <VStack align="stretch" spacing={2} mb={6}>
                    {sec.linkedCerts.map((cert, i) => (
                      <HStack key={i} justify="space-between" bg="whiteAlpha.400" p={2} borderRadius="md">
                        <Text fontSize="xs" fontWeight="bold">{cert.name}</Text>
                        <Button as={Link} href={cert.link} isExternal size="2xs" colorScheme="blue" variant="ghost" rightIcon={<FaExternalLinkAlt />}>Verify</Button>
                      </HStack>
                    ))}
                  </VStack>
                  <Flex flexWrap="wrap" gap={3}>
                    {sec.skills.map((skill, i) => (
                      <MotionBox key={i} whileHover={{ scale: 1.25, zIndex: 10 }}>
                        <Button size="xs" colorScheme={skill.color} borderRadius="full" px={4} py={5} flexDir="column" h="auto">
                          <VStack spacing={0}>
                            <Text fontWeight="bold" fontSize="10px">{skill.name}</Text>
                            <Text fontSize="8px" opacity={0.8} fontWeight="normal">{skill.issuer}</Text> {/* تم إصلاح الإغلاق المزدوج هنا */}
                          </VStack>
                        </Button>
                      </MotionBox>
                    ))}
                  </Flex>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Certifications;