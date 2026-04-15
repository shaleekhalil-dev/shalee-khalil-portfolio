import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box 
      backgroundColor="white" 
      color="black" 
      borderRadius="xl" 
      cursor="pointer"
      transition="transform 0.3s ease"
      _hover={{ transform: "scale(1.05)", shadow: "2xl" }}
    >
      <VStack spacing={4} align="flex-start">
        <Image src={imageSrc} borderRadius="xl" alt={title} />
        <VStack p={4} align="flex-start" spacing={2}>
          <Heading as="h3" size="md">{title}</Heading>
          <Text color="#64748b" fontSize="sm">{description}</Text>
          <HStack fontWeight="bold" spacing={2}>
            <Text fontSize="sm">See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="xs" />
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Card;