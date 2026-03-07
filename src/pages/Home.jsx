import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import TestimonialSlider from "../components/TestimonialSlider";
import BrandMarquee from "../components/BrandMarquee";
import HeroParticles from "../components/HeroParticles";
import FloatingQuote from "../components/FloatingQuote";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Swastik Electric Co. | Electrical Materials & Solutions in Jammu</title>
        <meta
          name="description"
          content="Swastik Electric Co. offers industrial cables, commercial & residential electrical materials, and complete electrical solutions in Jammu."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">

        {/* Background Image */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/cover/home-cover.png"
            alt="Swastik Electric Co."
            loading="eager"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0f172a]/70 to-[#0f172a]/90"></div>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          {/* Logo */}
          <img
            src="/logo/logo.png"
            alt="Swastik Electric Co."
            className="w-28 h-28 object-contain rounded-full border border-brand/40 shadow-md mb-6 bg-[#0f172a]/70 p-2"
          />

          {/* Heading */}
          <h1 className="hero-heading text-4xl md:text-6xl font-bold text-white">
            Powering Progress with Precision
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-gray-300 leading-relaxed drop-shadow-sm">
            From residential wiring to industrial-scale electrical solutions,
            Swastik Electric Co. delivers quality, reliability, and innovation
            — lighting up Jammu with trusted electrical brands.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">

            <Link
              to="/products"
              className="px-6 py-3 bg-brand text-base font-semibold rounded-lg glow hover:-translate-y-1 transition"
            >
              Explore Products
            </Link>

            <a
              href="https://wa.me/919622128402?text=Hi%20Swastik%20Electric%20Co.,%20I’d%20like%20to%20request%20a%20quote%20for%20electrical%20materials."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-brand rounded-lg text-brand hover:bg-brand hover:text-base transition"
            >
              <FaWhatsapp className="text-2xl" />
              Request a Quote
            </a>

          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-6 text-center">
        <motion.h2
          className="text-3xl font-semibold text-brand mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Swastik Electric Co.?
        </motion.h2>

        <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed">
          We specialize in industrial cables, lighting solutions, switchgear,
          and complete electrical materials for residential, commercial, and
          infrastructure projects across Jammu & Kashmir. We supply trusted
          brands including Philips, Havells, Schneider, KEI, Anchor by Panasonic,
          Crompton, Bajaj, and Orient.
        </p>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />
      <BrandMarquee/>
      <HeroParticles/>
      <FloatingQuote openQuote={()=>setIsQuoteOpen(true)}/>

    </>
  );
}