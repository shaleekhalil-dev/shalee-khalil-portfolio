import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  HStack,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Container,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  // منطق إخفاء وإظهار الهيدر عند التمرير
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShowHeader(false); // إخفاء عند النزول
      } else {
        setShowHeader(true); // إظهار عند الصعود
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleNavClick = (anchor) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      const id = `${anchor}-section`;
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={showHeader ? 0 : -200}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="rgba(255, 255, 255, 0.2)" // زجاجي متناسق مع App.css
      backdropFilter="blur(10px)"
      zIndex={1000}
      className="glass-card"
      borderRadius="0"
      borderTop="none"
      borderLeft="none"
      borderRight="none"
    >
      <Container maxW="container.xl">
        <HStack px={4} py={4} justifyContent="space-between" alignItems="center">
          <HStack spacing={8}>
            {/* روابط التنقل الرئيسية */}
            <HStack spacing={6} display={{ base: "none", md: "flex" }}>
              <Link onClick={() => handleNavClick("landing")} fontWeight="bold" color="black">
                {i18n.language === "ar" ? "الرئيسية" : "Home"}
              </Link>
              <Link onClick={() => handleNavClick("projects")} fontWeight="bold" color="black">
                {i18n.language === "ar" ? "المشاريع" : "Projects"}
              </Link>
              <Link onClick={() => navigate("/books")} fontWeight="bold" color="black">
                {i18n.language === "ar" ? "المؤلفات" : "Books"}
              </Link>
              <Link onClick={() => navigate("/vault")} fontWeight="bold" color="black">
                {i18n.language === "ar" ? "الشهادات" : "Vault"}
              </Link>
              <Link onClick={() => handleNavClick("contactme")} fontWeight="bold" color="black">
                {i18n.language === "ar" ? "تواصل معي" : "Contact"}
              </Link>
            </HStack>
          </HStack>

          {/* زر تبديل اللغة الاحترافي */}
          <Menu>
            <MenuButton 
              as={Button} 
              rightIcon={<FontAwesomeIcon icon={faChevronDown} size="xs" />}
              bg="black"
              color="white"
              size="sm"
              _hover={{ bg: "gray.800" }}
              _active={{ bg: "gray.700" }}
            >
              {i18n.language === "en" ? "🇺🇸 English" : "🇸🇦 العربية"}
            </MenuButton>
            <MenuList bg="white" borderColor="gray.200">
              <MenuItem onClick={() => changeLanguage("en")} color="black" fontWeight="bold">🇺🇸 English</MenuItem>
              <MenuItem onClick={() => changeLanguage("ar")} color="black" fontWeight="bold">🇸🇦 العربية</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;