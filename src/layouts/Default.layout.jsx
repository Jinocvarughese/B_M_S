import React from "react";


//components
import Navbar from "../components/Navbar/navbar.components";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.components";


const DefaultLayout = (props) => {
    return (
        <>

        <Navbar />
        <HeroCarousal />

            {props.children}  
        </>      
    );
};

export default DefaultLayout;
