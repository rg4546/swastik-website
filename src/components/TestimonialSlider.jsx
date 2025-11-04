import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Rajesh Kumar", role: "Contractor - Jammu", text: "Swastik Electric Co. has been my go-to supplier for all electrical materials. Their product quality and timely delivery make every project hassle-free." },
  { name: "Sahil Gupta", role: "Builder - Samba", text: "They stock genuine products from top brands like Havells and Schneider. Highly trustworthy and professional." },
  { name: "Priya Sharma", role: "Hotel Owner - Katra", text: "We sourced our entire lighting setup from Swastik. Excellent pricing and service support." },
  { name: "Aman Verma", role: "Engineer - PWD Jammu", text: "Their commitment to quality materials makes them one of the best in J&K for project supplies." },
  { name: "Deepak Singh", role: "Industrial Client - Bari Brahmana", text: "We’ve been dealing with them for years. Reliable, honest, and efficient in every transaction." },
  { name: "Ravi Choudhary", role: "Retailer - Kathua", text: "Always get original Havells and Anchor products. Their rates are competitive and delivery is prompt." },
  { name: "Kritika Mehta", role: "Architect - Jammu", text: "The team at Swastik Electric understands what professionals need — perfect balance of price, quality, and support." },
  { name: "Anil Sharma", role: "Electrical Consultant", text: "Their wide product catalogue covers everything — from cables to lighting to panels. Superb service." },
  { name: "Mohit Sethi", role: "Industrial Contractor", text: "Quick response, transparent dealing, and dependable supply chain — that’s Swastik for you." },
  { name: "Vikas Gupta", role: "Hotel Contractor - Patnitop", text: "Ordered entire lighting and wiring materials. Everything was delivered on time, no compromises." },
  { name: "Renu Thakur", role: "Interior Designer", text: "I appreciate their product variety and modern designs. My clients love the lighting aesthetics." },
  { name: "Karan Bhat", role: "Distributor - Jammu", text: "We partner with Swastik for consistent bulk supply. Their professional handling is commendable." },
  { name: "Rohit Verma", role: "Industrial Supplier", text: "They always maintain stock for urgent orders. Saved our project multiple times!" },
  { name: "Tanya Khajuria", role: "Corporate Client", text: "From quotation to delivery — everything is smooth, fast, and professional." },
  { name: "Sandeep Dogra", role: "Government Contractor", text: "One of the most reliable electrical trading companies in Jammu. Strongly recommend." },
  { name: "Nikhil Sharma", role: "Homeowner", text: "Bought complete wiring and fittings for my new house — excellent suggestions and genuine rates." },
  { name: "Rajat Mehra", role: "Hotel Manager", text: "They supplied all lighting fixtures for our renovation. Products are durable and elegant." },
  { name: "Simran Koul", role: "Engineer", text: "Their after-sales support and quality assurance make them stand out." },
  { name: "Aditya Singh", role: "Shop Owner", text: "Always satisfied with their service. They understand customer needs perfectly." },
  { name: "Manoj Gupta", role: "Industrial Buyer", text: "Best place in Jammu to source reliable electrical equipment. Fast, fair, and friendly." },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const total = testimonials.length;

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const next = () => setIndex((prev) => (prev + 1) % total);
    timeoutRef.current = setInterval(next, 4000);
    return () => clearInterval(timeoutRef.current);
  }, [total]);

  const prevSlide = () => {
    clearInterval(timeoutRef.current);
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const nextSlide = () => {
    clearInterval(timeoutRef.current);
    setIndex((prev) => (prev + 1) % total);
  };

  return (
    <section className="relative py-20 bg-[#0f172a] text-center overflow-hidden">
      <h2 className="text-3xl font-bold text-brand mb-10">What Our Clients Say</h2>

      <div className="relative max-w-3xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="bg-[#141c2b] border border-brand/20 rounded-2xl shadow-lg p-8"
          >
            <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed italic">
              “{testimonials[index].text}”
            </p>
            <h4 className="text-brand font-semibold text-lg">
              {testimonials[index].name}
            </h4>
            <p className="text-gray-400 text-sm">{testimonials[index].role}</p>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#1a2335]/80 hover:bg-brand/20 p-2 rounded-full border border-brand/40 transition"
        >
          <ChevronLeft className="text-brand w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#1a2335]/80 hover:bg-brand/20 p-2 rounded-full border border-brand/40 transition"
        >
          <ChevronRight className="text-brand w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.slice(0, 10).map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              i === index % 10 ? "bg-brand" : "bg-gray-500"
            } transition-all`}
          ></div>
        ))}
      </div>
    </section>
  );
}
