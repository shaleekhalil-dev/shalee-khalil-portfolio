import { Heading, HStack, Image, Text, VStack, Box, Button, Icon } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import React from "react";
import { useTranslation } from "react-i18next";

const Card = ({ title, description, imageSrc, amazonUrl, googleUrl }) => {
  const { t } = useTranslation();

  return (
    <Box 
      backgroundColor="white" 
      color="black" 
      borderRadius="xl" 
      cursor="pointer"
      transition="transform 0.3s ease"
      _hover={{ transform: "scale(1.05)", shadow: "2xl" }}
      display="flex"
      flexDirection="column"
      h="full"
      boxShadow="lg"
    >
      <VStack spacing={4} align="flex-start" h="full">
        <Image src={imageSrc} borderRadius="xl" alt={title} w="full" objectFit="cover" />
        
        <VStack p={4} align="flex-start" spacing={4} flex="1" w="full">
          <Box>
            <Heading as="h3" size="md" mb={2}>{title}</Heading>
            <Text color="#64748b" fontSize="sm">{description}</Text>
          </Box>

          {(amazonUrl || googleUrl) && (
            <VStack w="full" spacing={2} pt={2}>
              {amazonUrl && (
                <Button 
                  as="a" href={amazonUrl} target="_blank"
                  bg="black" color="white" w="full" size="sm" borderRadius="lg"
                  _hover={{ bg: "gray.800" }} leftIcon={<Icon as={ExternalLinkIcon} />}
                >
                  {t("btn_amazon")}
                </Button>
              )}
              {googleUrl && (
                <Button 
                  as="a" href={googleUrl} target="_blank"
                  bg="black" color="white" w="full" size="sm" borderRadius="lg"
                  _hover={{ bg: "gray.800" }} leftIcon={<Icon as={ExternalLinkIcon} />}
                >
                  {t("btn_google_books")}
                </Button>
              )}
            </VStack>
          )}

          <HStack fontWeight="bold" spacing={2} mt="auto">
            <Text fontSize="sm">{t("view_group") || "See more"}</Text>
            <FontAwesomeIcon icon={faArrowRight} size="xs" />
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Card;