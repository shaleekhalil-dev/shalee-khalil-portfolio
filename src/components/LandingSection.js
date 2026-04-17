import React from "react";
import { Avatar, Heading, VStack, Box, Text, Container, SimpleGrid, HStack, Button, Link, Icon } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaGooglePlay, FaAmazon, FaExternalLinkAlt } from "react-icons/fa";

const LandingSection = () => {
  const { t, i18n } = useTranslation();
  // ملاحظة: تأكد من إضافة الترجمة للمفاتيح الجديدة في ملف i18n لضمان ظهورها بالعربية

  return (
    <Box as="section" id="landing-section" minH="100vh" py="100px" display="flex" alignItems="center">
      <Container maxW="container.lg">
        <VStack spacing={10} w="full">
          
          <VStack spacing={4} textAlign="center" className="glass-card" p={8} w="full">
            <Avatar 
              src="https://media.licdn.com/dms/image/v2/D4D03AQFe7fJazFVxAQ/profile-displayphoto-scale_400_400/B4DZj_UhVKGQAk-/0/1756630227562?e=1777507200&v=beta&t=IOjMpvAl-YF8Mk8p-hhTDFwdYq223WjX5T3uUN8GlRQ" 
              size="2xl" 
              border="4px solid rgba(255, 255, 255, 0.5)"
            />
            <VStack spacing={1}>
              <Heading as="h1" size="2xl">Shalee Khalil | شعلي خليل</Heading>
              <Text fontSize="lg" fontWeight="800" color="black">
                Hybrid Strategic Leader | Full-Stack Developer | Data Analyst | Author | Trainer
              </Text>
            </VStack>
          </VStack>

          <SimpleGrid columns={[1, null, 3]} spacing={6} w="full">
            {/* المربع الأزرق: السيرة الذاتية */}
            <Box className="glass-card" p={6} bg="rgba(66, 153, 225, 0.3)" textAlign="center">
              <Heading size="md" mb={4}>{t("card_bio_title")}</Heading>
              <Text fontSize="sm" fontWeight="bold" lineHeight="tall">
                {t("card_bio_text")}
              </Text>
            </Box>

            {/* المربع الأخضر: روابط المحفظة المهنية (تم التعديل هنا) */}
            <Box className="glass-card" p={6} bg="rgba(72, 187, 120, 0.3)" textAlign="center">
              <Heading size="md" mb={4}>{t("card_links_title")}</Heading>
              <VStack spacing={3} align={i18n.language === "ar" ? "right" : "left"}>
                {/* رابط الهوية الرقمية الموحد */}
                <Link href="https://canva.link/uucyyzdna28977l" isExternal fontSize="xs" fontWeight="bold">
                  <Icon as={FaExternalLinkAlt} mx={1} /> {t("Unified Digital Identity Hub")}
                </Link>
                {/* ملف التميز التعليمي */}
                <Link href="https://sites.google.com/view/shaleekh" isExternal fontSize="xs" fontWeight="bold">
                  <Icon as={FaExternalLinkAlt} mx={1} /> {t("Educational Excellence Portfolio")}
                </Link>
                {/* ملف رأس المال البشري والتوجيه */}
                <Link href="https://sites.google.com/view/shaaleekhalil" isExternal fontSize="xs" fontWeight="bold">
                  <Icon as={FaExternalLinkAlt} mx={1} /> {t("Human Capital & Coaching Profile")}
                </Link>
              </VStack>
            </Box>

            {/* المربع البرتقالي: المتاجر */}
            <Box className="glass-card" p={6} bg="rgba(237, 137, 54, 0.3)" textAlign="center">
              <Heading size="md" mb={4}>{t("card_stores_title")}</Heading>
              <VStack spacing={4}>
                <Button 
                  as="a" 
                  href="https://www.amazon.com/author/shaleekhalil" 
                  target="_blank"
                  leftIcon={<Text color="#FF9900" fontSize="xl" fontWeight="900">A</Text>}
                  variant="solid" 
                  bg="black" 
                  color="white" 
                  w="full"
                  size="sm"
                  _hover={{ bg: "gray.800" }}
                >
                  {t("btn_amazon")}
                </Button>
                <Button 
                  as="a" 
                  href="https://play.google.com/store/search?q=shalee%20khalil&c=books" 
                  target="_blank"
                  leftIcon={<Icon as={FaGooglePlay} color="#3bccff" />}
                  variant="solid" 
                  bg="black" 
                  color="white" 
                  w="full"
                  size="sm"
                  _hover={{ bg: "gray.800" }}
                >
                  {t("btn_google_books")}
                </Button>
              </VStack>
            </Box>
          </SimpleGrid>

        </VStack>
      </Container>
    </Box>
  );
};

export default LandingSection;