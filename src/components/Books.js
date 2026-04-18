import React from "react";
import { Box, Heading, SimpleGrid, Text, VStack, Container, Divider, Link, Icon, HStack, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt } from "react-icons/fa";

const Books = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const bookGroups = [
    {
      id: 1,
      image: "https://drive.google.com/thumbnail?id=1WcDemkg50UHetNAY7pHsdc6vjX92on_9",
      group_name: isAr ? "1. مجموعة: طائر الفينيق" : "1. Group: The Phoenix",
      details: [
        { ar: "طائر الفينيق: عندما نشرق من جديد", en: "The Phoenix: Mastering the Sovereignty of the Healer" }
      ]
    },
    {
      id: 2,
      image: "https://drive.google.com/thumbnail?id=1GqYX2ywmlT19yIGRHcTsAxtxWj4cTSah",
      group_name: isAr ? "2. مجموعة: هل جربت أن تحلم" : "2. Group: Have You Ever Tried to Dream",
      details: [
        { ar: "هل جربت أن تحلم: اصنع من حياتك الحياة التي تحلم بها", en: "Have You Ever Tried To Dream" }
      ]
    },
    {
      id: 3,
      image: "https://drive.google.com/thumbnail?id=1JebLdo3IEQ_GRDk6N1Vvtz2rjqWHiaAZ",
      group_name: isAr ? "3. مجموعة: هندسة الأصداء" : "3. Group: The Architecture of Echoes",
      details: [
        { ar: "شروخ في جدار الصمت: الأدب القاسي", en: "The Architecture of Echoes", fr: "L'Architecture des Échos" }
      ]
    },
    {
      id: 4,
      image: "https://drive.google.com/thumbnail?id=1JebLdo3IEQ_GRDk6N1Vvtz2rjqWHiaAZ",
      group_name: isAr ? "4. مجموعة: دورة الظلال" : "4. Group: The Cycle of Shadows",
      details: [
        { ar: "دورة الظلال (النسخة الكاملة)", en: "The Cycle of Shadows", fr: "Le Cycle des Ombres" }
      ]
    },
    {
      id: 5,
      image: "https://drive.google.com/thumbnail?id=1k83W3foPlgOX-GiHG3tEkO73obDmjdk0",
      group_name: isAr ? "5. مجموعة: دوائر الذاكرة المحرمة" : "5. Group: Circles of Forbidden Memory",
      details: [
        { ar: "دوائر الذاكرة المحرمة: القصة الكاملة", en: "The Cycle of Shadows (Graphic Novel)", fr: "Le Cycle des Ombres", es: "Círculos de Memoria Prohibida" }
      ]
    },
    {
      id: 6,
      image: "https://drive.google.com/thumbnail?id=1ea1LnghMt6jlqxYCgVK5WkAWWxhotQMF",
      group_name: isAr ? "6. مجموعة: الرقصة الأخيرة" : "6. Group: The Last Dance",
      details: [
        { ar: "الرقصة الأخيرة: هروب نحو الحياة", en: "The Last Dance of the Escape", fr: "La Dernière Danse de l'Échappée" }
      ]
    },
    {
      id: 7,
      image: "https://drive.google.com/thumbnail?id=1vzSx8BOARMDI863F6GTYX1rDmRuYx8jw",
      group_name: isAr ? "7. مجموعة: عبير وشادي" : "7. Group: Abeer and Shady",
      details: [
        { ar: "شادي وعبير: ترانيم الحب", en: "Shadi & Abeer", fr: "Abeer et Shady: Hymnes d'amour", es: "Abeer y Shady: Himnos de amor" }
      ]
    },
    {
      id: 8,
      image: "https://drive.google.com/thumbnail?id=188RKTdEapP0FveGYn192Bm63eJ9VTEuR",
      group_name: isAr ? "8. مجموعة: مرآة الروح" : "8. Group: The Mirror of the Soul",
      details: [
        { ar: "صدى الوعي: استيقاظ كون", en: "The Mirror of the Soul: Kon’s Awakening" }
      ]
    },
    {
      id: 9,
      image: "https://drive.google.com/thumbnail?id=1Ns1wx8TtxIaICVn2nP_LJbHmcPGukF4V",
      group_name: isAr ? "9. مجموعة: تركت / مذكرات سارة" : "9. Group: Left",
      details: [
        { ar: "تركت: مذكرات سارة", en: "Left" }
      ]
    }
  ];

  return (
    <Box minH="100vh" py="120px">
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          <Heading as="h1" textAlign="center" fontSize="4xl" mb={10}>
            {isAr ? "المكتبة الأدبية والمؤلفات" : "Literary Library & Works"}
          </Heading>

          <SimpleGrid columns={[1, null, 2]} spacing={10}>
            {bookGroups.map((group) => (
              <Box key={group.id} className="glass-card" p={8} borderLeft={isAr ? "none" : "6px solid #0c4a6e"} borderRight={isAr ? "6px solid #0c4a6e" : "none"} overflow="hidden">
                <Image 
                  src={group.image} 
                  alt={group.group_name} 
                  borderRadius="lg" 
                  mb={6} 
                  fallbackSrc="https://via.placeholder.com/400x200?text=Shalee+Khalil+Library" 
                />
                <Heading as="h3" size="md" mb={4}>
                  {group.group_name}
                </Heading>
                <VStack align="start" spacing={3}>
                  {group.details.map((detail, idx) => (
                    <Box key={idx} w="full">
                      {detail.ar && <Text>🇸🇦 {detail.ar}</Text>}
                      {detail.en && <Text fontSize="sm">🇺🇸 {detail.en}</Text>}
                      {detail.fr && <Text fontSize="sm">🇫🇷 {detail.fr}</Text>}
                      {detail.es && <Text fontSize="sm">🇪🇸 {detail.es}</Text>}
                    </Box>
                  ))}
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          <Divider borderColor="blackAlpha.400" my={10} />

          <Box className="glass-card" p={8} textAlign="center" border="2px dashed #0c4a6e">
            <Heading size="md" mb={6}>{isAr ? "المنصات والهويات الرقمية" : "Digital Identities & Platforms"}</Heading>
            <SimpleGrid columns={[1, null, 3]} spacing={6}>
              <Link href="https://canva.link/uucyyzdna28977l" isExternal>
                <HStack justify="center"><Icon as={FaExternalLinkAlt} /><Text>{isAr ? "مركز الهوية الرقمية الموحد" : "Unified Digital Identity Hub"}</Text></HStack>
              </Link>
              <Link href="https://sites.google.com/view/shaleekh" isExternal>
                <HStack justify="center"><Icon as={FaExternalLinkAlt} /><Text>{isAr ? "ملف التميز التعليمي" : "Educational Excellence Portfolio"}</Text></HStack>
              </Link>
              <Link href="https://sites.google.com/view/shaaleekhalil" isExternal>
                <HStack justify="center"><Icon as={FaExternalLinkAlt} /><Text>{isAr ? "ملف رأس المال البشري والتوجيه" : "Human Capital & Coaching Profile"}</Text></HStack>
              </Link>
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Books;