import React from "react";
import { Box, Heading, VStack, Button, Text, SimpleGrid, Container } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Card from "./Card";

// ملاحظة: مصفوفة الـ projects يجب أن تحتوي على بيانات الـ 28 كتاباً الخاصة بك
const projects = [
  // بيانات الكتب هنا...
];

const Books = () => {
  const { t } = useTranslation();

  return (
    <Box py={20}>
      <Container maxW="container.xl">
        <VStack spacing={10}>
          <Heading as="h1">{t("library_title")}</Heading>
          
          <Box p={8} bg="#f9dcc4" borderRadius="2xl" w="full" textAlign="center">
            <Heading size="md" mb={4} color="black">{t("card_stores_title")}</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              <Button 
                as="a" 
                href="https://www.amazon.com/author/shaleekhalil" 
                target="_blank" 
                bg="black" 
                color="white" 
                py={8}
                _hover={{ bg: "gray.800" }}
              >
                {t("btn_amazon")}
              </Button>
              <Button 
                as="a" 
                href="https://play.google.com/store/search?q=shalee%20khalil&c=books" 
                target="_blank" 
                bg="black" 
                color="white" 
                py={8}
                _hover={{ bg: "gray.800" }}
              >
                {t("btn_google_books")}
              </Button>
            </SimpleGrid>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {projects.map((project) => (
              <Card 
                key={project.title} 
                title={project.title} 
                description={project.description} 
                imageSrc={project.getImageSrc()} 
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Books;