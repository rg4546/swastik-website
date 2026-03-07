import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "Clients & Brands", path: "/clients-brands" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-base/80 border-b border-brand/30">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <img
            src="/logo/logo.png"
            alt="Swastik Electric Co."
            className="w-11 h-11 object-contain rounded-full border border-brand/40 shadow-md"
          />

          <div className="leading-tight">
            <p className="text-lg sm:text-xl font-semibold text-brand tracking-wide">
              Swastik Electric Co.
            </p>

            <p className="text-[11px] text-gray-400 -mt-1">
              Electrical Materials & Industrial Solutions
            </p>
          </div>

        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">

          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? "text-brand border-b-2 border-brand pb-1"
                    : "text-gray-300 hover:text-brand"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

        </nav>

      </div>

    </header>
  );
}