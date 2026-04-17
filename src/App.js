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

// تهيئة Google Analytics بالمعرف الجديد
ReactGA.initialize("G-ZZZXV3LW4K");

// مكون لتتبع الصفحات تلقائياً
const AnalyticsTracker = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
  return null;
};

// مكون لضمان صعود الصفحة للأعلى عند التنقل
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
      <Router>
        <ScrollToTop />
        <AnalyticsTracker />
        <Box as="main" minH="100vh">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <LandingSection />
                  <ProjectsSection />
                  <ContactMeSection />
                </>
              }
            />
            <Route path="/books" element={<Books />} />
            <Route path="/vault" element={<Certs />} />
          </Routes>
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;