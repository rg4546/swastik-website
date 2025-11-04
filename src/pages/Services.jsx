import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Residential Electrical Solutions",
      desc: "Supplying high-quality switches, wiring, LED lights, and panels for modern homes. We ensure safe, aesthetic, and reliable installations through premium materials.",
      icon: "🏠",
    },
    {
      title: "Commercial Electrical Solutions",
      desc: "From offices to hotels, we provide complete electrical material support — lighting systems, distribution boards, and modular fittings from trusted brands.",
      icon: "🏢",
    },
    {
      title: "Industrial Power Solutions",
      desc: "We supply industrial-grade cables, panels, MCCBs, control devices, and wiring solutions for factories, infrastructure, and heavy machinery setups.",
      icon: "⚙️",
    },
  ];

  const products = [
    {
      name: "Cables & Wires",
      img: "/products/cables.jpg",
      desc: "Industrial and domestic cables from KEI, Havells, and Polycab ensuring unmatched safety and conductivity.",
    },
    {
      name: "Switches & Sockets",
      img: "/products/switches.jpg",
      desc: "Modular switches and control units from Anchor, Schneider, and Panasonic built for performance and design.",
    },
    {
      name: "Lighting Solutions",
      img: "/products/lighting.jpg",
      desc: "LEDs, floodlights, and decorative lighting from Philips, Havells, and Orient for energy-efficient illumination.",
    },
    {
      name: "Panels & MCCBs",
      img: "/products/panels.jpg",
      desc: "Comprehensive range of distribution panels, MCCBs, and circuit protection devices for industrial and commercial applications.",
    },
    {
      name: "Accessories & Tools",
      img: "/products/accessories.jpg",
      desc: "All supporting electrical accessories like conduit pipes, connectors, and professional-grade tools.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Services | Swastik Electric Co.</title>
        <meta
          name="description"
          content="Swastik Electric Co. provides complete electrical material solutions across residential, commercial, and industrial sectors in Jammu."
        />
      </Helmet>

      <section className="pt-28 pb-20 px-6 bg-gradient-to-b from-base via-[#141c2b] to-base text-center min-h-screen">
        {/* Main Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-brand mb-8 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Electrical Solutions
        </motion.h1>

        <p className="text-gray-400 max-w-2xl mx-auto mb-14 text-base leading-relaxed">
          Swastik Electric Co. offers reliable electrical materials and solutions across Jammu
          — combining top-tier brands, strong distribution, and decades of trust.
        </p>

        {/* Service Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          {services.map((s, index) => (
            <motion.div
              key={index}
              className="p-6 bg-[#0f172a]/60 rounded-2xl border border-brand/30 hover:border-brand glow shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-5xl mb-3">{s.icon}</div>
              <h3 className="text-lg font-semibold text-brand mb-2">{s.title}</h3>
              <p className="text-gray-300 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Product Categories */}
        <motion.h2
          className="text-3xl font-bold text-brand mb-10 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Product Categories We Deal In
        </motion.h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {products.map((p, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl border border-brand/30 bg-[#0f172a]/50 hover:bg-[#1a2335] glow p-4 flex flex-col items-center justify-between transition-all duration-300 shadow-md hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-44 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-lg font-semibold text-brand mb-2">{p.name}</h3>
              <p className="text-sm text-gray-300">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
