import React, { useState } from "react";
import { VStack, Heading, SimpleGrid, Box, Image, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, HStack, Link, Container } from "@chakra-ui/react";
import { faAmazon, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedGroup, setSelectedGroup] = useState(null);

  const booksData = [
    { 
      id: 1, 
      title: isAr ? "المجموعة الأولى: طائر الفينيق" : "Group 1: The Phoenix", 
      image: "https://drive.google.com/thumbnail?id=1WcDemkg50UHetNAY7pHsdc6vjX92on_9", 
      editions: [
        isAr ? "طائر الفينيق: عندما نشرق من جديد (العربية)" : "The Phoenix: Resurging Anew (Arabic)", 
        "The Phoenix: Mastering the Sovereignty of the Healer (English)"
      ] 
    },
    { 
      id: 2, 
      title: isAr ? "المجموعة الثانية: هل جربت أن تحلم" : "Group 2: Have You Ever Tried to Dream", 
      image: "https://drive.google.com/thumbnail?id=1GqYX2ywmlT19yIGRHcTsAxtxWj4cTSah", 
      editions: [
        isAr ? "هل جربت أن تحلم: اصنع من حياتك الحياة التي تحلم بها (العربية)" : "Have You Ever Tried to Dream: Create the Life You Dream Of (Arabic)", 
        "Have You Ever Tried To Dream (English)"
      ] 
    },
    { 
      id: 3, 
      title: isAr ? "المجموعة الثالثة: رقصة الوداع (هندسة الأصداء)" : "Group 3: The Architecture of Echoes", 
      image: "https://drive.google.com/thumbnail?id=1JebLdo3IEQ_GRDk6N1Vvtz2rjqWHiaAZ", 
      editions: [
        isAr ? "شروخ في جدار الصمت: الأدب القاسي (العربية)" : "Cracks in the Wall of Silence: Harsh Literature (Arabic)", 
        "The Architecture of Echoes (English)", 
        "L'Architecture des Échos (French)"
      ] 
    },
    { 
      id: 4, 
      title: isAr ? "المجموعة الرابعة: دورة الظلال" : "Group 4: The Cycle of Shadows", 
      image: "https://drive.google.com/thumbnail?id=1JebLdo3IEQ_GRDk6N1Vvtz2rjqWHiaAZ", 
      editions: [
        isAr ? "دورة الظلال - النسخة الكاملة (العربية)" : "The Cycle of Shadows - Full Edition (Arabic)", 
        "The Cycle of Shadows (English)", 
        "Le Cycle des Ombres (French)"
      ] 
    },
    { 
      id: 5, 
      title: isAr ? "المجموعة الخامسة: دوائر الذاكرة المحرمة" : "Group 5: Circles of Forbidden Memory", 
      image: "https://drive.google.com/thumbnail?id=1k83W3foPlgOX-GiHG3tEkO73obDmjdk0", 
      editions: [
        isAr ? "دوائر الذاكرة المحرمة: القصة الكاملة (العربية)" : "Circles of Forbidden Memory: The Complete Story (Arabic)", 
        "The Cycle of Shadows - Graphic Novel (English)", 
        "Le Cycle des Ombres (French)", 
        "Círculos de Memoria Prohibida (Spanish)"
      ] 
    },
    { 
      id: 6, 
      title: isAr ? "المجموعة السادسة: الرقصة الأخيرة" : "Group 6: The Last Dance of the Escape", 
      image: "https://drive.google.com/thumbnail?id=1ea1LnghMt6jlqxYCgVK5WkAWWxhotQMF", 
      editions: [
        isAr ? "الرقصة الأخيرة: هروب نحو الحياة (العربية)" : "The Last Dance: Escape Towards Life (Arabic)", 
        "The Last Dance of the Escape (English)", 
        "La Dernière Danse de l'Échappée (French)"
      ] 
    },
    { 
      id: 7, 
      title: isAr ? "المجموعة السابعة: عبير وشادي" : "Group 7: Abeer and Shady", 
      image: "https://drive.google.com/thumbnail?id=1vzSx8BOARMDI863F6GTYX1rDmRuYx8jw", 
      editions: [
        isAr ? "شادي وعبير: ترانيم الحب (العربية)" : "Shadi & Abeer: Chants of Love (Arabic)", 
        "Shadi & Abeer (English)", 
        "Abeer et Shady (French)", 
        "Abeer y Shady (Spanish)"
      ] 
    },
    { 
      id: 8, 
      title: isAr ? "المجموعة الثامنة: مرآة الروح" : "Group 8: The Mirror of the Soul", 
      image: "https://drive.google.com/thumbnail?id=188RKTdEapP0FveGYn192Bm63eJ9VTEuR", 
      editions: [
        isAr ? "صدى الوعي: استيقاظ كون (العربية)" : "Echo of Consciousness: Kon's Awakening (Arabic)", 
        "The Mirror of the Soul: Kon’s Awakening (English)"
      ] 
    },
    { 
      id: 9, 
      title: isAr ? "المجموعة التاسعة: تركت / مذكرات سارة" : "Group 9: Left / Sara's Memoirs", 
      image: "https://drive.google.com/thumbnail?id=1Ns1wx8TtxIaICVn2nP_LJbHmcPGukF4V", 
      editions: [
        isAr ? "تركت: مذكرات سارة (العربية)" : "Left: Sara's Memoirs (Arabic)", 
        "Left (English)"
      ] 
    }
  ];

  return (
    <Container maxW="container.xl" py={20} id="projects-section">
      <VStack spacing={12}>
        <Heading color="#0c4a6e" size="2xl">
          {isAr ? "المكتبة الأدبية والمؤلفات" : "Literary Library & Works"}
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={10} w="full">
          {booksData.map((group) => (
            <Box key={group.id} className="glass-card" p={6} cursor="pointer" onClick={() => { setSelectedGroup(group); onOpen(); }} textAlign="center">
              <Image 
                src={group.image} 
                borderRadius="xl" 
                mb={6} 
                mx="auto" 
                h="320px" 
                objectFit="cover" 
                fallbackSrc="https://via.placeholder.com/300x400?text=Shalee+Khalil+Books" 
              />
              <Heading size="md" mb={2} color="#0c4a6e">{group.title}</Heading>
              <Text fontSize="sm" color="#0369a1" fontWeight="bold">
                {isAr ? "عرض الإصدارات اللغوية" : "View Language Editions"}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>

      {selectedGroup && (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
          <ModalOverlay backdropFilter="blur(10px)" />
          <ModalContent borderRadius="3xl" bg="#f0f9ff">
            <ModalHeader color="#0c4a6e" textAlign="center">{selectedGroup.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={8}>
              <VStack spacing={6}>
                <Image src={selectedGroup.image} borderRadius="2xl" maxH="300px" objectFit="contain" />
                <Box w="full" p={5} bg="whiteAlpha.800" borderRadius="2xl" border="1px solid #bae6fd">
                  {selectedGroup.editions.map((ed, i) => ( 
                    <Text key={i} fontWeight="700" mb={2} color="#0c4a6e">• {ed}</Text> 
                  ))}
                </Box>
                <HStack spacing={4} w="full">
                  <Button as={Link} href="https://www.amazon.com/author/shaleekhalil" isExternal leftIcon={<FontAwesomeIcon icon={faAmazon} />} colorScheme="orange" flex="1">
                    Amazon
                  </Button>
                  <Button as={Link} href="https://play.google.com/store/books/author?id=Shalee+Khalil" isExternal leftIcon={<FontAwesomeIcon icon={faGooglePlay} />} colorScheme="blue" flex="1">
                    Google Books
                  </Button>
                </HStack>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default ProjectsSection;