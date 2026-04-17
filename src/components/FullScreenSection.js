import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * FullScreenSection component
 * يضمن هذا المكون أن كل قسم في الموقع يشغل مساحة الشاشة بالكامل (100vh)
 * مع الحفاظ على تمركز المحتوى في المنتصف.
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      // قمنا بتثبيت اللون ليتبع القواعد التي وضعتها في App.css لضمان الوضوح
      color={isDarkBackground ? "black" : "black"} 
      w="full"
    >
      <VStack 
        maxWidth="1280px" 
        minHeight="100vh" 
        w="full"
        justifyContent="center" // لضمان توسط المحتوى عمودياً
        {...boxProps}
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;