import { Heading, HStack, Image, Text, VStack, Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useTranslation } from "react-i18next";

const Card = ({ title, description, imageSrc, url }) => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <Link href={url} isExternal style={{ textDecoration: 'none' }} w="full">
      <Box 
        className="glass-card"
        color="black" 
        cursor="pointer"
        overflow="hidden"
        dir={isAr ? "rtl" : "ltr"}
        h="full"
      >
        <VStack spacing={0} align="flex-start">
          <Image 
            src={imageSrc} 
            alt={title} 
            w="full" 
            h="200px" 
            objectFit="cover"
          />
          <VStack p={6} align="flex-start" spacing={3} w="full">
            <Heading as="h3" size="md">
              {title}
            </Heading>
            <Text fontSize="sm" noOfLines={3}>
              {description}
            </Text>
            
            <HStack fontWeight="bold" spacing={2} pt={2}>
              <Text fontSize="sm">
                {isAr ? "عرض المشروع" : "See Project"}
              </Text>
              <FontAwesomeIcon 
                icon={isAr ? faArrowLeft : faArrowRight} 
                size="xs" 
              />
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </Link>
  );
};

export default Card;