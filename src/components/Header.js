import React from "react";
import { Box, HStack, Link, Button, Container } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const socials = [
  { icon: faLinkedin, url: "https://www.linkedin.com/in/shalee-khalil" },
  { icon: faGithub, url: "https://github.com/shaleekhalil-dev" },
  { icon: faInstagram, url: "https://www.instagram.com/shaaleekh/?hl=en" },
  { icon: faFacebook, url: "https://www.facebook.com/shaaleekh/" },
];

const Header = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  const isAr = i18n.language === 'ar';

  return (
    <Box position="fixed" top={0} left={0} right={0} zIndex={1000} className="glass-card" borderRadius="0">
      <Container maxW="container.xl">
        <HStack px={{ base: 1, md: 4 }} py={4} justifyContent="space-between">
          
          <HStack spacing={{ base: 3, md: 8 }} fontWeight="800" fontSize={{ base: "11px", md: "sm" }}>
            <Link href="#landing-section" _hover={{ color: "#0284c7" }}>{t("nav_home")}</Link>
            <Link href="#certs-section" display={{ base: "none", md: "block" }} _hover={{ color: "#0284c7" }}>
              {isAr ? 'المسار الأكاديمي' : 'Academic Path'}
            </Link>
            <Link href="#projects-section" _hover={{ color: "#0284c7" }}>
              {isAr ? 'المشاريع' : 'Works'}
            </Link>
            <Link href="#contactme-section" _hover={{ color: "#0284c7" }}>{t("nav_contact")}</Link>
          </HStack>

          <HStack spacing={{ base: 2, md: 6 }}>
            {/* أيقونات التواصل الاجتماعي بجانب زر اللغة */}
            <HStack spacing={{ base: 2, md: 4 }}>
              {socials.map((social, index) => (
                <Link key={index} href={social.url} isExternal _hover={{ transform: "scale(1.2)" }}>
                  <FontAwesomeIcon icon={social.icon} size="lg" color="#0284c7" />
                </Link>
              ))}
            </HStack>

            <Button 
              size="sm" 
              onClick={toggleLanguage} 
              colorScheme="blue" 
              variant="solid" 
              fontWeight="900"
              minW={{ base: "65px", md: "100px" }}
              h={{ base: "30px", md: "40px" }}
              px={{ base: 2, md: 4 }}
              fontSize={{ base: "10px", md: "sm" }}
              boxShadow="md"
              _active={{ transform: "scale(0.95)" }}
            >
              {isAr ? 'English' : 'العربية'}
            </Button>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;