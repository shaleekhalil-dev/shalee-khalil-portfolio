import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  Container,
  useToast,
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
          title: isAr ? `شكراً لك يا ${values.firstName}، تم استلام رسالتك!` : `Thank you ${values.firstName}, message received!`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        actions.resetForm();

      } catch (error) {
        toast({
          title: isAr ? "حدث خطأ أثناء الإرسال، يرجى المحاولة لاحقاً" : "Submission Error, please try again later",
          status: "error",
          duration: 5000,
        });
      }
    },
  });

  return (
    <Box as="section" id="contactme-section" py={20} minH="100vh" display="flex" alignItems="center">
      <Container maxW="container.md">
        <VStack spacing={8} className="glass-card" p={{ base: 6, md: 12 }}>
          <Heading as="h1" size="xl" textAlign="center">
            {isAr ? "تواصل معي" : "Contact Me"}
          </Heading>
          
          <Box w="100%">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={5}>
                <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                  <FormLabel fontWeight="bold">{t("form_name")}</FormLabel>
                  <Input 
                    id="firstName" 
                    name="firstName" 
                    {...formik.getFieldProps("firstName")} 
                    border="1px solid rgba(0,0,0,0.2)"
                    _focus={{ borderColor: "black" }}
                  />
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                  <FormLabel fontWeight="bold">{t("form_email")}</FormLabel>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    {...formik.getFieldProps("email")} 
                    border="1px solid rgba(0,0,0,0.2)"
                    _focus={{ borderColor: "black" }}
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight="bold">{t("form_type")}</FormLabel>
                  <Select 
                    id="type" 
                    name="type" 
                    {...formik.getFieldProps("type")} 
                    border="1px solid rgba(0,0,0,0.2)"
                    _focus={{ borderColor: "black" }}
                    bg="rgba(255,255,255,0.4)"
                  >
                    <option value="Software Development">{isAr ? "تطوير برمجيات" : "Software Development"}</option>
                    {/* إضافة خيار استشارات تحليل البيانات الاستراتيجي */}
                    <option value="Data Analytics">{isAr ? "استشارات تحليل البيانات" : "Data Analytics Consulting"}</option>
                    <option value="Coaching">{isAr ? "كوتشينج وتوجيه مهني" : "Coaching & Professional Development"}</option>
                    <option value="Literary Consultation">{isAr ? "استشارة أدبية" : "Literary Consultation"}</option>
                  </Select>
                </FormControl>

                <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                  <FormLabel fontWeight="bold">{t("form_message")}</FormLabel>
                  <Textarea 
                    id="comment" 
                    name="comment" 
                    height={150} 
                    {...formik.getFieldProps("comment")} 
                    border="1px solid rgba(0,0,0,0.2)"
                    _focus={{ borderColor: "black" }}
                  />
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                </FormControl>

                <Button 
                  type="submit" 
                  bg="black" 
                  color="white" 
                  width="full" 
                  size="lg"
                  isLoading={formik.isSubmitting}
                  _hover={{ bg: "gray.800" }}
                >
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