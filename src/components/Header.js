import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link as ChakraLink, Button, Container } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const socials = [
  { icon: faGithub, url: "https://github.com/shaleekhalil-dev" },
  { icon: faLinkedin, url: "https://www.linkedin.com/in/shalee-khalil/" },
  { icon: faFacebook, url: "https://www.facebook.com/shaaleekh/" },
  { icon: faInstagram, url: "https://www.instagram.com/shaaleekh/" },
  { icon: faWhatsapp, url: "https://wa.me/970599661819" },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const headerRef = useRef(null);

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      className="glass-card"
      borderRadius="0"
      borderTop="none"
      borderLeft="none"
      borderRight="none"
      ref={headerRef}
      zIndex="1000"
      transition="all 0.3s ease-in-out"
    >
      <Container maxW="1280px">
        <HStack
          px={[2, 4, 8]}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={[3, 4, 6]}>
              {socials.map((social, index) => (
                <ChakraLink key={index} href={social.url} isExternal>
                    <FontAwesomeIcon icon={social.icon} size="lg" color="black" />
                </ChakraLink>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={[4, 6, 8]} fontWeight="bold">
              <ChakraLink as={RouterLink} to="/" className="nav-link">
                {t("nav_home")}
              </ChakraLink>
              <ChakraLink as={RouterLink} to="/books" className="nav-link">
                {t("nav_books")}
              </ChakraLink>
              <ChakraLink as={RouterLink} to="/vault" className="nav-link">
                {t("nav_vault")}
              </ChakraLink>
              <Button 
                onClick={toggleLanguage} 
                variant="solid" 
                bg="black"
                color="white"
                size="sm"
                _hover={{ bg: "gray.800" }}
              >
                {i18n.language === "ar" ? "EN" : "AR"}
              </Button>
            </HStack>
          </nav>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;