import React, { useState } from "react";
import { VStack, Heading, SimpleGrid, Box, Image, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, HStack, Link, Container } from "@chakra-ui/react";
import { faAmazon, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const booksData = [
  {
    id: 1,
    title: "المجموعة الأولى (الكتب الأساسية)",
    image: "/images/books/group1.jpg",
    editions: ["طائر الفينيق (عربي/إنجليزي)", "هل جربت أن تحلم (عربي/إنجليزي)", "تركت (Left) / مذكرات سارة", "رقصة الوداع (3 أجزاء)"],
    amazon: "https://www.amazon.com/author/shaleekhalil",
    google: "https://play.google.com/store/books/author?id=Shalee+Khalil"
  },
  {
    id: 2,
    title: "المجموعة الثانية (الروايات والقصص)",
    image: "/images/books/group2.jpg",
    editions: ["سلسلة عبير وشادي (3 إصدارات)", "خيار القلب: سلوى", "أسرار القهوة", "فنجان قهوة: مذكرات سارة"],
    amazon: "https://www.amazon.com/author/shaleekhalil",
    google: "https://play.google.com/store/books/author?id=Shalee+Khalil"
  },
  {
    id: 3,
    title: "المجموعة الثالثة (الوعي والفلسفة)",
    image: "/images/books/group3.jpg",
    editions: ["هندسة الأصداء (3 لغات)", "رحلة كون / مرآة الروح / صدى الوعي", "دوائر الذاكرة المحرمة", "دورة الظلال", "البوابة (The Gate)"],
    amazon: "https://www.amazon.com/author/shaleekhalil",
    google: "https://play.google.com/store/books/author?id=Shalee+Khalil"
  }
];

const ProjectsSection = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleOpen = (group) => {
    setSelectedGroup(group);
    onOpen();
  };

  return (
    <Container maxW="container.xl" py={20} id="projects-section">
      <VStack spacing={12}>
        <Heading color="#0c4a6e" size="2xl">{t("library_title")}</Heading>
        <SimpleGrid columns={[1, null, 3]} spacing={10} w="full">
          {booksData.map((group) => (
            <Box key={group.id} className="glass-card" p={6} cursor="pointer" onClick={() => handleOpen(group)} textAlign="center">
              <Image src={group.image} borderRadius="xl" mb={6} mx="auto" fallbackSrc="https://via.placeholder.com/300x400?text=Shalee+Khalil+Books" />
              <Heading size="md" mb={4}>{group.title}</Heading>
              <Button size="sm" colorScheme="blue" variant="ghost">عرض التفاصيل</Button>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>

      {selectedGroup && (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
          <ModalOverlay backdropFilter="blur(10px)" />
          <ModalContent borderRadius="3xl" bg="#f8fafc" p={4}>
            <ModalHeader color="#0c4a6e" textAlign="center" fontSize="2xl">{selectedGroup.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={6}>
                <Image src={selectedGroup.image} borderRadius="2xl" maxH="300px" />
                <Box w="full" p={5} bg="whiteAlpha.800" borderRadius="2xl" border="1px solid #bae6fd">
                  <Heading size="sm" mb={3} color="#0369a1">الإصدارات ضمن هذه المجموعة:</Heading>
                  {selectedGroup.editions.map((ed, i) => (
                    <Text key={i} fontWeight="700" mb={1}>• {ed}</Text>
                  ))}
                </Box>
                <HStack spacing={4} w="full">
                  <Button as={Link} href={selectedGroup.amazon} isExternal leftIcon={<FontAwesomeIcon icon={faAmazon} />} colorScheme="orange" flex="1" h="50px">Amazon</Button>
                  <Button as={Link} href={selectedGroup.google} isExternal leftIcon={<FontAwesomeIcon icon={faGooglePlay} />} colorScheme="blue" flex="1" h="50px">Google Books</Button>
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