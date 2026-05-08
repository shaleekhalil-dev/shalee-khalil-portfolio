import React from "react";
import { 
  Box, Container, VStack, Heading, Text, Button, 
  Stack, Flex, Image, Badge, SimpleGrid, Icon
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaCode, FaBook, FaGraduationCap } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const LandingSection = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const profileImg = "https://drive.google.com/thumbnail?id=18B6gq5r6kbxn2-6j_XJaJi2LT5BZvvMO&sz=w1000";

  const navLinks = [
    { label: isAr ? "المشاريع التقنية" : "Tech Projects", path: "/projects", icon: FaCode, color: "blue" },
    { label: isAr ? "المكتبة الأدبية" : "Literary Library", path: "/library", icon: FaBook, color: "teal" },
    { label: isAr ? "المسار الأكاديمي" : "Academic Path", path: "/certs", icon: FaGraduationCap, color: "purple" }
  ];

  return (
    <Box as="section" id="home" minH="90vh" display="flex" alignItems="center" py={{ base: "80px", md: "40px" }}>
      <Container maxW="container.xl">
        <Stack direction={{ base: "column-reverse", md: "row" }} spacing={{ base: 10, md: 20 }} align="center">
          <VStack flex="1" align="start" spacing={8}>
            <MotionBox initial={{ opacity: 0, x: isAr ? 50 : -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Badge px={3} py={1} borderRadius="full" bg="brand.100" color="brand.900" fontWeight="bold" mb={4}>
                {t("card_bio_title")}
              </Badge>
              <Heading as="h1" size="2xl" color="brand.900" lineHeight="shorter" fontWeight="900">
                {t("hero_title")}
              </Heading>
            </MotionBox>
            <Text fontSize="xl" color="brand.700" fontWeight="600" borderLeft={!isAr ? "4px solid" : "none"} borderRight={isAr ? "4px solid" : "none"} borderColor="brand.500" px={4}>
              {t("hero_description")}
            </Text>
            <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4} w="full">
              {navLinks.map((item, idx) => (
                <MotionBox key={idx} whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
                  <Button as={RouterLink} to={item.path} variant="outline" colorScheme={item.color} w="full" h="110px" flexDir="column" borderRadius="2xl" bg="whiteAlpha.300" backdropFilter="blur(10px)" border="1px solid" borderColor={`${item.color}.200`}>
                    <VStack spacing={2}>
                      <Icon as={item.icon} boxSize={6} />
                      <Text fontSize="sm" fontWeight="bold">{item.label}</Text>
                    </VStack>
                  </Button>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>

          <Flex flex="1" justify="center" position="relative">
            <MotionBox initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} position="relative" padding="20px">
              {/* الإطارات الزجاجية الخلفية المطلوبة */}
              <Box position="absolute" top="0" left="0" boxSize="100%" bg="blue.200" opacity="0.2" borderRadius="3xl" transform="rotate(-5deg)" zIndex={0} backdropFilter="blur(8px)" border="1px solid white" />
              <Box position="absolute" top="10px" left="15px" boxSize="100%" bg="whiteAlpha.300" opacity="0.3" borderRadius="3xl" transform="rotate(3deg)" zIndex={0} backdropFilter="blur(12px)" border="2px solid blue.50" />
              
              <MotionImage src={profileImg} alt="Shalee Khalil" borderRadius="2xl" boxSize={{ base: "280px", md: "380px" }} objectFit="cover" border="8px solid white" shadow="2xl" position="relative" zIndex={1} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} />
            </MotionBox>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default LandingSection;