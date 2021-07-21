import {FaCcVisa, FaApplePay} from "react-icons/fa";


//component
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/Cast/Cast.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";


//config
import Tempposters from "../config/Tempposters.config";

const Movie = () => {

  const settings = {
    infinity: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    InitialSlide: 0,
    reponsive: [{
        breakpoints: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
        },
    },
    {
       breakpoints: 480,
       settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
           InitialSlide: 1,
       },
   },
   {
       breakpoints: 480,
       settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           InitialSlide: 1,
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
                   <p>The true story of the cold war spy Greville Wynne and his Russian source who try to put an end to the Cuban Missile Crisis.</p>
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
          <div className="flex flex-wrap gap-4">
           <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/benedict-cumberbatch-6466-25-04-2018-02-01-01.jpg"
             castName="Benedict Cumberbatch"
             role="Businessman"
           />

           <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/tom-hiddleston-21833-24-03-2017-13-56-29.jpg"
             castName="Tom Hiddlestone"
             role="Businessman"
           />

           <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/james-mcavoy-912-24-03-2017-12-32-55.jpg"
             castName="James Mckvoy"
             role="Businessman"
           />
           </div>
          </div>

          <div className="my-8">
                  <hr />
               </div>

          <div className="my-8">
          <PosterSlider
            config={settings}
            images={Tempposters} 
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
            images={Tempposters} 
            title="BMS Xclusive" 
            isDark={false}
          />
          </div>

         </div>
      </>
    );
};

export default Movie;
