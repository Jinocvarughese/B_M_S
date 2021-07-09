import React, { useEffect } from "react";

const User = (props) => {
    const [planet, setPlanet] = React.useState("Pluto");   //in other way we can remove React from this line and add thing inside"" => ", {useState}" after React in the import line
    

    // componentDidMount
    React.useEffect(() => {                   // same as above comment
        console.log("component mounting");
        
        
    //componentWillMount
    return console.log("bye");
    }, []);                                   // to not make component mounting only run once add empty array as argument

    
   //componentDidUpdate
   //shouldComponentUpdate                   //checks if both component are same and don't change if same
   React.useEffect(() => {
       console.log("Planet Changes");
   }, [planet]);                           // giving another argument inside []
    
   
   return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button onClick={() => setPlanet("Earth")}>
                {planet}
            </button>
        </div>
    );
}

export default User;