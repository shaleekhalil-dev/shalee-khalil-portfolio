import React, { useState } from "react";
import {
  Box, Heading, VStack, Button, SimpleGrid, Container, Image, Text,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter,
  ModalCloseButton, useDisclosure, ListItem, HStack, UnorderedList, Badge
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const getDriveUrl = (id) => `https://lh3.googleusercontent.com/u/0/d/${id}=w1000`;

const groups = [
  {
    id: "01",
    title: "مجموعة: الرقصة الأخيرة",
    image: getDriveUrl("1_JTBrCNVOwfwHWjcT1cdilBuEBMltEi4"),
    editions: [
      { flag: "🇸🇦", text: "الرقصة الأخيرة: هروب نحو الحياة" },
      { flag: "🇺🇸", text: "The Last Dance of the Escape" },
      { flag: "🇫🇷", text: "La Dernière Danse de l'Échappée" }
    ]
  },
  {
    id: "02",
    title: "مجموعة: هل جربت أن تحلم",
    image: getDriveUrl("1GqYX2ywmlT19yIGRHcTsAxtxWj4cTSah"),
    editions: [
      { flag: "🇸🇦", text: "هل جربت أن تحلم: اصنع من حياتك الحياة التي تحلم بها" },
      { flag: "🇺🇸", text: "Have You Ever Tried To Dreamed" }
    ]
  },
  {
    id: "03",
    title: "مجموعة: تركت (مذكرات سارة)",
    image: getDriveUrl("1Ns1wx8TtxIaICVn2nP_LJbHmcPGukF4V"),
    editions: [
      { flag: "🇸🇦", text: "تركت: مذكرات ساره" },
      { flag: "🇺🇸", text: "Left" }
    ]
  },
  {
    id: "04",
    title: "مجموعة: طائر الفينيق",
    image: getDriveUrl("1_JTBrCNVOwfwHWjcT1cdilBuEBMltEi4"),
    editions: [
      { flag: "🇸🇦", text: "طائر الفينيق" },
      { flag: "🇺🇸", text: "The Phoenix: Mastering the Sovereignty of the Healer" }
    ]
  },
  {
    id: "05",
    title: "مجموعة: مرآة الروح / بوابة النور",
    image: getDriveUrl("188RKTdEapP0FveGYn192Bm63eJ9VTEuR"),
    editions: [
      { flag: "🇸🇦", text: "بوابة النور: استيقاظ كون" },
      { flag: "🇺🇸", text: "The Mirror of the Soul: Kon's Awakening" }
    ]
  },
  {
    id: "06",
    title: "مجموعة: هندسة الأصداء (Architecture of Echoes)",
    image: getDriveUrl("1_JTBrCNVOwfwHWjcT1cdilBuEBMltEi4"),
    editions: [
      { flag: "🇸🇦", text: "شروخ في جدار الصمت: الأب القاسي" },
      { flag: "🇺🇸", text: "The Architecture of Echoes" },
      { flag: "🇫🇷", text: "L'Architecture des Échos" }
    ]
  },
  {
    id: "07",
    title: "مجموعة: دوائر الذاكرة المحرمة",
    image: getDriveUrl("1c0EgObxLwJxhKfu6KY1cA4NCSoQq-nPj"),
    editions: [
      { flag: "🇸🇦", text: "دوائر الذاكرة المحرمة" },
      { flag: "🇸🇦", text: "دوائر الذاكرة المحرمة: القصة الكاملة (النسخة الكاملة)" },
      { flag: "🇺🇸", text: "The Cycle of Shadows" },
      { flag: "🇺🇸", text: "The Cycle of Shadows: The Complete Edition (النسخة الكاملة)" },
      { flag: "🇫🇷", text: "Le Cycle des Ombres" },
      { flag: "🇪🇸", text: "Círculos de Memoria Prohibida" }
    ]
  },
  {
    id: "08",
    title: "مجموعة: عبير وشادي",
    image: getDriveUrl("1vzSx8BOARMDI863F6GTYX1rDmRuYx8jw"),
    editions: [
      { flag: "🇸🇦", text: "شادي وعبير: ترانيم الحب" },
      { flag: "🇺🇸", text: "Shadi & Abeer" },
      { flag: "🇫🇷", text: "Abeer et Shady: Hymnes d'amour et parfum de jasmin" },
      { flag: "🇪🇸", text: "Abeer y Shady: Himnos de amor y fragancia de jazمين" }
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
            {groups.map((group) => (
              <Box 
                key={group.id} 
                onClick={() => handleGroupClick(group)}
                cursor="pointer"
                position="relative"
                transition="all 0.3s"
                _hover={{ transform: "translateY(-10px)" }}
              >
                <Badge 
                  position="absolute" top={4} left={4} zIndex={1} 
                  colorScheme="blue" borderRadius="md" px={3} py={1}
                >
                  NO. {group.id}
                </Badge>
                <Box borderRadius="2xl" overflow="hidden" boxShadow="2xl" bg="gray.50">
                  <Image 
                    src={group.image} 
                    alt={group.title} 
                    w="full" 
                    h="450px" 
                    objectFit="cover" 
                    fallbackSrc="https://via.placeholder.com/400x500?text=Loading+Book..." 
                  />
                </Box>
                <VStack mt={4} align="center">
                  <Heading size="md" textAlign="center" color="gray.700" px={2}>{group.title}</Heading>
                  <Text color="blue.600" fontWeight="bold">استعرض المجموعة</Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          <Box p={10} bg="#f9dcc4" borderRadius="3xl" w="full" textAlign="center">
            <Heading size="md" mb={6} color="black">{t("card_stores_title")}</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <Button as="a" href="https://www.amazon.com/author/shaleekhalil" target="_blank" bg="black" color="white" h="70px">
                {t("btn_amazon")}
              </Button>
              <Button as="a" href="https://play.google.com/store/search?q=shalee%20khalil&c=books" target="_blank" bg="black" color="white" h="70px">
                {t("btn_google_books")}
              </Button>
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered scrollBehavior="inside">
        <ModalOverlay backdropFilter="blur(15px)" bg="blackAlpha.800" />
        <ModalContent borderRadius="3xl" overflow="hidden">
          <ModalHeader bg="gray.50" py={6} textAlign="center" fontSize="xl" color="blue.900">
            <Badge colorScheme="blue" mb={2}>COLLECTION {selectedGroup?.id}</Badge>
            <Box>{selectedGroup?.title}</Box>
          </ModalHeader>
          <ModalCloseButton mt={4} />
          <ModalBody p={6}>
            <VStack spacing={8} align="stretch">
              <Image 
                src={selectedGroup?.image} 
                borderRadius="2xl" 
                w="full" 
                h="auto" 
                objectFit="contain" 
                boxShadow="lg" 
              />
              <Box>
                <UnorderedList spacing={5} listStyleType="none" ml={0}>
                  {selectedGroup?.editions.map((item, idx) => (
                    <ListItem key={idx} p={4} bg="blue.50" borderRadius="xl">
                      <HStack spacing={4} align="center">
                        <Text fontSize="2xl" mb={1}>{item.flag}</Text>
                        <Text fontSize="md" fontWeight="medium" color="gray.800" lineHeight="1.6">{item.text}</Text>
                      </HStack>
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
            </VStack>
          </ModalBody>
          <ModalFooter bg="gray.50">
            <Button colorScheme="blue" onClick={onClose} borderRadius="xl" px={8}>إغلاق</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Books;