import React, { useState } from "react";
import { useFormik } from "formik";
import { Box, Button, FormControl, FormLabel, Heading, Input, VStack, Container, Textarea, useToast } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const ContactMeSection = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // الرابط الجديد الذي زودتني به
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw5v40idcrMV0Zdu5rS3L2vJLYbW9ZCr3SM5lskqCLrLtDWZisc8vonALMwmZgj-Yg/exec";

  const formik = useFormik({
    initialValues: { firstName: "", email: "", comment: "" },
    onSubmit: async (values, actions) => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams();
        params.append("firstName", values.firstName);
        params.append("email", values.email);
        params.append("comment", values.comment);

        await fetch(SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          body: params,
        });

        toast({
          title: isAr ? "تم الإرسال بنجاح" : "Message Sent",
          description: isAr 
            ? `شكراً لك يا ${values.firstName}، سأتواصل معك قريباً.` 
            : `Thank you ${values.firstName}, I will contact you soon.`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        actions.resetForm();
      } catch (error) {
        toast({
          title: isAr ? "خطأ في الإرسال" : "Submission Error",
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
        <VStack spacing={8} className="glass-card" p={{ base: 6, md: 12 }} border="2px solid #bae6fd">
          <Heading color="#0c4a6e" size="xl">
            {isAr ? "تواصل معي" : "Contact Me"}
          </Heading>
          <Box w="full">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={5}>
                <FormControl isRequired>
                  <FormLabel fontWeight="800" color="#0c4a6e">{isAr ? "الاسم الأول" : "First Name"}</FormLabel>
                  <Input name="firstName" {...formik.getFieldProps("firstName")} bg="whiteAlpha.500" border="1px solid #7dd3fc" h="50px" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontWeight="800" color="#0c4a6e">{isAr ? "البريد الإلكتروني" : "Email Address"}</FormLabel>
                  <Input name="email" type="email" {...formik.getFieldProps("email")} bg="whiteAlpha.500" border="1px solid #7dd3fc" h="50px" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontWeight="800" color="#0c4a6e">{isAr ? "الرسالة" : "Message"}</FormLabel>
                  <Textarea name="comment" {...formik.getFieldProps("comment")} bg="whiteAlpha.500" border="1px solid #7dd3fc" rows={5} />
                </FormControl>
                <Button 
                  type="submit" 
                  isLoading={isLoading}
                  bg="#0369a1" 
                  color="white" 
                  w="full" 
                  h="60px" 
                  _hover={{ bg: "#0c4a6e", transform: "scale(1.02)" }}
                >
                  {isAr ? "إرسال" : "Submit"}
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