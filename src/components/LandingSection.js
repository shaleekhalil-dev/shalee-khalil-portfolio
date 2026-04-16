import React from "react";
import { Avatar, Heading, VStack, Text, Box, SimpleGrid, Link, Button, Icon } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useTranslation } from "react-i18next";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const LandingSection = () => {
  const { t } = useTranslation();

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground={false}
      backgroundColor="#F0F9FF"
      backgroundImage="linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 100%)"
      p={8}
    >
      <VStack spacing={10} w="full" maxW="1200px">
        <Box
          p={10}
          borderRadius="3xl"
          bg="rgba(255, 255, 255, 0.7)"
          backdropFilter="blur(10px)"
          border="1px solid rgba(255, 255, 255, 0.5)"
          boxShadow="0 10px 30px rgba(0, 0, 0, 0.05)"
          textAlign="center"
          w="full"
          maxW="800px"
        >
          <VStack spacing={6}>
            <Avatar
              size="2xl"
              name="Shalee Khalil"
              src="https://media.licdn.com/dms/image/v2/D4D03AQFe7fJazFVxAQ/profile-displayphoto-scale_400_400/B4DZj_UhVKGQAk-/0/1756630227562?e=1778112000&v=beta&t=lnJdAbndOdJlaMbkzC32_5aZ-rtBOajv-QlxxJyJa8o"
              border="4px solid white"
              boxShadow="lg"
            />
            <VStack spacing={2}>
              <Heading as="h1" size="2xl" color="#0369A1" fontWeight="bold">
                {t("name") || "Shalee Khalil"}
              </Heading>
              <Text fontSize="xl" fontWeight="semibold" color="#0C4A6E">
                {t("hero_subtitle")}
              </Text>
            </VStack>
            <Text fontSize="lg" color="#334155" maxW="500px" lineHeight="tall">
              {t("card_bio_text")}
            </Text>
          </VStack>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
          <VStack 
            p={8} bg="#d1e8ff" borderRadius="2xl" align="center" spacing={4} shadow="md"
            transition="transform 0.2s" _hover={{ transform: "scale(1.02)" }}
          >
            <Heading size="md" color="#1A365D">{t("card_bio_title")}</Heading>
            <Text textAlign="center" fontSize="sm" color="#2C5282">
              {t("card_bio_text")}
            </Text>
          </VStack>

          <VStack 
            p={8} bg="#d4edda" borderRadius="2xl" align="start" spacing={4} shadow="md"
            transition="transform 0.2s" _hover={{ transform: "scale(1.02)" }}
          >
            <Heading size="md" color="#1C4532" alignSelf="center">Quick Access Links</Heading>
            <VStack align="start" spacing={3} w="full">
              <Link href="#" isExternal color="#22543D" fontWeight="500">
                Digital Identity Portfolio <ExternalLinkIcon mx="2px" />
              </Link>
              <Link href="#" isExternal color="#22543D" fontWeight="500">
                Teacher Achievement Portfolio <ExternalLinkIcon mx="2px" />
              </Link>
              <Link href="#" isExternal color="#22543D" fontWeight="500">
                Life Coaching Profile <ExternalLinkIcon mx="2px" />
              </Link>
            </VStack>
          </VStack>

          <VStack 
            p={8} bg="#ffe5d0" borderRadius="2xl" align="center" spacing={4} shadow="md"
            transition="transform 0.2s" _hover={{ transform: "scale(1.02)" }}
          >
            <Heading size="md" color="#7B341E" textAlign="center">{t("card_stores_title")}</Heading>
            <Button 
              as="a" href="https://www.amazon.com/author/shalee-khalil" target="_blank"
              bg="black" color="white" w="full" py={6} borderRadius="xl"
              _hover={{ bg: "gray.800" }} leftIcon={<Icon as={ExternalLinkIcon} />}
            >
              {t("btn_amazon")}
            </Button>
            <Button 
              as="a" href="https://play.google.com/store/books/author?id=Shalee+Khalil" target="_blank"
              bg="black" color="white" w="full" py={6} borderRadius="xl"
              _hover={{ bg: "gray.800" }} leftIcon={<Icon as={ExternalLinkIcon} />}
            >
              {t("btn_google_books")}
            </Button>
          </VStack>
        </SimpleGrid>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;