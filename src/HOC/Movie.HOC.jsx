import React from "react";
import {Route} from "react-router-dom";

//layout
import Movielayout from "../layouts/Movie.layout";

const MovieHOC = ({component:Component, ...anyname }) => {
    return ( 
      <>
       <Route 
       {...anyname}
       component={(props) => (
          <Movielayout>
              <Component {...props}/>
          </Movielayout>  
        )}
      />
      </>
    );
};

export default MovieHOC;