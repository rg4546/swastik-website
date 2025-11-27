import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function QuoteFormDynamic({ isOpen, onClose }) {
  const emptyProduct = { category: "", brand: "", type: "", quantity: "" };
  const [products, setProducts] = useState([emptyProduct]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    if (!isOpen) {
      setProducts([emptyProduct]);
      setFormData({ name: "", phone: "", email: "", message: "" });
      setSending(false);
      setSentSuccess(false);
    }
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  const handleProductChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...products];
    if (name === "category") updated[index] = { ...updated[index], category: value, brand: "", type: "" };
    else updated[index][name] = value;
    setProducts(updated);
  };

  const addProduct = () => setProducts([...products, { ...emptyProduct }]);
  const removeProduct = (index) => setProducts(products.filter((_, i) => i !== index));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const productDetails = products
      .map(
        (p, i) =>
          `${i + 1}. ${p.category} (${p.brand})\n   Type: ${p.type || "—"}\n   Quantity: ${p.quantity || "N/A"}`
      )
      .join("\n\n");

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message || "—",
      productDetails,
      date: new Date().toLocaleString(),
    };

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const adminTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const ackTemplateId = import.meta.env.VITE_EMAILJS_ACK_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // 1️⃣ Send to admin email
      await emailjs.send(serviceId, adminTemplateId, templateParams, publicKey);

      // 2️⃣ Send acknowledgement to user
      await emailjs.send(serviceId, ackTemplateId, templateParams, publicKey);

      // 3️⃣ WhatsApp Alert to Admin
      const whatsappMsg = encodeURIComponent(
        `⚡ *New Quote Request*\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n✉️ *Email:* ${formData.email}\n🕒 *Date:* ${new Date().toLocaleString()}\n\n📦 *Items Requested:*\n${products
          .map(
            (p, i) =>
              `${i + 1}. ${p.category} - ${p.brand}\n   Type: ${p.type || "—"}\n   Qty: ${p.quantity}`
          )
          .join("\n\n")}\n\n✅ Please check your email for full details.`
      );
      window.open(`https://wa.me/+919622128402?text=${whatsappMsg}`, "_blank");

      setSentSuccess(true);
      setTimeout(() => {
        setSentSuccess(false);
        onClose();
      }, 2500);
    } catch (err) {
      console.error("EmailJS send error:", err);
      alert("Failed to send request. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  const handleClose = () => {
    setProducts([emptyProduct]);
    setFormData({ name: "", phone: "", email: "", message: "" });
    setSentSuccess(false);
    setSending(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#0f172a] border border-brand/40 rounded-2xl shadow-2xl w-full max-w-[540px] max-h-[85vh] overflow-y-auto p-6 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <button
              className="absolute top-3 right-3 text-gray-300 hover:text-brand text-xl"
              onClick={handleClose}
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold text-brand mb-4">Request a Quote</h2>

            {sentSuccess ? (
              <div className="p-4 bg-green-900/30 border border-green-500 rounded-lg text-green-200">
                ✅ Request sent successfully. You’ll receive a confirmation email soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {products.map((p, index) => (
                  <div key={index} className="border border-brand/30 p-3 rounded-lg bg-[#1a2335]">
                    <label className="block text-sm text-gray-400 mb-1">
                      Product {index + 1}
                    </label>

                    <select
                      name="category"
                      value={p.category}
                      onChange={(e) => handleProductChange(index, e)}
                      required
                      className="w-full p-2 mb-2 rounded-md bg-[#1a2335] text-gray-200 border border-brand/30"
                    >
                      <option value="">-- Select Category --</option>
                      {Object.keys(productBrands).map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>

                    <select
                      name="brand"
                      value={p.brand}
                      onChange={(e) => handleProductChange(index, e)}
                      required
                      disabled={!p.category}
                      className="w-full p-2 mb-2 rounded-md bg-[#1a2335] text-gray-200 border border-brand/30 disabled:opacity-60"
                    >
                      <option value="">-- Select Brand --</option>
                      {p.category &&
                        productBrands[p.category].map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                    </select>

                    <input
                      name="type"
                      value={p.type}
                      onChange={(e) => handleProductChange(index, e)}
                      placeholder="Product Type / Model"
                      required
                      className="w-full p-2 mb-2 rounded-md bg-[#1a2335] text-gray-200 border border-brand/30"
                    />

                    <input
                      name="quantity"
                      value={p.quantity}
                      onChange={(e) => handleProductChange(index, e)}
                      placeholder="Quantity / Units"
                      required
                      className="w-full p-2 rounded-md bg-[#1a2335] text-gray-200 border border-brand/30"
                    />

                    {products.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeProduct(index)}
                        className="text-xs text-red-400 mt-2 hover:text-red-300"
                      >
                        Remove Item
                      </button>
                    )}
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addProduct}
                  className="text-sm text-brand hover:text-brand/80"
                >
                  + Add Another Product
                </button>

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-3 rounded-md bg-[#1a2335] text-gray-200 border border-brand/30"
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full p-3 rounded-md bg-[#1a2335] text-gray-200 border border-brand/30"
                />

                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full p-3 rounded-md bg-[#1a2335] text-gray-200 border border-brand/30"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Additional details (optional)"
                  rows="3"
                  className="w-full p-3 rounded-md bg-[#1a2335] text-gray-200 border border-brand/30"
                />

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-brand text-[#0f172a] font-medium py-3 rounded-lg shadow-lg hover:bg-brand/90 transition disabled:opacity-60"
                >
                  {sending ? "Sending..." : "Submit Request"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

