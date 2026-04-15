import React, { useState } from "react";
import {
  Box, Heading, VStack, Button, SimpleGrid, Container, Image, Text,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter,
  ModalCloseButton, useDisclosure, Badge, Wrap, WrapItem
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const groups = [
  { title: "مجموعة: دوائر الذاكرة المحرمة (4 لغات)", langs: ["Ar", "En", "Fr", "Es"], desc: "دوائر الذاكرة المحرمة، Circles of Forbidden Memory، Cercles de la mémoire interdite، Círculos de Memoria Prohibida." },
  { title: "مجموعة: هندسة الأصداء", langs: ["Ar", "En", "Fr"], desc: "شروخ في جدار الصمت: الأب القاسي، The Architecture of Echoes، L'Architecture des Échos." },
  { title: "مجموعة: دورة الظلال", langs: ["Ar", "En", "Fr"], desc: "دورة الظلال، The Cycle of Shadows، Le Cycle des Ombres." },
  { title: "مجموعة: الرقصة الأخيرة", langs: ["Ar", "En", "Fr"], desc: "الرقصة الأخيرة: هروب نحو الحياة، The Last Dance of the Escape، La Dernière Danse de l'Échappée." },
  { title: "مجموعة: طائر الفينيق", langs: ["Ar", "En"], desc: "طائر الفينيق، The Phoenix: Mastering the Sovereignty of the Healer." },
  { title: "مجموعة: هل جربت أن تحلم", langs: ["Ar", "En"], desc: "هل جربت أن تحلم: اصنع من حياتك الحياة التي تحلم بها، Have You Ever Tried To Dreamed." },
  { title: "مجموعة: عبير وشادي", langs: ["Ar", "En", "Fr", "Es"], desc: "شادي وعبير، Shadi & Abeer، Hymnes d'amour، Himnos de amor." },
  { title: "مجموعة: مذكرات سارة", langs: ["Ar", "En"], desc: "تركت: مذكرات سارة، فنجان قهوة، وأسرار القهوة، Left." },
  { title: "مجموعة: مرآة الروح / رحلة كون", langs: ["Ar", "En"], desc: "بوابة النور: استيقاظ كون، رحلة كون، صدى الوعي، The Mirror of the Soul." },
  { title: "أعمال أخرى", langs: ["Ar", "En"], desc: "البوابة (The Gate)، خيار القلب: سلوى." }
];

const Books = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState(null);

  const openModal = (g) => { setSelected(g); onOpen(); };

  return (
    <Box py={20} bg="white">
      <Container maxW="container.xl">
        <VStack spacing={16}>
          <Heading as="h1" size="2xl" color="black">{t("library_title")}</Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="full">
            {groups.map((g, i) => (
              <Box key={i} onClick={() => openModal(g)} cursor="pointer" transition="0.3s" _hover={{ transform: "translateY(-10px)" }}>
                <Box borderRadius="2xl" overflow="hidden" boxShadow="2xl" bg="gray.100" h="350px">
                  <Image src={`https://via.placeholder.com/400x500?text=Group+${i+1}`} w="full" h="full" objectFit="cover" />
                </Box>
                <VStack mt={4}>
                  <Heading size="md" textAlign="center">{g.title}</Heading>
                  <Text color="blue.500" fontWeight="bold">رؤية المجموعة</Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          <Box p={10} bg="#f9dcc4" borderRadius="3xl" w="full" textAlign="center">
            <Heading size="md" mb={6}>{t("card_stores_title")}</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <Button as="a" href="https://www.amazon.com/author/shaleekhalil" target="_blank" bg="black" color="white" h="70px">{t("btn_amazon")}</Button>
              <Button as="a" href="https://play.google.com/store/search?q=shalee%20khalil&c=books" target="_blank" bg="black" color="white" h="70px">{t("btn_google_books")}</Button>
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent borderRadius="2xl">
          <ModalHeader>{selected?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack spacing={4} align="start">
              <Wrap>
                {selected?.langs.map(l => <WrapItem key={l}><Badge colorScheme="blue">{l}</Badge></WrapItem>)}
              </Wrap>
              <Text fontSize="lg">{selected?.desc}</Text>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Books;