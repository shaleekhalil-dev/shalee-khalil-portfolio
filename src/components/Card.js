import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"; // أضفنا السهم الأيسر للعربية
import React from "react";
import { useTranslation } from "react-i18next";

const Card = ({ title, description, imageSrc }) => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <Box 
      backgroundColor="white" 
      color="black" 
      borderRadius="xl" 
      cursor="pointer"
      transition="transform 0.3s ease"
      _hover={{ transform: "scale(1.05)", shadow: "2xl" }}
      dir={isAr ? "rtl" : "ltr"} // لضمان اتجاه النص داخل الكارت
    >
      <VStack spacing={4} align="flex-start">
        <Image src={imageSrc} borderRadius="xl" alt={title} />
        <VStack p={4} align="flex-start" spacing={2} w="full">
          <Heading as="h3" size="md">{title}</Heading>
          <Text color="#64748b" fontSize="sm">{description}</Text>
          
          <HStack fontWeight="bold" spacing={2} color="black">
            {/* استخدام الترجمة لكلمة See more */}
            <Text fontSize="sm">
              {isAr ? "عرض المزيد" : "See more"}
            </Text>
            {/* تغيير اتجاه السهم بناءً على اللغة */}
            <FontAwesomeIcon 
              icon={isAr ? faArrowLeft : faArrowRight} 
              size="xs" 
            />
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Card;