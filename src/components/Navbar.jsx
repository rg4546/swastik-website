import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    // { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Clients & Brands", path: "/clients-brands" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-base/80 border-b border-brand/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-3"
        >
          <div className="flex items-center gap-3">
            <img
              src="/logo/logo.png"
              alt="Swastik Electric Co."
              className="w-11 h-11 object-contain rounded-full border border-brand/40 shadow-md"
            />
            <div className="leading-tight">
              <h1 className="text-lg sm:text-xl font-semibold text-brand tracking-wide">
                Swastik Electric Co.
              </h1>
              <p className="text-[11px] text-gray-400 -mt-1">
                Powering Progress • Since 2014
              </p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative hover:text-brand transition-colors duration-200 ${isActive ? "text-brand" : "text-gray-300"
                }`
              }
            >
              {item.name}
              <motion.span
                layoutId="underline"
                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-brand"
                whileHover={{ width: "100%" }}
              />
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
