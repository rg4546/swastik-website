import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function ClientsBrands() {
  const brands = [
    { name: "Philips", img: "/brands/philips.png" },
    { name: "Havells", img: "/brands/havells.png" },
    { name: "Schneider", img: "/brands/schneider.png" },
    { name: "KEI", img: "/brands/kei.png" },
    { name: "Anchor by Panasonic", img: "/brands/anchor.png" },
    { name: "Bajaj", img: "/brands/bajaj.png" },
    { name: "Orient", img: "/brands/orient.png" },
    { name: "L&T", img: "/brands/l&t.png" },
    { name: "Bentex", img: "/brands/bentex.png" },
    { name: "Crompton", img: "/brands/crompton.png" },
  ];

  const clients = [
    { name: "JPDCL", img: "/clients/JPDCL.png" },
    { name: "PDD", img: "/clients/PDD.png" },
    { name: "Speed 4 Defence System", img: "/clients/speed4.png" },
    { name: "Shri Mata Vaishno Devi", img: "/clients/ShrineBoard.png" },
    { name: "Shivalaya", img: "/clients/shivalaya.png" },
    { name: "APCO", img: "/clients/apco.png" },
    { name: "Patel Engineering", img: "/clients/patel.png" },
    { name: "Coronet Engineers Pvt. Ltd.", img: "/clients/coronet.png" },
    { name: "Kapahi Contracts Pvt. Ltd.", img: "/clients/kapahi.png" },
    { name: "V.K. Sales & Construction Co.", img: "/clients/vk.png" },
  ];

  return (
    <>
      <Helmet>
        <title>Clients & Brands | Swastik Electric Co.</title>
        <meta
          name="description"
          content="Swastik Electric Co. proudly collaborates with top brands and clients including Philips, Havells, Schneider, KEI, JPDCL, Patel Engineering, and more."
        />
      </Helmet>

      <section className="pt-28 pb-24 px-6 min-h-screen bg-gradient-to-b from-base via-[#141c2b] to-base text-center relative overflow-hidden">
        {/* Animated background glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-brand/10 rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>

        {/* Page Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-brand mb-14 relative z-10 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Trusted Brands & Clients
        </motion.h1>

        {/* Brands Section */}
        <motion.div
          className="relative z-10 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-brand mb-8">
            Brands We Deal In
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-items-center">
            {brands.map((b, idx) => (
              <motion.div
                key={idx}
                className="relative group w-36 h-36 flex flex-col items-center justify-center bg-card/50 rounded-2xl shadow-lg border border-brand/20 hover:border-brand transition-all duration-300 hover:-translate-y-2"
                whileHover={{ scale: 1.08 }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-brand/10 blur-md transition-all duration-300"></div>
                <img
                  src={b.img}
                  alt={b.name}
                  className="w-16 h-16 object-contain mb-2 z-10"
                />
                <p className="text-sm text-gray-300 z-10 font-medium">{b.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Clients Section */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-brand mb-8">
            Our Esteemed Clients
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-items-center">
            {clients.map((c, idx) => (
              <motion.div
                key={idx}
                className="relative group w-36 h-36 flex flex-col items-center justify-center bg-card/50 rounded-2xl shadow-lg border border-brand/20 hover:border-brand transition-all duration-300 hover:-translate-y-2"
                whileHover={{ scale: 1.08 }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-brand/10 blur-md transition-all duration-300"></div>
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-16 h-16 object-contain mb-2 z-10"
                />
                <p className="text-sm text-gray-300 z-10 font-medium text-center">
                  {c.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}

