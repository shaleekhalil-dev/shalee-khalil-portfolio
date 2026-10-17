import React from "react";
import { Box, SimpleGrid, Icon, Text, VStack, Heading, Container, Link, Button, Badge } from "@chakra-ui/react";
import { 
  FaChalkboardTeacher, FaUserTie, FaCode, FaFingerprint, 
  FaPenNib, FaDatabase, FaRocket, FaChartBar, FaArrowLeft, FaArrowRight 
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MotionVStack = motion(VStack);

const domains = [
  { 
    id: 1, 
    icon: FaPenNib, 
    titleAr: "كاتب ومؤلف", 
    titleEn: "Author & Writer", 
    tagAr: "روايات وفلسفة",
    tagEn: "Novels & Philosophy",
    url: "https://www.amazon.com/author/shaleekhalil" 
  },
  { 
    id: 2, 
    icon: FaChalkboardTeacher, 
    titleAr: "معلم وميسر تعليمي", 
    titleEn: "Educator & Facilitator", 
    tagAr: "تربية وتعليم إلكتروني",
    tagEn: "Pedagogy & E-Learning",
    url: "https://sites.google.com/view/shaleekh" 
  },
  { 
    id: 3, 
    icon: FaUserTie, 
    titleAr: "مدرب حياة واستراتيجي", 
    titleEn: "Life & Strategic Coach", 
    tagAr: "توجيه وإرشاد NLP",
    tagEn: "NLP & Life Coaching",
    url: "https://sites.google.com/view/shaaleekhalil" 
  },
  { 
    id: 4, 
    icon: FaCode, 
    titleAr: "مطور برمجيات شامل", 
    titleEn: "Full-Stack Developer", 
    tagAr: "تطبيقات ويب وموبايل",
    tagEn: "Web & Mobile Apps",
    url: "https://lowcost-web.vercel.app/" 
  },
  { 
    id: 5, 
    icon: FaFingerprint, 
    titleAr: "الهوية والتميز الرقمي", 
    titleEn: "Digital Identity & Excellence", 
    tagAr: "قيادة استراتيجية هجينة",
    tagEn: "Hybrid Leadership",
    url: "https://canva.link/uucyyzdna28977l" 
  },
  { 
    id: 6, 
    icon: FaDatabase, 
    titleAr: "مهندس ومحلل بيانات", 
    titleEn: "Data Engineer & Analyst", 
    tagAr: "ذكاء أعمال وتعلم آلي",
    tagEn: "BI & Machine Learning",
    isSpecial: true 
  },
];

const DomainsSection = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const ArrowIcon = isAr ? FaArrowLeft : FaArrowRight;

  return (
    <Box py={20} id="domains-section">
      <Container maxW="container.xl">
        <VStack spacing={16}>
          <VStack spacing={4}>
            <Heading as="h2" size="xl" color="brand.900" textAlign="center" fontWeight="900">
              {isAr ? "المجالات العملية" : "Professional Domains"}
            </Heading>
            <Box w="80px" h="4px" bg="brand.500" borderRadius="full" />
          </VStack>
          
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8} w="full">
            {domains.map((domain, idx) => (
              <MotionVStack 
                key={domain.id} 
                p={8} 
                className="glass-card"
                h="full"
                justifyContent="space-between"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                whileHover={{ y: -10 }}
                _hover={{ bg: "whiteAlpha.900", borderColor: "brand.500", shadow: "2xl" }}
                role="group"
              >
                <VStack spacing={3} w="full">
                  <Box 
                    p={4} 
                    bg="brand.900" 
                    borderRadius="2xl" 
                    color="white" 
                    mb={1}
                    transition="all 0.3s ease"
                    _groupHover={{ bg: "brand.500", transform: "scale(1.1) rotate(-5deg)", shadow: "lg" }}
                  >
                    <Icon as={domain.icon} w={7} h={7} />
                  </Box>

                  <Badge colorScheme="blue" variant="subtle" borderRadius="full" px={3} py={0.5} fontSize="10px">
                    {isAr ? domain.tagAr : domain.tagEn}
                  </Badge>

                  <Text fontWeight="900" fontSize="lg" color="brand.900" textAlign="center">
                    {isAr ? domain.titleAr : domain.titleEn}
                  </Text>
                </VStack>

                {domain.isSpecial ? (
                  <VStack spacing={2.5} w="full" pt={4}>
                    <Button 
                      as={Link} 
                      href="https://drive.google.com/file/d/1hRTrz3fVNOdA9_gsaR1yNOl10AwRN1ii/view?usp=sharing" 
                      isExternal 
                      size="xs" 
                      colorScheme="blue" 
                      leftIcon={<FaRocket />}
                      w="full"
                      borderRadius="lg"
                      _hover={{ textDecoration: "none", transform: "translateY(-2px)" }}
                    >
                      {isAr ? "مشروع SpaceX" : "SpaceX Project"}
                    </Button>
                    <Button 
                      as={Link} 
                      href="https://project-11-portfolio.vercel.app/" 
                      isExternal 
                      size="xs" 
                      variant="outline" 
                      colorScheme="brand" 
                      leftIcon={<FaChartBar />}
                      w="full"
                      borderRadius="lg"
                      _hover={{ textDecoration: "none", bg: "brand.50", transform: "translateY(-2px)" }}
                    >
                      {isAr ? "منصة التحليلات" : "Analytics Platform"}
                    </Button>
                  </VStack>
                ) : (
                  <Button
                    as={Link}
                    href={domain.url}
                    isExternal
                    variant="ghost"
                    size="sm"
                    color="brand.600"
                    fontWeight="800"
                    mt={4}
                    rightIcon={<Icon as={ArrowIcon} boxSize={3} />}
                    _hover={{ bg: "brand.50", color: "brand.900", textDecoration: "none" }}
                  >
                    {isAr ? "استكشف المزيد" : "Explore More"}
                  </Button>
                )}
              </MotionVStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default DomainsSection;