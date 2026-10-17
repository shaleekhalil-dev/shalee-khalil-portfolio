import React, { useEffect } from "react";
import { Box, useToast, HStack, VStack, Text, Badge, Icon } from "@chakra-ui/react";
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaBook, FaAward, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Certifications from "./pages/Certifications";
import TechProjects from "./pages/TechProjects";
import LiteraryLibrary from "./pages/LiteraryLibrary";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function AppContent() {
  const { i18n } = useTranslation();
  const toast = useToast();
  const navigate = useNavigate();
  const isAr = i18n.language === "ar";
  const ArrowIcon = isAr ? FaArrowLeft : FaArrowRight;

  useEffect(() => {
    const updatesFeed = [
      {
        id: "new-book-toast",
        badge: isAr ? "إصدار أدبي جديد 📚" : "New Book Release 📚",
        badgeColor: "orange",
        icon: FaBook,
        title: isAr ? "شهادة غير معتمدة: خطوات نحو ذاتك 2" : "An Uncertified Honor: Steps toward yourself 2",
        description: isAr ? "متوفر الآن عبر متجر أمازون — انقر لاستكشاف المكتبة الأدبية." : "Now available on Amazon — Click to explore the Literary Library.",
        path: "/library",
        delay: 2500
      },
      {
        id: "new-certs-toast",
        badge: isAr ? "تحديث المحراب العلمي 🎓" : "New Accreditations 🎓",
        badgeColor: "purple",
        icon: FaAward,
        title: isAr ? "إضافة سجل Credly والمساقات الأمريكية المعتمدة" : "Credly Transcript & U.S. ACE Courses Added",
        description: isAr ? "تصفح التخصصات الموثقة والمساقات الجامعية الاستدراكية في الصحة والإدارة والتكنولوجيا." : "Explore verified specializations & U.S. ACE-accredited courses.",
        path: "/certs",
        delay: 9000
      }
    ];

    const timers = updatesFeed.map((item) => {
      return setTimeout(() => {
        if (!toast.isActive(item.id)) {
          toast({
            id: item.id,
            duration: 6000,
            isClosable: true,
            position: isAr ? "bottom-right" : "bottom-left",
            render: ({ onClose }) => (
              <Box 
                color="white" 
                p={4} 
                bg="linear-gradient(135deg, #0c4a6e 0%, #075985 100%)" 
                borderRadius="2xl" 
                shadow="2xl" 
                cursor="pointer"
                border="1px solid"
                borderColor="whiteAlpha.300"
                backdropFilter="blur(12px)"
                transition="all 0.3s"
                _hover={{ transform: "translateY(-4px)", borderColor: "brand.200" }}
                onClick={() => { 
                  onClose(); 
                  navigate(item.path); 
                }}
              >
                <VStack align="start" spacing={1.5}>
                  <HStack justify="space-between" w="full">
                    <Badge colorScheme={item.badgeColor} variant="solid" borderRadius="full" px={2} fontSize="10px">
                      {item.badge}
                    </Badge>
                    <Icon as={ArrowIcon} boxSize={3} opacity={0.8} />
                  </HStack>
                  <HStack spacing={2} pt={1}>
                    <Icon as={item.icon} color="brand.200" boxSize={4} />
                    <Text fontWeight="900" fontSize="sm">{item.title}</Text>
                  </HStack>
                  <Text fontSize="xs" opacity={0.9} lineHeight="short">
                    {item.description}
                  </Text>
                </VStack>
              </Box>
            ),
          });
        }
      }, item.delay);
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [isAr, toast, navigate, ArrowIcon]);

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <ScrollToTop />
      <Header />
      <Box as="main" flex="1" pt="70px">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certs" element={<Certifications />} />
          <Route path="/projects" element={<TechProjects />} />
          <Route path="/library" element={<LiteraryLibrary />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;