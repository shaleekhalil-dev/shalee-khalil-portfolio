import React from "react";
import { Box, HStack, Link, Button, Container } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const socials = [
  { icon: faWhatsapp, url: "https://wa.me/970599661819" },
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
        <HStack px={4} py={4} justifyContent="space-between">
          <HStack spacing={8} fontWeight="800">
            {/* روابط التنقل الداخلي */}
            <Link href="#landing-section">{t("nav_home")}</Link>
            <Link href="#certs-section">{isAr ? 'المسار الأكاديمي' : 'Academic Path'}</Link>
            
            {/* تم تحديث هذا الرابط ليوجه للقسم الذي يجمع المشاريع والمؤلفات */}
            <Link href="#projects-section">
              {isAr ? 'المشاريع والمؤلفات' : 'Projects & Works'}
            </Link>
            
            <Link href="#contactme-section">{t("nav_contact")}</Link>
          </HStack>

          <HStack spacing={6}>
            <HStack spacing={4} display={{ base: "none", md: "flex" }}>
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
              minW="70px"
            >
              {isAr ? 'EN' : 'العربية'}
            </Button>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;