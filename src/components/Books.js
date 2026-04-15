import React, { useState } from "react";
import {
  Box, Heading, VStack, Button, SimpleGrid, Container, Image, Text,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter,
  ModalCloseButton, useDisclosure, UnorderedList, ListItem, HStack, Divider
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const groups = [
  {
    title: "مجموعة: دوائر الذاكرة المحرمة (4 لغات)",
    image: "https://via.placeholder.com/400x500?text=Circles+of+Memory",
    editions: [
      { flag: "🇵🇸", text: "العربية: دوائر الذاكرة المحرمة (وتشمل النسخة الكاملة)." },
      { flag: "🇺🇸", text: "الإنجليزية: Circles of Forbidden Memory." },
      { flag: "🇫🇷", text: "الفرنسية: Cercles de la mémoire interdite." },
      { flag: "🇪🇸", text: "الإسبانية: Círculos de Memoria Prohibida." }
    ]
  },
  {
    title: "مجموعة: هندسة الأصداء (شروخ في جدار الصمت)",
    image: "https://via.placeholder.com/400x500?text=Architecture+of+Echoes",
    editions: [
      { flag: "🇵🇸", text: "العربية: شروخ في جدار الصمت: الأب القاسي." },
      { flag: "🇺🇸", text: "الإنجليزية: The Architecture of Echoes." },
      { flag: "🇫🇷", text: "الفرنسية: L'Architecture des Échos." }
    ]
  },
  {
    title: "مجموعة: دورة الظلال (Cycle of Shadows)",
    image: "https://via.placeholder.com/400x500?text=Cycle+of+Shadows",
    editions: [
      { flag: "🇵🇸", text: "العربية: دورة الظلال." },
      { flag: "🇺🇸", text: "الإنجليزية: The Cycle of Shadows (وتشمل النسخة الكاملة)." },
      { flag: "🇫🇷", text: "الفرنسية: Le Cycle des Ombres." }
    ]
  },
  {
    title: "مجموعة: الرقصة الأخيرة",
    image: "https://via.placeholder.com/400x500?text=The+Last+Dance",
    editions: [
      { flag: "🇵🇸", text: "العربية: الرقصة الأخيرة: هروب نحو الحياة." },
      { flag: "🇺🇸", text: "الإنجليزية: The Last Dance of the Escape." },
      { flag: "🇫🇷", text: "الفرنسية: La Dernière Danse de l'Échappée." }
    ]
  },
  {
    title: "مجموعة: طائر الفينيق",
    image: "https://via.placeholder.com/400x500?text=The+Phoenix",
    editions: [
      { flag: "🇵🇸", text: "العربية: طائر الفينيق." },
      { flag: "🇺🇸", text: "الإنجليزية: The Phoenix: Mastering the Sovereignty of the Healer." }
    ]
  },
  {
    title: "مجموعة: هل جربت أن تحلم",
    image: "https://via.placeholder.com/400x500?text=Tried+to+Dream",
    editions: [
      { flag: "🇵🇸", text: "العربية: هل جربت أن تحلم: اصنع من حياتك الحياة التي تحلم بها." },
      { flag: "🇺🇸", text: "الإنجليزية: Have You Ever Tried To Dreamed." }
    ]
  },
  {
    title: "مجموعة: عبير وشادي",
    image: "https://via.placeholder.com/400x500?text=Shadi+and+Abeer",
    editions: [
      { flag: "🇵🇸", text: "العربية: شادي وعبير: ترانيم الحب." },
      { flag: "🇺🇸", text: "الإنجليزية: Shadi & Abeer." },
      { flag: "🇫🇷", text: "الفرنسية: Abeer et Shady: Hymnes d'amour et parfum de jasmin." },
      { flag: "🇪🇸", text: "الإسبانية: Abeer y Shady: Himnos de amor y fragancia de jazmín." }
    ]
  },
  {
    title: "مجموعة: مذكرات سارة",
    image: "https://via.placeholder.com/400x500?text=Sara+Memoirs",
    editions: [
      { flag: "🇵🇸", text: "العربية: تركت: مذكرات سارة (وتشمل إصدارات: فنجان قهوة، وأسرار القهوة)." },
      { flag: "🇺🇸", text: "الإنجليزية: Left." }
    ]
  },
  {
    title: "مجموعة: مرآة الروح / رحلة كون",
    image: "https://via.placeholder.com/400x500?text=Mirror+of+Soul",
    editions: [
      { flag: "🇵🇸", text: "العربية: بوابة النور: استيقاظ كون (رحلة كون / صدى الوعي)." },
      { flag: "🇺🇸", text: "الإنجليزية: The Mirror of the Soul: Kon's Awakening." }
    ]
  },
  {
    title: "أعمال أخرى (بالعربية والإنجليزية)",
    image: "https://via.placeholder.com/400x500?text=Other+Works",
    editions: [
      { flag: "🇵🇸", text: "العربية: خيار القلب: سلوى." },
      { flag: "🇺🇸", text: "الإنجليزية: The Gate (البوابة)." }
    ]
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
          <Heading as="h1" color="black" size="2xl" textAlign="center">{t("library_title")}</Heading>
          
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
                  <Heading size="md" textAlign="center" color="gray.700" px={2}>{group.title}</Heading>
                  <Text color="blue.600" fontWeight="bold">رؤية الإصدارات</Text>
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

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered scrollBehavior="inside">
        <ModalOverlay backdropFilter="blur(15px)" bg="blackAlpha.800" />
        <ModalContent borderRadius="3xl" p={0} overflow="hidden">
          <ModalHeader bg="gray.50" py={6} textAlign="center" fontSize="xl" color="blue.900" borderBottom="1px solid" borderColor="gray.100">
            {selectedGroup?.title}
          </ModalHeader>
          <ModalCloseButton mt={4} />
          <ModalBody p={6}>
            <VStack spacing={8} align="stretch">
              <Image src={selectedGroup?.image} borderRadius="2xl" w="full" h="320px" objectFit="cover" boxShadow="lg" />
              
              <Box>
                <Text fontWeight="bold" mb={4} color="gray.400" fontSize="xs" letterSpacing="widest" textTransform="uppercase">
                  قائمة الإصدارات الكاملة
                </Text>
                <UnorderedList spacing={5} listStyleType="none" ml={0}>
                  {selectedGroup?.editions.map((item, idx) => (
                    <ListItem key={idx} p={4} bg="blue.50" borderRadius="xl">
                      <HStack spacing={4} align="start">
                        <Text fontSize="xl">{item.flag}</Text>
                        <Text fontSize="md" fontWeight="medium" color="gray.800" lineHeight="1.6">
                          {item.text}
                        </Text>
                      </HStack>
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
            </VStack>
          </ModalBody>
          <ModalFooter bg="gray.50">
            <Button colorScheme="blue" variant="solid" onClick={onClose} borderRadius="xl" px={8}>
              إغلاق
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Books;