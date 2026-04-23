import React from "react";
import { Box, SimpleGrid, Icon, Text, VStack, Heading, Container, Link, HStack } from "@chakra-ui/react";
import { FaChalkboardTeacher, FaUserTie, FaChessKnight, FaCode, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const domains = [
  { 
    id: 1, 
    icon: FaLinkedin, 
    titleAr: "شعلي خليل (LinkedIn)", 
    titleEn: "Shalee Khalil (LinkedIn)",
    url: "https://www.linkedin.com/in/shalee-khalil"
  },
  { 
    id: 2, 
    icon: FaChalkboardTeacher, 
    titleAr: "معلم (Facebook)", 
    titleEn: "Teacher (Facebook)",
    url: "https://www.facebook.com/shaaleekh/"
  },
  { 
    id: 3, 
    icon: FaUserTie, 
    titleAr: "مدرب حياة (Instagram)", 
    titleEn: "Life Coach (Instagram)",
    url: "https://www.instagram.com/shaaleekh/"
  },
  { 
    id: 4, 
    icon: FaCode, 
    titleAr: "مصمم مواقع ويب", 
    titleEn: "Web Developer",
    url: "https://lowcost-web.vercel.app/"
  },
];

const DomainsSection = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <Box py={16} bg="white" id="domains-section">
      <Container maxW="container.xl">
        <VStack spacing={8}>
          <Heading as="h2" size="xl" color="#1a365d" textAlign="center">
            {isAr ? "المجالات العملية والمنصات" : "Professional Domains & Platforms"}
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
            {domains.map((domain) => (
              <Link 
                key={domain.id} 
                href={domain.url} 
                isExternal
                _hover={{ textDecoration: "none" }}
              >
                <HStack 
                  p={8} 
                  bg="gray.50" 
                  borderRadius="2xl" 
                  borderWidth="1px"
                  borderColor="gray.100"
                  shadow="sm"
                  spacing={6}
                  _hover={{ 
                    transform: "translateY(-5px)", 
                    shadow: "xl",
                    borderColor: "#0284c7",
                    bg: "white"
                  }}
                  transition="all 0.3s ease"
                >
                  <Box 
                    p={4} 
                    bg="blue.50" 
                    borderRadius="full" 
                    color="#0284c7"
                  >
                    <Icon as={domain.icon} w={8} h={8} />
                  </Box>
                  <Text fontWeight="900" fontSize="xl" color="#1a365d">
                    {isAr ? domain.titleAr : domain.titleEn}
                  </Text>
                </HStack>
              </Link>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default DomainsSection;