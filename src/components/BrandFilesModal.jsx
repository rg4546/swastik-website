// src/components/BrandFilesModal.jsx
import React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";

export default function BrandFilesModal({ open, onClose, brand }) {
  if (!open) return null;

  const filesByBrand = {
    Philips: [
      {
        label: "Home Decorative Lighting — JULY 2025",
        href: "/pdfs/philips/home_decorative_lighting_july_2025.pdf",
      },
      {
        label: "Professional SMB Price List 2025-26",
        href: "/pdfs/philips/prof_smb_price_list_2025_26.pdf",
      },
    ],
    // add other brands later if needed
  };

  const files = filesByBrand[brand] || [];

  const modal = (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center p-4"
        style={{ zIndex: 9999 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Overlay (click to close) */}
        <div
          className="absolute inset-0 bg-black/70"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal panel */}
        <motion.section
          className="relative w-full max-w-2xl bg-[#081226] rounded-2xl shadow-2xl border border-brand/30 p-6 text-left"
          initial={{ y: 16, scale: 0.98, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 12, scale: 0.98, opacity: 0 }}
          style={{ zIndex: 10000 }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-300 hover:text-brand"
            aria-label="Close brand files"
          >
            <FaTimes />
          </button>

          <h3 className="text-2xl font-semibold text-brand mb-2">{brand} Catalogues</h3>
          <p className="text-sm text-gray-300 mb-4">
            Download or open the product catalogues for <strong className="text-gray-100">{brand}</strong>.
          </p>

          {files.length === 0 ? (
            <div className="text-gray-400">No catalogues available yet.</div>
          ) : (
            <ul className="space-y-3">
              {files.map((f, i) => (
                <li key={i} className="flex items-center justify-between gap-4 border border-brand/20 p-3 rounded-lg">
                  <div>
                    <div className="text-sm font-medium text-gray-100">{f.label}</div>
                    <div className="text-xs text-gray-400">PDF • {brand}</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={f.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1 bg-brand text-[#0f172a] rounded hover:opacity-95 transition"
                    >
                      Open PDF <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </motion.section>
      </motion.div>
    </AnimatePresence>
  );

  return typeof document !== "undefined" ? createPortal(modal, document.body) : null;
}


