import React from "react";
import { 
  Box, Container, Heading, SimpleGrid, VStack, Text, 
  Image, HStack, Button, Link, Badge, Divider, Icon // تم إضافة Icon هنا
} from "@chakra-ui/react";
import { FaAmazon, FaGooglePlay, FaBookOpen, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const LiteraryLibrary = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const ArrowIcon = isAr ? FaArrowLeft : FaArrowRight;

  const bookGroups = [
    {
      id: 1, image: "1WcDemkg50UHetNAY7pHsdc6vjX92on_9", titleAr: "طائر الفينيق", titleEn: "The Phoenix",
      links: [
        { label: isAr ? "العربية" : "Arabic", url: "https://drive.google.com/file/d/1EUNItc73f-SkvPGQMnrLUkpTBsa8ZQu-/preview" },
        { label: "English", url: "https://drive.google.com/file/d/1IgnL_NNntUgw4hTreTBJeKowaqYrWCjK/preview" }
      ]
    },
    {
      id: 2, image: "1GqYX2ywmlT19yIGRHcTsAxtxWj4cTSah", titleAr: "هل جربت أن تحلم؟", titleEn: "Have You Tried to Dream?",
      links: [{ label: isAr ? "تصفح العمل" : "Browse Work", url: "https://www.amazon.com/stores/Shalee-Khalil/author/B0GH8H877J" }]
    },
    {
      id: 3, image: "1Ns1wx8TtxIaICVn2nP_LJbHmcPGukF4V", titleAr: "تركت: مذكرات سارة", titleEn: "Left: Sarah's Diaries",
      links: [
        { label: isAr ? "عربي" : "Arabic", url: "https://drive.google.com/file/d/1ou7qc-8mUizCQvTc2496046ZTGu1HRy8/preview" },
        { label: "English", url: "https://drive.google.com/file/d/1wL7XPKtSXe8fQOI8hTG8RYdl-gM5fr8z/preview" }
      ]
    },
    { id: 4, image: "1JebLdo3IEQ_GRDk6N1Vvtz2rjqWHiaAZ", titleAr: "الأب القاسي", titleEn: "The Cruel Father", links: [{ label: isAr ? "معاينة" : "Preview", url: "#" }] },
    { id: 5, image: "1k83W3foPlgOX-GiHG3tEkO73obDmjdk0", titleAr: "دوائر الذاكرة المحرمة", titleEn: "Forbidden Memory Circles", links: [{ label: isAr ? "معاينة" : "Preview", url: "#" }] },
    { id: 6, image: "1ea1LnghMt6jlqxYCgVK5WkAWWxhotQMF", titleAr: "الرقصة الأخيرة", titleEn: "The Last Dance", links: [{ label: isAr ? "معاينة" : "Preview", url: "#" }] },
    { id: 7, image: "1vzSx8BOARMDI863F6GTYX1rDmRuYx8jw", titleAr: "عبير وشادي", titleEn: "Abeer & Shady", links: [{ label: isAr ? "النسخة العامية" : "Slang Version", url: "https://drive.google.com/file/d/1qN9VLYkxqSN8DJM878j5-y1PdJRfv9wd/view" }] },
    { id: 8, image: "1TLYuyaj-46s56XH-O0oXsvzQPqZtnDU5", titleAr: "مجموعة رحلة الوعي", titleEn: "Consciousness Journey", links: [{ label: isAr ? "تصفح المجموعة" : "Browse Group", url: "https://drive.google.com/file/d/1TLYuyaj-46s56XH-O0oXsvzQPqZtnDU5/view" }] }
  ];

  return (
    <Box py="100px" minH="100vh">
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color="brand.900" fontWeight="900">
              {isAr ? "المكتبة الأدبية" : "Literary Library"}
            </Heading>
            <Box w="100px" h="5px" bg="brand.500" borderRadius="full" />
            <Text fontSize="lg" color="brand.700" fontWeight="bold">
              {isAr ? "رحلة الكلمة من الورق إلى الوعي الرقمي" : "A journey from paper to digital consciousness"}
            </Text>
          </VStack>

          {/* شبكة الكتب - مجموعات ثنائية بتصميم زجاجي وانبثاق ناعم */}
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6}>
            {bookGroups.map((book) => (
              <MotionBox 
                key={book.id} 
                className="glass-card" 
                p={3} 
                bg="whiteAlpha.200"
                backdropFilter="blur(10px)"
                whileHover={{ 
                  scale: 1.05, 
                  bg: "whiteAlpha.300",
                  boxShadow: "xl" 
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <Box h={{ base: "180px", md: "260px" }} mb={3} overflow="hidden" borderRadius="lg" bg="gray.50">
                  <Image 
                    src={`https://drive.google.com/thumbnail?id=${book.image}&sz=w1000`} 
                    alt={book.titleAr} 
                    h="full" 
                    w="full" 
                    objectFit="contain" 
                  />
                </Box>
                <VStack align="start" spacing={2} w="full">
                  <HStack justify="space-between" w="full">
                    <Heading size="xs" noOfLines={1}>{isAr ? book.titleAr : book.titleEn}</Heading>
                    <Icon as={ArrowIcon} size="10px" color="brand.400" />
                  </HStack>
                  <VStack spacing={1} w="full">
                    {book.links.map((link, i) => (
                      <Button 
                        key={i} 
                        as={Link} 
                        href={link.url} 
                        isExternal 
                        w="full" 
                        size="2xs" 
                        colorScheme="teal" 
                        variant={i === 0 ? "solid" : "outline"} 
                        leftIcon={<FaBookOpen />}
                        fontSize="9px"
                      >
                        {link.label}
                      </Button>
                    ))}
                  </VStack>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>

          <Divider borderColor="brand.200" />

          {/* المتاجر العالمية بتصميم زجاجي */}
          <MotionBox 
            className="glass-card" 
            p={8} 
            textAlign="center"
            bg="whiteAlpha.100"
            backdropFilter="blur(5px)"
          >
            <Heading size="md" mb={8}>{isAr ? "المتاجر والمنصات العالمية" : "Global Platforms"}</Heading>
            <HStack justify="center" spacing={{ base: 4, md: 8 }}>
              <Button 
                as={Link} 
                href="https://www.amazon.com/stores/Shalee-Khalil/author/B0GH8H877J" 
                isExternal 
                bg="#FF9900" 
                color="white" 
                size={{ base: "sm", md: "md" }}
                leftIcon={<FaAmazon />}
                _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
              >
                Amazon
              </Button>
              <Button 
                as={Link} 
                href="https://play.google.com/store/books/author?id=Shalee+Khalil" 
                isExternal 
                variant="outline" 
                colorScheme="blue" 
                size={{ base: "sm", md: "md" }}
                leftIcon={<FaGooglePlay />}
                _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
              >
                Google Play
              </Button>
            </HStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default LiteraryLibrary;