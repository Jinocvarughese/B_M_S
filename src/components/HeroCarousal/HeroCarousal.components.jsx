import React from "react";
import Slider from "react-slick";


//component
import {NextArrow, PrevArrow} from "./Arrows.components";



const HeroCarousal = () => {
   const settingsLG = {
     arrows: true,
     autoplay: true,
     centerMode: true,
     centerPadding: "300px",
     slidesToShow: 1,
     infinite: true,
     slidesToScroll: 1,
     nextArrow: <NextArrow />,
     prevArrow: <PrevArrow/>,
   };

   const settings = {
       arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow/>,
  };  
   
  const images = [
      "https://images.unsplash.com/photo-1626351991514-83d77ffad8df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1626307416562-ee839676f5fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1626336496111-d111e6139943?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  ];

    return(
    <>
        <div className="lg:hidden">
              <Slider {...settings}>
              {images.map((image) => (
                  <div className="w-full h-56 md:h-80 py-3 ">
                     <img src = {image} alt ="testing" className="w-full h-full rounded-md" />
                  </div>
              ))}
             </Slider>>
             </div>

        <div className="hidden lg:block">
        <Slider {...settingsLG}>
      {images.map((image) => (
          <div className="w-full h-96 px-2 py-3">
             <img src = {image} alt ="testing" className="w-full h-full rounded-md" />
          </div>
      ))}
     </Slider>
        </div>
    </>
    );
};

export default HeroCarousal;