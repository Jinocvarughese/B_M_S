import React from 'react'

const Movieinfo = () => {
    return (
        <>
        <div className="flex flex-col gap-3 lg:gap-8">
            <div className="flex items-center gap-3 md:px-4">
                <div className="w-40 h-8">
                    <img 
                    src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                    alt="premier"
                    className="w-full h-full"/>
                </div>
                <span className="bg-gray-800 p-1 text-xs text-white rounded-md">Streaming Now</span>
            </div>
            <h1 className="hidden lg:block text-white lg:text-4xl font-bold">Courier</h1>
              <div className="flex flex-col-reverse gap-3 lg:gap-5 lg:flex-col">
                <div className="text-white font-light flex flex-col gap-2 md:px-4">
                <h4>4k &bull; English &bull; Action</h4>
                <h4>2h 05m &bull; Thriller &bull; 13+</h4>
            </div>
                    <div className="flex items-center gap-3 md:px-4 md:w-screen lg:w-full">
                       <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-md">
                             Rent ₹149
                        </button>
                        <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-md">
                             Buy ₹250
                        </button>
                   </div>
               </div>
           </div>    
        </>
    )
}

export default Movieinfo;
