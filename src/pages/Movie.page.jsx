import {FaCcVisa, FaApplePay} from "react-icons/fa";
import React, {useContext, useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import Slider from "react-slick";

//component
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/Cast/Cast.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";


//config
import Tempposters from "../config/Tempposters.config";


//context
import { MovieContext } from "../context/movie.context";




const Movie = () => {
  const {id} = useParams();
  const {movie} = useContext(MovieContext);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommended, setRecommended] = useState([]);

  useEffect(()=>
  {
    const requestCast= async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  },[id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
     const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
     setSimilarMovies(getSimilarMovies.data.results);
    };   
    
    requestSimilarMovies();

   }, [id]);

   useEffect(() => {
    const requestRecommendedMovies = async () => {
     const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
     setRecommended(getRecommendedMovies.data.results);
    };   
    
    requestRecommendedMovies();

   }, [id]);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [{
        breakpoints: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
        },
    },
    {
       breakpoints: 600,
       settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
           initialSlide: 1,
       },
   },
   {
       breakpoints: 480,
       settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           initialSlide: 1,
       },
   },
 ],
};

const settingsCast = {
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [{
      breakpoint: 1024,
      settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
      },
  },
  {
     breakpoint: 600,
     settings: {
         slidesToShow: 4,
         slidesToScroll: 2,
         initialSlide: 2,
     },
 },
 {
     breakpoint: 480,
     settings: {
         slidesToShow: 3,
         slidesToScroll: 1,
        
     },
 },
],
};


    return (
      <>
        <MovieHero />
        <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
              <div className="flex flex-col items-start gap-3">
                   <h3 className="text-gray-800 font-bold text-2xl">About the movie</h3>
                   <p>
                    {movie.overview}
                   </p>
              </div>
               <div className="my-8">
                  <hr />
               </div>

              <div className="my-8">
                <h3 className="text-gray-800 font-bold text-2xl mb-3">
                  Applicable offers
                  </h3>
                  
                 <div className="flex flex-col gap-3 lg:flex-row">
                
                 <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2">
                    <div className="w-8 h-8">
                      <FaCcVisa className="h-full w-full" />
                    </div>
                       <div className="flex flex-col items-start ">
                        <h4 className="text-gray-700 text-xl font-bold">
                          Visa Stream offer
                        </h4>
                       <p className="text-gray-600">
                         Get Rs.50* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99
                       </p>
                     </div>
                  </div>

                
                <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2">
                   <div className="w-8 h-8">
                     <FaApplePay className="h-full w-full" />
                   </div>
                      <div className="flex flex-col items-start ">
                       <h4 className="text-gray-700 text-xl font-bold">
                         Filmy Pass
                       </h4>
                      <p className="text-gray-600">
                        Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99
                      </p>

                    </div>
                  </div>
                </div>
              </div>
             
             
              <div className="my-8">
                  <hr />
               </div>


          <div className="my-8">
          <h3 className="text-gray-800 font-bold text-2xl mb-4">Cast and Crew</h3>

          
            <Slider {...settingsCast}>
            {cast.map((castdata) => (
          
          <Cast 
             image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`}
             castName={castdata.original_name}
             role={castdata.character}
           />

            ))}
            </Slider>
    
          </div>

          <div className="my-8">
                  <hr />
               </div>

          <div className="my-8">
          <PosterSlider
            config={settings}
            images={similarMovies} 
            title="You might also like" 
            isDark={false}
          />
          </div>

          <div className="my-8">
                  <hr />
               </div>

          <div className="my-8">
          <PosterSlider
            config={settings}
            images={recommended} 
            title="BMS Xclusive" 
            isDark={false}
          />
          </div>

         </div>
      </>
    );
};

export default Movie;
