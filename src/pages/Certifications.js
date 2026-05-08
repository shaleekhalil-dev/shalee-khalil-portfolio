import React from "react";
import { Box, Container, Heading, SimpleGrid, VStack, Text, HStack, Button, Link, Badge, Icon, Divider, Flex } from "@chakra-ui/react";
import { FaGraduationCap, FaExternalLinkAlt, FaAward, FaBrain, FaRobot, FaChalkboardTeacher, FaUserTie, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Certifications = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const ArrowIcon = isAr ? FaArrowLeft : FaArrowRight;

  const techSection = {
    title: isAr ? "التقنية والذكاء الاصطناعي" : "Tech & AI",
    icon: FaRobot, color: "purple.500",
    linkedCerts: [
      { name: "Google Data Analytics", link: "https://www.coursera.org/account/accomplishments/specialization/CXSSXUYQUK2Z" },
      { name: "IT Support Professional", link: "https://www.coursera.org/account/accomplishments/specialization/I277KR9Z7E37" }
    ],
    skills: [
      { name: "Python", color: "blue", issuer: "IBM" },
      { name: "AI & GenAI", color: "purple", issuer: "Google" },
      { name: "Machine Learning", color: "purple", issuer: "IBM" },
      { name: "Full-Stack Dev", color: "orange", issuer: "Meta" }
    ]
  };

  const psychSection = {
    title: isAr ? "العلوم النفسية والكوتشينج" : "Psychology & Coaching",
    icon: FaBrain, color: "green.500",
    linkedCerts: [
      { name: "Abnormal Psychology", link: "https://www.coursera.org/account/accomplishments/specialization/TZ0E4I1PHRE6" },
      { name: "Psychological First Aid", link: "https://www.coursera.org/account/accomplishments/verify/9NAPCRKIBFB8" }
    ],
    skills: [
      { name: "Trauma Support", color: "green", issuer: "APA" },
      { name: "NLP Practitioner", color: "purple", issuer: "Auspicium" },
      { name: "Emotional Intelligence", color: "pink", issuer: "Sydney Uni" }
    ]
  };

  const leadershipSection = {
    title: isAr ? "القيادة والإدارة" : "Leadership & Mgmt",
    icon: FaUserTie, color: "orange.500",
    linkedCerts: [
      { name: "Google Project Management", link: "https://www.coursera.org/account/accomplishments/specialization/A1CTHFP66S19" }
    ],
    skills: [
      { name: "Agile Management", color: "orange", issuer: "Google" },
      { name: "Strategic HRM", color: "orange", issuer: "Coursera" },
      { name: "Leading with Impact", color: "red", issuer: "IBM" }
    ]
  };

  const education = [
    { year: "Future", titleAr: "دكتوراه DBA", titleEn: "Doctorate DBA", descAr: "البحث في تكامل الذكاء الاصطناعي مع رأس المال النفسي (PsyCap).", isFuture: true },
    { year: "2026", titleAr: "ماجستير إدارة الموارد البشرية", titleEn: "Master's HRM", descAr: "التركيز على أنسنة بيئات العمل الرقمية الحديثة.", badge: "In Progress" },
    { year: "2023", titleAr: "دبلوم عالي: تأهيل معلمين", titleEn: "Higher Diploma", descAr: "تطوير الكفايات التربوية والتعامل مع المرحلة الأساسية." },
    { year: "2015", titleAr: "بكالوريوس التعليم الأساسي", titleEn: "Bachelor's Degree", descAr: "أساس الرحلة العلمية في بناء وتوجيه العقول الناشئة." }
  ];

  return (
    <Box py="100px" minH="100vh">
      <Container maxW="container.xl">
        <VStack spacing={16} align="stretch">
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color="brand.900" fontWeight="900">{isAr ? "الاعتمادات والمحراب العلمي" : "Accreditations & Sanctuary"}</Heading>
            <Box w="100px" h="5px" bg="brand.500" borderRadius="full" />
          </VStack>

          <Box>
            <Heading size="lg" mb={8} display="flex" alignItems="center"><Icon as={FaGraduationCap} mr={3} color="brand.500"/> {isAr ? "المسار الأكاديمي" : "Academic Path"}</Heading>
            <VStack align="stretch" spacing={4}>
              {education.map((edu, i) => (
                <MotionBox key={i} className="glass-card" p={5} bg="whiteAlpha.200" backdropFilter="blur(10px)" borderLeft={edu.isFuture ? "6px solid #805AD5" : "none"} whileHover={{ scale: 1.02, x: isAr ? -10 : 10 }}>
                  <HStack justify="space-between">
                    <VStack align="start" spacing={1}>
                      <Badge colorScheme={edu.isFuture ? "purple" : "teal"}>{edu.year}</Badge>
                      <Text fontWeight="bold" fontSize="lg">{isAr ? edu.titleAr : edu.titleEn}</Text>
                      <Text fontSize="xs" opacity={0.8}>{edu.descAr}</Text>
                    </VStack>
                    {edu.badge && <Badge colorScheme="orange">{edu.badge}</Badge>}
                  </HStack>
                </MotionBox>
              ))}
            </VStack>
          </Box>

          <Box>
            <Heading size="lg" mb={8} display="flex" alignItems="center"><Icon as={FaAward} mr={3} color="brand.500"/> {isAr ? "مصفوفة الكفايات التخصصية" : "Specialized Competency Matrix"}</Heading>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
              {[techSection, psychSection, leadershipSection].map((sec, idx) => (
                <MotionBox key={idx} p={6} bg="whiteAlpha.200" backdropFilter="blur(10px)" borderRadius="xl" border="1px solid white" whileHover={{ y: -10, boxShadow: "2xl" }}>
                  <HStack mb={4} justify="space-between">
                    <HStack><Icon as={sec.icon} color={sec.color} boxSize={6} /><Heading size="md">{sec.title}</Heading></HStack>
                  </HStack>
                  <VStack align="stretch" spacing={2} mb={4}>
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
                        <Button size="xs" colorScheme={skill.color} borderRadius="full" px={4} py={4} flexDir="column">
                          <VStack spacing={0}><Text fontWeight="bold">{skill.name}</Text><Text fontSize="8px" opacity={0.7}>{skill.issuer}</Text></VStack>
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