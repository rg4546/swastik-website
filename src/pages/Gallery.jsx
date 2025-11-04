import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const images = [
    { id: 1, src: "/gallery/showroom.png", caption: "Swastik Electric Co. Showroom - Jammu" },
    { id: 2, src: "/gallery/store.png", caption: "Our Trusted Brands & Display Racks" },
    { id: 3, src: "/gallery/switches.png", caption: "Switches & Modular Fittings" },
    { id: 4, src: "/gallery/light.png", caption: "LED Lights & Ceiling Fixtures" },
    { id: 5, src: "/gallery/cable.png", caption: "Industrial & Residential Cables" },
    { id: 6, src: "/gallery/panel.png", caption: "Distribution Panels & Components" },
    { id: 7, src: "/gallery/essentials.png", caption: "Accessories & Electrical Essentials" },
    { id: 8, src: "/gallery/motor.png", caption: "Motors & Changover Sets" },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <>
      <Helmet>
        <title>Gallery | Swastik Electric Co.</title>
        <meta
          name="description"
          content="Explore Swastik Electric Co.’s premium range of electrical materials, industrial cables, LED lights, switches, and accessories available in Jammu."
        />
      </Helmet>

      <section className="pt-28 pb-20 px-6 min-h-screen bg-gradient-to-b from-base via-[#141c2b] to-base text-center relative overflow-hidden">
        {/* Page Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-brand mb-6 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Product & Showroom Gallery
        </motion.h1>

        <p className="text-gray-400 max-w-2xl mx-auto mb-14 text-base leading-relaxed">
          A glimpse into our product range, trusted brands, and the premium electrical materials
          we supply across Jammu & Kashmir.
        </p>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {images.map((img) => (
            <motion.div
              key={img.id}
              className="relative cursor-pointer group overflow-hidden rounded-xl border border-brand/20 hover:border-brand glow bg-[#0f172a]/40"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelected(img)}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-48 h-48 sm:w-56 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <p className="text-sm text-textlight px-2">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Viewer */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="relative"
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
              >
                <img
                  src={selected.src}
                  alt={selected.caption}
                  className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-brand/40"
                />
                <p className="text-center text-gray-300 mt-4 text-sm">{selected.caption}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}

