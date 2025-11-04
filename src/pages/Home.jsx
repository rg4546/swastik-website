import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp } from "react-icons/fa";
import TestimonialSlider from "../components/TestimonialSlider";

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
        {/* Background Cover Image */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/cover/home-cover.png" // ← Replace this with your image path
            alt="Swastik Electric Co. Cover"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0f172a]/70 to-[#0f172a]/90"></div>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src="/logo/logo.png"
            alt="Swastik Electric Co."
            className="w-28 h-28 object-contain rounded-full border border-brand/40 shadow-md mb-6 bg-[#0f172a]/70 p-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          <motion.h1
            className="text-5xl md:text-6xl font-bold text-brand tracking-wide drop-shadow-lg"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Powering Progress with Precision
          </motion.h1>

          <p className="mt-4 max-w-2xl text-gray-300 leading-relaxed drop-shadow-sm">
            From residential wiring to industrial-scale electrical solutions, Swastik Electric Co. delivers quality, reliability, and innovation — lighting up Jammu since 2000.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="/products"
              className="px-6 py-3 bg-brand text-base font-semibold rounded-lg glow hover:-translate-y-1"
            >
              Explore Products
            </a>

            <a
              href="https://wa.me/919622128402?text=Hi%20Swastik%20Electric%20Co.,%20I’d%20like%20to%20request%20a%20quote%20for%20electrical%20materials%20or%20cables."
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
          We specialize in all types of line materials, industrial cables, lighting, and electrical components — providing solutions for both commercial and residential projects.  
          With trusted brands like Philips, Havells, Schneider, KEI, and Anchor by Panasonic, quality is guaranteed.
        </p>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />
    </>
  );
}

