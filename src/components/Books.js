import React from "react";
import { Box, Heading, VStack, Button, SimpleGrid, Container } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Card from "./Card";

const projects = [
  {
    title: "طائر الفينيق",
    description: "رواية تجسد انبعاث الأمل من الرماد، متوفرة بالعربية والإنجليزية.",
    getImageSrc: () => "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "هل جربت أن تحلم",
    description: "رحلة فلسفية في عالم الأحلام والوعي الذاتي.",
    getImageSrc: () => "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "هندسة الأصداء",
    description: "كتاب في الوعي والفلسفة بثلاث لغات: العربي، الإنجليزي، والفرنسي.",
    getImageSrc: () => "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "مذكرات سارة",
    description: "سلسلة وجدانية تشمل (تركت) و(فنجان قهوة).",
    getImageSrc: () => "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  }
];

const Books = () => {
  const { t } = useTranslation();

  return (
    <Box py={20} backgroundColor="white">
      <Container maxW="container.xl">
        <VStack spacing={10}>
          <Heading as="h1" color="black">{t("library_title")}</Heading>
          
          {/* قسم المؤلفات أولاً */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="full">
            {projects.map((project) => (
              <Card 
                key={project.title} 
                title={project.title} 
                description={project.description} 
                imageSrc={project.getImageSrc()} 
              />
            ))}
          </SimpleGrid>

          {/* صندوق المتاجر في الأسفل */}
          <Box p={8} bg="#f9dcc4" borderRadius="2xl" w="full" textAlign="center" mt={10}>
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
        </VStack>
      </Container>
    </Box>
  );
};

export default Books;