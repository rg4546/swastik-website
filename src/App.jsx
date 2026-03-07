import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ClientsBrands from "./pages/ClientsBrands";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>

        {/* Scroll fix when navigating */}
        <ScrollToTop />

        <div className="min-h-screen flex flex-col bg-base text-textlight">

          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-grow pt-24">

            <Routes>

              <Route path="/" element={<Home />} />

              <Route path="/about" element={<About />} />

              <Route path="/products" element={<Products />} />

              <Route path="/gallery" element={<Gallery />} />

              <Route path="/clients-brands" element={<ClientsBrands />} />

              <Route path="/contact" element={<Contact />} />

            </Routes>

          </main>

          {/* Footer */}
          <Footer />

        </div>

      </BrowserRouter>
    </HelmetProvider>
  );
}

