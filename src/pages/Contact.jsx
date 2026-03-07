import React from "react";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {

const mapsLink="https://maps.app.goo.gl/UyFoQiQMhNz8w1b17";

return (
<>
<Helmet>
<title>Contact | Swastik Electric Co.</title>
</Helmet>

<section className="pt-28 pb-24 px-6 min-h-screen bg-gradient-to-b from-base via-[#141c2b] to-base">

<h1 className="text-4xl md:text-5xl font-bold text-brand text-center mb-14">
Contact Us
</h1>

<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

{/* FORM */}
<div className="bg-card/70 p-8 rounded-2xl border border-brand/20">

<h2 className="text-2xl text-brand mb-6">Send Message</h2>

<form action="https://formspree.io/f/mayzlgre" method="POST" className="space-y-4">

<input type="text" name="name" placeholder="Name" required className="w-full p-3 bg-base border border-gray-600 rounded-md"/>

<input type="email" name="email" placeholder="Email" required className="w-full p-3 bg-base border border-gray-600 rounded-md"/>

<input type="tel" name="phone" placeholder="Phone" required className="w-full p-3 bg-base border border-gray-600 rounded-md"/>

<textarea name="message" rows="4" placeholder="Message" required className="w-full p-3 bg-base border border-gray-600 rounded-md"/>

<button className="w-full py-3 bg-brand rounded-md font-semibold">
Send Message
</button>

</form>
</div>

{/* DETAILS */}

<div className="space-y-6">

<div className="bg-card/70 p-6 rounded-xl border border-brand/20">

<ul className="space-y-3 text-gray-300">

<li className="flex gap-3"><FaMapMarkerAlt/> Purmandal Morh Chak Ratnu Jammu</li>

<li className="flex gap-3"><FaPhoneAlt/> +91 95968 99238, +91 96221 28402</li>

<li className="flex gap-3"><FaEnvelope/> info@swastikelectric.in</li>

</ul>

</div>

<a
href={mapsLink}
target="_blank"
className="block text-center bg-brand py-3 rounded-md font-semibold"
>
Open Location in Google Maps
</a>

</div>

</div>

<a
href="https://wa.me/919622128402"
className="fixed bottom-6 right-6 bg-brand p-4 rounded-full shadow-lg"
>
<FaWhatsapp className="text-2xl"/>
</a>

</section>
</>
);
}

