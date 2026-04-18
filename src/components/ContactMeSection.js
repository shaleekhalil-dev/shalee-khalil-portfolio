import React, { useState } from "react";
import { useFormik } from "formik";
import { Box, Button, FormControl, FormLabel, Heading, Input, VStack, Container, Textarea, useToast, Select } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const ContactMeSection = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw5v40idcrMV0Zdu5rS3L2vJLYbW9ZCr3SM5lskqCLrLtDWZisc8vonALMwmZgj-Yg/exec";

  const formik = useFormik({
    initialValues: { 
      firstName: "", 
      email: "", 
      category: "General", // القيمة الافتراضية للفلتر
      comment: "" 
    },
    onSubmit: async (values, actions) => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams();
        params.append("firstName", values.firstName);
        params.append("email", values.email);
        params.append("category", values.category); // إرسال المجال المختار
        params.append("comment", values.comment);

        await fetch(SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          body: params,
        });

        toast({
          title: isAr ? "تم الإرسال بنجاح" : "Message Sent",
          description: isAr 
            ? `شكراً لك يا ${values.firstName}، سأتواصل معك قريباً بخصوص ${values.category}.` 
            : `Thank you ${values.firstName}, I will contact you soon regarding ${values.category}.`,
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
                {/* حقل الاسم */}
                <FormControl isRequired>
                  <FormLabel fontWeight="800" color="#0c4a6e">{isAr ? "الاسم الأول" : "First Name"}</FormLabel>
                  <Input name="firstName" {...formik.getFieldProps("firstName")} bg="whiteAlpha.500" border="1px solid #7dd3fc" h="50px" />
                </FormControl>

                {/* حقل البريد */}
                <FormControl isRequired>
                  <FormLabel fontWeight="800" color="#0c4a6e">{isAr ? "البريد الإلكتروني" : "Email Address"}</FormLabel>
                  <Input name="email" type="email" {...formik.getFieldProps("email")} bg="whiteAlpha.500" border="1px solid #7dd3fc" h="50px" />
                </FormControl>

                {/* الفلتر الاستراتيجي - نوع الاستشارة */}
                <FormControl isRequired>
                  <FormLabel fontWeight="800" color="#0c4a6e">{isAr ? "مجال التواصل" : "Area of Interest"}</FormLabel>
                  <Select 
                    name="category" 
                    {...formik.getFieldProps("category")} 
                    bg="whiteAlpha.500" 
                    border="1px solid #7dd3fc" 
                    h="50px" 
                    fontWeight="700"
                  >
                    <option value="Programming">{isAr ? "برمجة" : "Programming"}</option>
                    <option value="Literary">{isAr ? "سؤال أدبي" : "Literary Inquiry"}</option>
                    <option value="Data Analytics">{isAr ? "تحليل بيانات" : "Data Analytics"}</option>
                    <option value="Educational Consultation">{isAr ? "استشارة تعليمية" : "Educational Consultation"}</option>
                    <option value="Training Consultation">{isAr ? "استشارة تدريبية" : "Training Consultation"}</option>
                    <option value="Technical Consultation">{isAr ? "استشارة تقنية" : "Technical Consultation"}</option>
                  </Select>
                </FormControl>

                {/* حقل الرسالة */}
                <FormControl isRequired>
                  <FormLabel fontWeight="800" color="#0c4a6e">{isAr ? "الرسالة" : "Message"}</FormLabel>
                  <Textarea name="comment" {...formik.getFieldProps("comment")} bg="whiteAlpha.500" border="1px solid #7dd3fc" rows={5} />
                </FormControl>

                {/* زر الإرسال */}
                <Button 
                  type="submit" 
                  isLoading={isLoading}
                  bg="#0369a1" 
                  color="white" 
                  w="full" 
                  h="60px" 
                  fontSize="lg"
                  fontWeight="900"
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