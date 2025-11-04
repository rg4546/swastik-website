import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Swastik Electric Co.</title>
        <meta
          name="description"
          content="Learn about Swastik Electric Co. — established in 2014, providing trusted electrical and industrial solutions across Jammu & Kashmir. Partnered with top brands like Philips, Havells, Schneider, and L&T."
        />
      </Helmet>

      {/* HERO SECTION */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/cover/about-cover.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          className="relative z-10 max-w-3xl px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand mb-4 drop-shadow-lg">
            About Swastik Electric Co.
          </h1>
          <p className="text-gray-200 text-lg md:text-xl">
            Empowering Progress Through Quality Electrical Solutions Since 2014
          </p>
        </motion.div>
      </section>

      {/* OUR STORY */}
      <section className="bg-gradient-to-b from-base via-[#141c2b] to-base py-20 px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-brand mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Story
        </motion.h2>

        <div className="max-w-5xl mx-auto text-gray-300 leading-relaxed text-base md:text-lg space-y-6">
          <p>
            Founded in <span className="text-brand font-semibold">2014</span>, Swastik Electric Co.
            began its journey as a small trading company in Jammu with a simple goal — to deliver
            reliable, high-quality electrical materials and solutions that empower progress.
          </p>
          <p>
            Over the years, we’ve grown into one of the most trusted suppliers for
            <span className="text-brand font-medium"> residential, commercial, and industrial </span>
            electrical projects across Jammu & Kashmir. From individual homeowners to large
            government contracts, our products ensure safety, efficiency, and performance in every
            connection.
          </p>
          <p>
            With a legacy of <span className="text-brand font-medium">trust and service excellence</span>,
            Swastik Electric Co. continues to illuminate spaces and power industries — building a
            brighter future for all.
          </p>
        </div>
      </section>

      {/* SINCE 2014 SECTION */}
      <section className="py-16 bg-[#0f172a] text-center border-t border-brand/20">
        <motion.h2
          className="text-3xl font-bold text-brand mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Since 2014 — Growing With Every Connection
        </motion.h2>
        <p className="text-gray-400 max-w-3xl mx-auto px-6 mb-10">
          We take pride in being a part of countless successful projects — from homes to hotels,
          industries to institutions — delivering quality, precision, and innovation through every
          product and service we provide.
        </p>
      </section>

      {/* PARTNERSHIPS */}
      <section className="py-20 bg-gradient-to-b from-[#0f172a] via-[#141c2b] to-[#0f172a] text-center">
        <motion.h2
          className="text-3xl font-bold text-brand mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Partnerships
        </motion.h2>
        <p className="text-gray-400 mb-12 max-w-3xl mx-auto">
          We proudly associate with some of the most reputed brands in the electrical industry,
          ensuring only the best products and solutions reach our clients.
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {[
            "philips",
            "havells",
            "schneider",
            "kei",
            "anchor",
            "bajaj",
            "orient",
            "l&t",
          ].map((brand, i) => (
            <motion.img
              key={i}
              src={`/brands/${brand}.png`}
              alt={brand}
              className="w-24 h-16 object-contain opacity-80 hover:opacity-100 transition-transform hover:scale-105"
              whileHover={{ scale: 1.08 }}
            />
          ))}
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-[#0f172a] text-center">
        <motion.h2
          className="text-3xl font-bold text-brand mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Core Values
        </motion.h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: "Quality", desc: "Delivering the finest electrical products that last." },
            { title: "Integrity", desc: "Building trust through transparency and commitment." },
            { title: "Service", desc: "Prioritizing our clients’ satisfaction in every deal." },
            { title: "Innovation", desc: "Adapting new technology to stay ahead in the industry." },
          ].map((v, i) => (
            <motion.div
              key={i}
              className="border border-brand/30 bg-[#141c2b]/60 rounded-xl p-6 hover:bg-[#1a2335] transition-all shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-brand mb-3">{v.title}</h3>
              <p className="text-gray-300 text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
