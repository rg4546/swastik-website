import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import QuoteFormDynamic from "../components/QuoteFormDynamic";

export default function Products() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const categories = [
    {
      title: "Industrial & Residential Cables",
      desc: "Durable and certified cables for all voltage levels, available in copper and aluminum variants for both residential and industrial applications.",
      img: "/products/cables.png",
      brands: ["KEI", "Havells", "Anchor by Panasonic", "Plaza"],
    },
    {
      title: "Cable Jointing Kits",
      desc: "High-quality heat shrink and cold shrink jointing kits for LT, HT, and XLPE cables ensuring reliable and long-lasting electrical insulation.",
      img: "/products/jointingkits.png",
      brands: ["Elechem", "Denson", "Raychem"],
    },
    {
      title: "Lighting Solutions",
      desc: "Premium LED lights, floodlights, panels, and decorative lighting options suitable for offices, hotels, homes, and industries.",
      img: "/products/lighting.png",
      brands: ["Philips", "Orient", "Bajaj", "Havells", "Crompton"],
    },
    {
      title: "Panels & Protection Devices",
      desc: "Reliable switchgear, MCCBs, MCBs, and distribution panels that ensure safety, control, and efficiency in every power system.",
      img: "/products/panels.png",
      brands: ["Schneider", "L&T Electrical and Automation", "Havells"],
    },
    {
      title: "Motors, Submersible Pumps & Starters",
      desc: "High-performance electric motors, submersible pumps, DOL/Star-Delta motor starters, and changeovers for domestic and industrial applications.",
      img: "/products/motors.png",
      brands: ["Havells", "Crompton", "Kirloskar", "Bentex"],
    },
    {
      title: "Modular Switches & Sockets",
      desc: "Stylish and durable modular switches, sockets, and fittings designed to enhance both aesthetics and safety in every space.",
      img: "/products/switch.png",
      brands: ["Anchor by Panasonic", "Havells", "Schneider", "L&T Electrical and Automation"],
    },
    {
      title: "Industrial Accessories & Fittings",
      desc: "Comprehensive range of conduit pipes, connectors, junction boxes, lugs, and all essential electrical accessories.",
      img: "/products/industrial.png",
      brands: ["Tekson", "Havells", "Schneider", "L&T"],
    },
    {
      title: "Line Materials & Industrial Supplies",
      desc: "All types of line materials for commercial, electrical, and industrial projects supplied across Jammu & Kashmir.",
      img: "/products/line.png",
      brands: ["Schneider", "Anchor by Panasonic", "L&T Electrical and Automation","Havells"],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Product Catalogue | Swastik Electric Co.</title>
        <meta
          name="description"
          content="Explore Swastik Electric Co.’s complete range of electrical products including cables, jointing kits, lighting, switchgear, motors, pumps, and accessories from trusted brands like Havells, Philips, Schneider, KEI, Elechem, and L&T."
        />
      </Helmet>

      <section className="pt-24 pb-16 px-6 bg-gradient-to-b from-base via-[#141c2b] to-base text-center min-h-screen overflow-hidden">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-brand mb-6 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Product Catalogue
        </motion.h1>

        <p className="text-gray-400 max-w-2xl mx-auto mb-14 text-base leading-relaxed">
          Swastik Electric Co. brings you a comprehensive range of premium electrical materials and
          industrial solutions from India’s most trusted brands — powering homes, industries, and infrastructure across Jammu & Kashmir.
        </p>

        {/* Catalogue Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-brand/30 bg-[#0f172a]/60 hover:bg-[#1a2335] glow p-5 flex flex-col items-center text-center transition-all duration-300 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-44 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-lg font-semibold text-brand mb-2">{cat.title}</h3>
              <p className="text-sm text-gray-300 mb-4 px-2">{cat.desc}</p>

              {/* Brands List */}
              <div className="flex flex-wrap justify-center gap-3 mt-auto">
                {cat.brands.map((b, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-gray-200 bg-brand/20 border border-brand/30 rounded-full px-3 py-1 hover:bg-brand/30 transition"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-brand mb-4">
            Looking for the best rates or custom requirements?
          </h2>
          <button
            onClick={() => setIsQuoteOpen(true)}
            className="inline-block bg-brand text-base font-medium text-[#0f172a] px-6 py-3 rounded-full shadow-lg hover:bg-brand/90 transition"
          >
            Request a Quote
          </button>

          <QuoteFormDynamic isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
        </motion.div>
      </section>
    </>
  );
}


