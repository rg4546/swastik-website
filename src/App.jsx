import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ClientsBrands from "./pages/ClientsBrands";
import ScrollToTop from "./components/ScrollToTop"; // <- NEW

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        {/* place ScrollToTop inside the Router so it receives location changes */}
        <ScrollToTop behavior="smooth" delay={60} />

        <div className="min-h-screen flex flex-col bg-base text-textlight">
          <Navbar />
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/clients-brands" element={<ClientsBrands />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}




