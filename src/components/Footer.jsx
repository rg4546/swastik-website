import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0b1220] to-base text-gray-300 pt-16 pb-8 mt-20 relative overflow-hidden border-t border-brand/20">
      {/* glowing teal blur */}
      <motion.div
        className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 bg-brand/10 blur-3xl opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6 relative z-10">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/logo/logo.png"
              alt="Swastik Electric Co."
              className="w-11 h-11 object-contain rounded-full border border-brand/40 shadow-md"
            />
            <h2 className="text-xl font-semibold text-brand">
              Swastik Electric Co.
            </h2>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Providing quality electrical materials, industrial cables, and
            complete electrical solutions for residential and commercial
            projects across Jammu & Kashmir.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-brand mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-brand transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-brand transition">
                Products
              </Link>
            </li>
            {/* <li>
              <Link to="/services" className="hover:text-brand transition">
                Services
              </Link>
            </li> */}
            <li>
              <Link to="/clients-brands" className="hover:text-brand transition">
                Clients & Brands
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-brand transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-brand mb-3">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-brand" />
              Swastik Electric co.
              Purmandal, morh, Chak Ratnu, Jammu and Kashmir 180010
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-brand" /> +91 96221 28402
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-brand" />
              swastikelectric238@gmail.com
            </li>
          </ul>
          <div className="mt-5">
            <a
              href="https://wa.me/919622128402?text=Hi%20Swastik%20Electric%20Co.,%20I’d%20like%20to%20request%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-base px-4 py-2 rounded-md glow hover:-translate-y-1 transition"
            >
              <FaWhatsapp className="text-2xl" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="mt-10 border-t border-brand/20 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Swastik Electric Co. All Rights Reserved.
      </div>
    </footer>
  );
}

