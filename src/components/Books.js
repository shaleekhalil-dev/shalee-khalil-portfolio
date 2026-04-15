import React, { useState } from "react";
import {
  Box, Heading, VStack, Button, SimpleGrid, Container, Image, Text,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter,
  ModalCloseButton, useDisclosure, ListItem, HStack, UnorderedList, Badge
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

// محرك الروابط المباشرة لصور جوجل درايف
const getDirectDriveUrl = (id) => `https://lh3.googleusercontent.com/u/0/d/${id}`;

const Books = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedGroup, setSelectedGroup] = useState(null);

  const groups = [
    {
      id: "01",
      titleKey: "group_01_title",
      image: getDirectDriveUrl("1ea1LnghMt6jlqxYCgVK5WkAWWxhotQMF"), // الرقصة الأخيرة
      editions: [
        { flag: "🇸🇦", textKey: "g1_ed1" },
        { flag: "🇺🇸", text: "The Last Dance of the Escape" },
        { flag: "🇫🇷", text: "La Dernière Danse de l'Échappée" }
      ]
    },
    {
      id: "02",
      titleKey: "group_02_title",
      image: getDirectDriveUrl("1GqYX2ywmlT19yIGRHcTsAxtxWj4cTSah"), // هل جربت أن تحلم
      editions: [
        { flag: "🇸🇦", textKey: "g2_ed1" },
        { flag: "🇺🇸", text: "Have You Ever Tried To Dreamed" }
      ]
    },
    {
      id: "03",
      titleKey: "group_03_title",
      image: getDirectDriveUrl("1Ns1wx8TtxIaICVn2nP_LJbHmcPGukF4V"), // مذكرات سارة
      editions: [
        { flag: "🇸🇦", textKey: "g3_ed1" },
        { flag: "🇺🇸", text: "Left" }
      ]
    },
    {
      id: "04",
      titleKey: "group_04_title",
      image: getDirectDriveUrl("1WcDemkg50UHetNAY7pHsdc6vjX92on_9"), // طائر الفينيق
      editions: [
        { flag: "🇸🇦", textKey: "g4_ed1" },
        { flag: "🇺🇸", text: "The Phoenix: Mastering the Sovereignty of the Healer" }
      ]
    },
    {
      id: "05",
      titleKey: "group_05_title",
      image: getDirectDriveUrl("188RKTdEapP0FveGYn192Bm63eJ9VTEuR"), // مرآة الروح
      editions: [
        { flag: "🇸🇦", textKey: "g5_ed1" },
        { flag: "🇺🇸", text: "The Mirror of the Soul: Kon's Awakening" }
      ]
    },
    {
      id: "06",
      titleKey: "group_06_title",
      image: getDirectDriveUrl("1_JTBrCNVOwfwHWjcT1cdilBuEBMltEi4"), // هندسة الأصداء
      editions: [
        { flag: "🇸🇦", textKey: "g6_ed1" },
        { flag: "🇺🇸", text: "The Architecture of Echoes" },
        { flag: "🇫🇷", text: "L'Architecture des Échos" }
      ]
    },
    {
      id: "07",
      titleKey: "group_07_title",
      image: getDirectDriveUrl("1k83W3foPlgOX-GiHG3tEkO73obDmjdk0"), // دوائر الذاكرة المحرمة
      editions: [
        { flag: "🇸🇦", textKey: "g7_ed1" },
        { flag: "🇸🇦", textKey: "g7_ed2" },
        { flag: "🇪🇸", text: "Círculos de Memoria Prohibida" },
        { flag: "🇺🇸", text: "The Cycle of Shadows" },
        { flag: "🇫🇷", text: "Le Cycle des Ombres" },
        { flag: "🇺🇸", text: "The Cycle of Shadows: The Complete Edition" }
      ]
    },
    {
      id: "08",
      titleKey: "group_08_title",
      image: getDirectDriveUrl("1vzSx8BOARMDI863F6GTYX1rDmRuYx8jw"), // عبير وشادي
      editions: [
        { flag: "🇸🇦", textKey: "g8_ed1" },
        { flag: "🇺🇸", text: "Shadi & Abeer" },
        { flag: "🇫🇷", text: "Abeer et Shady: Hymnes d'amour et parfum de jasmin" },
        { flag: "🇪🇸", text: "Abeer y Shady: Himnos de amor y fragancia de jazmín" }
      ]
    }
  ];

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
    onOpen();
  };

  return (
    <Box py={20} backgroundColor="white">
      <Container maxW="container.xl">
        <VStack spacing={16}>
          <Heading as="h1" color="black" size="2xl" textAlign="center">
            {t("library_title")}
          </Heading>
          
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
                <Badge position="absolute" top={4} left={4} zIndex={1} colorScheme="blue" borderRadius="md" px={3} py={1}>
                  NO. {group.id}
                </Badge>
                <Box borderRadius="2xl" overflow="hidden" boxShadow="2xl" bg="gray.50">
                  <Image 
                    src={group.image} 
                    alt={t(group.titleKey)} 
                    w="full" h="450px" 
                    objectFit="cover" 
                    fallbackSrc="https://via.placeholder.com/400x500?text=جاري+التحميل" 
                  />
                </Box>
                <VStack mt={4} align="center">
                  <Heading size="md" textAlign="center" color="gray.700" px={2}>{t(group.titleKey)}</Heading>
                  <Text color="blue.600" fontWeight="bold">{t("view_group")}</Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered scrollBehavior="inside">
        <ModalOverlay backdropFilter="blur(15px)" bg="blackAlpha.800" />
        <ModalContent borderRadius="3xl" overflow="hidden">
          <ModalHeader bg="gray.50" py={6} textAlign="center" fontSize="xl" color="blue.900">
            <Badge colorScheme="blue" mb={2}>COLLECTION {selectedGroup?.id}</Badge>
            <Box>{selectedGroup ? t(selectedGroup.titleKey) : ""}</Box>
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
              <UnorderedList spacing={5} listStyleType="none" ml={0}>
                {selectedGroup?.editions.map((item, idx) => (
                  <ListItem key={idx} p={4} bg="blue.50" borderRadius="xl">
                    <HStack spacing={4} align="center">
                      <Text fontSize="2xl">{item.flag}</Text>
                      <Text fontSize="md" fontWeight="medium" color="gray.800">
                        {item.textKey ? t(item.textKey) : item.text}
                      </Text>
                    </HStack>
                  </ListItem>
                ))}
              </UnorderedList>
            </VStack>
          </ModalBody>
          <ModalFooter bg="gray.50">
            <Button colorScheme="blue" onClick={onClose} borderRadius="xl" px={8}>{t("close")}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Books;