import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuoteFormDynamic({ isOpen, onClose }) {
  const initialData = {
    category: "",
    brand: "",
    quantity: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialData);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  const productBrands = {
    "Lighting Solutions": ["Philips", "Havells", "Orient", "Bajaj", "Crompton"],
    "Industrial & Residential Cables": ["KEI", "Havells", "Anchor by Panasonic", "Plaza"],
    "Cable Jointing Kits": ["Elechem"],
    "Panels & Protection Devices": ["Schneider", "L&T", "Havells"],
    "Motors, Pumps & Starters": ["Havells", "Crompton", "Bentex", "Kirloskar"],
    "Modular Switches & Sockets": ["Anchor by Panasonic", "Havells", "Schneider", "L&T"],
    "Industrial Accessories": ["Bentex", "Schneider", "Havells"],
    "Line Materials": ["Schneider", "Anchor", "L&T"],
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "category") {
      setFormData({ ...formData, category: e.target.value, brand: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote Request:", formData);
    alert("Thank you! Your request has been submitted.");
    setFormData(initialData);
    onClose();
  };

  const handleClose = () => {
    setFormData(initialData); // Clear form data on close
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#0f172a] border border-brand/40 rounded-2xl shadow-2xl w-[90%] max-w-[450px] max-h-[85vh] overflow-y-auto p-5 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <button
              className="absolute top-3 right-3 text-gray-300 hover:text-brand text-xl"
              onClick={handleClose}
            >
              ✕
            </button>
            <h2 className="text-2xl font-semibold text-brand mb-4">
              Request a Quote
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3 text-left">
              {/* Category */}
              <div>
                <label className="text-sm text-gray-400">Select Product Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-1 rounded-lg bg-[#1a2335] text-gray-200 border border-brand/30 focus:outline-none focus:border-brand"
                >
                  <option value="">-- Select --</option>
                  {Object.keys(productBrands).map((cat, idx) => (
                    <option key={idx} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Brand */}
              <div>
                <label className="text-sm text-gray-400">Select Brand</label>
                <select
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  required
                  disabled={!formData.category}
                  className="w-full p-3 mt-1 rounded-lg bg-[#1a2335] text-gray-200 border border-brand/30 focus:outline-none focus:border-brand disabled:opacity-50"
                >
                  <option value="">-- Select --</option>
                  {formData.category &&
                    productBrands[formData.category].map((b, idx) => (
                      <option key={idx} value={b}>
                        {b}
                      </option>
                    ))}
                </select>
              </div>

              {/* Quantity */}
              <input
                type="text"
                name="quantity"
                placeholder="Quantity / Units"
                required
                className="w-full p-3 rounded-lg bg-[#1a2335] text-gray-200 border border-brand/30 focus:outline-none focus:border-brand"
                onChange={handleChange}
                value={formData.quantity}
              />

              {/* Contact Info */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-[#1a2335] text-gray-200 border border-brand/30 focus:outline-none focus:border-brand"
                onChange={handleChange}
                value={formData.name}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full p-3 rounded-lg bg-[#1a2335] text-gray-200 border border-brand/30 focus:outline-none focus:border-brand"
                onChange={handleChange}
                value={formData.phone}
              />
              <input
                type="email"
                name="email"
                placeholder="Email (optional)"
                className="w-full p-3 rounded-lg bg-[#1a2335] text-gray-200 border border-brand/30 focus:outline-none focus:border-brand"
                onChange={handleChange}
                value={formData.email}
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Additional details (optional)"
                rows="3"
                className="w-full p-3 rounded-lg bg-[#1a2335] text-gray-200 border border-brand/30 focus:outline-none focus:border-brand"
                onChange={handleChange}
                value={formData.message}
              />

              <button
                type="submit"
                className="w-full bg-brand text-[#0f172a] font-medium py-3 rounded-lg shadow-lg hover:bg-brand/90 transition"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

