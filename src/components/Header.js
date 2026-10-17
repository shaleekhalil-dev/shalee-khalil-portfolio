import React from "react";
import { Box, HStack, Button, Container, Link, Icon, Text } from "@chakra-ui/react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaHome, FaAward, FaCode, FaBookOpen, FaGlobe, FaPaperPlane } from "react-icons/fa";

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const isAr = i18n.language === "ar";

  const toggleLanguage = () => {
    const newLang = isAr ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const navItems = [
    { path: "/", label: t("nav_home"), icon: FaHome },
    { path: "/certs", label: t("nav_certs"), icon: FaAward },
    { path: "/projects", label: t("nav_projects"), icon: FaCode },
    { path: "/library", label: t("nav_library"), icon: FaBookOpen },
  ];

  const handleContactClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("contactme-section")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById("contactme-section")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box 
      position="fixed" 
      top={0} 
      left={0} 
      right={0} 
      zIndex={1000} 
      bg="rgba(255, 255, 255, 0.78)" 
      backdropFilter="blur(14px)"
      borderBottom="1px solid" 
      borderColor="whiteAlpha.800" 
      boxShadow="0 4px 20px rgba(12, 74, 110, 0.06)"
      transition="all 0.3s ease"
    >
      <Container maxW="container.xl">
        <HStack px={{ base: 1, md: 4 }} py={3} justifyContent="space-between">
          {/* روابط التنقل مع الأيقونات ومؤشر الصفحة النشطة */}
          <HStack spacing={{ base: 1, sm: 2, md: 4 }} fontWeight="800" fontSize={{ base: "xs", md: "sm" }}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  as={RouterLink}
                  to={item.path}
                  px={{ base: 2.5, md: 4 }}
                  py={2}
                  borderRadius="xl"
                  bg={isActive ? "brand.100" : "transparent"}
                  color={isActive ? "brand.900" : "brand.700"}
                  position="relative"
                  transition="all 0.25s ease"
                  _hover={{ 
                    bg: isActive ? "brand.100" : "whiteAlpha.700", 
                    color: "brand.900", 
                    textDecoration: "none",
                    transform: "translateY(-1px)"
                  }}
                >
                  <HStack spacing={2}>
                    <Icon as={item.icon} color={isActive ? "brand.600" : "brand.500"} boxSize={{ base: 3.5, md: 4 }} />
                    <Text>{item.label}</Text>
                  </HStack>
                  {isActive && (
                    <Box 
                      position="absolute" 
                      bottom="0px" 
                      left="20%" 
                      right="20%" 
                      h="3px" 
                      bg="brand.500" 
                      borderRadius="full" 
                    />
                  )}
                </Link>
              );
            })}
          </HStack>

          {/* أزرار الإجراءات السريعة (تواصل معي + تغيير اللغة) */}
          <HStack spacing={2}>
            <Button
              size="sm"
              variant="ghost"
              color="brand.900"
              fontWeight="800"
              display={{ base: "none", lg: "flex" }}
              leftIcon={<FaPaperPlane />}
              onClick={handleContactClick}
              borderRadius="xl"
              _hover={{ bg: "brand.100" }}
            >
              {t("nav_contact")}
            </Button>

            <Button 
              size="sm" 
              onClick={toggleLanguage} 
              bg="brand.900" 
              color="white"
              borderRadius="xl"
              leftIcon={<FaGlobe />}
              _hover={{ bg: "brand.700", transform: "translateY(-1px)", shadow: "md" }}
              transition="all 0.2s"
              fontWeight="900"
              px={4}
            >
              {isAr ? "English" : "العربية"}
            </Button>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;