import React from "react";
import { Box, Flex, Text, HStack, Link, VStack, Icon } from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const socials = [
  { icon: FaWhatsapp, url: "https://wa.me/970599661819" },
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/shalee-khalil" },
  { icon: FaGithub, url: "https://github.com/shaleekhalil-dev" },
  { icon: FaInstagram, url: "https://www.instagram.com/shalee.ibrahim" }, // التحديث هنا
  { icon: FaFacebook, url: "https://www.facebook.com/shalee.ibrahim" },  // التحديث هنا
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box as="footer" py={12} bg="whiteAlpha.600" borderTop="1px solid" borderColor="whiteAlpha.800" backdropFilter="blur(5px)">
      <Flex direction="column" align="center">
        <HStack spacing={6} mb={6}>
          {socials.map((social, index) => (
            <Link 
              key={index} 
              href={social.url} 
              isExternal 
              _hover={{ transform: "translateY(-5px)", color: "brand.500" }}
              transition="all 0.3s"
            >
              <Icon as={social.icon} w={6} h={6} color="brand.900" />
            </Link>
          ))}
        </HStack>
        
        <VStack spacing={2} textAlign="center" px={4}>
          <Text fontSize="md" fontWeight="900" color="brand.900">
            {t("footer_rights")}
          </Text>
          <Text fontSize="sm" fontWeight="700" color="brand.700">
            {t("hero_title")}
          </Text>
          {/* تم الحفاظ على توقيعك لعام 2026 كاملاً دون مساس */}
          <Text fontSize="sm" fontWeight="600" color="brand.800" opacity={0.9} mt={2}>
            Built with ❤️ by Shalee Khalil - 2026
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Footer;