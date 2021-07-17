import React from "react";

//components

import EntertainmentCardSlider from "../components/Entertainment/Entertainment.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";


//config
import Tempposters from "../config/Tempposters.config";

const HomePage = () => {
    return(
    <>
    <div className="flex flex-col gap-5">
    <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800">The best of Entertainment</h1>
   <EntertainmentCardSlider />
   </div> 

   
   <div className="bg-gray-800 py-16 ">
    <div className="container mx-auto px-4 flex flex-col gap-3">
     <div className="hidden md:flex"> 
        <img
          src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
          alt="Premier"
          className="w-full h-full"
        />
     </div>
     <PosterSlider 
     images={Tempposters} 
     title="Premiers" 
     subtitle="Brand new films on every friday"
     isDark
     />

     </div>
   </div>
    </div>

    <div className="container mx-auto px-4 my-8">
     <PosterSlider 
     images={Tempposters} 
     title="Online streaming events" 
     isDark={false}/>
    </div>

    <div className="container mx-auto px-4 my-8">
     <PosterSlider 
     images={Tempposters} 
     title="Outdoor events" 
     isDark={false}/>
    </div>
    
  </>
 );
};

export default HomePage;