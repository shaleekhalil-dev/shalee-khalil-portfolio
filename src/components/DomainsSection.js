import React from "react";
import { Box, SimpleGrid, Icon, Text, VStack, Heading, Container, Link, HStack } from "@chakra-ui/react";
import { FaChalkboardTeacher, FaUserTie, FaCode, FaFingerprint, FaPenNib } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const domains = [
  { 
    id: 1, 
    icon: FaPenNib, 
    titleAr: "كاتب ومؤلف", 
    titleEn: "Author & Writer",
    url: "https://www.amazon.com/author/shaleekhalil",
    googleUrl: "https://play.google.com/store/books/author?id=Shalee+Khalil"
  },
  { 
    id: 2, 
    icon: FaChalkboardTeacher, 
    titleAr: "معلم", 
    titleEn: "Teacher",
    url: "https://sites.google.com/view/shaleekh"
  },
  { 
    id: 3, 
    icon: FaUserTie, 
    titleAr: "مدرب استراتيجي / حياة", 
    titleEn: "Strategic / Life Coach",
    url: "https://sites.google.com/view/shaaleekhalil"
  },
  { 
    id: 4, 
    icon: FaCode, 
    titleAr: "مصمم مواقع ويب", 
    titleEn: "Web Developer",
    url: "https://lowcost-web.vercel.app/"
  },
  { 
    id: 5, 
    icon: FaFingerprint, 
    titleAr: "الهوية الرقمية", 
    titleEn: "Digital Identity",
    url: "https://www.canva.com/design/DAHFWHjYPDQ/0rnqyOINuaLWgb1EN7ykWg/edit"
  },
];

const DomainsSection = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <Box py={16} bg="white" id="domains-section">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Heading as="h2" size="xl" color="#1a365d" textAlign="center">
            {isAr ? "المجالات العملية" : "Professional Domains"}
          </Heading>
          
          {/* التعديل هنا لجعل المربعات متناسقة (3 في الصف أو 2 حسب حجم الشاشة) */}
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8} w="full">
            {domains.map((domain) => (
              <VStack 
                key={domain.id} 
                p={8} 
                bg="gray.50" 
                borderRadius="2xl" 
                borderWidth="1px"
                borderColor="gray.100"
                shadow="sm"
                h="full"
                justifyContent="center"
                _hover={{ 
                  transform: "translateY(-10px) scale(1.05)", 
                  shadow: "2xl",
                  borderColor: "#0284c7",
                  bg: "white"
                }}
                transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
              >
                <Box p={4} bg="blue.50" borderRadius="full" color="#0284c7" mb={4}>
                  <Icon as={domain.icon} w={10} h={10} />
                </Box>
                <Text fontWeight="900" fontSize="xl" color="#1a365d" textAlign="center" mb={4}>
                  {isAr ? domain.titleAr : domain.titleEn}
                </Text>
                
                <VStack spacing={2}>
                  <Link 
                    href={domain.url} 
                    isExternal 
                    color="#0284c7" 
                    fontWeight="bold" 
                    fontSize="sm"
                    _hover={{ textDecoration: "underline" }}
                  >
                    {isAr ? "اعرف المزيد (Amazon) ←" : "Learn More (Amazon) ←"}
                  </Link>
                  
                  {domain.googleUrl && (
                    <Link 
                      href={domain.googleUrl} 
                      isExternal 
                      color="#0c4a6e" 
                      fontWeight="bold" 
                      fontSize="sm"
                      _hover={{ textDecoration: "underline" }}
                    >
                      {isAr ? "تصفح مؤلفاتي على Google Play ←" : "Browse my books on Google Play ←"}
                    </Link>
                  )}
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default DomainsSection;