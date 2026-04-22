import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import { ChakraProvider, Box, useToast } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import Books from "./components/Books";
import Certs from "./components/Certs";
import "./components/App.css";
import "./i18n";
import { useTranslation } from "react-i18next";

const isGitHubPages = window.location.hostname.includes("github.io") || 
                      window.location.pathname.includes("shalee-khalil-portfolio");

function AppContent() {
  const { i18n } = useTranslation();
  const toast = useToast();
  const isAr = i18n.language === "ar";

  useEffect(() => {
    ReactGA.initialize("G-4KZ8ZH2PED");
    ReactGA.send("pageview");

    const messages = [
      {
        title: isAr ? "مرحباً بك في عالمي الرقمي" : "Welcome to my digital world",
        description: isAr ? "اكتشف كيف أدمج علم النفس بالتقنية لأنسنة بيئات العمل." : "Discover how I merge psychology with tech to humanize work.",
        sectionId: "landing-section",
        delay: 3000 // يظهر بعد 3 ثوانٍ
      },
      {
        title: isAr ? "المكتبة الأدبية" : "Literary Library",
        description: isAr ? "طائر الفينيق وعبير وشادي متاحان للقراءة الكاملة الآن!" : "The Phoenix & Abeer and Shady are available for full reading!",
        sectionId: "projects-section",
        delay: 8000 // يظهر بعد 8 ثوانٍ (أي بعد 5 ثوانٍ من الأول)
      },
      {
        title: isAr ? "المسار الأكاديمي" : "Academic Path",
        description: isAr ? "تصفح شهاداتي الاحترافية في الذكاء الاصطناعي وتحليل البيانات." : "Explore my professional certs in AI and Data Analytics.",
        sectionId: "certs-section",
        delay: 13000 // يظهر بعد 13 ثانية
      }
    ];

    const timers = messages.map((msg) => {
      return setTimeout(() => {
        toast({
          title: msg.title,
          description: msg.description,
          status: "info",
          duration: 6000,
          isClosable: true,
          position: isAr ? "bottom-right" : "bottom-left",
          render: () => (
            <Box 
              color="white" p={4} bg="#0284c7" borderRadius="xl" shadow="2xl" cursor="pointer" mb={3}
              onClick={() => {
                const element = document.getElementById(msg.sectionId);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Box fontWeight="bold" fontSize="md">{msg.title}</Box>
              <Box fontSize="xs">{msg.description}</Box>
            </Box>
          ),
        });
      }, msg.delay);
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [isAr, toast]);

  return (
    <Box as="main" minH="100vh" className="app-container" position="relative">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Box id="landing-section"><LandingSection /></Box>
            <Box id="certs-section"><Certs /></Box>
            <Box id="projects-section"><ProjectsSection /></Box>
            <Box id="contactme-section"><ContactMeSection /></Box>
          </>
        } />
        <Route path="/books" element={<Books />} />
        <Route path="/certs" element={<Certs />} />
      </Routes>
      <Footer />
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Router basename={isGitHubPages ? "/shalee-khalil-portfolio" : "/"}>
        <AppContent />
      </Router>
    </ChakraProvider>
  );
}

export default App;