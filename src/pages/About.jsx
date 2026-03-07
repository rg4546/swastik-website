import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function About() {
  const brands = [
    "philips",
    "havells",
    "schneider",
    "kei",
    "anchor",
    "bajaj",
    "orient",
    "l&t",
  ];

  return (
    <>
      <Helmet>
        <title>About | Swastik Electric Co.</title>
        <meta
          name="description"
          content="Swastik Electric Co. is a trusted electrical materials supplier in Jammu dealing with Philips, Havells, Schneider, KEI and other leading brands."
        />
      </Helmet>

      {/* HERO */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/cover/about-cover.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-brand mb-4">
            About Swastik Electric Co.
          </h1>

          <p className="text-gray-200 text-lg md:text-xl">
            Trusted Electrical Materials Supplier in Jammu
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-gradient-to-b from-base via-[#141c2b] to-base py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-brand mb-10">Our Story</h2>

        <div className="max-w-5xl mx-auto text-gray-300 leading-relaxed space-y-6">
          <p>
            Swastik Electric Co. is a trusted electrical trading company
            supplying high-quality electrical materials for residential,
            commercial and industrial projects across Jammu & Kashmir.
          </p>

          <p>
            We deal with premium brands including
            <span className="text-brand font-semibold">
              {" "}
              Schneider, KEI, Havells, Philips, Anchor by Panasonic,
              Crompton, Bajaj, L&T and Orient
            </span>{" "}
            ensuring reliable and safe electrical installations.
          </p>

          <p>
            Our goal is simple — deliver genuine products, provide fair pricing
            and support contractors, electricians and project developers with
            dependable electrical supplies.
          </p>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-20 bg-[#0f172a] text-center">
        <h2 className="text-3xl font-bold text-brand mb-10">
          Brands We Deal In
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {brands.map((brand, i) => (
            <img
              key={i}
              src={`/brands/${brand}.png`}
              alt={brand}
              className="w-24 h-16 object-contain opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-[#141c2b] text-center">
        <h2 className="text-3xl font-bold text-brand mb-10">Our Values</h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: "Quality", desc: "Only genuine branded electrical products." },
            { title: "Trust", desc: "Reliable supplier for contractors & projects." },
            { title: "Service", desc: "Customer-focused approach." },
            { title: "Value", desc: "Competitive pricing with authentic products." },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-brand/30 bg-[#1a2335] rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-brand mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}