import React, { useState } from "react";
import ReactGA from "react-ga4";
import { VStack, Heading, SimpleGrid, Box, Image, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, HStack, Link, Container, Badge } from "@chakra-ui/react";
import { faAmazon, faGooglePlay, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode, faChartLine, faServer, faLaptopCode, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null);

  const techProjects = [
    { id: "t1", title: isAr ? "تحليل جودة البيانات" : "Data Quality Analytics", link: "https://github.com/shaleekhalil-dev/TechLine-Quality-Analytics", icon: faChartLine, tags: ["Python", "Analytics"] },
    { id: "t2", title: isAr ? "نظام Little Lemon API" : "Little Lemon API", link: "https://github.com/shaleekhalil-dev/Little-Lemon-API", icon: faServer, tags: ["Django", "DRF"] },
    { id: "t3", title: isAr ? "محرك الحجوزات" : "Reservation Engine", link: "https://github.com/shaleekhalil-dev/LittleLemonProject", icon: faLaptopCode, tags: ["React", "UI"] },
    { id: "t4", title: isAr ? "ملف التعريف" : "Digital Portfolio", link: "https://github.com/shaleekhalil-dev/shalee-khalil-portfolio", icon: faCode, tags: ["React", "Chakra"] }
  ];

  const booksData = [
    { 
      id: 1, 
      title: isAr ? "طائر الفينيق" : "The Phoenix", 
      image: "https://drive.google.com/thumbnail?id=1WcDemkg50UHetNAY7pHsdc6vjX92on_9", 
      previews: [
        { lang: "Arabic", url: "https://drive.google.com/file/d/1EUNItc73f-SkvPGQMnrLUkpTBsa8ZQu-/preview", label: isAr ? "قراءة الكتاب كاملاً (بالعربية)" : "Read Full Book (Arabic)" },
        { lang: "English", url: "https://drive.google.com/file/d/1IgnL_NNntUgw4hTreTBJeKowaqYrWCjK/preview", label: isAr ? "Read Full Book (English)" : "Read Full Book (English)" }
      ],
      editions: [isAr ? "طائر الفينيق (نسخة كاملة مجانية)" : "The Phoenix (Full Free Edition)"] 
    },
    { id: 2, title: isAr ? "هل جربت أن تحلم" : "Have You Ever Tried to Dream", image: "https://drive.google.com/thumbnail?id=1GqYX2ywmlT19yIGRHcTsAxtxWj4cTSah", editions: [isAr ? "هل جربت أن تحلم (العربية)" : "Have You Ever Tried to Dream (Arabic)"] },
    { id: 3, title: isAr ? "الرقصة الأخيرة" : "The Last Dance of the Escape", image: "https://drive.google.com/thumbnail?id=1ea1LnghMt6jlqxYCgVK5WkAWWxhotQMF", editions: [isAr ? "الرقصة الأخيرة (العربية)" : "The Last Dance of the Escape (Arabic)"] },
    { id: 4, title: isAr ? "دورة الظلال" : "The Cycle of Shadows", image: "https://drive.google.com/thumbnail?id=1JebLdo3IEQ_GRDk6N1Vvtz2rjqWHiaAZ", editions: [isAr ? "دورة الظلال (العربية)" : "The Cycle of Shadows (Arabic)"] },
    { id: 5, title: isAr ? "دوائر الذاكرة المحرمة" : "Circles of Forbidden Memory", image: "https://drive.google.com/thumbnail?id=1k83W3foPlgOX-GiHG3tEkO73obDmjdk0", editions: [isAr ? "دوائر الذاكرة المحرمة (العربية)" : "Circles of Forbidden Memory (Arabic)"] },
    { 
      id: 6, 
      title: isAr ? "عبير وشادي" : "Abeer and Shady", 
      image: "https://drive.google.com/thumbnail?id=1vzSx8BOARMDI863F6GTYX1rDmRuYx8jw", 
      previews: [{ lang: "Arabic", url: "https://drive.google.com/file/d/1rOmW5vGPFXMytE97TaekquCT3RHKF3jC/preview", label: isAr ? "قراءة النسخة العامية كاملة" : "Read Full Slang Version" }],
      editions: [isAr ? "عبير وشادي (العربية)" : "Abeer & Shadi (Arabic)"] 
    },
    { id: 7, title: isAr ? "مرآة الروح" : "Mirror of the Soul", image: "https://drive.google.com/thumbnail?id=188RKTdEapP0FveGYn192Bm63eJ9VTEuR", editions: [isAr ? "صدى الوعي (العربية)" : "Echo of Consciousness (Arabic)"] },
    { 
      id: 8, 
      title: isAr ? "تركت (Left) / مذكرات سارة" : "Left / Sara's Memoirs", 
      image: "https://drive.google.com/thumbnail?id=1Ns1wx8TtxIaICVn2nP_LJbHmcPGukF4V", 
      previews: [
        { lang: "Arabic", url: "https://drive.google.com/file/d/1ou7qc-8mUizCQvTc2496046ZTGu1HRy8/preview", label: isAr ? "قراءة عينة من الرواية (35%)" : "Read Sample (35%)" },
        { lang: "English", url: "https://drive.google.com/file/d/1wL7XPKtSXe8fQOI8hTG8RYdl-gM5fr8z/preview", label: isAr ? "Read Sample (English 35%)" : "Read Sample (English 35%)" }
      ],
      editions: [isAr ? "تركت (العربية)" : "Left (Arabic)", isAr ? "تركت (الإنجليزية)" : "Left (English)"] 
    }
  ];

  const handlePreviewClick = (title, lang) => {
    ReactGA.event({ category: "Reading", action: "Open_PDF", label: `${title} - ${lang}` });
  };

  return (
    <Container maxW="container.xl" py={20} id="projects-section">
      <VStack spacing={16}>
        <VStack spacing={8} w="full">
          <Heading color="#0c4a6e" size="xl" textAlign="center">{isAr ? "المشاريع التقنية" : "Tech Projects"}</Heading>
          <SimpleGrid columns={[1, 2, 4]} spacing={6} w="full">
            {techProjects.map((p) => (
              <Box key={p.id} className="glass-card" p={6} textAlign="center" _hover={{ transform: "translateY(-5px)" }} transition="0.3s">
                <Box mb={4} color="#0284c7"><FontAwesomeIcon icon={p.icon} size="3x" /></Box>
                <Heading size="sm" mb={3} color="#0c4a6e">{p.title}</Heading>
                <HStack justify="center" mb={3}>{p.tags.map(tag => <Badge key={tag} colorScheme="blue">{tag}</Badge>)}</HStack>
                <Button as={Link} href={p.link} isExternal size="xs" variant="outline" colorScheme="blue">GitHub</Button>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        <VStack spacing={8} w="full">
          <Heading color="#0c4a6e" size="xl" textAlign="center">{isAr ? "المؤلفات الأدبية" : "Literary Library"}</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={10} w="full">
            {booksData.map((book) => (
              <Box key={book.id} className="glass-card" p={6} cursor="pointer" onClick={() => { setSelectedItem(book); onOpen(); }} textAlign="center">
                <Image src={book.image} borderRadius="xl" mb={4} h="280px" mx="auto" objectFit="cover" />
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
                <VStack spacing={3} w="full">
                  {selectedItem.previews?.map((prev, idx) => (
                    <Button key={idx} as={Link} href={prev.url} isExternal onClick={() => handlePreviewClick(selectedItem.title, prev.lang)} leftIcon={<FontAwesomeIcon icon={faBookOpen} />} colorScheme="teal" w="full">
                      {prev.label}
                    </Button>
                  ))}
                  <HStack spacing={4} w="full">
                    <Button as={Link} href="https://amazon.com/author/shaleekhalil" isExternal leftIcon={<FontAwesomeIcon icon={faAmazon} />} colorScheme="orange" flex="1">Amazon</Button>
                    <Button as={Link} href="https://play.google.com/store/books/author?id=Shalee+Khalil" isExternal leftIcon={<FontAwesomeIcon icon={faGooglePlay} />} colorScheme="blue" flex="1">Google Books</Button>
                  </HStack>
                </VStack>
                <Box w="full" p={4} bg="whiteAlpha.800" borderRadius="xl">
                  {selectedItem.editions.map((ed, i) => <Text key={i} fontWeight="600" color="#0c4a6e">• {ed}</Text>)}
                </Box>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default ProjectsSection;