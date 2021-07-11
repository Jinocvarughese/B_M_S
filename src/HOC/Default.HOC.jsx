import React from "react";
import {Route} from "react-router-dom";

//layout
import DeafaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({component:Component, ...anyname }) => {
    return ( 
      <>
       <Route 
       {...anyname}
       component={(props) => (
          <DeafaultLayout>
              <Component {...props}/>
          </DeafaultLayout>  
        )}
      />
      </>
    );
};

export default DefaultHOC;