import React from "react";
import { 
  Box, Container, VStack, Heading, Text, 
  Stack, Flex, Image, Badge, SimpleGrid, Icon, HStack
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { 
  FaCode, FaBook, FaGraduationCap, FaBrain, 
  FaPenNib, FaDatabase, FaArrowLeft, FaArrowRight 
} from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const LandingSection = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const ArrowIcon = isAr ? FaArrowLeft : FaArrowRight;

  // رابط صورتك الشخصية المعتمد
  const profileImg = "https://drive.google.com/thumbnail?id=12JfrTZaYrQuJoGjLXlahn4tPq0iGdqGp&sz=w1000";

  // بطاقات التنقل المطورة مع عدادات الإنجاز
  const navLinks = [
    { 
      label: isAr ? "المشاريع التقنية" : "Tech Projects", 
      stat: isAr ? "+6 مشاريع ذكية" : "6+ Smart Apps",
      path: "/projects", 
      icon: FaCode, 
      color: "blue.500",
      bgHover: "blue.50"
    },
    { 
      label: isAr ? "المكتبة الأدبية" : "Literary Library", 
      stat: isAr ? "+12 مؤلفاً منشوراً" : "12+ Published Books",
      path: "/library", 
      icon: FaBook, 
      color: "teal.500",
      bgHover: "teal.50"
    },
    { 
      label: isAr ? "المسار الأكاديمي" : "Academic Path", 
      stat: isAr ? "+75 اعتماداً دولياً" : "75+ Accreditations",
      path: "/certs", 
      icon: FaGraduationCap, 
      color: "purple.500",
      bgHover: "purple.50"
    }
  ];

  // أيقونات المدار العائم حول الصورة الشخصية
  const floatingIcons = [
    { icon: FaCode, color: "blue.500", top: "5%", left: "5%", delay: 0, label: isAr ? "تطوير شامل" : "Full-Stack" },
    { icon: FaPenNib, color: "teal.500", top: "8%", right: "5%", delay: 1, label: isAr ? "إبداع أدبي" : "Author" },
    { icon: FaBrain, color: "purple.500", bottom: "10%", left: "2%", delay: 0.5, label: isAr ? "علم النفس" : "Psychology" },
    { icon: FaDatabase, color: "orange.500", bottom: "8%", right: "2%", delay: 1.5, label: isAr ? "علوم البيانات" : "Data Science" },
  ];

  return (
    <Box as="section" id="home" minH="90vh" display="flex" alignItems="center" py={{ base: "60px", md: "40px" }} overflow="hidden">
      <Container maxW="container.xl">
        <Stack direction={{ base: "column-reverse", lg: "row" }} spacing={{ base: 12, lg: 16 }} align="center">
          
          {/* القسم الأيمن/الأيسر: النصوص والبطاقات التفاعلية */}
          <VStack flex="1.2" align="start" spacing={6} w="full">
            <MotionBox 
              initial={{ opacity: 0, x: isAr ? 50 : -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.7 }}
              w="full"
            >
              {/* كبسولة الهوية + أحدث الإضافات */}
              <HStack spacing={3} mb={4} flexWrap="wrap">
                <Badge px={3} py={1.5} borderRadius="full" bg="brand.900" color="white" fontWeight="bold" fontSize="xs">
                  {t("card_bio_title")}
                </Badge>
                <Badge 
                  as={RouterLink} 
                  to="/library"
                  px={3} 
                  py={1.5} 
                  borderRadius="full" 
                  bg="whiteAlpha.800" 
                  color="brand.800" 
                  border="1px solid"
                  borderColor="brand.200"
                  fontWeight="bold" 
                  fontSize="xs"
                  cursor="pointer"
                  _hover={{ bg: "white", borderColor: "brand.500", transform: "scale(1.03)" }}
                  transition="all 0.2s"
                  display="flex"
                  alignItems="center"
                  gap={1.5}
                >
                  <Text as="span">✨ {isAr ? "جديد: خطوات نحو ذاتك 2" : "New: Steps toward yourself 2"}</Text>
                  <Icon as={ArrowIcon} boxSize={2.5} color="brand.500" />
                </Badge>
              </HStack>

              <Heading as="h1" size={{ base: "xl", md: "2xl" }} color="brand.900" lineHeight="shorter" fontWeight="900">
                {t("hero_title")}
              </Heading>
            </MotionBox>

            <VStack align="start" spacing={3} w="full">
              <Text 
                fontSize={{ base: "md", md: "xl" }} 
                color="brand.800" 
                fontWeight="700" 
                borderLeft={!isAr ? "4px solid" : "none"} 
                borderRight={isAr ? "4px solid" : "none"} 
                borderColor="brand.500" 
                px={4}
              >
                {t("hero_description")}
              </Text>
              <Text fontSize="sm" color="brand.700" fontWeight="600" px={4} opacity={0.9}>
                {t("vision_goal")}
              </Text>
            </VStack>

            {/* بطاقات الأقسام المطورة مع الأيقونات والعدادات */}
            <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4} w="full" pt={2}>
              {navLinks.map((item, idx) => (
                <MotionBox 
                  key={idx} 
                  as={RouterLink} 
                  to={item.path}
                  className="glass-card"
                  p={5}
                  display="flex"
                  flexDir="column"
                  justifyContent="space-between"
                  minH="130px"
                  cursor="pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  _hover={{ bg: "whiteAlpha.900", borderColor: item.color, shadow: "xl" }}
                >
                  <HStack justify="space-between" w="full" mb={3}>
                    <Box p={2.5} borderRadius="xl" bg="white" shadow="sm" color={item.color}>
                      <Icon as={item.icon} boxSize={5} />
                    </Box>
                    <Badge colorScheme="blue" variant="subtle" borderRadius="full" px={2} fontSize="10px">
                      {item.stat}
                    </Badge>
                  </HStack>
                  <HStack justify="space-between" w="full" align="center">
                    <Text fontSize="sm" fontWeight="900" color="brand.900">{item.label}</Text>
                    <Icon as={ArrowIcon} boxSize={3.5} color={item.color} />
                  </HStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>

          {/* القسم المقابل: الصورة الشخصية الدائرية مع المدار العائم للأيقونات */}
          <Flex flex="1" justify="center" align="center" position="relative">
            <MotionBox 
              initial={{ opacity: 0, scale: 0.85 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.9 }} 
              position="relative" 
              p={{ base: "25px", md: "35px" }}
            >
              {/* الهالات الزجاجية الخلفية النابضة */}
              <MotionBox 
                position="absolute" 
                top="0" 
                left="0" 
                boxSize="100%" 
                bg="brand.200" 
                opacity="0.25" 
                borderRadius="full" 
                zIndex={0} 
                backdropFilter="blur(8px)" 
                border="2px solid white"
                animate={{ scale: [1, 1.04, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <MotionBox 
                position="absolute" 
                top="10px" 
                left="10px" 
                boxSize="95%" 
                bg="whiteAlpha.400" 
                opacity="0.4" 
                borderRadius="full" 
                zIndex={0} 
                backdropFilter="blur(12px)" 
                border="2px dashed"
                borderColor="brand.500"
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              />
              
              {/* الصورة الشخصية الدائرية */}
              <MotionImage 
                src={profileImg} 
                alt="Shalee Khalil" 
                borderRadius="full" 
                boxSize={{ base: "260px", md: "360px" }} 
                objectFit="cover" 
                border="8px solid white" 
                shadow="2xl" 
                position="relative" 
                zIndex={1} 
                whileHover={{ scale: 1.03 }} 
                transition={{ type: "spring", stiffness: 300 }} 
              />

              {/* الأيقونات العائمة المبتكرة حول الصورة (Floating Orbit) */}
              {floatingIcons.map((badge, index) => (
                <MotionBox
                  key={index}
                  position="absolute"
                  top={badge.top}
                  bottom={badge.bottom}
                  left={badge.left}
                  right={badge.right}
                  zIndex={2}
                  bg="rgba(255, 255, 255, 0.92)"
                  backdropFilter="blur(10px)"
                  px={3}
                  py={2}
                  borderRadius="full"
                  shadow="lg"
                  border="1px solid"
                  borderColor="brand.100"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ 
                    duration: 3.5, 
                    repeat: Infinity, 
                    ease: "easeInOut", 
                    delay: badge.delay 
                  }}
                  whileHover={{ scale: 1.15 }}
                >
                  <HStack spacing={2}>
                    <Icon as={badge.icon} color={badge.color} boxSize={4} />
                    <Text fontSize="xs" fontWeight="800" color="brand.900" display={{ base: "none", sm: "block" }}>
                      {badge.label}
                    </Text>
                  </HStack>
                </MotionBox>
              ))}
            </MotionBox>
          </Flex>

        </Stack>
      </Container>
    </Box>
  );
};

export default LandingSection;