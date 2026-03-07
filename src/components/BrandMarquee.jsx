import React from "react";

export default function BrandMarquee() {

const brands=[
"/brands/schneider.png",
"/brands/kei.png",
"/brands/havells.png",
"/brands/philips.png",
"/brands/anchor.png",
"/brands/crompton.png",
"/brands/orient.png",
"/brands/bajaj.png",
"/brands/elechem.png"
];

return(

<section className="bg-[#0b1220] py-10 border-y border-brand/20 overflow-hidden">

<h2 className="text-center text-2xl font-semibold text-brand mb-6">
Trusted Electrical Brands
</h2>

<div className="relative w-full overflow-hidden">

<div className="flex gap-16 animate-marquee whitespace-nowrap">

{brands.concat(brands).map((logo,i)=>(
<img
key={i}
src={logo}
alt="brand"
className="h-12 opacity-80 hover:opacity-100 transition"
/>
))}

</div>

</div>

</section>

)

}