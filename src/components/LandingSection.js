import React from "react";
import { Avatar, Heading, VStack, Box, Text, Container, SimpleGrid, HStack, Link, Icon } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt } from "react-icons/fa";

const LandingSection = () => {
  const { t } = useTranslation();

  return (
    <Box as="section" id="landing-section" minH="100vh" py="120px" display="flex" alignItems="center">
      <Container maxW="container.lg">
        <VStack spacing={10} w="full">
          <VStack spacing={6} textAlign="center" className="glass-card" p={10} w="full" borderBottom="5px solid #7dd3fc">
            <Avatar 
              src="https://media.licdn.com/dms/image/v2/D4D03AQFe7fJazFVxAQ/profile-displayphoto-scale_400_400/B4DZj_UhVKGQAk-/0/1756630227562?e=1777507200&v=beta&t=IOjMpvAl-YF8Mk8p-hhTDFwdYq223WjX5T3uUN8GlRQ" 
              size="2xl" 
              border="4px solid #bae6fd"
            />
            <VStack spacing={2}>
              <Heading as="h1" size="2xl" color="#0c4a6e" fontWeight="900">Shalee Khalil | شعلي خليل</Heading>
              <Text fontSize="xl" fontWeight="800" color="#0369a1">{t("hero_subtitle")}</Text>
            </VStack>
          </VStack>

          <SimpleGrid columns={[1, null, 2]} spacing={8} w="full">
            <Box className="glass-card" p={8} border="1px solid #bae6fd">
              <Heading size="md" mb={4} color="#0c4a6e" borderBottom="2px solid #7dd3fc" pb={2}>{t("card_bio_title")}</Heading>
              <Text fontSize="md" fontWeight="700" color="#0c4a6e">{t("card_bio_text")}</Text>
            </Box>

            <Box className="glass-card" p={8} border="1px solid #bae6fd">
              <Heading size="md" mb={4} color="#0c4a6e" borderBottom="2px solid #7dd3fc" pb={2}>{t("card_links_title")}</Heading>
              <VStack spacing={4} align="stretch">
                <Link href="https://canva.link/uucyyzdna28977l" isExternal>
                  <HStack color="#0369a1" fontWeight="800"><Icon as={FaExternalLinkAlt} /><Text>{t("Unified Digital Identity Hub")}</Text></HStack>
                </Link>
                <Link href="https://sites.google.com/view/shaleekh" isExternal>
                  <HStack color="#0369a1" fontWeight="800"><Icon as={FaExternalLinkAlt} /><Text>{t("Educational Excellence Portfolio")}</Text></HStack>
                </Link>
                <Link href="https://sites.google.com/view/shaaleekhalil" isExternal>
                  <HStack color="#0369a1" fontWeight="800"><Icon as={FaExternalLinkAlt} /><Text>{t("Human Capital & Coaching Profile")}</Text></HStack>
                </Link>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default LandingSection;