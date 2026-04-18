import React, { useEffect } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import Books from "./components/Books";
import Certs from "./components/Certs";
import "./components/App.css";
import "./i18n";

const isGitHubPages = window.location.hostname.includes("github.io");

function App() {
  return (
    <ChakraProvider>
      <Router basename={isGitHubPages ? "/shalee-khalil-portfolio" : "/"}>
        <Box as="main" minH="100vh" className="app-container" position="relative">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <LandingSection />
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
      </Router>
    </ChakraProvider>
  );
}

export default App;