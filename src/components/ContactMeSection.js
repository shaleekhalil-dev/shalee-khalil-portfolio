import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box, Button, FormControl, FormErrorMessage, FormLabel,
  Heading, Input, Select, Textarea, VStack, Container, useToast
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const ContactMeSection = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const toast = useToast();

  const formik = useFormik({
    initialValues: { firstName: "", email: "", type: "Software Development", comment: "" },
    validationSchema: Yup.object({
      firstName: Yup.string().required(t("required_field")),
      email: Yup.string().email(t("invalid_email")).required(t("required_field")),
      comment: Yup.string().min(10, t("comment_min_length")).required(t("required_field")),
    }),
    onSubmit: async (values, actions) => {
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxBh5yCpFrjOsOwYzoFn1vBZlzu0fYCV9uFPqlF15xB8fSkGj1ZkNoxdHdhuQyDsOxo/exec"; 
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors", 
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        toast({
          title: `${t("form_success_msg")} ${values.firstName}`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        actions.resetForm();
      } catch (error) {
        toast({
          title: isAr ? "حدث خطأ" : "Error",
          status: "error",
          duration: 5000,
        });
      }
    },
  });

  return (
    <Box as="section" id="contactme-section" py={20}>
      <Container maxW="container.md">
        <VStack spacing={8} className="glass-card" p={10}>
          <Heading>{t("nav_contact")}</Heading>
          <Box w="100%">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={5}>
                <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                  <FormLabel>{t("form_name")}</FormLabel>
                  <Input id="firstName" name="firstName" {...formik.getFieldProps("firstName")} />
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                  <FormLabel>{t("form_email")}</FormLabel>
                  <Input id="email" name="email" type="email" {...formik.getFieldProps("email")} />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel>{t("form_type")}</FormLabel>
                  <Select id="type" name="type" {...formik.getFieldProps("type")}>
                    <option value="Software Development">{t("type_dev")}</option>
                    <option value="Coaching">{t("type_coaching")}</option>
                    <option value="Creative Writing Mentorship">{t("type_literary")}</option>
                    <option value="Educational Consultation">{t("type_edu")}</option>
                  </Select>
                </FormControl>
                <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                  <FormLabel>{t("form_message")}</FormLabel>
                  <Textarea id="comment" name="comment" {...formik.getFieldProps("comment")} />
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                </FormControl>
                <Button type="submit" bg="black" color="white" width="full" isLoading={formik.isSubmitting}>
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