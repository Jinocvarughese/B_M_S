import React from 'react'

//components
import MovieNavBar from '../components/Navbar/MovieNavbar.component';

const Movielayout = (props) => {
    return (
        <>  
        <MovieNavBar />
        {props.children}    
        </>
    );
};

export default Movielayout;  
