import React, { useEffect } from "react";
import { Box, useToast } from "@chakra-ui/react";
// تم التغيير إلى HashRouter لحل مشكلة الـ 404
import { HashRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Certifications from "./pages/Certifications";
import TechProjects from "./pages/TechProjects";
import LiteraryLibrary from "./pages/LiteraryLibrary";

function AppContent() {
  const { i18n } = useTranslation();
  const toast = useToast();
  const navigate = useNavigate();
  const isAr = i18n.language === "ar";

  useEffect(() => {
    const messages = [
      {
        title: isAr ? "مرحباً بك في عالم شعلي خليل" : "Welcome to Shalee's World",
        description: isAr ? "مطور شامل بروح أديب.. استمتع بالرحلة." : "Full Stack Developer with a literary soul.",
        path: "/",
        delay: 3000 
      }
    ];

    const timers = messages.map((msg) => {
      return setTimeout(() => {
        toast({
          duration: 5000,
          isClosable: true,
          position: isAr ? "bottom-right" : "bottom-left",
          render: () => (
            <Box 
              color="white" p={4} bg="brand.900" borderRadius="xl" shadow="2xl" cursor="pointer"
              onClick={() => { toast.closeAll(); navigate(msg.path); }}
            >
              <Box fontWeight="bold" fontSize="md">{msg.title}</Box>
              <Box fontSize="xs" opacity={0.9}>{msg.description}</Box>
            </Box>
          ),
        });
      }, msg.delay);
    });
    return () => timers.forEach(timer => clearTimeout(timer));
  }, [isAr, toast, navigate]);

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
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