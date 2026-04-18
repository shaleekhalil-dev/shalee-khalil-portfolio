import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
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

// تحسين اكتشاف البيئة لضمان عمل الروابط في كل المنصات
const isGitHubPages = window.location.hostname.includes("github.io") || 
                     window.location.pathname.includes("shalee-khalil-portfolio");

function App() {
  return (
    <ChakraProvider>
      <Router basename={isGitHubPages ? "/shalee-khalil-portfolio" : "/"}>
        <Box as="main" minH="100vh" className="app-container" position="relative">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                {/* قسم الهبوط الرئيسي */}
                <Box id="landing-section">
                  <LandingSection />
                </Box>

                {/* قسم المسار الأكاديمي والشهادات */}
                <Box id="certs-section">
                  <Certs />
                </Box>

                {/* قسم المشاريع التقنية والمؤلفات الأدبية */}
                <Box id="projects-section">
                  <ProjectsSection />
                </Box>

                {/* قسم تواصل معي */}
                <Box id="contactme-section">
                  <ContactMeSection />
                </Box>
              </>
            } />
            
            {/* المسارات الفرعية في حال الوصول المباشر */}
            <Route path="/books" element={<Books />} />
            <Route path="/certs" element={<Certs />} />
          </Routes>
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;