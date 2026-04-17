import React from "react";
import { useFormik } from "formik";
import { Box, Button, FormControl, FormLabel, Heading, Input, VStack, Container, Textarea, useToast } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const ContactMeSection = () => {
  const { t } = useTranslation();
  const toast = useToast();

  const formik = useFormik({
    initialValues: { firstName: "", email: "", comment: "" },
    onSubmit: (values, actions) => {
      toast({
        title: "تم استلام رسالتك",
        description: `شكراً لك يا ${values.firstName}، سأتواصل معك قريباً.`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      actions.resetForm();
    },
  });

  return (
    <Box as="section" id="contactme-section" py={20}>
      <Container maxW="container.md">
        <VStack spacing={8} className="glass-card" p={{ base: 6, md: 12 }} border="2px solid #bae6fd">
          <Heading color="#0c4a6e" size="xl">{t("nav_contact")}</Heading>
          <Box w="full">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={5}>
                <FormControl isRequired>
                  <FormLabel fontWeight="800" color="#0c4a6e">{t("form_name")}</FormLabel>
                  <Input name="firstName" {...formik.getFieldProps("firstName")} bg="whiteAlpha.500" border="1px solid #7dd3fc" _focus={{borderColor: "#0369a1", bg: "white"}} h="50px" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontWeight="800" color="#0c4a6e">{t("form_email")}</FormLabel>
                  <Input name="email" type="email" {...formik.getFieldProps("email")} bg="whiteAlpha.500" border="1px solid #7dd3fc" _focus={{borderColor: "#0369a1", bg: "white"}} h="50px" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontWeight="800" color="#0c4a6e">الرسالة</FormLabel>
                  <Textarea name="comment" {...formik.getFieldProps("comment")} bg="whiteAlpha.500" border="1px solid #7dd3fc" _focus={{borderColor: "#0369a1", bg: "white"}} rows={5} />
                </FormControl>
                <Button type="submit" bg="#0369a1" color="white" w="full" h="60px" fontSize="lg" _hover={{ bg: "#0c4a6e", transform: "scale(1.02)" }}>
                  {t("form_submit")}
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default ContactMeSection;