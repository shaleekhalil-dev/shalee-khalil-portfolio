import React from "react";
import { Box, Heading, VStack, Button, SimpleGrid, Container, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

// مصفوفة الكتب مباشرة داخل الملف لضمان الظهور
const projects = [
  {
    title: "طائر الفينيق",
    description: "رواية تجسد انبعاث الأمل من الرماد، متوفرة بالعربية والإنجليزية.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "هل جربت أن تحلم",
    description: "رحلة فلسفية في عالم الأحلام والوعي الذاتي.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "هندسة الأصداء",
    description: "كتاب في الوعي والفلسفة بثلاث لغات: العربي، الإنجليزي، والفرنسي.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "مذكرات سارة",
    description: "سلسلة وجدانية تشمل (تركت) و(فنجان قهوة).",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80",
  }
];

const Books = () => {
  const { t } = useTranslation();

  return (
    <Box py={20} backgroundColor="white">
      <Container maxW="container.xl">
        <VStack spacing={16}>
          <Heading as="h1" color="black" size="2xl">{t("library_title")}</Heading>
          
          {/* قسم عرض الكتب (البطاقات) */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="full">
            {projects.map((project, index) => (
              <Box 
                key={index} 
                bg="white" 
                borderRadius="xl" 
                overflow="hidden" 
                boxShadow="lg"
                border="1px solid"
                borderColor="gray.100"
              >
                <Image src={project.image} alt={project.title} h="250px" w="full" objectFit="cover" />
                <VStack p={6} align="start" spacing={3}>
                  <Heading size="md" color="black">{project.title}</Heading>
                  <Text color="gray.600" fontSize="sm">{project.description}</Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          {/* صندوق المتاجر في الأسفل تماماً */}
          <Box p={10} bg="#f9dcc4" borderRadius="3xl" w="full" textAlign="center" boxShadow="sm">
            <Heading size="md" mb={6} color="black">{t("card_stores_title")}</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <Button 
                as="a" 
                href="https://www.amazon.com/author/shaleekhalil" 
                target="_blank" 
                bg="black" 
                color="white" 
                size="lg"
                h="70px"
                _hover={{ bg: "gray.800", transform: "translateY(-2px)" }}
              >
                {t("btn_amazon")}
              </Button>
              <Button 
                as="a" 
                href="https://play.google.com/store/search?q=shalee%20khalil&c=books" 
                target="_blank" 
                bg="black" 
                color="white" 
                size="lg"
                h="70px"
                _hover={{ bg: "gray.800", transform: "translateY(-2px)" }}
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