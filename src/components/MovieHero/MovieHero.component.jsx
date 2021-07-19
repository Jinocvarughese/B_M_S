import React from 'react';
import Movieinfo from './Movieinfo.component';


const MovieHero = () => {
    return (
        <>  
        <div>
            {/* mobile */}
            <div className="relative md:hidden w-full" style={{height: "calc(180vw)"}}>

                <div className="absolute z-20 bottom-4 left-4">
                <Movieinfo />
                </div>

                  <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0"/> 
                   
                   
                   
                    <img
                    src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-courier-2021-et00137324-19-06-2021-11-33-11.jpg"
                    alt="poster"
                    className="w-full h-full"
                    />
                
            </div>

            {/* medium */}
            <div className="relative hidden md:block h-96 w-full lg:hidden" style={{ height: "calc(100vw)"}}>
            <div className="w-full h-60 bg-opacity-50 absolute bg-black z-10 bottom-0"/> 
            <div className="absolute z-20 bottom-4">
                <Movieinfo />
                </div>
            
            <img
                    src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-courier-2021-et00137324-19-06-2021-11-33-11.jpg"
                    alt="poster"
                    className="w-full h-full"
                    />
            </div>

            {/* large */}
            <div className="relative hidden w-full lg:block" 
            style={{height: "30rem"}}>
               
            <div className="absolute z-10 w-full h-full" 
            style={{backgroundImage: 
                "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
            }} />

          <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
          <div className=" w-64 h-96 ">
              <img 
                 src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/the-courier-2021-et00137324-19-06-2021-11-33-11.jpg"
                 alt="poster"
                 className="w-full h-full rounded-xl"
               />
          </div>
          <div>
              <Movieinfo />
          </div>
          </div>
            <img
                    src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-courier-2021-et00137324-19-06-2021-11-33-11.jpg"
                    alt="poster"
                    className="w-full h-full"
                    />
            </div>

            
         </div>  
        </>
    );
};

export default MovieHero;
