import React from "react";
import { FaFileInvoice } from "react-icons/fa";

export default function FloatingQuote({openQuote}){

return(

<button
onClick={openQuote}
className="fixed bottom-24 right-6 z-50 bg-brand text-black p-4 rounded-full shadow-xl hover:scale-110 transition"
>

<FaFileInvoice className="text-xl"/>

</button>

)

}