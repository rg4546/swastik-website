import React from "react";
import Particles from "react-tsparticles";

export default function HeroParticles(){

return(

<Particles
options={{
background:{color:"transparent"},
fpsLimit:60,
particles:{
number:{value:40},
color:{value:"#00e5c0"},
links:{
enable:true,
distance:150,
color:"#00e5c0",
opacity:0.2
},
move:{enable:true,speed:1},
size:{value:2}
}
}}
className="absolute inset-0"
/>

)

}