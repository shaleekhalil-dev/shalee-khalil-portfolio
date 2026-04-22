import React from "react";
import { Box, Flex, Text, HStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const socials = [
  { icon: faWhatsapp, url: "https://wa.me/970599661819" },
  { icon: faLinkedin, url: "https://www.linkedin.com/in/shalee-khalil" },
  { icon: faGithub, url: "https://github.com/shaleekhalil-dev" },
  { icon: faInstagram, url: "https://www.instagram.com/shaaleekh/" },
  { icon: faFacebook, url: "https://www.facebook.com/shaaleekh/" },
];

const Footer = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <Box as="footer" py={8} mt={10} borderTop="1px solid rgba(3, 105, 161, 0.1)">
      <Flex direction="column" align="center">
        <HStack spacing={6} mb={4}>
          {socials.map((social, index) => (
            <Link key={index} href={social.url} isExternal _hover={{ transform: "scale(1.2)", color: "#0284c7" }}>
              <FontAwesomeIcon icon={social.icon} size="lg" color="#0369a1" />
            </Link>
          ))}
        </HStack>
        
        <Text fontSize="sm" fontWeight="800" color="#0369a1">
          Shalee Khalil • شعلي خليل © {new Date().getFullYear()}
        </Text>
        
        <Text fontSize="xs" fontWeight="600" color="#0c4a6e" mt={2} textAlign="center">
          {isAr 
            ? "قائد استراتيجي هجين | مطور ويب متكامل (Full-Stack)" 
            : "Hybrid Strategic Leader | Full-Stack Developer"}
        </Text>
        
        <Text fontSize="xs" fontWeight="500" color="#0c4a6e" mt={1} opacity={0.8}>
          {isAr 
            ? "أنسنة بيئات العمل الرقمية باستخدام الذكاء الاصطناعي" 
            : "Humanizing Digital Work Environments using AI"}
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;