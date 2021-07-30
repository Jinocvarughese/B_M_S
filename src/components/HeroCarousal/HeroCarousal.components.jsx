import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import axios from "axios";


//component
import {NextArrow, PrevArrow} from "./Arrows.components";




const HeroCarousal = () => {
  const [images, setImages] = useState([]);

  //hooks should be on the top
   useEffect(() => {

     //async -> use this method to avoid race condition

     const requestNowPlayingMovies = async () => {
       const getImages =await axios.get("/movie/now_playing");
       setImages(getImages.data.results);
     };
     requestNowPlayingMovies();

   }, []); //The empty array is to run the uesEffect for one time only


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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow/>,
  };  
   

    return(
    <>
        <div className="lg:hidden">
              <Slider {...settings}>
              {images.map((image) => (
                  <div className="w-full h-56 md:h-80 py-3 ">
                     <img src = {`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt ="testing" className="w-full h-full rounded-md" />
                  </div>
              ))}
             </Slider>
             </div>

        <div className="hidden lg:block">
        <Slider {...settingsLG}>
      {images.map((image) => (
          <div className="w-full h-96 px-2 py-3">
             <img 
             src = {`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt ="testing" className="w-full h-full rounded-md" />
          </div>
      ))}
     </Slider>
        </div>
    </>
    );
};

export default HeroCarousal;