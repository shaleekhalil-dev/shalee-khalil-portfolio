import React from "react";
import { Box, Container, Heading, SimpleGrid, VStack, Text, Image, HStack, Button, Link, Icon, Flex } from "@chakra-ui/react";
import { FaAmazon, FaGooglePlay, FaBookOpen, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const LiteraryLibrary = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const ArrowIcon = isAr ? FaArrowLeft : FaArrowRight;

  const bookGroups = [
    { id: 1, image: "1WcDemkg50UHetNAY7pHsdc6vjX92on_9", titleAr: "طائر الفينيق", titleEn: "The Phoenix", hasStores: true, links: [
        { label: isAr ? "النسخة العربية" : "Arabic Edition", url: "https://drive.google.com/file/d/1EUNItc73f-SkvPGQMnrLUkpTBsa8ZQu-/preview" },
        { label: "English Edition", url: "https://drive.google.com/file/d/1IgnL_NNntUgw4hTreTBJeKowaqYrWCjK/preview" }
    ]},
    { id: 2, image: "1GqYX2ywmlT19yIGRHcTsAxtxWj4cTSah", titleAr: "هل جربت أن تحلم؟", titleEn: "Have You Tried to Dream?", hasStores: true, links: [] },
    { id: 3, image: "1Ns1wx8TtxIaICVn2nP_LJbHmcPGukF4V", titleAr: "تركت: مذكرات سارة", titleEn: "Left: Sarah's Diaries", hasStores: true, links: [
        { label: isAr ? "عربي" : "Arabic", url: "https://drive.google.com/file/d/1ou7qc-8mUizCQvTc2496046ZTGu1HRy8/preview" },
        { label: "English", url: "https://drive.google.com/file/d/1wL7XPKtSXe8fQOI8hTG8RYdl-gM5fr8z/preview" }
    ]},
    { id: 7, image: "1vzSx8BOARMDI863F6GTYX1rDmRuYx8jw", titleAr: "عبير وشادي", titleEn: "Abeer & Shady", hasStores: true, links: [
        { label: isAr ? "النسخة العامية" : "Slang Version", url: "https://drive.google.com/file/d/1qN9VLYkxqSN8DJM878j5-y1PdJRfv9wd/view" }
    ]},
    { id: 4, image: "1JebLdo3IEQ_GRDk6N1Vvtz2rjqWHiaAZ", titleAr: "الأب القاسي", titleEn: "The Cruel Father", hasStores: true, links: [] },
    { id: 5, image: "1k83W3foPlgOX-GiHG3tEkO73obDmjdk0", titleAr: "دوائر الذاكرة المحرمة", titleEn: "Forbidden Memory Circles", hasStores: true, links: [] },
    { id: 6, image: "1ea1LnghMt6jlqxYCgVK5WkAWWxhotQMF", titleAr: "الرقصة الأخيرة", titleEn: "The Last Dance", hasStores: true, links: [] },
    { 
      id: 8, 
      image: "1TLYuyaj-46s56XH-O0oXsvzQPqZtnDU5", 
      titleAr: "مجموعة رحلة الوعي", 
      titleEn: "Consciousness Journey", 
      hasStores: true, 
      links: [] 
    },
    { 
      id: 9, 
      image: "1TA4d4K062lxxAAfTVbqe1pJMm6hnBROq", 
      titleAr: "بين زيف العقد وحقيقة النبض", 
      titleEn: "Between the Falsity of the Contract and the Truth of the Pulse",
      titleFr: "Entre la Fausseté du Contrat et la Vérité de l'Impulsion", 
      titleEs: "Entre la Falsedad del Contrato y la Verdad del Pulso", 
      hasStores: true, 
      links: [] 
    },
    { 
      id: 10, 
      image: "1tkBZIPNWQpHcUJHvNMJCvou1qKK1ZYCR", 
      titleAr: "الغيمة الوردية: مايا ودوريد", 
      titleEn: "The Secret of the Pink Cloud: Duraid and Maya", 
      hasStores: true, 
      links: [] 
    },
    { 
      id: 11, 
      image: "1CRvrGw_BpawNTaftOHJAjp2QgYj0Bvto", 
      titleAr: "أجنحة من ذهب", 
      titleEn: "WINGS OF GOLD", 
      hasStores: true, 
      links: [] 
    }
  ];

  return (
    <Box py="100px" minH="100vh">
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color="brand.900" fontWeight="900">{isAr ? "المكتبة الأدبية" : "Literary Library"}</Heading>
            <Box w="100px" h="5px" bg="brand.500" borderRadius="full" />
          </VStack>
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6}>
            {bookGroups.map((book) => (
              <MotionBox key={book.id} className="glass-card" p={4} bg="whiteAlpha.200" backdropFilter="blur(15px)" whileHover={{ scale: 1.05, bg: "whiteAlpha.300" }} transition={{ duration: 0.3 }} display="flex" flexDirection="column" justifyContent="space-between">
                <Box>
                  <Box h={{ base: "180px", md: "260px" }} mb={4} overflow="hidden" borderRadius="xl" bg="gray.50" shadow="inner">
                    <Image src={`https://drive.google.com/thumbnail?id=${book.image}&sz=w1000`} alt={book.titleAr} h="full" w="full" objectFit="contain" />
                  </Box>
                  <HStack justify="space-between" mb={2}>
                    <Heading size="xs" noOfLines={2}>{isAr ? book.titleAr : book.titleEn}</Heading>
                    <Icon as={ArrowIcon} color="brand.500" />
                  </HStack>
                </Box>
                <VStack spacing={2} w="full">
                  {book.links.map((link, i) => (
                    <Button key={i} as={Link} href={link.url} isExternal w="full" size="2xs" colorScheme="teal" variant="solid" leftIcon={<FaBookOpen />}>{link.label}</Button>
                  ))}
                  {book.hasStores && (
                    <VStack w="full" align="start" spacing={1}>
                      <Text fontSize="9px" fontWeight="900" color="brand.600" mt={2}>{isAr ? "اعثر على هذا العمل في:" : "Find this work on:"}</Text>
                      <Flex w="full" gap={1}>
                        <Button as={Link} href="https://www.amazon.com/stores/Shalee-Khalil/author/B0GH8H877J" isExternal flex="1" size="2xs" colorScheme="orange" variant="outline" leftIcon={<FaAmazon />} fontSize="8px">Amazon</Button>
                        <Button as={Link} href="https://play.google.com/store/books/author?id=Shalee+Khalil" isExternal flex="1" size="2xs" colorScheme="blue" variant="outline" leftIcon={<FaGooglePlay />} fontSize="8px">G-Play</Button>
                      </Flex>
                    </VStack>
                  )}
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default LiteraryLibrary;