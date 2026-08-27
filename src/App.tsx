import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import Loader from "./components/ui/Loader/Loader";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import StructuredData from "./components/common/StructuredData/StructuredData";

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <AnimatePresence mode="wait">
        <Loader />
      </AnimatePresence>
    );
  }

  return (
    <>
      <StructuredData />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
