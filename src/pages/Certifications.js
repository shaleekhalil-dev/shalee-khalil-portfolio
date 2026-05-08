import React from "react";
import { 
  Box, Container, Heading, SimpleGrid, VStack, Text, 
  HStack, Button, Link, Badge, Icon, Divider, Flex 
} from "@chakra-ui/react";
import { 
  FaGraduationCap, FaExternalLinkAlt, FaAward, 
  FaBrain, FaRobot, FaUserTie, FaArrowRight, FaArrowLeft 
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Certifications = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const ArrowIcon = isAr ? FaArrowLeft : FaArrowRight;

  // 1. المجموعة التقنية والبرمجية (استخراج شامل من IBM, Meta, Google, Microsoft)
  const techSection = {
    title: isAr ? "التقنية، البرمجة والذكاء الاصطناعي" : "Technology, Programming & AI",
    icon: FaRobot, color: "purple.500",
    linkedCerts: [
      { name: "Full Stack Developer", issuer: "Meta", link: "https://coursera.org/verify/specialization/ATE" },
      { name: "Full Stack Software Developer", issuer: "IBM", link: "https://coursera.org/verify/professional-cert/IBM-FS" },
      { name: "Data Science", issuer: "IBM", link: "https://coursera.org/verify/professional-cert/IBM-DS" },
      { name: "Cybersecurity", issuer: "Google", link: "https://coursera.org/verify/professional-cert/POZZEBOLKA6J" },
      { name: "Data Analytics", issuer: "Google", link: "https://coursera.org/verify/professional-cert/CXSSXUYQUK2Z" },
    ],
    skills: [
      { name: "Python Specialist", color: "blue", issuer: "IBM" },
      { name: "React & JavaScript", color: "cyan", issuer: "Meta" },
      { name: "Data Engineering", color: "teal", issuer: "IBM" },
      { name: "Cloud Computing", color: "blue", issuer: "IBM" },
      { name: "DevOps & Software Eng.", color: "gray", issuer: "IBM" },
      { name: "Machine Learning", color: "purple", issuer: "IBM" },
      { name: "Applied AI", color: "purple", issuer: "IBM" },
      { name: "AI Essentials", color: "pink", issuer: "Google" },
      { name: "Prompt Engineering", color: "orange", issuer: "Google AI" },
      { name: "UX Design Professional", color: "pink", issuer: "Google" },
      { name: "iOS Developer", color: "blue", issuer: "Meta" },
      { name: "Android Developer", color: "green", issuer: "Meta" },
      { name: "IT Support", color: "orange", issuer: "Google" },
      { name: "Microsoft 365", color: "blue", issuer: "Microsoft" }
    ]
  };

  // 2. مجموعة العلوم النفسية، الكوتشينج والطب النفسي
  const psychSection = {
    title: isAr ? "العلوم النفسية، الطب النفسي والكوتشينج" : "Psychology, Psychiatry & Coaching",
    icon: FaBrain, color: "green.500",
    linkedCerts: [
      { name: "Abnormal Psychology", issuer: "Wesleyan University", link: "https://coursera.org/verify/specialization/TZ0E4I1PHRE6" },
      { name: "Psychological First Aid", issuer: "Johns Hopkins", link: "https://coursera.org/verify/9NAPCRKIBFB8" },
      { name: "Positive Psychiatry", issuer: "University of Sydney", link: "https://coursera.org/verify/SYDNEY" }
    ],
    skills: [
      { name: "NLP Practitioner", color: "purple", issuer: "Auspicium UK" },
      { name: "Effective Coaching", color: "green", issuer: "Auspicium UK" },
      { name: "Trauma & Anxiety", color: "red", issuer: "APA" },
      { name: "Health Coaching", color: "teal", issuer: "Imperial College" },
      { name: "Practical Counseling", color: "blue", issuer: "Alison" },
      { name: "Emotional Intelligence", color: "pink", issuer: "IBM" }
    ]
  };

  // 3. مجموعة القيادة والإدارة (بما في ذلك إدارة المشاريع)
  const leadershipSection = {
    title: isAr ? "القيادة، الإدارة الاستراتيجية والمشاريع" : "Leadership & Strategic Management",
    icon: FaUserTie, color: "orange.500",
    linkedCerts: [
      { name: "Google Project Management", issuer: "Google", link: "https://coursera.org/verify/professional-cert/A1CTHFP66S19" },
      { name: "People Management", issuer: "Google", link: "https://coursera.org/verify/GOOGLE-PEOPLE" },
      { name: "Business Intelligence", issuer: "IBM", link: "https://coursera.org/verify/IBM-BI" }
    ],
    skills: [
      { name: "Agile & Scrum", color: "orange", issuer: "Google" },
      { name: "Strategic HRM", color: "red", issuer: "M.A. Applied" },
      { name: "Leading with Impact", color: "orange", issuer: "IBM" },
      { name: "Diversity & Inclusion", color: "yellow", issuer: "IBM" },
      { name: "Marketing & E-commerce", color: "blue", issuer: "Google" },
      { name: "Data-Driven Strategy", color: "gray", issuer: "IBM" }
    ]
  };

  const education = [
    { year: "Future", titleAr: "دكتوراه DBA", titleEn: "Doctorate DBA", descAr: "دمج الذكاء الاصطناعي في أنسنة بيئات العمل وتطوير رأس المال النفسي.", isFuture: true },
    { year: "2026", titleAr: "ماجستير إدارة الموارد البشرية التطبيقية", titleEn: "Master's in Applied HRM", descAr: "دراسة عميقة في إدارة الكفاءات وتطوير الأنظمة المؤسسية الحديثة.", badge: "In Progress" },
    { year: "2023", titleAr: "دبلوم عالي في التأهيل التربوي", titleEn: "Higher Diploma in Education", descAr: "تطوير المهارات البيداغوجية والتعامل النفسي مع الفئات العمرية المختلفة." },
    { year: "2021", titleAr: "دبلوم مهني عالي", titleEn: "Higher Professional Diploma", descAr: "التركيز على الكفايات الميدانية، الإحصاء السكاني، وسيادة القانون." },
    { year: "2015", titleAr: "بكالوريوس التعليم الأساسي", titleEn: "Bachelor's in Basic Education", descAr: "القاعدة المعرفية والتربوية لبناء المسارات التعليمية." }
  ];

  return (
    <Box py="100px" minH="100vh">
      <Container maxW="container.xl">
        <VStack spacing={16} align="stretch">
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color="brand.900" fontWeight="900">{isAr ? "الاعتمادات والمحراب العلمي" : "Accreditations & Sanctuary"}</Heading>
            <Box w="100px" h="5px" bg="brand.500" borderRadius="full" />
          </VStack>

          {/* المسار الأكاديمي الشارح */}
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

          {/* مصفوفة الكفايات مع تذليل الجهة المصدرة */}
          <Box>
            <Heading size="lg" mb={8} display="flex" alignItems="center"><Icon as={FaAward} mr={3} color="brand.500"/> {isAr ? "مصفوفة الكفايات التخصصية الشاملة" : "Comprehensive Competency Matrix"}</Heading>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
              {[techSection, psychSection, leadershipSection].map((sec, idx) => (
                <MotionBox key={idx} p={6} bg="whiteAlpha.200" backdropFilter="blur(10px)" borderRadius="xl" border="1px solid white" whileHover={{ y: -10, boxShadow: "2xl" }}>
                  <HStack mb={4} justify="space-between">
                    <HStack><Icon as={sec.icon} color={sec.color} boxSize={6} /><Heading size="md">{sec.title}</Heading></HStack>
                  </HStack>
                  <VStack align="stretch" spacing={2} mb={6}>
                    {sec.linkedCerts && sec.linkedCerts.map((cert, i) => (
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
                            <Text fontSize="8px" opacity={0.8} fontWeight="normal">{skill.issuer}</Text>
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