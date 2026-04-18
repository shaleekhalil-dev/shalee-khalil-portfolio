import React, { useEffect } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4"; 
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import Books from "./components/Books";
import Certs from "./components/Certs";
import "./components/App.css";
import "./i18n";

ReactGA.initialize("G-ZZZXV3LW4K");

const AnalyticsTracker = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.hash });
  }, [location]);
  return null;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <ChakraProvider>
      {/* التعديل الحاسم هنا لإزالة الشاشة البيضاء في GitHub Pages عبر إضافة الـ basename */}
      <Router basename="/shalee-khalil-portfolio">
        <ScrollToTop />
        <AnalyticsTracker />
        <Box 
          as="main" 
          minH="100vh" 
          className="app-container" 
          position="relative"
        >
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <LandingSection />
                  <Box id="certs-section">
                    <Certs />
                  </Box>
                  <Box id="projects-section">
                    <ProjectsSection />
                  </Box>
                  <Box id="contactme-section">
                    <ContactMeSection />
                  </Box>
                </>
              }
            />
            <Route path="/books" element={<Books />} />
            <Route path="/certs" element={<Certs />} />
            <Route path="/vault" element={<Certs />} />
          </Routes>
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;