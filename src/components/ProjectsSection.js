import React, { useState } from "react";
import { VStack, Heading, SimpleGrid, Box, Image, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, HStack, Link, Container, Badge } from "@chakra-ui/react";
import { faAmazon, faGooglePlay, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null);

  const techProjects = [
    {
      id: "t1",
      title: isAr ? "تحليل بيانات الموارد البشرية (HR Analytics)" : "HR Analytics: PsyCap & Training Impact",
      description: isAr 
        ? "تحليل إحصائي متقدم باستخدام Python و Multiple Linear Regression لـ 500 سجل لقياس أثر التميز التشغيلي." 
        : "Advanced statistical analysis using Python & MLR on 500 records to measure operational excellence impact.",
      image: "https://images.unsplash.com/photo-1551288049-bbda38a5f9a2?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Data Science", "HRM"],
      link: "https://github.com/shaleekhalil-dev"
    },
    {
      id: "t2",
      title: "Little Lemon API - Meta",
      description: isAr 
        ? "تطوير نظام API متكامل باستخدام Django مع أنظمة صلاحيات متقدمة لإدارة المستخدمين." 
        : "Full-stack API development with Django and advanced RBAC for restaurant management.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
      tags: ["Django", "API", "RBAC"],
      link: "https://github.com/shaleekhalil-dev"
    }
  ];

  const booksData = [
    { 
      id: 1, 
      title: isAr ? "المجموعة الأولى: طائر الفينيق" : "Group 1: The Phoenix", 
      image: "https://drive.google.com/thumbnail?id=1WcDemkg50UHetNAY7pHsdc6vjX92on_9", 
      editions: [isAr ? "طائر الفينيق: عندما نشرق من جديد" : "The Phoenix: Resurging Anew", "The Phoenix (English)"] 
    },
    // ... يمكنك إضافة باقي الكتب هنا بنفس النمط
  ];

  return (
    <Container maxW="container.xl" py={20} id="projects-section">
      <VStack spacing={16}>
        <VStack spacing={8} w="full">
          <Heading color="#0c4a6e" size="xl">{t('tech_projects_title')}</Heading>
          <SimpleGrid columns={[1, 2]} spacing={10} w="full">
            {techProjects.map((p) => (
              <Box key={p.id} className="glass-card" p={6} borderRadius="2xl" border="1px solid #bae6fd">
                <Image src={p.image} borderRadius="xl" mb={4} h="200px" w="full" objectFit="cover" />
                <HStack mb={3}>{p.tags.map(tag => <Badge key={tag} colorScheme="blue">{tag}</Badge>)}</HStack>
                <Heading size="md" mb={3} color="#0c4a6e">{p.title}</Heading>
                <Text color="#0369a1" mb={4}>{p.description}</Text>
                <Button as={Link} href={p.link} isExternal leftIcon={<FontAwesomeIcon icon={faGithub} />} size="sm" variant="outline" colorScheme="blue">GitHub</Button>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        <VStack spacing={8} w="full">
          <Heading color="#0c4a6e" size="xl">{t('library_title')}</Heading>
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
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay backdropFilter="blur(8px)" />
          <ModalContent borderRadius="2xl">
            <ModalHeader>{selectedItem.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <VStack spacing={4}>
                {selectedItem.editions?.map((ed, i) => <Text key={i} fontWeight="bold">• {ed}</Text>)}
                <HStack w="full">
                  <Button as={Link} href="https://amazon.com/author/shaleekhalil" isExternal colorScheme="orange" flex="1">Amazon</Button>
                  <Button as={Link} href="https://play.google.com/store/books/author?id=Shalee+Khalil" isExternal colorScheme="blue" flex="1">Google</Button>
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