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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
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
      transform={showHeader ? "translateY(0)" : "translateY(-100%)"}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(15px)"
      zIndex={1000}
      borderBottom="1px solid rgba(255, 255, 255, 0.3)"
    >
      <Container maxW="container.xl">
        <HStack px={4} py={4} justifyContent="space-between" alignItems="center">
          <HStack spacing={8}>
            <HStack spacing={6} display={{ base: "none", md: "flex" }}>
              <Link onClick={() => handleNavClick("landing")} fontWeight="800" color="black">
                {i18n.language === "ar" ? "الرئيسية" : "Home"}
              </Link>
              <Link onClick={() => handleNavClick("projects")} fontWeight="800" color="black">
                {i18n.language === "ar" ? "المشاريع" : "Projects"}
              </Link>
              <Link onClick={() => navigate("/books")} fontWeight="800" color="black">
                {i18n.language === "ar" ? "المؤلفات" : "Books"}
              </Link>
              <Link onClick={() => navigate("/vault")} fontWeight="800" color="black">
                {i18n.language === "ar" ? "الشهادات" : "Vault"}
              </Link>
              <Link onClick={() => handleNavClick("contactme")} fontWeight="800" color="black">
                {i18n.language === "ar" ? "تواصل معي" : "Contact"}
              </Link>
            </HStack>
          </HStack>

          <Menu>
            <MenuButton 
              as={Button} 
              rightIcon={<FontAwesomeIcon icon={faChevronDown} size="xs" />}
              className="language-switcher-btn"
              variant="outline"
            >
              {i18n.language === "en" ? "🇺🇸 English" : "🇸🇦 العربية"}
            </MenuButton>
            <MenuList 
              bg="rgba(255, 255, 255, 0.9)" 
              backdropFilter="blur(10px)" 
              borderColor="rgba(255, 255, 255, 0.3)"
            >
              <MenuItem onClick={() => changeLanguage("en")} color="black" fontWeight="800" bg="transparent" _hover={{bg: "rgba(26, 54, 93, 0.1)"}}>
                🇺🇸 English
              </MenuItem>
              <MenuItem onClick={() => changeLanguage("ar")} color="black" fontWeight="800" bg="transparent" _hover={{bg: "rgba(26, 54, 93, 0.1)"}}>
                🇸🇦 العربية
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;