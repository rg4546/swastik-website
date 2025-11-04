import React from "react";

export default function ProductCard({title, desc, img}){
  return (
    <div className="bg-white rounded shadow p-4">
      <div className="h-40 w-full rounded overflow-hidden">
        <img src={img || "/placeholder.png"} alt={title} className="w-full h-full object-cover"/>
      </div>
      <h4 className="mt-3 font-semibold">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
  );
}
