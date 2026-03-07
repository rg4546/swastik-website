// import React, { useState } from "react";
// import { Helmet } from "react-helmet-async";
// import BrandFilesModal from "../components/BrandFilesModal";

// export default function ClientsBrands() {
//   const [modalOpen, setModalOpen] = useState(false);

//   const brands = [
//     { name: "Philips", img: "/brands/philips.png" },
//     { name: "Havells", img: "/brands/havells.png", url: "https//havells.com/corporate/press-and-media/commercials-downloads" },
//     { name: "Schneider", img: "/brands/schneider.png", url:"https://www.se.com/in/en/all-products/" },
//     { name: "KEI", img: "/brands/kei.png" },
//     { name: "Anchor by Panasonic", img: "/brands/anchor.png" },
//     { name: "Bajaj", img: "/brands/bajaj.png" },
//     { name: "Orient", img: "/brands/orient.png" },
//     { name: "L&T", img: "/brands/l&t.png" },
//     { name: "Elechem", img: "/brands/elechem.png" },
//     { name: "Crompton", img: "/brands/crompton.png" },
//   ];

//   const clients = [
//     { name: "JPDCL", img: "/clients/JPDCL.png" },
//     { name: "PDD", img: "/clients/PDD.png" },
//     { name: "Speed 4 Defence System", img: "/clients/speed4.png" },
//     { name: "Shri Mata Vaishno Devi", img: "/clients/ShrineBoard.png" },
//     { name: "Shivalaya", img: "/clients/shivalaya.png" },
//     { name: "APCO", img: "/clients/apco.png" },
//     { name: "Patel Engineering", img: "/clients/patel.png" },
//     { name: "Coronet Engineers", img: "/clients/coronet.png" },
//     { name: "Kapahi Contracts", img: "/clients/kapahi.png" },
//     { name: "V.K. Sales", img: "/clients/vk.png" },
//   ];

//   return (
//     <>
//       <Helmet>
//         <title>Clients & Brands | Swastik Electric Co.</title>
//       </Helmet>

//       <section className="pt-28 pb-24 px-6 min-h-screen bg-gradient-to-b from-base via-[#141c2b] to-base text-center">

//         <h1 className="text-4xl md:text-5xl font-bold text-brand mb-14">
//           Brands & Clients
//         </h1>

//         {/* Brands */}
//         <h2 className="text-3xl font-semibold text-brand mb-8">
//           Brands We Deal In
//         </h2>

//         <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
//           {brands.map((b, idx) => (
//             <div
//               key={idx}
//               className="flex flex-col items-center justify-center bg-card/50 rounded-xl border border-brand/20 p-6 cursor-pointer hover:border-brand"
//               onClick={() => b.name === "Philips" && setModalOpen(true)}
//             >
//               <img src={b.img} alt={b.name} className="w-16 h-16 mb-2 object-contain" />
//               <p className="text-gray-300 text-sm">{b.name}</p>
//             </div>
//           ))}
//         </div>

//         {/* Clients */}
//         <h2 className="text-3xl font-semibold text-brand mt-20 mb-8">
//           Our Clients
//         </h2>

//         <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
//           {clients.map((c, idx) => (
//             <div
//               key={idx}
//               className="flex flex-col items-center justify-center bg-card/50 rounded-xl border border-brand/20 p-6"
//             >
//               <img src={c.img} alt={c.name} className="w-16 h-16 mb-2 object-contain" />
//               <p className="text-gray-300 text-sm text-center">{c.name}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <BrandFilesModal open={modalOpen} onClose={() => setModalOpen(false)} brand="Philips" />
//     </>
//   );
// }
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import BrandFilesModal from "../components/BrandFilesModal";

export default function ClientsBrands() {

  const [modalOpen,setModalOpen]=useState(false)

  const brands=[

  {name:"Philips",img:"/brands/philips.png",catalog:true},

  {name:"Havells",img:"/brands/havells.png",url:"https://havells.com/corporate/press-and-media/commercials-downloads"},

  {name:"Schneider",img:"/brands/schneider.png",url:"https://www.se.com/in/en/all-products/"},

  {name:"KEI",img:"/brands/kei.png",url:"https://www.kei-ind.com/cables-wires/"},

  {name:"Anchor by Panasonic",img:"/brands/anchor.png",url:"https://lsin.panasonic.com/"},

  {name:"Bajaj",img:"/brands/bajaj.png",url:"https://www.bajajelectricals.com/?srsltid=AfmBOopeAhcaQLZkcWk_IMscPhg-NUTma3z7SAwMms4Wi2fiZ8Y-KclE"},

  {name:"Orient",img:"/brands/orient.png",url:"https://orientelectric.com/collections/all?srsltid=AfmBOoqXwgdts_sHIiiGOi-rKoKyZhBrtYoJ2VfUpVoCG0rZRGVQTGLJ"},

  {name:"L&T",img:"/brands/l&t.png",url:"https://smartshop.lk-ea.com/?srsltid=AfmBOorNqxhTANRshbA5Dy64HgUf1SqKswgIv4CU_OE1ioeyxkO7yv6E"},

  {name:"Elechem",img:"/brands/elechem.png",url:"https://www.elechem.in"},

  {name:"Crompton",img:"/brands/crompton.png",url:"https://www.crompton.co.in"}

  ]

  const clients=[
  {name:"JPDCL",img:"/clients/JPDCL.png"},
  {name:"PDD",img:"/clients/PDD.png"},
  {name:"Speed 4 Defence System",img:"/clients/speed4.png"},
  {name:"Shri Mata Vaishno Devi",img:"/clients/ShrineBoard.png"},
  {name:"Shivalaya",img:"/clients/shivalaya.png"},
  {name:"APCO",img:"/clients/apco.png"},
  {name:"Patel Engineering",img:"/clients/patel.png"},
  {name:"Coronet Engineers",img:"/clients/coronet.png"},
  {name:"Kapahi Contracts",img:"/clients/kapahi.png"},
  {name:"V.K. Sales",img:"/clients/vk.png"}
  ]

  const handleBrandClick=(brand)=>{

  if(brand.catalog){
  setModalOpen(true)
  return
  }

  if(brand.url){
  window.open(brand.url,"_blank")
  }

  }

  return(
  <>
  <Helmet>
  <title>Clients & Brands | Swastik Electric Co.</title>
  </Helmet>

  <section className="pt-28 pb-24 px-6 min-h-screen bg-gradient-to-b from-base via-[#141c2b] to-base text-center">

  <h1 className="text-4xl md:text-5xl font-bold text-brand mb-14">
  Brands & Clients
  </h1>

  {/* Brands */}

  <h2 className="text-3xl font-semibold text-brand mb-8">
  Brands We Deal In
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">

  {brands.map((b,idx)=>(
  <div
  key={idx}
  onClick={()=>handleBrandClick(b)}
  className="flex flex-col items-center justify-center bg-card/50 rounded-xl border border-brand/20 p-6 cursor-pointer hover:border-brand hover:-translate-y-1 transition"
  >

  <img
  src={b.img}
  alt={b.name}
  className="w-16 h-16 mb-2 object-contain"
  />

  <p className="text-gray-300 text-sm text-center">
  {b.name}
  </p>

  </div>
  ))}

  </div>

  {/* Clients */}

  <h2 className="text-3xl font-semibold text-brand mt-20 mb-8">
  Our Clients
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">

  {clients.map((c,idx)=>(
  <div
  key={idx}
  className="flex flex-col items-center justify-center bg-card/50 rounded-xl border border-brand/20 p-6"
  >

  <img
  src={c.img}
  alt={c.name}
  className="w-16 h-16 mb-2 object-contain"
  />

  <p className="text-gray-300 text-sm text-center">
  {c.name}
  </p>

  </div>
  ))}

  </div>

  </section>

  <BrandFilesModal
  open={modalOpen}
  onClose={()=>setModalOpen(false)}
  brand="Philips"
  />

  </>
  )
}