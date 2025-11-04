import React from "react";
import { Link } from "react-router-dom";

export default function Hero(){
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Your trusted partner for electrical materials & solutions</h2>
          <p className="mt-4 text-gray-600">We provide high-quality electrical items, industrial cables, and end-to-end electrical solutions for residential and commercial projects across the region.</p>
          <div className="mt-6 flex gap-3">
            <Link to="/products" className="px-4 py-2 bg-[var(--brand)] text-white rounded">Our Products</Link>
            <Link to="/contact" className="px-4 py-2 border rounded">Contact Us</Link>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow">
          <img src="https://via.placeholder.com/600x300" alt="hero" />
        </div>
      </div>
    </section>
  );
}
