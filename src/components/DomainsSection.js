import React from "react";
import { Box, SimpleGrid, Icon, Text, VStack, Heading, Container, Link } from "@chakra-ui/react";
import { FaChalkboardTeacher, FaUserTie, FaChessKnight, FaCode } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const domains = [
  { 
    id: 1, 
    icon: FaChalkboardTeacher, 
    titleAr: "معلم", 
    titleEn: "Teacher" 
  },
  { 
    id: 2, 
    icon: FaUserTie, 
    titleAr: "مدرب حياة", 
    titleEn: "Life Coach" 
  },
  { 
    id: 3, 
    icon: FaChessKnight, 
    titleAr: "مدرب استراتيجي", 
    titleEn: "Strategic Trainer" 
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
            {isAr ? "المجالات العملية" : "Professional Domains"}
          </Heading>
          
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} w="full">
            {domains.map((domain) => (
              <Link 
                key={domain.id} 
                href={domain.url || undefined} 
                isExternal={!!domain.url}
                _hover={{ textDecoration: "none" }}
                cursor={domain.url ? "pointer" : "default"}
              >
                <VStack 
                  p={8} 
                  bg="gray.50" 
                  borderRadius="2xl" 
                  borderWidth="1px"
                  borderColor="gray.100"
                  shadow="sm"
                  h="full"
                  _hover={domain.url ? { 
                    transform: "translateY(-10px)", 
                    shadow: "2xl",
                    borderColor: "#0284c7",
                    bg: "white"
                  } : {}}
                  transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                >
                  <Box 
                    p={4} 
                    bg="blue.50" 
                    borderRadius="full" 
                    color="#0284c7"
                    mb={2}
                  >
                    <Icon as={domain.icon} w={10} h={10} />
                  </Box>
                  <Text fontWeight="900" fontSize="xl" color="#1a365d" textAlign="center">
                    {isAr ? domain.titleAr : domain.titleEn}
                  </Text>
                </VStack>
              </Link>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default DomainsSection;