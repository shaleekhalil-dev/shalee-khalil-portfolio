import React from "react";
import { Box, Heading, SimpleGrid, Text, VStack, Container, Badge, Divider, Link, Icon, HStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt } from "react-icons/fa";

const Books = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const bookGroups = [
    {
      id: 1,
      group_name: isAr ? "1. مجموعة: دوائر الذاكرة المحرمة (4 لغات)" : "1. Group: Circles of Forbidden Memory (4 Languages)",
      details: [
        { ar: "دوائر الذاكرة المحرمة (وتشمل النسخة الكاملة)", en: "Circles of Forbidden Memory", fr: "Cercles de la mémoire interdite", es: "Círculos de Memoria Prohibida" }
      ]
    },
    {
      id: 2,
      group_name: isAr ? "2. مجموعة: هندسة الأصداء (شروخ في جدار الصمت)" : "2. Group: The Architecture of Echoes",
      details: [
        { ar: "شروخ في جدار الصمت: الأب القاسي", en: "The Architecture of Echoes", fr: "L'Architecture des Échos" }
      ]
    },
    {
      id: 3,
      group_name: isAr ? "3. مجموعة: دورة الظلال (Cycle of Shadows)" : "3. Group: Cycle of Shadows",
      details: [
        { ar: "دورة الظلال", en: "The Cycle of Shadows (Full Edition)", fr: "Le Cycle des Ombres" }
      ]
    },
    {
      id: 4,
      group_name: isAr ? "4. مجموعة: الرقصة الأخيرة" : "4. Group: The Last Dance",
      details: [
        { ar: "الرقصة الأخيرة: هروب نحو الحياة", en: "The Last Dance of the Escape", fr: "La Dernière Danse de l'Échappée" }
      ]
    },
    {
      id: 5,
      group_name: isAr ? "5. مجموعة: طائر الفينيق" : "5. Group: The Phoenix",
      details: [
        { ar: "طائر الفينيق", en: "The Phoenix: Mastering the Sovereignty of the Healer" }
      ]
    },
    {
      id: 6,
      group_name: isAr ? "6. مجموعة: هل جربت أن تحلم" : "6. Group: Have You Ever Tried to Dream",
      details: [
        { ar: "هل جربت أن تحلم: اصنع من حياتك الحياة التي تحلم بها", en: "Have You Ever Tried To Dreamed" }
      ]
    },
    {
      id: 7,
      group_name: isAr ? "7. مجموعة: عبير وشادي" : "7. Group: Shadi & Abeer",
      details: [
        { ar: "شادي وعبير: ترانيم الحب", en: "Shadi & Abeer", fr: "Abeer et Shady: Hymnes d'amour", es: "Abeer y Shady: Himnos de amor" }
      ]
    },
    {
      id: 8,
      group_name: isAr ? "8. مجموعة: مذكرات سارة" : "8. Group: Sara's Memoirs",
      details: [
        { ar: "تركت: مذكرات سارة (وتشمل: فنجان قهوة، وأسرار القهوة)", en: "Left" }
      ]
    },
    {
      id: 9,
      group_name: isAr ? "9. مجموعة: مرآة الروح / رحلة كون" : "9. Group: The Mirror of the Soul",
      details: [
        { ar: "بوابة النور: استيقاظ كون (رحلة كون / صدى الوعي)", en: "The Mirror of the Soul: Kon's Awakening" }
      ]
    },
    {
      id: 10,
      group_name: isAr ? "10. أعمال أخرى" : "10. Other Works",
      details: [
        { ar: "البوابة / خيار القلب: سلوى", en: "The Gate / Heart's Choice: Salwa" }
      ]
    }
  ];

  return (
    <Box minH="100vh" py="120px">
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          <Heading as="h1" textAlign="center" fontSize="4xl" mb={10}>
            {t('library_title')}
          </Heading>

          <SimpleGrid columns={[1, null, 2]} spacing={10}>
            {bookGroups.map((group) => (
              <Box key={group.id} className="glass-card" p={8} borderLeft={isAr ? "none" : "4px solid black"} borderRight={isAr ? "4px solid black" : "none"}>
                <Heading as="h3" size="md" mb={4} color="blue.600">
                  {group.group_name}
                </Heading>
                <VStack align="start" spacing={3}>
                  {group.details.map((detail, idx) => (
                    <Box key={idx} w="full">
                      {detail.ar && <Text fontWeight="bold">🇸🇦 {detail.ar}</Text>}
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

          {/* مربع الروابط السفلية الملون */}
          <Box className="glass-card" p={8} bg="rgba(72, 187, 120, 0.2)" textAlign="center" border="2px dashed green">
            <Heading size="md" mb={6}>{t("card_links_title")}</Heading>
            <SimpleGrid columns={[1, null, 3]} spacing={6}>
              <Link href="https://shaleekhalil.my.canva.site" isExternal fontWeight="bold">
                <HStack justify="center"><Icon as={FaExternalLinkAlt} /><Text>{t("link_canva_name")}</Text></HStack>
              </Link>
              <Link href="https://sites.google.com/view/shaleekh" isExternal fontWeight="bold">
                <HStack justify="center"><Icon as={FaExternalLinkAlt} /><Text>{t("link_teacher_name")}</Text></HStack>
              </Link>
              <Link href="https://sites.google.com/view/shaaleekhalil/home" isExternal fontWeight="bold">
                <HStack justify="center"><Icon as={FaExternalLinkAlt} /><Text>{t("link_coach_name")}</Text></HStack>
              </Link>
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Books;