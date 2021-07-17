import React from 'react'

//components
import Navbar from "../components/Navbar/navbar.components";

const Movielayout = (props) => {
    return (
        <>  
        <Navbar />
        {props.children}    
        </>
    );
};

export default Movielayout;  
