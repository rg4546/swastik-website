import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Swastik Electric Co.</title>
        <meta
          name="description"
          content="Get in touch with Swastik Electric Co. for industrial cables, electrical materials, and commercial or residential solutions in Jammu."
        />
      </Helmet>

      <section className="pt-28 pb-24 px-6 min-h-screen bg-gradient-to-b from-base via-[#141c2b] to-base text-center relative overflow-hidden">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-brand mb-14 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>

        {/* Contact Info */}
        <motion.div
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left – Form */}
          <div className="bg-card/70 p-8 rounded-2xl shadow-lg border border-brand/20">
            <h2 className="text-2xl text-brand font-semibold mb-6">
              Send Us a Message
            </h2>
            <form
              action="https://formspree.io/f/mayzlgre"
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-md bg-base border border-gray-600 focus:border-brand outline-none transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-md bg-base border border-gray-600 focus:border-brand outline-none transition"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                required
                className="w-full p-3 rounded-md bg-base border border-gray-600 focus:border-brand outline-none transition"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full p-3 rounded-md bg-base border border-gray-600 focus:border-brand outline-none transition"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-brand text-base font-semibold rounded-md glow hover:-translate-y-1 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right – Map & Contact Details */}
          <div className="flex flex-col gap-6">
            <div className="bg-card/70 p-6 rounded-2xl border border-brand/20 shadow-lg">
              <h3 className="text-xl text-brand mb-4 font-semibold">
                Reach Us
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-brand" />
                  Swastik Electric co.
                  Purmandal, morh, Chak Ratnu, Jammu and Kashmir 180010
                </li>
                <li className="flex items-center gap-3">
                  <FaPhoneAlt className="text-brand" /> +91 95968 99238, +91 96221 28402, +91 99060 07263
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-brand" />
                  swastikelectric238@gmail.com
                </li>
              </ul>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-brand/30 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.7965082290285!2d74.88998967630403!3d32.68618937366728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e8536e800edc9%3A0xd63f22ff19a53efb!2sSwastik%20Electric%20Co!5e0!3m2!1sen!2sin!4v1730123456789!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Swastik Electric Co. Location"
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919622128402?text=Hi%20Swastik%20Electric%20Co.,%20I’d%20like%20to%20request%20a%20quote."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-brand text-base p-3 rounded-full shadow-lg hover:scale-110 transition-all z-50"
        >
          <FaWhatsapp className="text-3xl text-base" />
        </a>
      </section>
    </>
  );
}
