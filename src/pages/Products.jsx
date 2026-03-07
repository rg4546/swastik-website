import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import QuoteFormDynamic from "../components/QuoteFormDynamic";
import BrandFilesModal from "../components/BrandFilesModal";

export default function Products() {

  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const categories = [
    {
      title: "Industrial & Residential Cables",
      desc: "Durable and certified cables for residential and industrial applications.",
      img: "/products/cables.png",
      brands: ["KEI", "Havells", "Anchor by Panasonic", "Plaza"],
    },
    {
      title: "Cable Jointing Kits",
      desc: "Reliable jointing kits for LT, HT and XLPE cables.",
      img: "/products/jointingkits.png",
      brands: ["Elechem", "Denson", "Raychem"],
    },
    {
      title: "Lighting Solutions",
      desc: "LED lights, floodlights, panels and decorative lighting solutions.",
      img: "/products/lighting.png",
      brands: ["Philips", "Orient", "Bajaj", "Havells", "Crompton"],
    },
    {
      title: "Panels & Protection Devices",
      desc: "MCBs, MCCBs and distribution panels ensuring electrical safety.",
      img: "/products/panels.png",
      brands: ["Schneider", "L&T", "Havells", "Bentex"],
    },
    {
      title: "Motors, Pumps & Starters",
      desc: "Electric motors, submersible pumps and motor starters.",
      img: "/products/motors.png",
      brands: ["Havells", "Crompton", "Kirloskar", "Bentex"],
    },
    {
      title: "Modular Switches & Sockets",
      desc: "Modern modular switches and sockets for homes and offices.",
      img: "/products/switch.png",
      brands: ["Anchor by Panasonic", "Havells", "Schneider", "L&T"],
    },
    {
      title: "Industrial Accessories",
      desc: "Conduit pipes, connectors, junction boxes and accessories.",
      img: "/products/industrial.png",
      brands: ["Tekson", "Havells", "Schneider", "L&T"],
    },
    {
      title: "Line Materials",
      desc: "All types of electrical line materials for projects and infrastructure.",
      img: "/products/line.png",
      brands: ["Schneider", "Anchor by Panasonic", "L&T", "Havells"],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Products | Swastik Electric Co.</title>
        <meta
          name="description"
          content="Explore cables, lighting, switchgear, pumps and electrical materials supplied by Swastik Electric Co. in Jammu."
        />
      </Helmet>

      <section className="pt-28 pb-20 px-6 bg-gradient-to-b from-base via-[#141c2b] to-base min-h-screen text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-brand mb-6">
          Product Catalogue
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mb-14">
          Swastik Electric Co. supplies a complete range of electrical materials
          from trusted brands including Schneider, KEI, Havells, Philips,
          Anchor by Panasonic, Crompton, Bajaj and Orient.
        </p>

        {/* Product Grid */}

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((cat, index) => (

            <div
              key={index}
              className="rounded-xl border border-brand/30 bg-[#0f172a]/60 p-5 shadow-md hover:bg-[#1a2335] transition"
            >

              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-44 object-cover rounded-md mb-4"
              />

              <h2 className="text-lg font-semibold text-brand mb-2">
                {cat.title}
              </h2>

              <p className="text-sm text-gray-300 mb-4">
                {cat.desc}
              </p>

              {/* Brands */}

              <div className="flex flex-wrap gap-2 justify-center">

                {cat.brands.map((brand, i) => {

                  if (brand === "Philips") {
                    return (
                      <button
                        key={i}
                        onClick={() => setModalOpen(true)}
                        className="text-xs px-3 py-1 rounded-full bg-brand/20 border border-brand/30 hover:bg-brand/30 transition"
                      >
                        Philips Catalogues
                      </button>
                    );
                  }

                  return (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-brand/20 border border-brand/30"
                    >
                      {brand}
                    </span>
                  );

                })}

              </div>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="mt-16">

          <h2 className="text-2xl font-semibold text-brand mb-4">
            Need pricing or product availability?
          </h2>

          <button
            onClick={() => setIsQuoteOpen(true)}
            className="bg-brand text-[#0f172a] px-6 py-3 rounded-lg font-medium hover:bg-brand/90 transition"
          >
            Request a Quote
          </button>

        </div>

      </section>

      {/* Quote Form */}

      <QuoteFormDynamic
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

      {/* Philips Catalogue Modal */}

      <BrandFilesModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        brand="Philips"
      />
    </>
  );
}