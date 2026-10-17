import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { 
  Box, Button, FormControl, FormLabel, FormErrorMessage, Heading, Input, 
  VStack, Container, Textarea, useToast, Select, Icon
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ContactMeSection = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw2e3bZuaj55pKQTVg872NpZ_N-QANX77NrMKlPB1XIbT6kdAi9hj3KtEzCv9iSWgkH/exec";

  const formik = useFormik({
    initialValues: { firstName: "", email: "", category: "Programming", comment: "" },
    validationSchema: Yup.object({
      firstName: Yup.string().required(isAr ? "الاسم الكامل مطلوب" : "Full name is required"),
      email: Yup.string().email(isAr ? "صيغة البريد الإلكتروني غير صحيحة" : "Invalid email address").required(isAr ? "البريد الإلكتروني مطلوب" : "Email is required"),
      comment: Yup.string().min(10, isAr ? "يرجى كتابة ١٠ أحرف على الأقل" : "Minimum 10 characters required").required(isAr ? "الرسالة مطلوبة" : "Message is required"),
    }),
    onSubmit: async (values, actions) => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams();
        params.append("firstName", values.firstName);
        params.append("email", values.email);
        params.append("category", values.category);
        params.append("comment", values.comment);

        await fetch(SCRIPT_URL, { method: "POST", mode: "no-cors", body: params });

        toast({
          title: isAr ? "تم إرسال رسالتك بنجاح ✨" : "Message Sent Successfully ✨",
          description: isAr ? "شكراً لتواصلك، سأرد عليك قريباً." : "Thank you for reaching out, I will reply soon.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        actions.resetForm();
      } catch (error) {
        toast({
          title: isAr ? "حدث خطأ أثناء الإرسال" : "Submission Error",
          description: isAr ? "يرجى المحاولة مرة أخرى." : "Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <Box as="section" id="contactme-section" py={20}>
      <Container maxW="container.md">
        <MotionBox
          className="glass-card"
          p={{ base: 6, md: 12 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <VStack spacing={8} align="stretch">
            <VStack spacing={2} align="center">
              <Heading color="brand.900" size="xl" fontWeight="900">{t("nav_contact")}</Heading>
              <Box w="50px" h="3px" bg="brand.500" borderRadius="full" />
            </VStack>

            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={5}>
                <FormControl isInvalid={formik.touched.firstName && Boolean(formik.errors.firstName)}>
                  <FormLabel fontWeight="800" color="brand.900">{t("form_name")}</FormLabel>
                  <Input 
                    name="firstName" 
                    placeholder={isAr ? "أدخل اسمك الكامل..." : "Enter your full name..."}
                    {...formik.getFieldProps("firstName")} 
                    bg="whiteAlpha.700" 
                    borderColor="brand.200" 
                    borderRadius="xl"
                    h="50px" 
                    _focus={{ borderColor: "brand.500", bg: "white", boxShadow: "0 0 0 1px #0ea5e9" }} 
                  />
                  <FormErrorMessage fontWeight="bold" fontSize="xs">{formik.errors.firstName}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.email && Boolean(formik.errors.email)}>
                  <FormLabel fontWeight="800" color="brand.900">{t("form_email")}</FormLabel>
                  <Input 
                    name="email" 
                    type="email" 
                    placeholder="example@domain.com"
                    {...formik.getFieldProps("email")} 
                    bg="whiteAlpha.700" 
                    borderColor="brand.200" 
                    borderRadius="xl"
                    h="50px" 
                    _focus={{ borderColor: "brand.500", bg: "white", boxShadow: "0 0 0 1px #0ea5e9" }}
                  />
                  <FormErrorMessage fontWeight="bold" fontSize="xs">{formik.errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight="800" color="brand.900">{t("form_type")}</FormLabel>
                  <Select 
                    name="category" 
                    {...formik.getFieldProps("category")} 
                    bg="whiteAlpha.700" 
                    borderColor="brand.200" 
                    borderRadius="xl"
                    h="50px"
                    _focus={{ borderColor: "brand.500", bg: "white" }}
                  >
                    <option value="Programming">{isAr ? "برمجة وحلول رقمية" : "Programming & Dev"}</option>
                    <option value="Consultation">{isAr ? "استشارة إدارية / نفسية" : "HR / Psych Consultation"}</option>
                    <option value="Literary">{isAr ? "استفسار أدبي" : "Literary Inquiry"}</option>
                  </Select>
                </FormControl>

                <FormControl isInvalid={formik.touched.comment && Boolean(formik.errors.comment)}>
                  <FormLabel fontWeight="800" color="brand.900">{t("form_message")}</FormLabel>
                  <Textarea 
                    name="comment" 
                    placeholder={isAr ? "اكتب تفاصيل طلبك أو استفسارك هنا..." : "Write your message details here..."}
                    {...formik.getFieldProps("comment")} 
                    bg="whiteAlpha.700" 
                    borderColor="brand.200" 
                    borderRadius="xl"
                    rows={5} 
                    _focus={{ borderColor: "brand.500", bg: "white", boxShadow: "0 0 0 1px #0ea5e9" }}
                  />
                  <FormErrorMessage fontWeight="bold" fontSize="xs">{formik.errors.comment}</FormErrorMessage>
                </FormControl>

                <Button 
                  type="submit" 
                  isLoading={isLoading} 
                  bg="brand.900" 
                  color="white" 
                  w="full" 
                  h="60px" 
                  borderRadius="xl"
                  fontSize="lg" 
                  fontWeight="900" 
                  leftIcon={<Icon as={FaPaperPlane} />}
                  _hover={{ bg: "brand.700", transform: "translateY(-2px)", shadow: "xl" }}
                  transition="all 0.2s"
                >
                  {t("form_submit")}
                </Button>
              </VStack>
            </form>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default ContactMeSection;