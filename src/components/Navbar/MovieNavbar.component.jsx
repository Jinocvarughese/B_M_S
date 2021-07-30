import React, {useContext} from "react";
import {BiChevronRight , BiSearch, BiMenu, BiChevronDown, BiShareAlt} from "react-icons/bi";  //copy by clicking the icon in react icons


//context
import { MovieContext } from "../../context/movie.context";

const NavSm = () => {
    const {movie} = useContext(MovieContext);
    return (
        <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold">{movie.original_title}</h3>
                 </div>
            <div className="w-8 h-8">
                <BiShareAlt className="w-full h-full" />
            </div>
        </div>
        </>
        );
    };

const NavLg = () => {
    return <>
    <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center w-1/2">
            <div className="w-12 h-12"> 
                <img 
                src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.apkmirror.com%2Fwp-content%2Fuploads%2F2020%2F12%2F13%2F5fe044a959dee.png&imgrefurl=https%3A%2F%2Fwww.apkmirror.com%2Fapk%2Fbigtree-entertainment-pvt-ltd%2Fbookmyshow-movie-ticketsplays%2Fbookmyshow-movie-ticketsplays-7-5-0-release%2F&tbnid=YQC5FK-zx-GxRM&vet=12ahUKEwiFoZ6fvuXxAhXAELcAHWZAALMQMygAegQIARA4..i&docid=xd_ikNjS2KomNM&w=512&h=512&q=book%20my%20show%20logo&hl=en&ved=2ahUKEwiFoZ6fvuXxAhXAELcAHWZAALMQMygAegQIARA4" 
                alt="logo" 
                className="w-full h-full"/> 
            </div>
            <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <BiSearch />
            <input type="search" 
            className="w-full bg-transparent border-none focus:outline-none" 
            placeholder="search for movies, sports, events" />
        </div>
        </div>
        <div className="flex items-center gap-3">
        <span className="text-gray-200 text-xs flex items-center cursor-pointer hover:text-white">
                    kerala <BiChevronDown/> 
                    </span>
                    <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">Sign in
                    </button>
                    <div className="w-8 h-8 text-white">
                        <BiMenu className="w-full h-full"/>
                        </div>
        </div>
    </div>
    </>;
};

const MovieNavBar = () => {
    return (
     <>
      <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-gray-700 p-4">

         <div className="md: hidden">{}
         <NavSm />
         </div>
         



         <div className="md:block lg:hidden">{}
         <NavSm />
         </div>
         



         <div className="hidden w-full lg:flex">{}
         <NavLg />
         </div>
         

      </nav>
     </>
    );
};

export default MovieNavBar;
