import React, { useState } from "react";
import {
  Box, Heading, VStack, Button, SimpleGrid, Container, Image, Text,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter,
  ModalCloseButton, useDisclosure, Divider, List, ListItem, ListIcon, HStack
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { MdBook } from "react-icons/md";

const groups = [
  {
    title: "مجموعة: دوائر الذاكرة المحرمة",
    image: "https://via.placeholder.com/400x500?text=Circles+of+Memory",
    editions: [
      { flag: "🇵🇸", label: "العربية", name: "دوائر الذاكرة المحرمة (وتشمل النسخة الكاملة)" },
      { flag: "🇺🇸", label: "الإنجليزية", name: "Circles of Forbidden Memory" },
      { flag: "🇫🇷", label: "الفرنسية", name: "Cercles de la mémoire interdite" },
      { flag: "🇪🇸", label: "الإسبانية", name: "Círculos de Memoria Prohibida" }
    ]
  },
  {
    title: "مجموعة: هندسة الأصداء",
    image: "https://via.placeholder.com/400x500?text=Architecture+of+Echoes",
    editions: [
      { flag: "🇵🇸", label: "العربية", name: "شروخ في جدار الصمت: الأب القاسي" },
      { flag: "🇺🇸", label: "الإنجليزية", name: "The Architecture of Echoes" },
      { flag: "🇫🇷", label: "الفرنسية", name: "L'Architecture des Échos" }
    ]
  },
  {
    title: "مجموعة: دورة الظلال",
    image: "https://via.placeholder.com/400x500?text=Cycle+of+Shadows",
    editions: [
      { flag: "🇵🇸", label: "العربية", name: "دورة الظلال" },
      { flag: "🇺🇸", label: "الإنجليزية", name: "The Cycle of Shadows (وتشمل النسخة الكاملة)" },
      { flag: "🇫🇷", label: "الفرنسية", name: "Le Cycle des Ombres" }
    ]
  },
  {
    title: "مجموعة: الرقصة الأخيرة",
    image: "https://via.placeholder.com/400x500?text=The+Last+Dance",
    editions: [
      { flag: "🇵🇸", label: "العربية", name: "الرقصة الأخيرة: هروب نحو الحياة" },
      { flag: "🇺🇸", label: "الإنجليزية", name: "The Last Dance of the Escape" },
      { flag: "🇫🇷", label: "الفرنسية", name: "La Dernière Danse de l'Échappée" }
    ]
  },
  {
    title: "مجموعة: طائر الفينيق",
    image: "https://via.placeholder.com/400x500?text=The+Phoenix",
    editions: [
      { flag: "🇵🇸", label: "العربية", name: "طائر الفينيق" },
      { flag: "🇺🇸", label: "الإنجليزية", name: "The Phoenix: Mastering the Sovereignty of the Healer" }
    ]
  },
  {
    title: "مجموعة: هل جربت أن تحلم",
    image: "https://via.placeholder.com/400x500?text=Tried+to+Dream",
    editions: [
      { flag: "🇵🇸", label: "العربية", name: "هل جربت أن تحلم: اصنع من حياتك الحياة التي تحلم بها" },
      { flag: "🇺🇸", label: "الإنجليزية", name: "Have You Ever Tried To Dreamed" }
    ]
  },
  {
    title: "مجموعة: عبير وشادي",
    image: "https://via.placeholder.com/400x500?text=Shadi+and+Abeer",
    editions: [
      { flag: "🇵🇸", label: "العربية", name: "شادي وعبير: ترانيم الحب" },
      { flag: "🇺🇸", label: "الإنجليزية", name: "Shadi & Abeer" },
      { flag: "🇫🇷", label: "الفرنسية", name: "Abeer et Shady: Hymnes d'amour" },
      { flag: "🇪🇸", label: "الإسبانية", name: "Abeer y Shady: Himnos de amor" }
    ]
  },
  {
    title: "مجموعة: مذكرات سارة",
    image: "https://via.placeholder.com/400x500?text=Sara+Memoirs",
    editions: [
      { flag: "🇵🇸", label: "العربية", name: "تركت: مذكرات سارة (وتشمل: فنجان قهوة، وأسرار القهوة)" },
      { flag: "🇺🇸", label: "الإنجليزية", name: "Left" }
    ]
  },
  {
    title: "مجموعة: مرآة الروح / رحلة كون",
    image: "https://via.placeholder.com/400x500?text=Mirror+of+Soul",
    editions: [
      { flag: "🇵🇸", label: "العربية", name: "بوابة النور: استيقاظ كون (رحلة كون / صدى الوعي)" },
      { flag: "🇺🇸", label: "الإنجليزية", name: "The Mirror of the Soul: Kon's Awakening" }
    ]
  },
  {
    title: "أعمال أخرى",
    image: "https://via.placeholder.com/400x500?text=Other+Works",
    editions: [
      { flag: "🇵🇸", label: "العربية", name: "خيار القلب: سلوى" },
      { flag: "🇺🇸", label: "الإنجليزية", name: "The Gate (البوابة)" }
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
                  <Text color="blue.600" fontWeight="bold">إضغط لرؤية الإصدارات</Text>
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
        <ModalOverlay backdropFilter="blur(12px)" bg="blackAlpha.700" />
        <ModalContent borderRadius="3xl" p={2} boxShadow="2xl">
          <ModalHeader fontSize="2xl" fontWeight="bold" borderBottomWidth="1px" color="blue.900">
            {selectedGroup?.title}
          </ModalHeader>
          <ModalCloseButton borderRadius="full" m={2} />
          <ModalBody py={6}>
            <VStack spacing={6} align="stretch">
              <Image src={selectedGroup?.image} borderRadius="2xl" w="full" h="280px" objectFit="cover" boxShadow="md" />
              
              <Box>
                <Text fontWeight="bold" mb={3} color="gray.500" textTransform="uppercase" fontSize="xs" letterSpacing="widest">
                  الإصدارات واللغات المتاحة
                </Text>
                <List spacing={4}>
                  {selectedGroup?.editions.map((item, idx) => (
                    <ListItem key={idx} p={3} bg="gray.50" borderRadius="lg" border="1px solid" borderColor="gray.100">
                      <HStack spacing={4}>
                        <Text fontSize="2xl">{item.flag}</Text>
                        <VStack align="start" spacing={0}>
                          <Text fontWeight="bold" fontSize="sm" color="blue.600">{item.label}</Text>
                          <Text fontSize="md" color="gray.800">{item.name}</Text>
                        </VStack>
                      </HStack>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </VStack>
          </ModalBody>
          <ModalFooter borderTopWidth="1px">
            <Button colorScheme="blue" variant="ghost" onClick={onClose} borderRadius="xl">إغلاق</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Books;