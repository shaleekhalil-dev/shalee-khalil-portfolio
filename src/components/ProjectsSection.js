import React, { useState } from "react";
import { VStack, Heading, SimpleGrid, Box, Image, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, HStack, Link, Container, Badge } from "@chakra-ui/react";
import { faAmazon, faGooglePlay, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode, faChartLine, faServer, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null);

  const techProjects = [
    {
      id: "t1",
      title: isAr ? "تحليل جودة البيانات (TechLine)" : "TechLine Quality Analytics",
      description: isAr ? "تحليل إحصائي متقدم باستخدام Python لبيانات الجودة والتميز التشغيلي." : "Advanced statistical analysis project using Python.",
      link: "https://github.com/shaleekhalil-dev/TechLine-Quality-Analytics",
      icon: faChartLine,
      tags: ["Python", "Data Analytics"]
    },
    {
      id: "t2",
      title: isAr ? "نظام Little Lemon API" : "Little Lemon API",
      description: isAr ? "تطوير نظام API متكامل باستخدام Django مع إدارة صلاحيات RBAC." : "Full-stack API development with Django.",
      link: "https://github.com/shaleekhalil-dev/Little-Lemon-API",
      icon: faServer,
      tags: ["Django", "DRF"]
    },
    {
      id: "t3",
      title: isAr ? "محرك الحجوزات الرقمي" : "Digital Reservation Engine",
      description: isAr ? "تطبيق ويب متكامل لنظام إدارة الحجوزات." : "Web application for reservation management.",
      link: "https://github.com/shaleekhalil-dev/LittleLemonProject",
      icon: faLaptopCode,
      tags: ["React", "UI/UX"]
    },
    {
      id: "t4",
      title: isAr ? "ملف التعريف الرقمي" : "Digital Portfolio",
      description: isAr ? "تطوير هوية رقمية متكاملة تدمج المؤلفات والخبرات التقنية." : "Unified digital identity merging works and tech expertise.",
      link: "https://github.com/shaleekhalil-dev/shalee-khalil-portfolio",
      icon: faCode,
      tags: ["React", "Chakra UI"]
    }
  ];

  const booksData = [
    { id: 1, title: isAr ? "طائر الفينيق" : "The Phoenix", image: "https://drive.google.com/thumbnail?id=1WcDemkg50UHetNAY7pHsdc6vjX92on_9", editions: [isAr ? "طائر الفينيق: عندما نشرق من جديد (العربية)" : "The Phoenix: Resurging Anew (Arabic)", "The Phoenix: Mastering the Sovereignty of the Healer (English)"] },
    { id: 2, title: isAr ? "هل جربت أن تحلم" : "Have You Ever Tried to Dream", image: "https://drive.google.com/thumbnail?id=1GqYX2ywmlT19yIGRHcTsAxtxWj4cTSah", editions: [isAr ? "هل جربت أن تحلم (العربية)" : "Have You Ever Tried to Dream (Arabic)", "Have You Ever Tried To Dream (English)"] },
    { id: 3, title: isAr ? "الرقصة الأخيرة" : "The Last Dance of the Escape", image: "https://drive.google.com/thumbnail?id=1ea1LnghMt6jlqxYCgVK5WkAWWxhotQMF", editions: [isAr ? "الرقصة الأخيرة: هروب نحو الحياة (العربية)" : "The Last Dance of the Escape (Arabic)", "The Last Dance of the Escape (English)", "La Dernière Danse de l'Échappée (French)"] },
    { id: 4, title: isAr ? "دورة الظلال" : "The Cycle of Shadows", image: "https://drive.google.com/thumbnail?id=1JebLdo3IEQ_GRDk6N1Vvtz2rjqWHiaAZ", editions: [isAr ? "دورة الظلال (العربية)" : "The Cycle of Shadows (Arabic)", "The Cycle of Shadows (English)", "Le Cycle des Ombres (French)"] },
    { id: 5, title: isAr ? "دوائر الذاكرة المحرمة" : "Circles of Forbidden Memory", image: "https://drive.google.com/thumbnail?id=1k83W3foPlgOX-GiHG3tEkO73obDmjdk0", editions: [isAr ? "دوائر الذاكرة المحرمة (العربية)" : "Circles of Forbidden Memory (Arabic)", "The Cycle of Shadows - Graphic Novel (English)", "Círculos de Memoria Prohibida (Spanish)"] },
    { id: 6, title: isAr ? "عبير وشادي" : "Abeer and Shady", image: "https://drive.google.com/thumbnail?id=1vzSx8BOARMDI863F6GTYX1rDmRuYx8jw", editions: [isAr ? "عبير وشادي: ترانيم الحب (العربية)" : "Abeer & Shadi (Arabic)", "Shadi & Abeer (English)", "Abeer y Shady (Spanish)"] },
    { id: 7, title: isAr ? "مرآة الروح / صدى الوعي" : "Mirror of the Soul", image: "https://drive.google.com/thumbnail?id=188RKTdEapP0FveGYn192Bm63eJ9VTEuR", editions: [isAr ? "صدى الوعي (العربية)" : "Echo of Consciousness (Arabic)", "The Mirror of the Soul (English)", "Journey of Existence (English)"] },
    { id: 8, title: isAr ? "تركت (Left) / مذكرات سارة" : "Left / Sara's Memoirs", image: "https://drive.google.com/thumbnail?id=1Ns1wx8TtxIaICVn2nP_LJbHmcPGukF4V", editions: [isAr ? "تركت: مذكرات سارة (العربية)" : "Left: Sara's Memoirs (Arabic)", "Left (English)", isAr ? "فنجان قهوة: مذكرات سارة" : "A Cup of Coffee: Sara's Memoirs"] }
  ];

  return (
    <Container maxW="container.xl" py={20} id="projects-section">
      <VStack spacing={16}>
        <VStack spacing={8} w="full">
          <Heading color="#0c4a6e" size="xl" textAlign="center">{isAr ? "المشاريع التقنية وتحليل البيانات" : "Tech Projects & Data Analytics"}</Heading>
          <SimpleGrid columns={[1, 2, 4]} spacing={6} w="full">
            {techProjects.map((p) => (
              <Box key={p.id} className="glass-card" p={6} borderRadius="xl" border="1px solid #bae6fd" textAlign="center" _hover={{ transform: "translateY(-5px)" }} transition="0.3s">
                <Box mb={4} color="#0284c7"><FontAwesomeIcon icon={p.icon} size="3x" /></Box>
                <Heading size="sm" mb={3} color="#0c4a6e">{p.title}</Heading>
                <HStack justify="center" mb={3}>{p.tags.map(tag => <Badge key={tag} colorScheme="blue" variant="subtle">{tag}</Badge>)}</HStack>
                <Button as={Link} href={p.link} isExternal size="xs" colorScheme="blue" variant="outline" leftIcon={<FontAwesomeIcon icon={faGithub} />}>GitHub</Button>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        <VStack spacing={8} w="full">
          <Heading color="#0c4a6e" size="xl" textAlign="center">{isAr ? "المكتبة الأدبية والمؤلفات" : "Literary Library & Works"}</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={10} w="full">
            {booksData.map((book) => (
              <Box key={book.id} className="glass-card" p={6} cursor="pointer" onClick={() => { setSelectedItem(book); onOpen(); }} textAlign="center" _hover={{ shadow: "xl" }}>
                <Image src={book.image} borderRadius="xl" mb={4} h="280px" mx="auto" objectFit="cover" fallbackSrc="https://via.placeholder.com/300x400?text=Shalee+Khalil" />
                <Heading size="sm" color="#0c4a6e">{book.title}</Heading>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </VStack>

      {selectedItem && (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
          <ModalOverlay backdropFilter="blur(10px)" />
          <ModalContent borderRadius="2xl" bg="#f0f9ff">
            <ModalHeader color="#0c4a6e" textAlign="center">{selectedItem.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={8}>
              <VStack spacing={6}>
                <Image src={selectedItem.image} borderRadius="2xl" maxH="300px" />
                <Box w="full" p={5} bg="whiteAlpha.800" borderRadius="2xl" border="1px solid #bae6fd">
                  {selectedItem.editions.map((ed, i) => <Text key={i} fontWeight="700" mb={2} color="#0c4a6e">• {ed}</Text>)}
                </Box>
                <HStack spacing={4} w="full">
                  <Button as={Link} href="https://amazon.com/author/shaleekhalil" isExternal leftIcon={<FontAwesomeIcon icon={faAmazon} />} colorScheme="orange" flex="1">Amazon</Button>
                  <Button as={Link} href="https://play.google.com/store/books/author?id=Shalee+Khalil" isExternal leftIcon={<FontAwesomeIcon icon={faGooglePlay} />} colorScheme="blue" flex="1">Google Books</Button>
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