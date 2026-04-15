import React, { useState } from "react";
import {
  Box, Heading, VStack, Button, SimpleGrid, Container, Image, Text,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter,
  ModalCloseButton, useDisclosure, Badge, Stack
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const groups = [
  {
    title: "مجموعة: دوائر الذاكرة المحرمة",
    languages: ["العربية", "English", "Français", "Español"],
    description: "تشمل النسخة الكاملة، Circles of Forbidden Memory، Cercles de la mémoire interdite، وCírculos de Memoria Prohibida.",
    image: "https://via.placeholder.com/400x500?text=Circles+of+Memory"
  },
  {
    title: "مجموعة: هندسة الأصداء",
    languages: ["العربية", "English", "Français"],
    description: "شروخ في جدار الصمت: الأب القاسي، The Architecture of Echoes، وL'Architecture des Échos.",
    image: "https://via.placeholder.com/400x500?text=Architecture+of+Echoes"
  },
  {
    title: "مجموعة: دورة الظلال",
    languages: ["العربية", "English", "Français"],
    description: "دورة الظلال، The Cycle of Shadows (النسخة الكاملة)، وLe Cycle des Ombres.",
    image: "https://via.placeholder.com/400x500?text=Cycle+of+Shadows"
  },
  {
    title: "مجموعة: الرقصة الأخيرة",
    languages: ["العربية", "English", "Français"],
    description: "الرقصة الأخيرة: هروب نحو الحياة، The Last Dance of the Escape، وLa Dernière Danse de l'Échappée.",
    image: "https://via.placeholder.com/400x500?text=The+Last+Dance"
  },
  {
    title: "مجموعة: طائر الفينيق",
    languages: ["العربية", "English"],
    description: "طائر الفينيق، وThe Phoenix: Mastering the Sovereignty of the Healer.",
    image: "https://via.placeholder.com/400x500?text=The+Phoenix"
  },
  {
    title: "مجموعة: هل جربت أن تحلم",
    languages: ["العربية", "English"],
    description: "هل جربت أن تحلم: اصنع من حياتك الحياة التي تحلم بها، وHave You Ever Tried To Dreamed.",
    image: "https://via.placeholder.com/400x500?text=Tried+to+Dream"
  },
  {
    title: "مجموعة: عبير وشادي",
    languages: ["العربية", "English", "Français", "Español"],
    description: "شادي وعبير: ترانيم الحب، Shadi & Abeer، Hymnes d'amour، وHimnos de amor.",
    image: "https://via.placeholder.com/400x500?text=Shadi+and+Abeer"
  },
  {
    title: "مجموعة: مذكرات سارة",
    languages: ["العربية", "English"],
    description: "تركت: مذكرات سارة (وتشمل: فنجان قهوة، وأسرار القهوة)، وLeft.",
    image: "https://via.placeholder.com/400x500?text=Sara+Memoirs"
  },
  {
    title: "مجموعة: مرآة الروح / رحلة كون",
    languages: ["العربية", "English"],
    description: "بوابة النور: استيقاظ كون (رحلة كون / صدى الوعي)، وThe Mirror of the Soul.",
    image: "https://via.placeholder.com/400x500?text=Mirror+of+Soul"
  },
  {
    title: "أعمال أخرى",
    languages: ["العربية", "English"],
    description: "البوابة (The Gate)، وخيار القلب: سلوى.",
    image: "https://via.placeholder.com/400x500?text=Other+Works"
  }
];

const Books = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
    onOpen();
  };

  return (
    <Box py={20} backgroundColor="white">
      <Container maxW="container.xl">
        <VStack spacing={16}>
          <Heading as="h1" color="black" size="2xl">{t("library_title")}</Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="full">
            {groups.map((group, index) => (
              <Box 
                key={index} 
                onClick={() => handleGroupClick(group)}
                cursor="pointer"
                transition="all 0.3s"
                _hover={{ transform: "translateY(-10px)" }}
              >
                <Box borderRadius="2xl" overflow="hidden" boxShadow="xl" bg="gray.50">
                  <Image src={group.image} alt={group.title} w="full" h="400px" objectFit="cover" />
                </Box>
                <VStack mt={4} align="center">
                  <Heading size="md" textAlign="center" color="gray.700">{group.title}</Heading>
                  <Text color="blue.600" fontWeight="bold">رؤية المجموعات</Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          <Box p={10} bg="#f9dcc4" borderRadius="3xl" w="full" textAlign="center">
            <Heading size="md" mb={6} color="black">{t("card_stores_title")}</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <Button as="a" href="https://www.amazon.com/author/shaleekhalil" target="_blank" bg="black" color="white" h="70px">{t("btn_amazon")}</Button>
              <Button as="a" href="https://play.google.com/store/search?q=shalee%20khalil&c=books" target="_blank" bg="black" color="white" h="70px">{t("btn_google_books")}</Button>
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay backdropFilter="blur(8px)" />
        <ModalContent borderRadius="2xl" p={4}>
          <ModalHeader color="blue.800">{selectedGroup?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={6} align="start">
              <Image src={selectedGroup?.image} borderRadius="xl" w="full" h="300px" objectFit="cover" />
              <Stack direction="row" flexWrap="wrap" spacing={2}>
                {selectedGroup?.languages.map((lang) => (
                  <Badge key={lang} colorScheme="blue" px={3} py={1} borderRadius="full">{lang}</Badge>
                ))}
              </Stack>
              <Text fontSize="lg" color="gray.700" lineHeight="tall">
                {selectedGroup?.description}
              </Text>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>إغلاق</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Books;