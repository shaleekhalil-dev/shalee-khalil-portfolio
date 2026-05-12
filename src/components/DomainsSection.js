import React from "react";
import { Box, SimpleGrid, Icon, Text, VStack, Heading, Container, Link, Button, HStack } from "@chakra-ui/react";
import { FaChalkboardTeacher, FaUserTie, FaCode, FaFingerprint, FaPenNib, FaDatabase, FaRocket, FaChartBar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MotionVStack = motion(VStack);

const domains = [
  { id: 1, icon: FaPenNib, titleAr: "كاتب ومؤلف", titleEn: "Author & Writer", url: "https://www.amazon.com/author/shaleekhalil" },
  { id: 2, icon: FaChalkboardTeacher, titleAr: "معلم وميسر تعليمي", titleEn: "Educator & Facilitator", url: "https://sites.google.com/view/shaleekh" },
  { id: 3, icon: FaUserTie, titleAr: "مدرب حياة واستراتيجي", titleEn: "Life & Strategic Coach", url: "https://sites.google.com/view/shaaleekhalil" },
  { id: 4, icon: FaCode, titleAr: "مطور برمجيات شامل", titleEn: "Full-Stack Developer", url: "https://lowcost-web.vercel.app/" },
  { id: 5, icon: FaFingerprint, titleAr: "الهوية والتميز الرقمي", titleEn: "Digital Identity & Excellence", url: "https://canva.link/uucyyzdna28977l" },
  { 
    id: 6, 
    icon: FaDatabase, 
    titleAr: "مهندس ومحلل بيانات", 
    titleEn: "Data Engineer & Analyst", 
    isSpecial: true // خاصية لتمييز المربع الذي يحتاج زرين
  },
];

const DomainsSection = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

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
          
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6} w="full">
            {domains.map((domain, idx) => (
              <MotionVStack 
                key={domain.id} 
                p={8} 
                className="glass-card"
                h="full"
                justifyContent="center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                _hover={{ transform: "translateY(-10px)", bg: "whiteAlpha.900", borderColor: "brand.500" }}
              >
                <Box p={4} bg="brand.900" borderRadius="xl" color="white" mb={4}>
                  <Icon as={domain.icon} w={6} h={6} />
                </Box>
                <Text fontWeight="800" fontSize="md" color="brand.900" textAlign="center" mb={domain.isSpecial ? 4 : 0}>
                  {isAr ? domain.titleAr : domain.titleEn}
                </Text>

                {domain.isSpecial ? (
                  <VStack spacing={2} w="full">
                    <Button 
                      as={Link} 
                      href="https://drive.google.com/file/d/1hRTrz3fVNOdA9_gsaR1yNOl10AwRN1ii/view?usp=sharing" 
                      isExternal 
                      size="xs" 
                      colorScheme="blue" 
                      leftIcon={<FaRocket />}
                      w="full"
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
                    >
                      {isAr ? "منصة التحليلات" : "Analytics Platform"}
                    </Button>
                  </VStack>
                ) : (
                  <Link href={domain.url} isExternal fontSize="xs" color="brand.600" fontWeight="bold" mt={4}>
                    {isAr ? "استكشف المزيد ←" : "Explore More ←"}
                  </Link>
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