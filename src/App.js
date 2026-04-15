import { ChakraProvider } from "@chakra-ui/react";
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

function App() {
  return (
    <ChakraProvider>
      <Router>
        <main>
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
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;