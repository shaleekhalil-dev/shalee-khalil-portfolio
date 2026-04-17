import React from "react";
import { Avatar, Heading, VStack, Box, Text, Container, SimpleGrid, HStack, Button, Link, Icon } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaGooglePlay, FaAmazon, FaExternalLinkAlt } from "react-icons/fa";

const LandingSection = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <Box as="section" id="landing-section" minH="100vh" py="120px" display="flex" alignItems="center">
      <Container maxW="container.lg">
        <VStack spacing={10} w="full">
          
          <VStack spacing={6} textAlign="center" className="glass-card" p={10} w="full" borderBottom="4px solid #1a365d">
            <Avatar 
              src="https://media.licdn.com/dms/image/v2/D4D03AQFe7fJazFVxAQ/profile-displayphoto-scale_400_400/B4DZj_UhVKGQAk-/0/1756630227562?e=1777507200&v=beta&t=IOjMpvAl-YF8Mk8p-hhTDFwdYq223WjX5T3uUN8GlRQ" 
              size="2xl" 
              border="4px solid #1a365d"
              boxShadow="0 0 20px rgba(26, 54, 93, 0.4)"
            />
            <VStack spacing={2}>
              <Heading as="h1" size="2xl" color="black" fontWeight="900">
                Shalee Khalil | شعلي خليل
              </Heading>
              <Text fontSize="xl" fontWeight="800" color="#1a365d">
                Hybrid Strategic Leader | Full-Stack Developer | Data Analyst | Author | Trainer
              </Text>
            </VStack>
          </VStack>

          <SimpleGrid columns={[1, null, 3]} spacing={6} w="full">
            {/* المربع الأزرق: السيرة الذاتية */}
            <Box className="glass-card" p={8} bg="rgba(66, 153, 225, 0.25) !important" textAlign="center" border="1px solid #2b6cb0">
              <Heading size="md" mb={4} color="#1a365d">{t("card_bio_title")}</Heading>
              <Text fontSize="md" fontWeight="800" lineHeight="1.6">
                {t("card_bio_text")}
              </Text>
            </Box>

            {/* المربع الأخضر: الروابط الاستراتيجية */}
            <Box className="glass-card" p={8} bg="rgba(72, 187, 120, 0.25) !important" textAlign="center" border="1px solid #2f855a">
              <Heading size="md" mb={4} color="#22543d">{t("card_links_title")}</Heading>
              <VStack spacing={4} align="stretch">
                <Link href="https://canva.link/uucyyzdna28977l" isExternal fontSize="sm" fontWeight="800" _hover={{color: "#2f855a"}}>
                  <HStack justify="center"><Icon as={FaExternalLinkAlt} /><Text>{t("Unified Digital Identity Hub")}</Text></HStack>
                </Link>
                <Link href="https://sites.google.com/view/shaleekh" isExternal fontSize="sm" fontWeight="800" _hover={{color: "#2f855a"}}>
                  <HStack justify="center"><Icon as={FaExternalLinkAlt} /><Text>{t("Educational Excellence Portfolio")}</Text></HStack>
                </Link>
                <Link href="https://sites.google.com/view/shaaleekhalil" isExternal fontSize="sm" fontWeight="800" _hover={{color: "#2f855a"}}>
                  <HStack justify="center"><Icon as={FaExternalLinkAlt} /><Text>{t("Human Capital & Coaching Profile")}</Text></HStack>
                </Link>
              </VStack>
            </Box>

            {/* المربع البرتقالي: المتاجر الدولية */}
            <Box className="glass-card" p={8} bg="rgba(237, 137, 54, 0.25) !important" textAlign="center" border="1px solid #c05621">
              <Heading size="md" mb={4} color="#7b341e">{t("card_stores_title")}</Heading>
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
                  size="md"
                  _hover={{ bg: "gray.800", transform: "scale(1.05)" }}
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
                  size="md"
                  _hover={{ bg: "gray.800", transform: "scale(1.05)" }}
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